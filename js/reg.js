"use strict"

window.addEventListener('DOMContentLoaded', function() { //() =>

    //Login
    const parent = document.querySelector('.auth__inner'); //IE
    const txtBoxEmail = parent.querySelector('[data-login]');
    const txtBoxPass = parent.querySelector('[data-password]');
    const btn = parent.querySelector('.btnlogin');
    let ch = {
        FIO: false,
        Email: false,
        Pass: false,
        Pass2: false
    };

    //Добавление ошибки
    function AddErrText(id, text, txtBox, func) {
        const element = document.createElement('h1');
        element.classList.add('error_text');
        element.id = id; //IE
        element.textContent = text;
        txtBox.addEventListener('keyup', function(e) {func(e, element, id, txtBox)});
    }

    //Проверка ФИО
    function checkFIO(e, element, id, txtBox) {
        let reg = /^[а-яА-Я]+/;
        if(!reg.test(e.target.value)){
            //txtBoxEmail.after(element);
            txtBox.insertAdjacentElement('afterend', element);
            ch.FIO = false;
            BtnLogin();
        }
        else{
            if(txtBox.nextElementSibling.id == id){
                //txtBoxEmail.nextElementSibling.remove();
                const el = document.getElementById(id); //IE
                parent.removeChild(el); //IE
                ch.FIO = true;
                BtnLogin();
            }
        }
    }

    //Проверка Email
    function checkEmail(e, element, id, txtBox){
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(!reg.test(e.target.value)){
            //txtBoxEmail.after(element);
            txtBox.insertAdjacentElement('afterend', element);
            ch.Email = false;
            BtnLogin();
        }
        else{
            if(txtBox.nextElementSibling.id == id){
                //txtBoxEmail.nextElementSibling.remove();
                const el = document.getElementById(id); //IE
                parent.removeChild(el); //IE
                ch.Email = true;
                BtnLogin();
            }
        }
    }

    //Проверка пароля
    function checkPass(e, element, id, txtBox) {
        console.log(e.target.value.length);
        if(e.target.value.length <= 20 && e.target.value.length >= 7){
            if(txtBox.nextElementSibling.id == id){
                //txtBoxPass.nextElementSibling.remove();
                const el = document.getElementById(id); //IE
                parent.removeChild(el); //IE
                ch.Pass = true;
                BtnLogin();
            }
        }
        else{
            //txtBoxPass.after(element);
            txtBox.insertAdjacentElement('afterend', element);
            ch.Pass = false;
            BtnLogin();
        }
    }

    //Обработчик кнопки
    btn.addEventListener('click', function() { //() =>
        alert("Пользователь авторизован");
    });

    //Проверка Кнопки
    function BtnLogin() {
        if(ch.FIO == false || ch.Email == false || ch.Pass == false || ch.Pass2 == false){
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
    BtnLogin();

    AddErrText(
        "errFIO",
        "Допускаются только символы кириллицы",
        parent.querySelector('[data-fio]'),
        checkFIO
    );

    AddErrText(
        "errEmail",
        "Вы ввели неккоректный адрес электронной почты",
        txtBoxEmail,
        checkEmail
    );

    AddErrText(
        "errPass",
        "Пароль должен быть не менее 7 и не более 20 символов",
        txtBoxPass,
        checkPass
    );
});