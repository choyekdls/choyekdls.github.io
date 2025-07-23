document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (username === null && password === null) {
    errorMessage.textContent = "아이디와 비밀번호를 다시 입력해주세요 :)";
  } else {
    alert("로그인 성공!");
  }
});
