
//callback_sample_syc change to asyc

function longtask(millisec){
    dt=new Date()
    while((new Date()-dt) <= millisec){

    }
}

function showEnd(){
    console.log('end')
}

console.log('started')
setTimeout(showEnd,2000)

console.log('started')
setTimeout(showEnd,2000) //setTimeout is the task what after 2sec 

console.log('started')
setTimeout(showEnd,2000) 


// the whole program is asynchronus(i.e, not one after another,whole program start at an instance )
