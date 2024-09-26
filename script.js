document.getElementById('consultationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const symptoms = document.getElementById('symptoms').value;
    const chatBox = document.getElementById('chatBox');

    // Menambahkan pesan pengguna ke chat
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = symptoms;
    chatBox.appendChild(userMessage);

    // Simulasi analisis penyakit
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot-message';
    botMessage.textContent = `Analisis untuk keluhan: "${symptoms}". Penyakit mungkin: Flu ringan. Saran: Istirahat 2 hari.`;
    chatBox.appendChild(botMessage);

    // Mengosongkan textarea
    document.getElementById('symptoms').value = '';

    // Scroll ke bawah chat
    chatBox.scrollTop = chatBox.scrollHeight;
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form kontak telah dikirim!');
});
