const form = document.getElementById('form')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let data = {
    name,
    email
  }

  let formatData = JSON.stringify(data)

  localStorage.setItem('@data:client', formatData)
  let contentAlert = document.getElementById('alert')

  contentAlert.innerText = "Email cadastrado com sucesso!!"

  document.getElementById('name').value = ''
  document.getElementById('email').value = ''
})