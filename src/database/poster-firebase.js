import firebase from 'firebase'
import { Observable } from 'rxjs/Observable';
import { fbApp, auth } from './firebase'

export const fb = fbApp.database().ref('poster')

const objToArry = (obj) => Object.keys(obj).map(key => obj[key])

function get(path = '/') {
  return Observable.create((observer) => {
    const ref = fb.child(path)

    ref.once('value', (snap) => {
      if (snap.val()) {
        observer.next( objToArry(snap.val()) )
      } else {
        observer.next(null)
      }
    })
  })
}

function set(path = '/', payload) {
  return Observable.create(obs => {
    //TODO try fromPromise
    fb.child(path).set(payload)
    .then(() => obs.next(payload))
    .catch(err => obs.error(err))
  })
}

function push(path = '/', payload) {
  const id = fb.child(path).push().key
  const newPath = `${path}/${id}`
  return set(newPath, { id, ...payload })
}

function update(path = '/', payload) {
  if (payload.id === undefined) {
    return push(path, payload)
  } else {
    return set(path, payload)
  }
}

export const db = Object.assign(
  {},
  fb,
  { get, set, push, update }
)

export default { db, auth }
