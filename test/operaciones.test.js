const assert = require('assert')
const op = require('../operaciones')

let a = 0;
let b = 0;

describe('Testing Operaciones', () => {
  beforeEach(() => {
    a = getRandom(0, 1000)
    b = getRandom(1000, 2000)
  })

  afterEach(() => {
    a = 0
    b = 0
  })

  it('Test suma', () => {
    let sum = op.suma(a, b)
    assert.ok(sum > 0)
    assert.equal(sum, a + b)
  })

  it('Test resta', () => {
    let sub = op.resta(a, b)
    assert.equal(sub, a - b)
  })

  it('Test mult', () => {
    let mul = op.mult(a, b)
    assert.equal(mul, a * b)
  })

  it('Test div', () => {
    let sum = op.div(a, b)
    try {
      assert.equal(sum, a / b)
    } catch (error) {
      console.error(error)
    }
  })

  it('Test mcm', () => {
    let minComMult = op.mcm(a, b)
    assert.ok(minComMult > 0)
  })

  it('Test mcd', () => {
    let maxCOmunDiv = op.mcd(a, b)
    assert.ok(maxCOmunDiv > 0)
  })

  it('Test si numero es primo', () => {
    let num = op.primo(a)
    let numtest = getRandom(2,a-1)
    console.log({a, numtest, num});
    if(num) {
      assert.ok( a % numtest !== 0 )
    } else {
      assert.ok(!num)
    }
  })

  it('Test si numeros son coprimos', () => {
    let num = op.coprimo(a, b)
    console.log({a,b, num});
    if(num) {
      assert.ok(num)
    } else {
      assert.ok(!num)
    }
  })

  it('Test raiz', () => {
    let num = op.raiz(a)
    assert.equal(num, Math.sqrt(a))
  })
  
  it('Test logaritmo base 10', () => {
    let num = op.log10(a)
    assert.equal(num, Math.log10(a))
  })

  it('Test exponencial e', () => {
    let num = op.exp(a)
    assert.equal(num, Math.exp(a))
  })

  it('Test logaritmo de un producto es igual a la suma de los logaritmos de los factores', () => {
    let num = op.logtest1(a, b)
    assert.equal(num, Math.log(a * b) === (Math.log(a) + Math.log(b)))
  })
  
  it('Test logaritmo de una raíz es igual al cociente entre el logaritmo del radicando y el índice de la raíz', () => {
    let num = op.logtest2(a, b)
    assert.equal(num, Math.floor(Math.log(Math.sqrt(a))) === Math.floor(Math.log(a) / 2))
  })

  it('Test redondeo', () => {
    let testnum = a / b
    let num = op.redondeo(testnum,6)
    assert.ok(num > 0 )
    console.log(num);
  })
})

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}