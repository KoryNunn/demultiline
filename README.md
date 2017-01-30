# demultiline

browserify transform to convert multiline strings to normal strings so that uglify works.

This should become depricated as uglify is fixed.

# Usage

Put it before uglifyify.

```javascript
    var b = browserify();

    b.transform({
        global: true
    }, demultiline);

    b.transform({
        global: true
    }, uglifyify);

    // etc...
```