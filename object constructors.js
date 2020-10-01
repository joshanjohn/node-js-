//we can build a object from a funtion
//eg:

function person(name,age,place){
    this.name = name
    this.age = age
    this.place = place
    this.display = function(){
        console.log('Name :' +name+'age :'+age+'place :'+place)
    }
}

var joshan = new person("joshan",20,'nadathara')
var mariya = new person("mariya",18,'calicut')

joshan.display()
mariya.display()