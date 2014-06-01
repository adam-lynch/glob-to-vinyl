var vfs = require('vinyl-fs');
var nextback = require('nextback');

module.exports = function (path, cb) {
    cb = nextback(cb);
    var files = [];
    var globber = vfs.src(path);
    globber.once('error', cb);
    globber.on('data', function (file) {
        files.push(file);
    });
    globber.once('end', function () {
        cb(null, files);
    });
};