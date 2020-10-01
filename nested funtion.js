var num=10
function hello(){
    num=20  //try var num=20
    
    function hey(){
        var num=30
    }
    hey()
    console.log(num)
}
hello()
console.log(num)

