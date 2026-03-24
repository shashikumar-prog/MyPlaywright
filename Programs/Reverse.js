

let num=12345;
reversednum=0;

while(num>0) {
    let lastdigit=num%10;

    reversednum=reversednum*10+lastdigit;

    num=Math.floor(num/10);
    }
    console.log(" Reverse of the number 12345 is " + reversednum);