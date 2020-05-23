class CopyrightWebpackPlugin {
  apply(compiler) {
    //compiler所有的源代码以及webpack.config.js中的内容
    compiler.hooks.compile.tap('CopyrightWebpackPlugin',(compilation)=>{
      console.log('同步，不需要callback，不需要tapAsync')
    })
    // emit 为异步的函数
    compiler.hooks.emit.tapAsync(
      "CopyrightWebpackPlugin",
      (compilation, cb) => {
        //compilation是与本次打包相关的内容
        debugger;
        compilation.assets["copyright.txt"] = {
          //compilation.assets ：打包后都有哪些文件
          source: function () { //内容
            return "copyright by jerry";
          },
          size:function(){ //长度
            return 18; //文件大小18个字符长度 
          }
        };
        cb(); //异步的必须在最后调用回调函数
      }
    );
  }
}

module.exports = CopyrightWebpackPlugin;
