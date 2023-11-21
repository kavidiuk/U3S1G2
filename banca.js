var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var MainAccount = /** @class */ (function (_super) {
    __extends(MainAccount, _super);
    function MainAccount(_deposit, _prelievo) {
        var _this = _super.call(this, _deposit, _prelievo) || this;
        _this.contoDopoDeposito = -(_deposit / 10) + _deposit;
        _this.contoDopoPrelievo = -(_prelievo / 10) + _prelievo;
        return _this;
    }
    MainAccount.prototype.verificaConto = function () {
        return "".concat(this.contoDopoDeposito, " ").concat(this.contoDopoPrelievo);
    };
    return MainAccount;
}(Account));
var MotherAccount = new MainAccount(100, 100);
console.log(MotherAccount);
