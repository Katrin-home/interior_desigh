
const arrow = document.querySelector('#myArrow');
const myInput = document.querySelector('#myInput');
const url = 'https://interior-pt4c.onrender.com/api/emails';

arrow.addEventListener('click', async (event) => {
    event.preventDefault();
    console.log(myInput.value)
    const formData = new FormData(myInput);
    const response = await fetch(url, {
        method: 'POST',
        // body: JSON.stringify(myInput.value)
        body: formData
    });

    if (response.ok) {
        console.log('Данные успешно отправлены!');
    } else {
        console.error('Ошибка при отправке данных:', response.status);
    }
});