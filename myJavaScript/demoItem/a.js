const str = 'abcabcdef';

function f(str) {
  for (let i = 0; i < str.length; i++) {
    const a = str[i];
    if (str.indexOf(a) == i && str.indexOf(a, i+1)=== -1)  {
      console.log(a);
    }
    
  }
}
f(str)