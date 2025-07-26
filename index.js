document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  if (username === 'putra"gmz' && password === 'cloud"store') {
    document.querySelector('.login-box').classList.add('fade-out');
    setTimeout(() => {
      window.location.href = 'store.html';
    }, 600);
  } else {
    document.getElementById('error').textContent = 'Username atau Password salah!';
  }
});

document.getElementById("lihatBtn").addEventListener("click", function () {
  document.querySelector('.login-box').classList.add('fade-out');
  setTimeout(() => {
    window.location.href = "user&pass.html";
  }, 600);
});

    function playClick() {
      const sound = document.getElementById('clickSound');
      if (sound) {
        sound.currentTime = 0;
        sound.play();
      }
    }