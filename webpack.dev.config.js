const wenpack = require("webpack");

module.exports = {
    entry:{
        app:"./test/app.js"
    },
    output:{
        path:__dirname,
        filename:"./dist/flow.dev.js"
    },
    module:{
        loaders:[
            {test:/\.js/,loader:"babel-loader"}
        ]
    }
}