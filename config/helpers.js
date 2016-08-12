const path = require('path');

const ROOT = path.resolve(__dirname, '..');

/**
 * path.resolve, but always from project root.
 * Examples:
 * root('src', 'app')
 * root('src/app')
 *
 * @param  {string} args To append after root directory
 * @return {string}
 */
exports.root = function (args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(args));
}
