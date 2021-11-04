//Soru 1 Asal sayı mı?

function isPrime(...numbers) {
    
for (let i=0; i<numbers.length;i++) {
    
    for (let j = 2; j<numbers[i]; j++) {
      if (numbers[i]%j ==0) {
        let a=1;
        break;
        }
        break;
    }

    if(a==1) {
    console.log(numbers[i] + ": sayisi asal sayi değildir.");
    }else{
    console.log(numbers[i] +": sayisi asal sayidir.")
    }
    }
}
isPrime(5,7,25,11,18,22,12);


// Soru2: Arkadas sayılar mı bulma

function friendnumbers(number1,number2) {
    let toplam1=0
    let toplam2=0
    for (let i=1;i<number1; i++) {
        
        if (number1%i==0) {
        toplam1=toplam1+i
        }
    }
    for (let j=1;j<number2; j++){
        
        if(number2%j==0){
        toplam2=toplam2+j        
        }
    }

    if (number1==toplam2 && number2==toplam1){
        console.log(number1 + " ve " + number2 +" sayilari arkadas sayilardir");
    } else {
        console.log(number1 + " ve "+ number2+ " sayilari arkadas sayilar degildir");
    }
}

friendnumbers(220,284);


//3. Soru

function perfectNumbers() {
    for (let number = 1; number<1000; number++) {
        let toplamBolen=0
       for (let i = 1; i<number; i++) {
           if (number % i==0){
               toplamBolen=toplamBolen+i
           }

           if(number==toplamBolen) {
            console.log(number + " Mükemmel Sayıdır");
        }  
       } 
    }
    
}
perfectNumbers();


//4. Soru
 
 function primeNumber(number) { // Asal hesapmalama
    for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false
            }
        }
    return true
}

function primeNumber2() {
    for (let i = 2; i < 1000; i++) {
        if (primeNumber(i) == true) {
            console.log(i + " Asal Sayıdır")
        }
 
    }
}
primeNumber2()
