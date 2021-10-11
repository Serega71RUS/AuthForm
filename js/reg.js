"use strict"

window.addEventListener('DOMContentLoaded', () => {

    //Password
    const txtBoxEmail = document.querySelector('[data-login]');
    const txtBoxPass = document.querySelector('[data-password]');
    const btn = document.querySelector('.btnlogin');
    let chEmail = false;
    let chPass = false;

    //Проверка Email
    function addErrorEmail() {
        const element = document.createElement('h1');
        element.classList.add('error_text');
        element.textContent = "Вы ввели неккоректный адрес электронной почты";
        txtBoxEmail.addEventListener('keyup', (e) => {
            let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if(!reg.test(e.target.value)){
                txtBoxEmail.after(element);
                chEmail = false;
                BtnLogin();
            }
            else{
                if(txtBoxEmail.nextElementSibling.className == "error_text"){
                    txtBoxEmail.nextElementSibling.remove();
                    chEmail = true;
                    BtnLogin();
                }
            }
        });
    }

    //Проверка пароля
    function addErrorPass() {
        const element = document.createElement('h1');
        element.classList.add('error_text');
        element.textContent = "Пароль должен быть не менее 7 и не более 20 символов";
        txtBoxPass.addEventListener('keyup', (e) => {
            console.log(e.target.value.length);
            if(e.target.value.length <= 20 && e.target.value.length >= 7){
                if(txtBoxPass.nextElementSibling.className == "error_text"){
                    txtBoxPass.nextElementSibling.remove();
                    chPass = true;
                    BtnLogin();
                }
            }
            else{
                txtBoxPass.after(element);
                chPass = false;
                BtnLogin();
            }
        });
    }

    //Обработчик кнопки
    btn.addEventListener('click', () => {
        alert("Пользователь авторизован");
    });

    //Проверка Кнопки
    function BtnLogin() {
        if(chEmail == false || chPass == false){
            //btn.classList.toggle('hover');
            btn.classList.remove('hover');
            btn.setAttribute('disabled', true);
        }
        else{
            //btn.classList.toggle('hover');
            btn.classList.add('hover');
            btn.removeAttribute('disabled');
        }
    }


    //Main
    addErrorEmail();
    addErrorPass();
    BtnLogin();
});