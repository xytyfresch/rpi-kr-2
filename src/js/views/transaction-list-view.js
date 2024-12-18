export class TransactionListView {
  constructor() {
    this.transactionsListElement = document.getElementById("transactions-list");
  }

  render(transactions) {
    this.transactionsListElement.innerHTML = "";

    transactions.forEach((transaction) => {
      const transactionElement = document.createElement("div");

      transactionElement.classList.add("transaction", transaction.type);

      transactionElement.innerHTML = `
            <p>${transaction.category} (${transaction.type}): ${transaction.amount} руб.</p>
          `;

      this.transactionsListElement.appendChild(transactionElement);
    });
  }
}
