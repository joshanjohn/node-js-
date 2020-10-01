//inheritence

class sample{
    samplehello(){
        console.log('sample hello:')
    }
}

class hello extends sample{
    constructor(num1,num2){
        super() //use to inherit
        this.num1=num1
        this.num2=num2

    }
    hello(){
        console.log('helo friend:' +(this.num1+this.num2))
    }
}
//creat new object
let hey=new hello(10,20)
hey.hello()
hey.samplehello()