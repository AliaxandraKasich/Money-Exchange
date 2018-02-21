// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency > 10000){
        return  {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if(currency <= 0) return {};
    var Hcount = 0;
    var Qcount = 0;
    var Dcount = 0;
    var Ncount = 0;
    var Pcount = 0;
    var temp = {};
    if(currency >= 50){
        while(currency >= 50){
            currency = currency - 50;
            Hcount++;
        }
    }
    if(Hcount!=0) temp.H = Hcount;
    if(currency >= 25){
        while(currency >= 25){
            currency = currency - 25;
            Qcount++;
        }
    }
    if(Qcount!=0) temp.Q = Qcount;
    if(currency >= 10){
        while(currency >= 10){
            currency = currency - 10;
            Dcount++;
        }
    }
    if(Dcount!=0) temp.D = Dcount;
    if(currency >= 5){
        while(currency >= 5){
            currency = currency - 5;
            Ncount++;
        }
    }
    if(Ncount!=0) temp.N = Ncount;
    if(currency >= 1){
        while(currency >= 1){
            currency = currency - 1;
            Pcount++;
        }
    }
    if(Pcount!=0) temp.P = Pcount;
    return temp;
}
