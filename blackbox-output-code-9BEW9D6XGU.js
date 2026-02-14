function trackStatus() {
    const id = document.getElementById('idInput').value;
    const resultDiv = document.getElementById('result');
    const timeline = document.getElementById('timeline');
    
    // Data dummy: ID dengan status (angka mewakili langkah yang sudah selesai, 1-5)
    const statuses = {
        'ABC123': { step: 1, desc: 'Permohonan diterima' },
        'DEF456': { step: 2, desc: 'Dijadwalkan rapat' },
        'GHI789': { step: 3, desc: 'Sudah dirapatkan' },
        'JKL012': { step: 4, desc: 'Surat Tanggapan dalam proses' },
        'MNO345': { step: 5, desc: 'Surat Tanggapan siap diambil' }
    };
    
    if (statuses[id]) {
        const status = statuses[id];
        resultDiv.innerHTML = `Status: ${status.desc}`;
        resultDiv.style.color = 'green';
        timeline.style.display = 'block';
        
        // Update timeline berdasarkan step
        for (let i = 1; i <= 5; i++) {
            const circle = document.getElementById(`circle${i}`);
            if (i < status.step) {
                circle.className = 'circle completed';
            } else if (i === status.step) {
                circle.className = 'circle active';
            } else {
                circle.className = 'circle';
            }
        }
    } else {
        resultDiv.innerHTML = 'ID tidak ditemukan. Periksa kembali nomor ID.';
        resultDiv.style.color = 'red';
        timeline.style.display = 'none';
    }
}