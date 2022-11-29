const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

@@ -20,20 +19,26 @@ function onSubmit(e) {
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    
    let user = {
      name : nameInput.value,
      email : emailInput.value
    }
   

    localStorage.setItem("userDetails" + user.email, JSON.stringify(user))
    userList.innerHTML = userList.innerHTML + `<li>${user.name}: ${user.email}</li> `
        // Clear fields
        nameInput.value = '';
        emailInput.value = '';

  }
}
function getData () {
  let keys = Object.keys(localStorage);
  for(let key of keys) {
    let {name,email} = JSON.parse(localStorage.getItem(key))
    userList.innerHTML = userList.innerHTML + `<li>${name}: ${email}</li> `
  }

 
getData()