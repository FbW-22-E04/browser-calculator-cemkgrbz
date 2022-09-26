const sum1 = document.querySelector('#sum1')
const sum2 = document.querySelector('#sum2')
const sumResult = document.querySelector('#sumResult')

sum1.addEventListener('input', (e) => {

    const n1 = parseFloat(sum1.value) 
    const n2 = !sum2.value ? 0 : parseFloat(sum2.value) 
    sumResult.value  = n1 + n2
})

sum2.addEventListener('input', (e) => {

    const n1 = !sum1.value ? 0 : parseFloat(sum1.value) 
    const n2 = parseFloat(sum2.value) 
    sumResult.value  = n1 + n2
})

// sum1.addEventListener('keydown', event => {

//     console.log('key pressed is', event.key)

//     if (event.key === 'Enter') sum2.focus()
// })

// sum2.addEventListener('keydown', event => {

//     console.log('key pressed is', event.key)

//     if (event.key === 'Enter') sum1.focus()
// })

const sub1 = document.querySelector('#sub1')
const sub2 = document.querySelector('#sub2')
const subResult = document.querySelector('#subResult')

sub1.addEventListener('input', (e) => {

    const n1 = parseFloat(sub1.value) 
    const n2 = !sub2.value ? 0 : parseFloat(sub2.value) 
    subResult.value  = n1 - n2
})

sub2.addEventListener('input', (e) => {

    const n1 = !sub1.value ? 0 : parseFloat(sub1.value) 
    const n2 = parseFloat(sub2.value) 
    subResult.value  = n1 - n2
})

const multi1 = document.querySelector('#multi1')
const multi2 = document.querySelector('#multi2')
const multiResult = document.querySelector('#multiResult')

multi1.addEventListener('input', (e) => {

    const n1 = parseFloat(multi1.value) 
    const n2 = !multi2.value ? 0 : parseFloat(multi2.value) 
    multiResult.value  = n1 * n2
})

multi2.addEventListener('input', (e) => {

    const n1 = !multi1.value ? 0 : parseFloat(multi1.value) 
    const n2 = parseFloat(multi2.value) 
    multiResult.value  = n1 * n2
})

const div1 = document.querySelector('#div1')
const div2 = document.querySelector('#div2')
const divResult = document.querySelector('#divResult')

div1.addEventListener('input', (e) => {

    const n1 = parseFloat(div1.value) 
    const n2 = !div2.value ? 0 : parseFloat(div2.value) 
    divResult.value  = n1 / n2
})

div2.addEventListener('input', (e) => {

    const n1 = !div1.value ? 0 : parseFloat(div1.value) 
    const n2 = parseFloat(div2.value) 
    divResult.value  = n1 / n2
})

const mod1 = document.querySelector('#mod1')
const mod2 = document.querySelector('#mod2')
const modResult = document.querySelector('#modResult')

mod1.addEventListener('input', (e) => {

    const n1 = parseFloat(mod1.value) 
    const n2 = !div2.value ? 0 : parseFloat(div2.value) 
    modResult.value  = n1 % n2
})

mod2.addEventListener('input', (e) => {

    const n1 = !mod1.value ? 0 : parseFloat(mod1.value) 
    const n2 = parseFloat(mod2.value) 
    modResult.value  = n1 % n2
})

