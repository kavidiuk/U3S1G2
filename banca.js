var Account = /** @class */ (function () {
    function Account(_deposit, _prelievo) {
        this.balanceInit = 0; //saldo attuale
        this.oneDeposit = _deposit; // versamento
        this.oneWithDraw = _prelievo; // prelievo
    }
    Account.prototype.verificaConto = function () {
        return "".concat(this.oneDeposit, " ").concat(this.oneWithDraw);
    };
    return Account;
}());
var SonAccount = new Account(100, 100);
console.log(SonAccount);
