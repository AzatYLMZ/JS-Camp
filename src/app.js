console.log("merhaba kodlama.io")

//JS Type safe değildir!

let dolarBugun = 9.30

let dolarDun = 9.20

{
    let dolarDun = 9.10
}
console.log(dolarDun)


const euroDun = 11.2   // const'a bir değer atandıktan sonra 
//euroDun = 11           // başka bir değer atanmaz !!!

console.log(euroDun)


//array
//camelCasing --- array isimlendirilirken kullanılan isimlendirme formatı!!!

let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Azat Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {

    console.log("<li>" +konutKredileri[i]+"<li>")
    
}
console.log("</ul>")


