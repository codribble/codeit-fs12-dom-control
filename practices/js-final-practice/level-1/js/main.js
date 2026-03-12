// TODO: api.js에서 필요한 함수를 import 하세요
// TODO: render/list.js에서 필요한 함수를 import 하세요
// TODO: render/stats.js에서 필요한 함수를 import 하세요
import { createExpense, deleteExpense, getExpenses } from "./api.js";
import { renderExpenses } from "./render/list.js";
import { renderTotalAmount } from "./render/stats.js";

// ===== DOM 요소 가져오기 =====
const expenseForm = document.getElementById("expense-form");
const dateInput = document.getElementById("date");
const categorySelect = document.getElementById("category");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");

// ===== 앱 초기화 함수 =====
// 페이지가 로드되면 지출 목록을 가져와서 화면에 렌더링합니다.
async function init() {
  // TODO: getExpenses()로 지출 목록을 가져오세요
  // TODO: renderExpenses()로 목록을 화면에 렌더링하세요
  // TODO: renderTotalAmount()로 총 합계를 표시하세요
  const expenses = await getExpenses();
  // console.log("init expenses => ", expenses);

  renderExpenses(expenses);
  renderTotalAmount(expenses);
}

// ===== 지출 추가 처리 =====
// form의 submit 이벤트를 처리합니다.
async function handleSubmit(e) {
  e.preventDefault();

  // TODO: input 값들을 가져와서 새로운 지출 객체를 만드세요
  // 힌트: { date: dateInput.value, category: ..., description: ..., amount: Number(amountInput.value) }

  // TODO: createExpense()로 서버에 저장하세요

  // TODO: form을 초기화하세요 (expenseForm.reset())

  // TODO: init()을 다시 호출하여 화면을 갱신하세요

  const datas = {
    date: dateInput.value,
    category: categorySelect.value,
    description: descriptionInput.value,
    amount: Number(amountInput.value),
  };

  console.log(datas);

  createExpense(datas);
  expenseForm.reset();
  // init();
}

// ===== 삭제 처리 =====
// 삭제 버튼 클릭을 처리합니다.
// 힌트: 이벤트 위임(Event Delegation)을 사용하세요
//       document.getElementById('expense-list')에 click 이벤트를 걸고,
//       e.target.classList.contains('btn-delete')로 삭제 버튼인지 확인하세요
async function handleDelete(e) {
  if (!e.target.classList.contains("btn-delete")) return;
  // alert("삭제버튼 클릭시만!");

  // TODO: e.target.dataset.id로 삭제할 지출의 id를 가져오세요

  // TODO: deleteExpense()로 서버에서 삭제하세요

  // TODO: init()을 다시 호출하여 화면을 갱신하세요

  const id = e.target.dataset.id;
  deleteExpense(id);
  // init();
}

// ===== 이벤트 리스너 등록 =====
// TODO: form에 submit 이벤트 리스너를 등록하세요
// TODO: expense-list에 click 이벤트 리스너를 등록하세요 (이벤트 위임)
expenseForm.addEventListener("submit", handleSubmit);
document.getElementById("expense-list").addEventListener("click", handleDelete);

// ===== 앱 시작 =====
init();
