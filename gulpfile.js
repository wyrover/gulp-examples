const { series, parallel, src, dest } = require('gulp')

const encryptZip = require('./encrypt-zip')
const rename = require('gulp-rename')

function files() {
  return src('./*.js')
    .pipe(encryptZip('encrypt'))
    .pipe(encryptZip('decrypt'))
    .pipe(
      rename((path) => {
        return {
          dirname: path.dirname,
          basename: 'zhw_' + path.basename,
          //extname: '.js',
        }
      })
    )
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
