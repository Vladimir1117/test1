'use stict';

var money = +prompt("Ваш бюджет на месяц", '');
var time = prompt("Введите дату в формате YY-MM-DD", '');

var appData = {

    budjet: money,
    timeDate: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    saving: false
};

for (var i = 0; i < 1; i++){
    
        a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется", '');

        
if((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
&& (typeof(a)) != '' && (typeof(b)) != '' && a.lenght < 50){
    appData.expenses[a] = b; 
}  else i =  i - 1;
}; 
   

appData.moneyPerDay = appData.budjet / 30;

alert("Ежедневный бюджет: "  + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
    console.log("Это минимальный уровень достатка");
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Средний уровень достатка");
}  else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}



    
    



