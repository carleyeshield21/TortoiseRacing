// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/javascript
function race(v1, v2, g) {
    let av1 = v1/60
    let av2 = v2/60
    let counter = 0
    let g2 = 0
    while(g2<g){
        g2 += av2
        g += av1
        counter++
    }
    // console.log(g, g2)
    console.log(`Tortoise B will overtake Tortoise A in ${counter} minutes`)
}
race(720, 850, 70)
console.log('========')
race(80, 91, 37)