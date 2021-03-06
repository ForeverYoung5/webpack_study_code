const path = require('path');

module.exports = {
    mode:'production',
    entry:{
        main:'./src/index.tsx'
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:/node_modules/,
            }
        ]
    },
    output:{
        filename:'boundle.js',
        path : path.resolve(__dirname,'dist')
    }
}