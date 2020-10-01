function hello(num1,num2){
    console.log(num1+num2)

}

hello(10,20)


//but we can use the parameter asd default 
//like 

function hey(num1=100,num2){
    console.log(num1+num2)
}

hey(10,20)
hey(undefined,20)
