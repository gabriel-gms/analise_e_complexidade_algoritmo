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

function par(n){
    if(n==0){
        return true
    } else if(n==1) {
        return false
    } else {
        return impar(n-1)
    }
}
function impar(n){
    if(n==0){
        return false
    }
    else if(n==1){
        return true
    }
    else {
        return par(n-1)
    }
}

console.log("Recursão indireta, o numero e par?: "+par(10))

function fibonacci(num){
    if(num==1 || num==2){
        return 1
    }else{
        return fibonacci(num-1)+fibonacci(num-2)
    }
}

console.log("Recursão aninhada na sequecia fibonnaci: "+fibonacci(10))
