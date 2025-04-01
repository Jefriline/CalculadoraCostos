document.addEventListener('DOMContentLoaded', () => {
    const hoursInput = document.getElementById('hours');
    const rateInput = document.getElementById('rate');
    const calculateBtn = document.getElementById('calculateBtn');
    const timeResult = document.getElementById('timeResult');
    const costResult = document.getElementById('costResult');

    calculateBtn.addEventListener('click', () => {
        const hours = parseFloat(hoursInput.value);
        const rate = parseFloat(rateInput.value);

        if (isNaN(hours) || isNaN(rate) || hours < 0 || rate < 0) {
            alert('Por favor, ingrese valores válidos');
            return;
        }

        const totalCost = hours * rate;
        
        // Formatear el tiempo
        let timeDisplay = '';
        if (hours === 1) {
            timeDisplay = '1 hora';
        } else if (hours % 1 === 0) {
            timeDisplay = `${hours} horas`;
        } else {
            const wholeHours = Math.floor(hours);
            const minutes = Math.round((hours - wholeHours) * 60);
            timeDisplay = `${wholeHours} horas y ${minutes} minutos`;
        }

        // Formatear el costo con separador de miles y decimales
        const formattedCost = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(totalCost);

        timeResult.textContent = timeDisplay;
        costResult.textContent = formattedCost;

        // Añadir animación a los resultados
        timeResult.parentElement.style.animation = 'none';
        costResult.parentElement.style.animation = 'none';
        void timeResult.parentElement.offsetWidth;
        void costResult.parentElement.offsetWidth;
        timeResult.parentElement.style.animation = 'fadeIn 0.5s ease';
        costResult.parentElement.style.animation = 'fadeIn 0.5s ease';
    });
});
