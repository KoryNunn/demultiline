var replace = require('./replace');

module.exports = function (file) {
    return through(function (buf, enc, next) {
        this.push(replace(buf.toString('utf8')));
        next();
    });
};