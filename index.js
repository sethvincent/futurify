var preset = require('babel-preset-futurify')
var through = require('through2')
var babel = require('babel-core')

module.exports = function futurify (filename, options) {
  if (/\.json$/i.test(filename)) return through()

  var chunks = []
  return through(write, end)

  function write (chunk, enc, next) {
    chunks.push(chunk)
    next()
  }

  function end () {
    var source = Buffer.concat(chunks).toString('utf8')

    try {
      var result = babel.transform(source, {
        plugins: preset.plugins,
        sourceMaps: options._flags.debug ? 'inline' : false,
        filename: filename,
        compact: false
      })
    } catch (err) {
      this.emit('error', err)
      return
    }

    this.emit('futurify', result, filename)
    this.push(result.code)
    this.push(null)
  }
}
