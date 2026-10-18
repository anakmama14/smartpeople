const audio = document.getElementById("lagu");
let laguSudahMain = false;

function pindah(keHalaman) {
    const pages = document.querySelectorAll('.glass-container');
    pages.forEach(p => p.classList.add('hidden'));

    const target = document.getElementById('page' + keHalaman);
    if (target) {
        target.classList.remove('hidden');
    }

    // Musik mulai di detik ke-5 saat pertama kali klik Buka
    if (keHalaman === 2 && !laguSudahMain) {
        audio.currentTime = 5; 
        audio.play().then(() => {
            audio.loop = true;
            laguSudahMain = true; 
        }).catch(e => {
            console.log("Klik diperlukan untuk memutar musik");
        });
    }
}