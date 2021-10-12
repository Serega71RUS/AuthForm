"use strict"

window.addEventListener('DOMContentLoaded', function() { //() =>

    //Login
    const txtBoxEmail = document.querySelector('[data-login]');
    const txtBoxPass = document.querySelector('[data-password]');
    const btn = document.querySelector('.btnlogin');
    const parent = document.querySelector('.auth__inner');
    let chEmail = false;
    let chPass = false;

    //Проверка Email
    function addErrorEmail() {
        const element = document.createElement('h1');
        element.classList.add('error_text');
        element.id = "errEmail"; //IE
        element.textContent = "Вы ввели неккоректный адрес электронной почты";
        txtBoxEmail.addEventListener('keyup', function(e) { //(e) =>
            let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if(!reg.test(e.target.value)){
                //txtBoxEmail.after(element);
                txtBoxEmail.insertAdjacentElement('afterend', element);
                chEmail = false;
                BtnLogin();
            }
            else{
                if(txtBoxEmail.nextElementSibling.className == "error_text"){
                    //txtBoxEmail.nextElementSibling.remove();
                    const el = document.getElementById('errEmail'); //IE
                    parent.removeChild(el); //IE
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
        element.id = "errPass"; //IE
        element.textContent = "Пароль должен быть не менее 7 и не более 20 символов";
        txtBoxPass.addEventListener('keyup', function(e) { //(e) =>
            console.log(e.target.value.length);
            if(e.target.value.length <= 20 && e.target.value.length >= 7){
                if(txtBoxPass.nextElementSibling.className == "error_text"){
                    //txtBoxPass.nextElementSibling.remove();
                    const el = document.getElementById('errPass'); //IE
                    parent.removeChild(el); //IE
                    chPass = true;
                    BtnLogin();
                }
            }
            else{
                //txtBoxPass.after(element);
                txtBoxPass.insertAdjacentElement('afterend', element);
                chPass = false;
                BtnLogin();
            }
        });
    }

    //Обработчик кнопки
    btn.addEventListener('click', function() { //() =>
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