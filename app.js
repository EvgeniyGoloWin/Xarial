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
    btnBack = document.getElementsByName('back'),
    answer = document.getElementById('answer');
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
        // if (input.value === '') {
        //     input.classList.add('error');
        //     console.log('input not field')
        // } else {
        //     input.classList.remove('error');
        // }
        console.log(input.value)
        console.log(input.name)
    });
    console.log(formData)
    // if (emptyInputs.length !== 0) {
    //     console.log('inputs not filled');
    //     return false;
    // }
    //
    // if(!validateEmail(emailVal)) {
    //     console.log('email not valid');
    //     inputEmail.classList.add('error');
    //     return false;
    // } else {
    //     inputEmail.classList.remove('error');
    // }
    //
    // if(!validateName(nameVal)) {
    //     console.log('name not valid')
    //     inputName.classList.add('error');
    //     return false;
    // } else {
    //     inputName.classList.remove('error');
    // }
    //
    // if(!validateCompany(companyVal)) {
    //     console.log('company not valid')
    //     inputCompany.classList.add('error');
    //     return false;
    // } else {
    //     inputCompany.classList.remove('error');
    // }
    //
    // if(!validateCountry(countryVal)) {
    //     console.log('country not valid')
    //     inputCountry.classList.add('error');
    //     return false;
    // } else {
    //     inputCountry.classList.remove('error');
    // }

    // if(!validateRadioBtn(radioVal)) {
    //     console.log('please make a choice')
    //     inputRadioBtn.classList.add('error');
    //     return false;
    // } else {
    //     inputRadioBtn.classList.remove('error');
    // }
    //
    // if(!validateDate(dateVal)) {
    //     console.log('please select date')
    //     inputDate.classList.add('error');
    //     return false;
    // } else {
    //     inputDate.classList.remove('error');
    // }
}

function validation(element){
    switch (element.name) {
        case 'email':
            // let parentBlock = element.closest('.form__group')
            // state.errors[element.name] = validateEmail(element.value)
            // state.errors[element.name] ?
            //     parentBlock.closest('.form__group').classList.add('error')
            //     : parentBlock.closest('.form__group').classList.remove('error')
            return validateEmail(element.value)
        default :
            return element.value !== ''
    }
}

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
