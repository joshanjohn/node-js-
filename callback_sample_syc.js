function longtask(millisec){
    dt=new Date()
    while((new Date()-dt) <= millisec){

    }
}

console.log('started')
longtask(2000) //to last the program sor 2 sec
console.log('end ')//show end after 2 second

console.log('started')
longtask(2000) //to last the program sor 2 sec
console.log('end ')//show end after 2 second

console.log('started')
longtask(2000) //to last the program sor 2 sec
console.log('end ')//show end after 2 second

// the whole program is synchronus(i.e, one after another)

