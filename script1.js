
const form = document.querySelector('#myInput'); // Замените на свой селектор формы
const url = 'https://interior-pt4c.onrender.com/api/emails'; // Замените на свой адрес

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const response = await fetch(url, {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        console.log('Данные успешно отправлены!');
    } else {
        console.error('Ошибка при отправке данных:', response.status);
    }
});

document.querySelector('#myInput').value = ''