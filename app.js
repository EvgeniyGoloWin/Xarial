let form = document.getElementById('form'),
    form1 = document.getElementById('main-block')
    form2 = document.getElementById('main-block_1'),
    form3 = document.getElementById('main-block_2'),
    form4 = document.getElementById('main-block_3'),
    formInputs = document.querySelectorAll('.js-input'),
    inputEmail = document.querySelector('.js-input-email'),
    inputName = document.querySelector('.js-input-name'),
    inputCompany = document.querySelector('.js-input-company'),
    inputCountry = document.querySelector('.js-input-country');
    btnNext = document.getElementById('next')
    btnBack = document.getElementsByName('back')
    // btnBack1 = document.getElementById('back1')
    // btnBack2 = document.getElementById('back2')
    answer = document.getElementById('answer')
    document.querySelector('.js-input-checkbox');


//     answer.onchange = (e) => {
//     selectValue = e.target.value
// }

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re)
    return re.test(String(email).toLowerCase());
}

function validateName(name) {
    let re = /[a-z]/;
    return re.test(String(name).toLowerCase());
}

function validateCompany(company) {
    let re = /[a-z]/;
    return re.test(String(company).toLowerCase());
}

function validateCountry(country) {
    let re = /[a-z]/;
    return re.test(String(country).toLowerCase());
}

let radioValue

const radioBtn = document.getElementsByName('1');
for (let i = 0, length = radioBtn.length; i < length; i++) {
    radioBtn[i].onclick = (e) => {
       radioValue = e.target.value
   }
}

btnNext.onclick = () => {
    form1.classList.add('hidden')
    switch (radioValue) {
        case '1' :  form2.classList.remove('hidden')
            break;
        case '2' :   form3.classList.remove('hidden')
            break;
        case '3' :   form4.classList.remove('hidden')
            break;
    }
}
// btnBack.onclick = () => {
//     form2.classList.add('hidden')
//     form1.classList.remove('hidden')
// }
for (let i = 0, length = btnBack.length; i < length; i++) {
    btnBack[i].onclick = (e) => {
        switch (e.target.value) {
            case '1' :  form1.classList.remove('hidden')
                form2.classList.add('hidden')
                break;
            case '2' :   form1.classList.remove('hidden')
                form3.classList.add('hidden')
                break;
            case '3' :   form1.classList.remove('hidden')
                form4.classList.add('hidden')
                break;
        }
    }
}
// btnBack1.onclick = () => {
//     form3.classList.add('hidden')
//     form1.classList.remove('hidden')
// }
// btnBack2.onclick = () => {
//     form4.classList.add('hidden')
//     form1.classList.remove('hidden')
// }

form.onsubmit = function (e) {
    e.preventDefault()
    let emailVal = inputEmail.value,
        nameVal = inputName.value,
        companyVal = inputCompany.value,
        countryVal = inputCountry.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
            console.log('input not field')
        } else {
            input.classList.remove('error');
        }
    });

    if (emptyInputs.length !== 0) {
        console.log('inputs not filled');
        return false;
    }

    if(!validateEmail(emailVal)) {
        console.log('email not valid');
        inputEmail.classList.add('error');
        return false;
    } else {
        inputEmail.classList.remove('error');
    }

    if(!validateName(nameVal)) {
        console.log('name not valid')
        inputName.classList.add('error');
        return false;
    } else {
        inputName.classList.remove('error');
    }

    if(!validateCompany(companyVal)) {
        console.log('company not valid')
        inputCompany.classList.add('error');
        return false;
    } else {
        inputCompany.classList.remove('error');
    }

    if(!validateCountry(countryVal)) {
        console.log('country not valid')
        inputCountry.classList.add('error');
        return false;
    } else {
        inputCountry.classList.remove('error');
    }
}