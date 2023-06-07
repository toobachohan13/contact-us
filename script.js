function sendEmail() {
    const subjectMessage = document.getElementById('subject').value
    const bodyMessage = document.getElementById('message').value
    window.open(`mailto:toobachohan13@gmail.com?subject=${subjectMessage}&body=${bodyMessage}`, '_blank');
}