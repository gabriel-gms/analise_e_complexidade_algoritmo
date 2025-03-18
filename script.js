function fatorial(n){
  let i = 1
  let fat = 1
  while(i<=n){
    fat = fat * i
    i = i + 1
  }
  return fat
}

console.log("iterativo: "+fatorial(5))

function fatorialRec(n){
    if(n == 0){
        return 1
    } else {
        return n * fatorialRec(n-1)
    }
}

console.log("Recursivo: "+fatorialRec(5))
