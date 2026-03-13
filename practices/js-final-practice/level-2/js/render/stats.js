export default function renderTotalAmount(datas, keyword = "") {
  const totalAmount = document.getElementById("total-amount");
  const totalAmountTitle = totalAmount.previousElementSibling;
  const total = datas.reduce((acc, data) => (acc += data.amount), 0);

  totalAmountTitle.textContent = `${keyword + " " || ""}총 지출`;
  totalAmount.textContent = total.toLocaleString() + "원";
}
