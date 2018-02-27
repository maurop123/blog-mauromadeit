import request from 'request'
import Feedparser from 'feedparser'
import { Observable } from 'rxjs/Observable'
import cheerio from 'cheerio'

const feedparser = new Feedparser()

export function getFeed(url) {
  return Observable.create(obs => {
    const req = request(url)

    req.on('error', function (error) {
      throw new Error(error)
    })

    req.on('response', function (res) {
      var stream = this // `this` is `req`, which is a stream

      if (res.statusCode !== 200) {
        this.emit('error', new Error('Bad status code'))
      } else {
        stream.pipe(feedparser)
      }
    })

    feedparser.on('error', function (err) {
      obs.error(err)
      throw new Error(err)
    })

    feedparser.on('readable', function () {
      // This is where the action is!
      const stream = this // `this` is `feedparser`, which is a stream
      // const meta = this.meta // **NOTE** the "meta" is always available in the context of the feedparser instance
      let item

      // eslint-disable-next-line no-cond-assign
      while (item = stream.read()) {
        obs.next(item)
      }
    })
  })
}

export function parseDescription(html) {
  const $ = cheerio.load(html)

  $('iframe').remove()
  const desc = $.text()
  return desc
}

export function parseImage(image) {
  const { isHtmlEncoded } = image[0].url[0].$
  const url = image[0].url[0]._
  return (isHtmlEncoded) ? decodeURIComponent(url) : url
}

export function parseImageFromDescrip(html) {
  const $ = cheerio.load(html)

  const img = $('figure img').attr('src')
  return img
}
