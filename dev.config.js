const {merge}=require("webpack-merge")
const base=require("./webpack.config")

module.exports=merge(base,{
    output:{
        
    },
    devServer:{
        publicPath:"/js",
        contentBase: "./public/js",
        port:8080,
        host: "localhost",
        hot:true,
    }
})
  