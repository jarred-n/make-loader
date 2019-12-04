const loaderUtils = require('loader-utils')

//function 必须声明式
module.exports = function(source) {
    const options = loaderUtils.getOptions(this);
    const result =  source.replace('dell', options.name);
    this.callback(null, result);
}