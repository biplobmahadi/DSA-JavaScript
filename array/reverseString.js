const reverseStr = (str) => {
  if(!str || typeof str !== 'string') {
    console.log('Not ok!')
  }

  const backwards = []
  const len = str.length;

  for (let i=len-1; i>=0; i--){
    backwards.push(str[i])
  }

  return backwards.join('')
}

const reverseStr2 = str => str.split('').reverse().join('')
const reverseStr3 = str => [...str].reverse().join('')

reverseStr('Hi My name is Biplob.') // O(n)
reverseStr2('Hi My name is Biplob.') // Don't know
reverseStr3('Hi My name is Biplob.') // Don't know
