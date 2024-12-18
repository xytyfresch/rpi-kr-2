export class TransactionFormView {
  constructor() {
    this.formContainer = document.getElementById("form-container");
  }

  render() {
    const formElement = document.createElement("div");

    formElement.classList.add("form-container");

    formElement.innerHTML = `
        <form id="transaction-form">
          <select id="type" required>
            <option value="">Выберите тип операции</option>
            <option value="income">Доход</option>
            <option value="expense">Расход</option>
          </select>
  
          <select id="category" required>
            <option value="">Выберите категорию</option>
            <option value="salary">Зарплата</option>
            <option value="food">Еда</option>
            <option value="transport">Транспорт</option>
            <option value="entertainment">Развлечения</option>
          </select>
  
          <input type="number" id="amount" placeholder="Сумма" required />
  
          <button type="submit">Добавить операцию</button>
        </form>
      `;

    this.formContainer.appendChild(formElement);
  }
}
