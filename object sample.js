var person = {name:"joshan",age:16,place:"calicut",
display:function(){
    var name = "lancer"
    console.log(this.name) 
}}
console.log(person)
console.log("name :"+person.name)
console.log("age :"+person['age'])
console.log("place :"+person.place)

// update
person.name = "gosdon"
console.log(person.display())

for (x in person){
    console.log(x)
    console.log(person[x])
}

person.dob="20-10-2000"  //creat new data in object preson
console.log(person) 

person.displayage=function(){  //creat a new methord called display age in object person
    console.log(this.age)
}

console.log(person.displayage())