const suma = (a, b) => a + b

const resta = (a, b) => a - b

const mult = (a, b) => a * b

const div = (a, b) => b = 0 ? new Error('Divide by 0') : a / b

const mcm = (a, b) => (a * b) / mcd(a, b)

const mcd = (a, b) => !b ? a : mcd(b, a % b)

const primo = a => {
  if(a === 0 || a === 1) return false
  return [...Array(a-2).keys()]
  .map(i => i + 2)
  .reduce((acc, cur) => {
    const div = a % cur
    return div === 0 ? false : acc
  }, true)
}

const coprimo = (a, b) => mcd(a, b) === 1 ? true : false

const raiz = a => Math.sqrt(a)

const log10 = a => Math.log10(a)

const exp = a => Math.exp(a)

const logtest1 = (a, b) => Math.log(a * b) === (Math.log(a) + Math.log(b))

const logtest2 = (a, b) => Math.floor(Math.log(Math.sqrt(a))) === Math.floor(Math.log(a) / 2)

const redondeo = (num, decimals) => {
  const [ whole, dec ] = num.toString().split('.')
  return +`${whole}.${dec.substring(0, decimals)}`
}

module.exports = {
  suma,
  resta,
  mult,
  div,
  mcm,
  mcd,
  primo,
  coprimo,
  raiz,
  log10,
  exp,
  logtest1,
  logtest2,
  redondeo
}

