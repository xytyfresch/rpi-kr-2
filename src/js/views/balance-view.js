export class BalanceView {
  constructor() {
    this.balanceContainer = document.querySelector(".balance");
  }

  render() {
    const balance = 200;
    this.balanceContainer.innerHTML = `
        <h2>Общий баланс: <span id="total-balance">${balance}</span> руб.</h2>
      `;
  }
}
