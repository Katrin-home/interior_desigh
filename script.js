
const arrow = document.querySelector('#myArrow');
const url = 'https://interior-pt4c.onrender.com/api/emails';

arrow.addEventListener('click', async (event) => {
    event.preventDefault();
    const email = {email:document.querySelector('#myInput').value}
    console.log(email)
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(email)
    });
    if (response.ok) {
        alert('Email sent successfully')
        } else {
        alert('Wrong email.Write an email in the format name@gmail.com')
        console.error('Error: ', response.status);
    }
    document.querySelector('#myInput').value = ''
});