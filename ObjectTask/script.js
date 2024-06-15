const menimOlkem = {
    olke: "Canada",
    paytaxt: "Ottawa",
    dil: "English",
    populasiya: 8792345,
    qonsular: ["America", "Azerbaijan", "Gurcustan"]
  
  
}
console.log(`menim en cox sevdiyim olke ${this.olke}-dir paytaxti ise ${this.paytaxt} orada danishilan dil ${this.dil}-dir. olkenin populasiasi ${this.populasiya}-dir qoshular ${this.qonşular}-dir`);
menimOlkem.populasiya += 2000000;
console.log(`Ölkəmizin yeni əhalisi (2 milyon əlavə etdikdən sonra): ${menimOlkem.populasiya}`);

menimOlkem['populasiya'] -= 3000000;
console.log(`Ölkəmizin yeni əhalisi (3 milyon çıxardıqdan sonra): ${menimOlkem.populasiya}`);

menimOlkem.tesvirEt = function () {
    console.log(`2b-deki populyasiyanin son sayi ${this.populasiya}`);
}
menimOlkem.tesvirEt();


 function adaolubolmadigi (object) {
    if(object.qonsular.length > 0){
        console.log(`mövcud olke ${object.olke} ada deyil`);
    }
    else{
        console.log(`mövcud olke ${object.olke} adadir`);
    }
 }
 adaolubolmadigi(menimOlkem);


 //---------------------------------Challange-1----------------------------------
const mehemmed = {
    name: "Mehemmed",
    mass: 78,
    height: 1.69,
    bmi: null, 
    bmiHesabla: function() {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
};
const elcin = {
    name: "Elcin",
    mass: 92,
    height: 1.95,
    bmi: null, 
    bmiHesabla: function() {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
};
const bmimehemmed =  mehemmed.bmiHesabla();
const bmielcin =  elcin.bmiHesabla();

if(bmimehemmed > bmielcin ){
    console.log(`${mehemmed.name}'in BMI dəyəri ${bmimehemmed.toFixed(2)} və ${elcin.name}'in BMI dəyəri ${bmielcin.toFixed(2)}-dən böyükdür.`);
}
else if(bmielcin > bmimehemmed ){
    console.log(`${elcin.name}'in BMI dəyəri ${bmielcin.toFixed(2)} və ${mehemmed.name}'in BMI dəyəri ${bmimehemmed.toFixed(2)}-dən böyükdür.`);
}
else{
    console.log(`${mehemmed.name} və ${elcin.name} eyni BMI dəyərinə malikdirlər.`);
}
