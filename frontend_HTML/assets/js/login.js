function register() { 
  document.querySelectorAll('[data-value="toggle"]')
    .forEach(i => i.classList.toggle('is-hidden'));
}

function submitForm(route) {
  event.preventDefault();

  const form = document.forms['form'];
 
  fetch('http://localhost:3000/${route}', 
    { 
        method: 'POST',
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          name:form.name.value, 
          email:form.email.value, 
          password:form.password.value
        })
      })
        .then(resp => console.log(`Ok; ${resp}`))
        .catch(err => console.log(`Problemas [ERROR:${err}]`))
}