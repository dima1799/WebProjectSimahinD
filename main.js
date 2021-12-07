let form = document.querySelector('.js-form'),
    forminput = document.querySelectorAll('.js-in'),
    mailinput = document.querySelector('.js-in-email'),
    nameinput = document.querySelector('.js-in-name'),
    snameinput = document.querySelector('.js-in-sname'),
    temainput = document.querySelector('.js-in-tema'),
    passinput = document.querySelector('.js-in-password'),
    span = document.querySelectorAll('.span');


function validateEmail(email){
  let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(String(email).toLowerCase());
}

function validatePass(Password){
  let reg = /^((?=.*\d)(?=(.*\W){2})(?=.*[a-zA-Z])(?!.*\s).{8,15})$/;
  return reg.test(String(Password).toLowerCase());
}

function validateName(name){
  let reg = /^[А-Яа-я\-]{2,20}$/;
  return reg.test(String(name).toLowerCase());
}

function validateSname(sName){
  let reg = /^[А-Яа-я\-]{2,20}$/;
  return reg.test(String(sName).toLowerCase());
}

function validateTema(Tema){
  let reg = /^[А-Яа-я\-]{3,50}$/;
  return reg.test(String(Tema).toLowerCase());
}


form.onsubmit = function () {
  let emptyinput = Array.from(forminput).filter(input => input.value === ''),
      emailval = mailinput.value,
      phone = document.getElementById('phone').value,
      nameval = nameinput.value,
      snameval = snameinput.value,
      Temaval = temainput.value,
      passval = passinput.value,
      quantity = document.getElementById('quantity').value;


  forminput.forEach(function (input) {
    if (input.value === '') {
      input.classList.add('is-invalid');
      document.getElementById("notation-tm").style.color = "brown";
      document.getElementById("notation-tm").innerHTML = "Пожалуйста, заполните поля";
    } else {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      document.getElementById("notation-tm").innerHTML = "";
    }
  })

  if (emptyinput.length !== 0){
    // console.log('inputs not field')
    valid(forminput, span, 'Заполните форму')
    return false;
  }

  //
  // if (!validatephone(phoneval)){
  //     phoneinput.classList.add('is-invalid');
  //     return false;
  // }else {
  //     phoneinput.classList.remove('is-invalid');
  //     phoneinput.classList.add('is-valid');
  // }

  if (!validateName(nameval)){
    document.getElementById("notation-name").style.color = "brown";
    document.getElementById("notation-name").innerHTML = "Пожалуйста, введите от 2 до 20 символов на русском";
    nameinput.classList.add('is-invalid');
    return false;
  }else {
    nameinput.classList.remove('is-invalid');
    nameinput.classList.add('is-valid');
    document.getElementById("notation-name").innerHTML = ""
  }

  if (!validateSname(snameval)){
    document.getElementById("notation-sname").style.color = "brown";
    document.getElementById("notation-sname").innerHTML = "Пожалуйста, введите от 2 до 20 символов на русском";
    snameinput.classList.add('is-invalid');
    return false;
  }else {
    snameinput.classList.remove('is-invalid');
    snameinput.classList.add('is-valid');
    document.getElementById("notation-sname").innerHTML = ""
  }

  if (!validateEmail(emailval)){
    document.getElementById("notation-em").style.color = "brown";
    document.getElementById("notation-em").innerHTML = "Введите корректный Email";
    mailinput.classList.add('is-invalid');
    return false;
  }else {
    mailinput.classList.remove('is-invalid');
    mailinput.classList.add('is-valid');
    document.getElementById("notation-em").innerHTML = ""
  }

  if (!validatePass(passval)){
    document.getElementById("notation-password").style.color = "brown";
    document.getElementById("notation-password").innerHTML = "Длина пароля должна быть от 8 до 15 символов? пароль должен содержать:\n" +
        "не менее 1 цифры,\n" +
        "не менее 2 специальных символов (!@&#$%^),\n" +
        "не менее 1 буквенного символа,\n" +
        "не должен иметь пробелов.";
    passinput.classList.add('is-invalid');
    return false;
  }else {
    passinput.classList.remove('is-invalid');
    passinput.classList.add('is-valid');
    document.getElementById("notation-password").innerHTML = ""
  }

  if (!validateTema(Temaval)){
    document.getElementById("notation-tm").style.color = "brown";
    document.getElementById("notation-tm").innerHTML = "Пожалуйста, введите от 3 до 50 символов на русском";
    temainput.classList.add('is-invalid');
    return false;
  }else {
    temainput.classList.remove('is-invalid');
    temainput.classList.add('is-valid');
    document.getElementById("notation-tm").innerHTML = ""
  }

  function valid(form, el, mess){
    el.innerHTML = mess;
  }


  if ((validateSname(snameval)) != false && (validateName(nameval)) != false && (validateEmail(emailval)) != false && (validatePass(passval)) != false && quantity != "" && (validateTema(Temaval)) != false && phone != "") {
    document.getElementById("summary").style.color = "black";
    document.getElementById("summary").innerHTML = "<h4>Спасибо за регистрацию в нашей социальной сети!</br><br>";
    document.getElementById("summary").innerHTML += "Здравствуйте, " + nameval + " " + snameval + "!";
    document.getElementById("summary").innerHTML += "<p>Спасибо за выбор нашей социальной сети, для завершения регистрации, пройдите по ссылке в письме, отправленном на адрес:  " + emailval + "</p>";
    document.getElementById("summary").innerHTML += "<p>Ниже представлена указанная Вами информация:</p>";
    document.getElementById("summary").innerHTML += "<p>Ваш Email: " + emailval + "</br>";
    document.getElementById("summary").innerHTML += "<p>Ваш номер телефона: " + phone + "</br>";
    document.getElementById("summary").innerHTML += "<p>Ваш возраст: " + quantity + "</br>";
    document.getElementById("summary").innerHTML += "<p>Коротко о Вас: " + Temaval + "</br>";
    document.getElementById("summary").innerHTML += "<p style='font-weight: bold;'>Если Вы не смогли найти сообщение с подтверждением, проверьте папку спам.</p>";
  } else {
    return false;
  }

  return false;
}



