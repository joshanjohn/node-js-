const express=require('express')
const path=require('path')

const app=express()

app.use((req,res,next)=>{  // this funtion print inside console.log when we add any root 
    console.log('start ')
    next()
    
})

app.get('/signup',function (req,res,next){
    res.sendFile(path.join(__dirname,'signup.html'))
    console.log('middle')
    next()
     // importing html contents from signup.html
    //res.send('hello')
    // res.send('<h1> hello <\h1>') also works 
})

app.use((req,res)=>{
    console.log('end')
})

app.post('/signup',(req, res) => {
        res.send('Account Created !')
    })

app.get('/about', (req,res)=> res.send('about')) // route setting 

app.listen(3000, function(){

    console.log(__filename) // return current file name with extentsion 
    console.log(__dirname) //return current directory
    console.log('Server started') // notification
})