banner = (x) => {
     console.log(`##### Challenges ${x}#####`)
}

banner(2)

let cTwo = 0
while (cTwo < 20) {
    cTwo ++
    if (cTwo%3===0) console.log(cTwo)
}

banner(3 )
let cthree = 0
let threeCount = 3
let numthree = 0
while (cthree < 20) {
    console.log(threeCount)
    cthree ++
    while (cthree === threeCount) threeCount += 3 && numthree++
    
    console.log(threeCount)
    console.log(numthree * 3)
}
console.log(threeCount )


banner (4)


for (let i = 20 ; i > 0; i-- ){
    console.log(i)
}

banner (5)
let str = 'Boy howdy am I good at this!'
for (let i = 0 ; i < str.length; i++){
    console.log(str[i])
}

banner (6)

let str2 = 'And getting better every day.'
for (let i = 0 ; i < str2.length; i++){
   if (i%3 === 0) console.log(str2[i +1])
}

banner (7)

const str3 = "A'm I the best?"
for (let i = 0 ; i < str3.length; i++) {
    console.log(str3[i].toUpperCase())
}

banner (8)

const str4 = 'Whoa, I am the best!'
let newfour = 0
for (let i = 0 ; i < str4.length; i++) {
    if (str4[i] ===' ') newfour = newfour + 1 
        if (newfour=== 2)
        console.log(str4[i].toUpperCase())
        else 
            console.log(str4[i])
    }


    


banner (9)

const str5 = 'I am become death, destroyer of worlds.'
for (let i = str5.length ; i > 0 ; i = i - 1 ) {
                console.log(str5[i])
}

banner(10)


const names = 'Colin|Mesuara|Denis|Wilson|Michael|Patrick|DeAundre|Jumary|Marc|Bogdan|Sharod|David|LaToddra|Carlos';
let newn = 0
console.log('Here today is:')
 for (let i = 0 ; i < names.length ; i++) {
    
    if (names[i] === '|') newn = newn + 1
    if (names[i] === '|') console.log('Here today is:')
    if (newn === newn && names[i] !== '|' ) console.log(names[i])
     
 }



