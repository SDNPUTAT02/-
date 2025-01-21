// Anda bisa menambahkan script interaktif di sini
console.log("Website sekolah siap digunakan!");


// Fungsi untuk memperbarui tanggal dan waktu
function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();

    
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    const dayOfWeek = days[now.getDay()];
    const day = now.getDate().toString().padStart(2, '0');
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const formattedDateTime = `${dayOfWeek}, ${day} ${month} ${year} | ${hours}:${minutes}:${seconds}`;
    dateTimeElement.textContent = formattedDateTime;
}

// Update tanggal dan waktu setiap detik
setInterval(updateDateTime, 1000);
updateDateTime(); // Panggil sekali saat halaman pertama kali dimuat





  // Pastikan audio tetap otomatis diputar meskipun halaman di-reload
  window.addEventListener('load', () => {
    const audio = document.getElementById('background-audio');
    if (audio) {
        audio.play().catch(error => {
            console.error('Autoplay tidak diizinkan oleh browser:', error);
        });
    }
});
