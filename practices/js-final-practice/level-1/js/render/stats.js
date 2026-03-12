/**
 * 총 지출 합계를 화면에 표시합니다.
 * - #total-amount 요소에 총 합계를 표시하세요
 * - 형식: "123,456원"
 *
 * 힌트:
 * - reduce를 사용하여 합계를 계산하세요
 * - toLocaleString()으로 숫자 포맷을 적용하세요
 *
 * @param {Array} expenses - 지출 객체 배열
 */
export function renderTotalAmount(expenses) {
  const totalElement = document.getElementById("total-amount");
  // TODO: 총 합계를 계산하고 표시하세요

  // console.log(expenses);
  const totalPrice = expenses.reduce((acc, cur) => (acc += cur.amount), 0);
  // console.log(totalPrice);

  totalElement.textContent = `${totalPrice.toLocaleString()}원`;
}
