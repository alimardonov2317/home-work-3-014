// 1-Masala
// Decloration
{
    function greeting(ism) {
        return `Assalomu alaykum ${ism}`
    }
    console.log(greeting("Samandar"))
}
// Expression
{
    const greeting = function (ism) {
        return `Assalomu alaykum ${ism}`
    }
    console.log(greeting("Samandar"))
}
// Arrow
{
    const greeting = (ism) => {
        return `Assalomu alaykum ${ism}`
    }
    console.log(greeting("Samandar"))
}

// 2-Masala
// Decloration
{
    function generateArray(a, b) {
        let arr = []
        for (let i = 0; i <= (b - a); i++) {
            arr[i] = a + i
        }
        return arr
    }
    console.log(generateArray(3, 6))
}

// Expression
{
    const generateArray = function (a, b) {
        let arr = []
        for (let i = 0; i <= (b - a); i++) {
            arr[i] = a + i
        }
        return arr
    }
    console.log(generateArray(3, 6))
}

// Arrow
{
    const generateArray = (a, b) => {
        let arr = []
        for (let i = 0; i <= (b - a); i++) {
            arr[i] = a + i
        }
        return arr
    }
    console.log(generateArray(3, 6))
}

// 3-Masala
// Decloration
{
    function bool(value) {
        return Number(value > 0)
    }
    console.log(bool(true))
    console.log(bool(false))
}
// Expression
{
    const bool = function (value) {
        return Number(value > 0)
    }
    console.log(bool(true))
    console.log(bool(false))
}
// Arrow
{
    const bool = (value) => Number(value > 0)
    console.log(bool(true))
    console.log(bool(false))
}



// 4-Masala
// Decloration
{
    function get(name) {
        return name.charAt(0);
    }
    console.log(get("Samandar"))
}
// Expression
{
    const get = function (name) {
        return name.charAt(0)
    }
    console.log(get("Samandar"))
}
// Arrow
{
    const get = (name) => name.charAt(0)
    console.log(get("Samandar"))
}



// 5-Masala
// Decloration
{
    function sum(...numbers) {
        return numbers.reduce((total, num) => total + num, 0)
    }
    console.log(sum(5, 3, 7))
}
// Expression
{
    const sum = function (...numbers) {
        return numbers.reduce((total, num) => total + num, 0)
    }
    console.log(sum(5, 3, 7))
}
// Arrow
{
    const sum = (...numbers) => numbers.reduce((total, num) => total + num, 0)
    console.log(sum(5, 3, 7))
}