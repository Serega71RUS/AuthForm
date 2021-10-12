"use strict"

window.addEventListener('DOMContentLoaded', function() { //() =>

    //Login
    const parent = document.querySelector('.auth__inner'); //IE
    const btn = parent.querySelector('.btnlogin');
    let ch = {
        Email: false,
        Pass: false,
    };

    //Добавление ошибки
    function AddErrText(id, text, txtBox, func) {
        const element = document.createElement('h1');
        element.classList.add('error_text');
        element.id = id; //IE
        element.textContent = text;
        txtBox.addEventListener('keyup', function(e) {func(e, element, id, txtBox)});
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
        console.log(ch);
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
        "errEmail",
        "Вы ввели неккоректный адрес электронной почты",
        parent.querySelector('[data-login]'),
        checkEmail
    );

    AddErrText(
        "errPass",
        "Пароль должен быть не менее 7 и не более 20 символов",
        parent.querySelector('[data-password]'),
        checkPass
    );
});