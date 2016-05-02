var pug = require("pug")
var fs = require("fs")
var path = require("path")
var PROD = (process.env.NODE_ENV === 'production')

var bundle = "bundle.js"

if (PROD) {
  var webpack_assets = fs.readFileSync(path.join(__dirname, "../webpack-assets.json"))
  bundle = JSON.parse(webpack_assets)['main']['js']
}

compiled = pug.compileFile(path.join(__dirname, "../templates/index.jade"))({
  bundle: bundle 
})
fs.writeFileSync(path.join(__dirname, "../dist/index.html"), compiled)
