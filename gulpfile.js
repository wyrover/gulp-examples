const { series, parallel, src, dest } = require('gulp')

const encryptZip = require('./encrypt-zip')

function files() {
  return src('./*.js')
    .pipe(encryptZip('encrypt'))
    .pipe(encryptZip('decrypt'))
    .pipe(dest('output'))
}

function clean(cb) {
  // body omitted
  cb()
}

function build(cb) {
  // body omitted
  cb()
}

exports.build = build
exports.default = series(files, clean, build)
