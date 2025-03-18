function fatorial(n){
  let i = 1
  let fat = 1
  while(i<=n){
    fat = fat * i
    i = i + 1
  }
  return fat
}

console.log("Fatorial iterativo: "+fatorial(5))

function fatorialRec(n){
    if(n == 0){
        return 1
    } else {
        return n * fatorialRec(n-1)
    }
}

console.log("Fatorial recursivo: "+fatorialRec(5))

function soma(n){
    if(n==1){
        return 1
    } else {
        return soma(n-1) + n
    }
}

console.log("Soma recursiva: "+soma(5))
