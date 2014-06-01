glob-to-vinyl [![NPM version][npm-image]][npm-url] [![Dependency Status][depstat-image]][depstat-url]
=============

Takes a glob, reads in files and returns [Vinyl](https://github.com/wearefractal/vinyl))s. Created based on [wearefractal/vinyl/issues/20](https://github.com/wearefractal/vinyl/issues/20).

## Usage

```javascript
var globToVinyl = require('glob-to-vinyl');

globToVinyl('*.js', function(err, files){
    console.log(files);
    console.log(files[0].contents.toString('utf8'));
});
```


[npm-url]: https://npmjs.org/package/glob-to-vinyl
[npm-image]: https://badge.fury.io/js/glob-to-vinyl.png

[depstat-url]: https://david-dm.org/adam-lynch/glob-to-vinyl
[depstat-image]: https://david-dm.org/adam-lynch/glob-to-vinyl.png
