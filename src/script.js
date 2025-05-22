console.log('Hello, JavaScript!');

const loginBtn = document.querySelector('#loginBtn');
const handleLogin = () => {
    console.log('クリックされた')
};
loginBtn.addEventListener('click', handleLogin)