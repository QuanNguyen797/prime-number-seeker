console.log("Hello, world!")

let n 
let primeString=" ";
do{ n=prompt('enter a number "n" larger than 2', 3);
if (n<=2){
    alert('please choose an n larger than 2');
}

} while(n<=2);
prime : for (let i = 2; i <= n; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            continue prime;
        }
    }
    primeString = primeString + i + " "
}
alert('The prime numbers up to n are' + ': ' + primeString);