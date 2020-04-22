function register() { 
  document.querySelectorAll('[data-value="toggle"]')
    .forEach(i => i.classList.toggle('is-hidden'));
}

document.querySelector('button.delete')
  .addEventListener('click', event => event.target.parentNode.classList.add('is-hidden'))

function notification(type, text) {
  let not =  document.querySelector('.notification')
    not.classList.add(type)
    not.classList.remove('is-hidden')
    not.children[1].innerText = text;
}

function submitForm(route) {
  event.preventDefault();
  const form = document.forms['form'];
 
  fetch(`http://localhost:3000/${route}`, { 
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      name:form.name.value, 
      email:form.email.value, 
      password:form.password.value
    })
  })
    .then(resp => console.log(resp))
    .catch(err => notification('is-danger', `Houve um erro: [${err}]`))
}