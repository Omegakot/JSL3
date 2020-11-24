const path= require('path')

module.exports={
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname,"public/js"),
        filename:"val.js"
    },
    module:{
rules:[
    {
    test: /\.scss$/,
    use:[
        {loader:"style-loader"},
        {loader: "css-loader"},
        {loader: "sass-loader"},
        ]
    }
      ]
          }
}
   