var http=require('http')
var fs=require('fs') //inorder to read the html file we need fs module fs(file system)

http.createServer(function (req,res){

    fs.readFile('samplehtml.html',function (err,data){ //after reading samplehtml.html only we need to go head with other data
        res.writeHead(200,{'Content-Type':'text/html'}) //200 shows the page is working , 200is a standard protocol
        //content-type shows what kind of file it is (htmlfile)
        res.write(data)
    res.end()
    })

}).listen(7000)