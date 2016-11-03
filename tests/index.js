var path = require('path')
var test = require('tape')
var browserify = require('browserify')
var futurify = require('../index')

var examplepath = path.join(__dirname, 'example', 'index.js')

test('emits futurify event', function (t) {
  t.plan(1)
  var b = browserify()
  b.add(examplepath)

  b.on('transform', function (tr) {
    tr.once('futurify', function (result) {
      t.ok(result)
    })
  })

  b.transform(futurify)

  b.bundle(function (err, code) {
    if (err) return t.end(err)
    t.end()
  })
})
