const fs = require('fs')
const path = require('path')

/**
 * Will get every Dir in the current dir ( will get all the plugins )
 * @param {string} srcpath - The base dir to scan in.
 * @copyright http://stackoverflow.com/a/24594123/3557299
 */
function getDirectories (srcpath) {
  return fs.readdirSync(srcpath)
    .filter(file => fs.statSync(path.join(srcpath, file)).isDirectory())
}

/**
 * Will load all the given module paths
 * @param {array} modules - an array of strings ( module paths )
 * @return array of module's names and its refs
 */
function requireModulesFromArray(modules) {
    const _modules = [];
    modules.forEach(function(module) {
      let _module = require(path.join(__dirname, module))[0];
      _modules.push({
        'name': module,
        'ref' : _module
      });
    });
    return _modules;
}
module.exports = requireModulesFromArray( getDirectories(__dirname) );
