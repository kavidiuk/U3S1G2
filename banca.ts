class Account {
  balanceInit: number = 0; //saldo attuale

  oneDeposit: number; //deposito
  oneWithDraw: number; //versamento

  constructor(_deposit: number, _prelievo: number) {
    this.oneDeposit = _deposit; // versamento
    this.oneWithDraw = _prelievo; // prelievo
  }

  verificaConto() {
    return `${this.oneDeposit} ${this.oneWithDraw}`;
  }
}

let SonAccount = new Account(100, 100);
console.log(SonAccount);

class MainAccount extends Account {
  //oneDeposit = ((this._deposit * 10%) - this._deposit);
  contoDopoDeposito: number;
  contoDopoPrelievo: number;

  constructor(_deposit: number, _prelievo: number) {
    super(_deposit, _prelievo);
    this.contoDopoDeposito = -(_deposit / 10) + _deposit;
    this.contoDopoPrelievo = -(_prelievo / 10) + _prelievo;
  }
  verificaConto(): string {
    return `${this.contoDopoDeposito} ${this.contoDopoPrelievo}`;
  }
}

let MotherAccount = new MainAccount(100, 100);
console.log(MotherAccount);
