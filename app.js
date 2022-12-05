const radioBtn = document.getElementsByName('1');
let form = document.getElementById('form'),
    form1 = document.getElementById('main-block'),
    form2 = document.getElementById('main-block_1'),
    form3 = document.getElementById('main-block_2'),
    form4 = document.getElementById('main-block_3'),
    formInputs = document.querySelectorAll('.js-input'),
    inputEmail = document.querySelector('.js-input-email'),
    inputName = document.querySelector('.js-input-name'),
    inputCompany = document.querySelector('.js-input-company'),
    inputCountry = document.querySelector('.js-input-country'),
    inputRadioBtn = document.querySelector('.radioBtn'),
    inputDate = document.querySelector('.date'),
    btnNext = document.getElementById('next'),
    btnBack = document.getElementsByName('back');
console.log(inputDate)
let radioValue;
let state = {
    errors: {
    },
}

for (let i = 0, length = radioBtn.length; i < length; i++) {
    radioBtn[i].onclick = (e) => {
       radioValue = e.target.value
   }
}

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

btnNext.onclick = () => {
    form1.querySelectorAll("input.js-input").forEach((item) => {
        if(!validation(item)) {
            state.errors[item.name] = true;
        } else {
            delete state.errors[item.name];
        }
    })

    if(!Boolean(radioValue)) {
        state.errors.serviceType = true;
        inputRadioBtn.closest('.form__group').classList.add('error')
    } else {
        delete state.errors.serviceType;
        inputRadioBtn.closest('.form__group').classList.remove('error')
    }

    if(!Object.keys(state.errors).length) {
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
}

form.onsubmit = function (e) {
    e.preventDefault()
    let emailVal = inputEmail.value,
        nameVal = inputName.value,
        companyVal = inputCompany.value,
        countryVal = inputCountry.value,
        radioVal = inputRadioBtn.value,
        dateVal = inputDate.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '')
        const formData = new FormData();


    formInputs.forEach(function (input) {
        formData.append(`${input.name}`, `${input.value}`);
        console.log(input.value)
        console.log(input.name)
    });
    console.log(formData)
}

function validation(element){
    switch (element.name) {
        case 'email':
            return validateEmail(element.value)
        default :
            return element.value !== ''
    }
}

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
