// 기능 1
const welcomeModal = document.querySelector('.welcome');
const enterBtn = document.querySelector('.enter');
const nameInput = document.querySelector('.welcome-input__name');
const bankName = document.querySelector('#bank');
const accountInput = document.querySelector('.welcome-input__account');

// 기능 1-1. 이름, 계좌번호 입력 안 하고 클릭 시 경고 발생
// 기능 1-2. 이름, 계좌번호 입력 후 클릭 시 메인으로 이동
enterBtn.addEventListener('click', e => {
    const name = nameInput.value;
    const account = accountInput.value;
    const bank = bankName.value;

    e.preventDefault();

    if (name === '' || account === '' || bank === '은행명') {
        alert('이름과 계좌번호를 모두 입력하시오.')
    } else {
        welcomeModal.classList.add('hide');
    }
})