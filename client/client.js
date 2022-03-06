
console.log("Hello World");
const goofyGoober = document.getElementById("goofyGoober");
const gooberContainer = document.getElementById('goober-info')
const gooberForm = document.getElementById("gooberForm");
const updateGooberForm = document.getElementById("update-gooberForm");
const deleteGooberForm = document.getElementById("remove-gooberForm");

const register = body => axios.post("http://localhost:4000/api/goober/", body).
then(res => {
    console.log(res.data);
    createGooberCard(res.data);
    alert(`${res.data.firstName} has been registered.`)
}).catch(err => {
    alert('Invalid email address')
    console.log('Invalid email');
})

const update = (id, body) => axios.put(`http://localhost:4000/api/goober/${id}`, body).then(res => {
    console.log(res.data);
    alert(`Goober with ID: ${res.data.id} has updated their information.`)
    createGooberCard(res.data);
}).catch(err => {
    console.log(err);
})

const deleteGoober = (id) => axios.delete(`http://localhost:4000/api/goober/${id}`).then(res =>{
    console.log(res.data);
    alert(`Goober with ID: ${res.data} has been removed from database`);
}).catch(err => {
    console.log(err);
})



function registerSubmitHandler(e) {
    e.preventDefault()


    let firstName = document.querySelector('#first-name')
    let lastName = document.querySelector('#last-name')
    let email = document.querySelector('#email')
    let id = document.querySelector('#goober-id');

  
    let bodyObj = {

        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        id: id.value
    }
    register(bodyObj);
    firstName.value = '';
    lastName.value = '';
    email.value = '';
}

function updateSubmitHandler(e){
    e.preventDefault()

    let firstName = document.querySelector('#first-name-update')
    let lastName = document.querySelector('#last-name-update')
    let email = document.querySelector('#email-update')
    let id = document.querySelector('#goober-id');


    let bodyObj = {

        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        id: id.value
    }
    console.log(`ID: ${id.value}`);
    update(id.value, bodyObj);
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    id.value = '';
}

function deleteSubmitHandler(e){
    e.preventDefault();
    gooberContainer.innerHTML = '';
    let id = document.querySelector("#goober-id-remove");
    console.log(id.value);
    deleteGoober(id.value);

    id.value = '';
}

function createGooberCard(data) {
        gooberContainer.innerHTML = ''
        const gooberCard = document.createElement('div');
        gooberCard.classList.add('.goober-info-display');
    
        gooberCard.innerHTML = `
        <div class="goober-info-display">
            <h4> Account Information </h4>
            <p class="first-name">First Name: ${data.firstName}</p>
            <p class="last-name">Last Name: ${data.lastName}</p>
            <p class="goober-id">ID: ${data.id}</p>
            <p class="email">Email: ${data.email}</p>
        </div>
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
updateGooberForm.addEventListener('submit', updateSubmitHandler);
deleteGooberForm.addEventListener('submit', deleteSubmitHandler);
