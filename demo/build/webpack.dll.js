const path = require('path');
const webapck = require('webpack');

module.exports = {
    mode:'production',
    entry:{
        vendors:['react','react-dom','lodash']
    },
    output:{
        filename:'[name].dll.js',
        path:path.resolve(__filename,'../dll'),
        library:'[name]'
    },
    plugins:[
        new webapck.DllPlugin({
            name:'[name]',
            path:path.resolve(__dirname,'../dll/[name].manifest.json')
        })
    ]
}