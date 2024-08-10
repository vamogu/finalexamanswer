function start() {

    const datereceive = document.getElementById('birthday');
    const show = document.getElementById('demo');

    function updateCountdown() {
        const targetDate = new Date(datereceive.value);
        const now = new Date();

        if (isNaN(targetDate.getTime())) {
            result.textContent = "Please select a valid date and time.";
            show;
        }

        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            result.textContent = "Date is Expired.";
            console.
            show;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        show.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

   
    setInterval(updateCountdown, 1000);

    
    datereceive.addEventListener('input', updateCountdown);

}
