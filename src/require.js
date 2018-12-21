/*
let fs = require('fs')

function req(moduleName) {
  let content = fs.readFileSync(moduleName, 'utf8')
  let fn = new Function('exports', 'module', 'require', '__dirname', '__filename', content + '\n return module.exports')
  let module = {
    exports: {}
  }
  return fn(module.exports, module, req, __dirname, __filename)
}

const a = req('./component-a.js')

console.log(a);
*/

const A = require('./component-a.js')
console.log(A)

/**
 * // New Function(...)
 *
 * function(exports, module, requre, __dirname, __filename) {
 *     module.exports = ... //content
 *     retrun module.exports
 * }
 * */
