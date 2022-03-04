
console.log("Hello World");
const goofyGoober = document.getElementById("goofyGoober");
const gooberContainer = document.getElementById('goober-info')
const gooberForm = document.getElementById("gooberForm");
const updateGooberForm = document.getElementById("update-gooberForm");

const register = body => axios.post("http://localhost:4000/api/goober/", body).
then(res => {
    console.log(res.data);
    createGooberCard(res.data);
}).catch(err => {
    console.log("Registration did not work");
})

const update = (id, body) => axios.put(`http://localhost:4000/api/goober/${id}`).then(res => {
    console.log(res.data);
}).catch(err => {
    console.log(err);
})


function registerSubmitHandler(e) {
    e.preventDefault()


    let firstName = document.querySelector('#first-name')
    let lastName = document.querySelector('#last-name')
    let email = document.querySelector('#email')

  
    let bodyObj = {

        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
    }
    register(bodyObj);
    firstName.value = '';
    lastName.value = '';
    email.value = '';
}

function updateGoober(e){
    e.preventDefault()

    let firstName = document.querySelector('#first-name')
    let lastName = document.querySelector('#last-name')
    let email = document.querySelector('#email')
    let id = document.querySelector('#goober-id')

    let bodyObj = {

        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        id: id.value
    }
    update(id, bodyObj);
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    id.value = '';
}

function createGooberCard(data) {
        gooberContainer.innerHTML = ''
        const gooberCard = document.createElement('div')
    
        gooberCard.innerHTML = `
        <p class="first-name">First Name: ${data.firstName}</p>
        <p class="last-name">Last Name: ${data.lastName}</p>
        <p class="email">Email: ${data.email}</p>
        `
    
    
        gooberContainer.appendChild(gooberCard)
    }
    
  

document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  document.getElementById("fortuneButton").onclick = function(){
      axios.get("http://localhost:4000/api/fortune/")
      .then(function(response){
          const data = response.data;
          console.log(data);
          alert(data);
      })
    };

gooberForm.addEventListener('submit', registerSubmitHandler);
updateGooberForm.addEventListener('submit', )
  
