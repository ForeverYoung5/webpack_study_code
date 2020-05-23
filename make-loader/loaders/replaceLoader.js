const loaderUtils = require('loader-utils')

module.exports = function(source){
    const options = loaderUtils.getOptions(this) 
    const callback = this.async(); //返回this.callback
    setTimeout(()=> {
        const result = source.replace('jerry',options.name)
        callback(null,result);
    },1000)
}