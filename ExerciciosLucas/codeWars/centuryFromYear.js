// My soluction

function century(year) {
    if (year % 100 == 0) {
        let century0 = year / 100
        return console.log(century0)
    } else {
        let century1 = (year / 100) + 1
        return console.log(Math.floor(century1))
    }
}
century(2000)


// best practice

// const century = year => console.log(Math.ceil(year/100))
// century(1900)
