// Создаем пустой массив для оценок клиентов
const clientsEstimations = [];

// Функция для запроса оценки у клиента
function askClientToGiveEstimation() {
    const estimation = prompt("Как вы оцениваете нашу кофейню от 1 до 10?");
    
    // Преобразуем введенное значение в число
    const estimationNumber = Number(estimation);
    
    // Проверяем, является ли введенное значение числом от 1 до 10
    if (estimationNumber >= 1 && estimationNumber <= 10) {
        // Добавляем оценку в массив
        clientsEstimations.push(estimationNumber);
    }
}

// Вызываем функцию 5 раз
for (let i = 0; i < 5; i += 1) {
    askClientToGiveEstimation();
}
// Подсчитываем положительные и отрицательные оценки
const goodEstimations = clientsEstimations.filter(estimation => estimation > 5).length;
const notGoodEstimations = clientsEstimations.filter(estimation => estimation <= 5).length;

// Выводим результаты
alert(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`);