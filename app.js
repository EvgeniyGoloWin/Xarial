let form = document.getElementById('form'),
    form1 = document.getElementById('main-block'),
    form2 = document.getElementById('main-block_1'),
    form3 = document.getElementById('main-block_2'),
    form4 = document.getElementById('main-block_3'),
    inputRadioBtn = document.querySelector('.radioBtn'),
    btnNext = document.getElementById('next'),
    btnBack = document.getElementsByName('back');
    service = document.getElementsByName('service');
    apBtns = document.getElementsByName("application");
    product = document.getElementsByName('product');
    copy = document.getElementsByName("copy"),
    permission = document.getElementsByName("permission"),
    errorMessage = document.querySelectorAll('.errMes')
    dialogInfo = document.getElementById('dialog')
    link = document.getElementById('retry')

let radioValue;
let appValue;
let productValue
let copyValue
let permissionValue
let state = {
    errors: {},
}

const forms = [form1, form2, form3, form4]

for (let i = 0, length = service.length; i < length; i++) {
    service[i].onclick = (e) => {
        radioValue = e.target.value
    }
}

for (let i = 0, length = apBtns.length; i < length; i++) {
    apBtns[i].onclick = (e) => {
        appValue = e.target.value
    }
}

for (let i = 0, length = product.length; i < length; i++) {
    product[i].onclick = (e) => {
        productValue = e.target.value
    }
}
for (let i = 0, length = copy.length; i < length; i++) {
    copy[i].onclick = (e) => {
        copyValue = e.target.checked
    }
}
for (let i = 0, length = permission.length; i < length; i++) {
    permission[i].onclick = (e) => {
        permissionValue = e.target.checked
    }
}


for (let i = 0, length = btnBack.length; i < length; i++) {
    btnBack[i].onclick = (e) => {
        switch (e.target.value) {
            case '1' :
                form1.classList.remove('hidden')
                form2.classList.add('hidden')
                break;
            case '2' :
                form1.classList.remove('hidden')
                form3.classList.add('hidden')
                break;
            case '3' :
                form1.classList.remove('hidden')
                form4.classList.add('hidden')
                break;
        }
    }
}

const showError = document.createElement('p')
showError.classList.add('errMes')
showError.textContent = 'This field is required'

forms.forEach((item) => {
    item.querySelectorAll(".js-input").forEach((item) => {

        item.onblur = (e) => {
            if (!validation(e.target)) {
                item.classList.add("errorInput")
                item.parentElement.classList.add("error")
                item.after(showError)
                state.errors[item.name] = true;
            }
        }
        item.onchange = (e) => {
            if (e.target.value !== "") {
                item.classList.remove("errorInput")
                item.parentElement.classList.remove("error")
                showError.remove()
                delete state.errors[item.name];
            }
        }
    })
})
//
// const child = document.getElementById('main-block');
// const parWithClass = child.closest('.form__group').classList.add('error')

btnNext.onclick = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (!Boolean(radioValue)) {
        state.errors.serviceType = true;
        inputRadioBtn.closest('.form__group').classList.add('error')
    } else {
        delete state.errors.serviceType;
        inputRadioBtn.closest('.form__group').classList.remove('error')
    }

    if (!Object.keys(state.errors).length) {
        form1.classList.add('hidden')

        switch (radioValue) {
            case '1' :
                form2.classList.remove('hidden')
                break;
            case '2' :
                form3.classList.remove('hidden')
                break;
            case '3' :
                form4.classList.remove('hidden')
                break;
        }
    }
}

link.onclick = (e) => {
    form.reset()
    dialogInfo.classList.add('hidden')
    form.classList.remove('hidden')
    form1.classList.remove('hidden')

    switch (radioValue) {
        case '1' :
            form2.classList.add('hidden')
            break;
        case '2' :
            form3.classList.add('hidden')
            break;
        case '3' :
            form4.classList.add('hidden')
            break;
    }
}

form.onsubmit = function (e) {
    e.preventDefault()
    console.log(e.target.value)
    let formData = new FormData();

    form1.querySelectorAll('.js-input').forEach(async function (input) {
        await formData.append(`${input.name}`, `${input.value}`);
        console.log(`${input.name}: ${input.value}`)
    });

    switch (radioValue) {
        case '1' :
            form2.querySelectorAll('.js-input').forEach(async function (input) {
                await formData.append(`${input.name}`, `${input.value}`);
                console.log(`${input.name}: ${input.value}`)
            });
            formData.append("application", appValue)
            formData.append("product", productValue)
            formData.append("copy", copyValue)
            formData.append("permission", permissionValue)
            break;
        case '2' :
            form3.querySelectorAll('.js-input').forEach(async function (input) {
                await formData.append(`${input.name}`, `${input.value}`);
                console.log(`${input.name}: ${input.value}`)
            });
            formData.append("copy", copyValue)
            formData.append("permission", permissionValue)
            break;
        case '3' :
            form4.querySelectorAll('.js-input').forEach(async function (input) {
                await formData.append(`${input.name}`, `${input.value}`);
                console.log(`${input.name}: ${input.value}`)
            });
            formData.append('copy', copyValue)
            formData.append('permission', permissionValue)
            break;
    }

    // const response = fetch(`https://test-nscu.onrender.com/form`, {
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //     body: formData // body data type must match "Content-Type" header
    // });
    form.classList.add('hidden')
    dialogInfo.classList.remove('hidden')
}

function validation(element) {
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
