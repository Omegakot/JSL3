const http= require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
console.log(req.url)
const path =`./public/js`
try {
    console.log("Попытка")
    body=fs.readFileSync(`${path}${req.url}`)
}
catch(err){
    body=fs.readFileSync(`./public/js/index.html`)
}
    res.end(body)
})

const port = process.env.PORT || 3050
server.listen(port)

console.log(`Started on port ${port}`)

