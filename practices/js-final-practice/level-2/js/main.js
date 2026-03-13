import { createData, deleteData, editData, getDatas } from "./api.js";
import renderExpenseList from "./render/list.js";
import renderTotalAmount from "./render/stats.js";

const expensesForm = document.getElementById("expense-form");
const expensesDateInput = document.getElementById("expenses-date");
const expensesCategory = document.getElementById("expenses-category");
const expensesDescription = document.getElementById("expenses-description");
const expensesPrice = document.getElementById("expenses-price");
const expensesBtnSubmit = document.getElementById("btn-submit");
const categories = document.querySelectorAll(".btn-filter");

let editingId = null;

async function init() {
  const datas = await getDatas();
  renderExpenseList(datas);
  renderTotalAmount(datas);
}

function handleEditCancel(e) {
  e.preventDefault();

  expensesForm.reset();
  expensesBtnSubmit.textContent = "추가";
  editingId = null;
  e.target.remove();
}

async function handleActions(e) {
  const { target } = e;

  if (target.classList.contains("btn-delete")) {
    editingId = target.closest("li").dataset.id;

    await deleteData(editingId);
  }

  if (target.classList.contains("btn-edit")) {
    const btnCancel = document.createElement("button");
    btnCancel.setAttribute("type", "button");
    btnCancel.classList.add("btn-cancel");
    btnCancel.textContent = "취소";

    btnCancel.addEventListener("click", handleEditCancel);
    if (!expensesForm.querySelector(".btn-cancel"))
      expensesForm.querySelector(".form-row").appendChild(btnCancel);

    editingId = target.closest("li").dataset.id;
    expensesBtnSubmit.textContent = "수정";

    const data = await getDatas(editingId);
    const { date, category, description, amount } = data;

    expensesDateInput.value = date;
    expensesCategory.value = category;
    expensesDescription.value = description;
    expensesPrice.value = amount;
  }
}

async function handleFilter(e) {
  e.preventDefault();

  const { target } = e;
  const keyword = target.dataset.keyword;
  const datas = await getDatas();

  [...target.parentElement.children].forEach((btn) =>
    btn.classList.remove("active"),
  );
  target.classList.add("active");

  const filteredDatas = keyword
    ? datas.filter((data) => data.category === keyword)
    : datas;
  renderExpenseList(filteredDatas, keyword);
  renderTotalAmount(filteredDatas, keyword);
}

async function handleSubmit(e) {
  e.preventDefault();

  const data = {
    date: expensesDateInput.value,
    category: expensesCategory.value,
    description: expensesDescription.value,
    amount: Number(expensesPrice.value),
  };

  if (editingId === null) {
    // 추가
    await createData(data);
  } else {
    // 수정
    await editData(editingId, data);
    editingId = null;
    expensesBtnSubmit.textContent = "추가";
  }
}

expensesForm.addEventListener("submit", handleSubmit);

document
  .getElementById("expense-list")
  .addEventListener("click", handleActions);

categories.forEach((btn) => {
  btn.addEventListener("click", handleFilter);
});

init();
