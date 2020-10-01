var http=require('http') // importing http
http.createServer(server).listen(7000) // seting port 7000

function server(req,res){   
    res.write('crossroads')
    res.end()
}

// in request(req) object has client ip and other info
// response(rec) object allow to the client to see the the page

//res.end() means that the data is over and the respnce is seen by the clinet


// above code can also write as 

//var http=require('http') // importing http
//http.createServer(function (req,res){
//    res.write('crossroads')
//    res.end()
//}).listen(7000) // seting port 7000

