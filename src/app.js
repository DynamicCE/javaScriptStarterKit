let sayi1 = 10
sayi1 = "Erkan"
let student = {id:1,name:"Erkan"}
//console.log(student)

function save(ogrenci,puan = 10) {
    //console.log(ogrenci.name + " : " + puan)
}

save(student,100)

let studens = ["Erkan Murat","Engin Demiroğ","Halit Kalaycı","Büşra Kaya"]
//console.log(studens)

let studens2 = [student,{id:1,name:"Şeyma"},"Ankara",{city:"İstanbul"}]
// console.log(studens2)


//rest
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)
}
//console.log(typeof showProducts)
// showProducts(10,"Elma","Armut","Karpuz")

//spread
let points = [1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring
let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number){
    console.log(small1)
}
someFunction(populations)

let category = {id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)

