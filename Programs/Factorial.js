function factorial (a) {
    let num=a;
    let fact=1;
    for (i=1;i<=num;i++) {
        fact=fact*i;
    }
    console.log( "factorial of a number  is " + fact)
}
factorial(5);

factorial(10);