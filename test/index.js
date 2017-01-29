var test = require('tape'),
    replace = require('../replace');

test('x', function(t){
    t.plan(1);
    var testString = "`a\nb\nc\n`";

    t.equal(replace(testString), "'a\\nb\\nc\\n'");
});