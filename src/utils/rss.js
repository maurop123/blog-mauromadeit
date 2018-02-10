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
    });

    req.on('response', function (res) {
      var stream = this; // `this` is `req`, which is a stream
     
      if (res.statusCode !== 200) {
        this.emit('error', new Error('Bad status code'));
      }
      else {
        stream.pipe(feedparser);
      }
    });
     
    feedparser.on('error', function (err) {
      obs.error(err)
      throw new Error(err)
    });
     
    feedparser.on('readable', function () {
      // This is where the action is!
      var stream = this; // `this` is `feedparser`, which is a stream
      var meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
      var item;
     
      while (item = stream.read()) {
        obs.next(item)
      }
    });
  })
}

export function parseImage(html) {
  const $ = cheerio.load(html)
  
  const img = $('figure img').attr('src')
  return img
}
