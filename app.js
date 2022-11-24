let form = document.getElementById('form'),
    form1 = document.getElementById('1')
    form2 = document.getElementById('2'),
    form3 = document.getElementById('3'),
    form4 = document.getElementById('4'),
    formInputs = document.querySelectorAll('.js-input'),
    inputEmail = document.querySelector('.js-input-email'),
    inputName = document.querySelector('.js-input-name'),
    inputCompany = document.querySelector('.js-input-company'),
    inputCountry = document.querySelector('.js-input-country');
    btnNext = document.getElementById('next')
    answer = document.getElementById('answer')
    document.querySelector('.js-input-checkbox');

    let selectValue

    answer.onchange = (e) => {
    selectValue = e.target.value
}

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

btnNext.onclick = () => {
    form1.classList.add('hidden')
    switch (selectValue) {
        case 's1' :  form2.classList.remove('hidden')
            break;
        case 's2' :   form3.classList.remove('hidden')
            break;
        case 's3' :   form4.classList.remove('hidden')
            break;
    }
}

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