var through = require('through'),
    jsTokenizer = require('js-tokenizer');

function replace(fileString){
    var tokens = jsTokenizer(fileString, true),
        result = '',
        inMultiline;

    while(tokens.length){
        token = tokens.shift();

        if(inMultiline){
            var multilineEndMatch = token.match(/([^]*)`$/);

            if(multilineEndMatch){
                inMultiline = false;
                result += multilineStartMatch[1].replace(/\n/g, '\\n') + "'";

                continue;
            }


            result += token.replace(/\n/g, '\\n');
            continue;
        }

        if(token.match(/^\//)){
            result += token;
            continue;
        }

        var multilineStartMatch = token.match(/^`([^]*)`?$/);

        if(multilineStartMatch){
            inMultiline = true;
            result += "'" + multilineStartMatch[1].replace(/\n/g, '\\n');

            continue;
        }

        result += token;
    }

    return result;
}

module.exports = function (file) {
    return through(function (buf, enc, next) {
        this.push(replace(buf.toString('utf8')));
        next && next();
    });
};