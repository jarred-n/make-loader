const loaderUtils = require('loader-utils')

//function 必须声明式
module.exports = function(source) {
    const options = loaderUtils.getOptions(this);
    const callback = this.async();
    setTimeout(() => {
        const result =  source.replace('lee', 'world');
        callback(null, result);
    }, 5000)
}