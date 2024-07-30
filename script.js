
const arrow = document.querySelector('#myArrow');
const url = 'https://interior-pt4c.onrender.com/api/emails';

arrow.addEventListener('click', async (event) => {
    event.preventDefault();
    // const myInput = document.querySelector('#myInput');
    // console.log(myInput.value)
    const email = {email:document.querySelector('#myInput').value}
    console.log(email)
    // const formData = new FormData({email:myInput});
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(email)
    });

    if (response.ok) {
        console.log('Данные успешно отправлены!');
    } else {
        console.error('Ошибка при отправке данных:', response.status);
    }
});