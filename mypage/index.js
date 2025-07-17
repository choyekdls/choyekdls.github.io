const todayDate = () => {
  const now = new Date();
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  const tdate = document.querySelector("#tdate");

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  const day = now.getDay();
  tdate.textContent = `${year}년 ${month}월 ${date}일 (${days[day]})`;

  const time = document.querySelector("#time");

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  time.textContent = `${hours}:${minutes}:${seconds}`;
};

todayDate();

setInterval(() => {
  todayDate();
});
