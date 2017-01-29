module.exports = function(string){
    return string.replace(/`([^]+(?!\\`))`/g,
        function(match, content){
            console.log('x');
            return "'" + content.replace(/\n/g, '\\n') + "'";
        }
    );
};