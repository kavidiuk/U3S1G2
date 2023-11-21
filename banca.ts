class Account {
    
    balanceInit:number=0; //saldo attuale

    oneDeposit:number;//deposito
    oneWithDraw:number;//versamento

    constructor(_deposit:number,_prelievo:number){
        this.oneDeposit = _deposit;// versamento
        this.oneWithDraw = _prelievo;// prelievo
    }

    verificaConto(){
        return `${this.oneDeposit} ${this.oneWithDraw}`
    }
}

 let SonAccount = new Account (100,100);
 console.log(SonAccount);

 class MotherAccountt extends Account{
    //oneDeposit = ((this._deposit * 10%) - this._deposit);
    constructor(_deposit:number,_prelievo:number){
       super() 
    }
 }