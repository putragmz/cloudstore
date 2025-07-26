    let selectedProduct = "";
    let selectedPrice = "";
    let selectedMethod = "";

    function openModal(product, price) {
      selectedProduct = product;
      selectedPrice = price;
      selectedMethod = "";
      document.getElementById('paymentModal').style.display = 'flex';
    }

    function selectPayment(method) {
      selectedMethod = method;
    }

    function sendToWhatsApp() {
      if (!selectedMethod) {
        showCustomAlert('Silakan pilih metode pembayaran dulu.');
        return;
      }

      const phone = '6281548282195';
      const message = `Min Mau Order: ${selectedProduct} IDR ${selectedPrice}. Metode pembayaran: ${selectedMethod}`;
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
      document.getElementById('paymentModal').style.display = 'none';
    }

    function playSound(type) {
      const sounds = {
        dana: document.getElementById('sound-dana'),
        qris: document.getElementById('sound-qris'),
        send: document.getElementById('sound-send'),
      };
      if (sounds[type]) {
        sounds[type].currentTime = 0;
        sounds[type].play();
      }
    }

    function showCustomAlert(message) {
      const alertBox = document.getElementById('customAlert');
      alertBox.querySelector('p').innerText = message;
      alertBox.style.display = 'flex';
    }

    function closeCustomAlert() {
      document.getElementById('customAlert').style.display = 'none';
    }

    window.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.product').forEach((el, i) => {
        el.style.animationDelay = `${i * 0.1}s`;
      });
    });

    function playSound(id) {
      const audio = document.getElementById(`sound-${id}`);
      if (audio) audio.play();
    }

    function playClick() {
      document.getElementById('sound-click').play();
    }