const createUserUrl = "https://borjomi.loremipsum.ge/api/register", //method POST  ყველა ველი სავალდებულო
  getAllUsersUrl = "https://borjomi.loremipsum.ge/api/all-users", //method GET
  getSingleUserUrl = "https://borjomi.loremipsum.ge/api/get-user/1 ", //id, method  GET
	updateUserUrl = "https://borjomi.loremipsum.ge/api/update-user/1 ", //id, method PUT
	deleteUserUrl = "https://borjomi.loremipsum.ge/api/delete-user/1"; //id, method DELETE


const userEdit = document.querySelector(".edit")
const userDelete = document.querySelector(".delete")
const userId = document.querySelector(".id")
const userName = document.querySelector(".name")
const Email = document.querySelector(".email")
const userPersonalId = document.querySelector(".personal-id")
const userMobNumber = document.querySelector(".mobile-number")
const userZipCode = document.querySelector(".zip")
const userGender = document.querySelector(".gender")
const registration = document.querySelector(".registration")
const closingModal = document.querySelector('#close')
const formInfo = document.querySelector('.add-form')   


function getAllUser() {
  fetch("https://borjomi.loremipsum.ge/api/all-users").then((res)=>{
    return res.json()
  }).then((data)=>{
    const users = data.users

    console.log(data)
    userId.innerHTML = users[3].id
    userName.innerHTML = users[3].first_name
    Email.innerHTML = users[3].email
    userPersonalId.innerHTML = users[3].id_number
    userMobNumber.innerHTML = users[3].phone
    userZipCode.innerHTML = users[3].zip_code
    userGender.innerHTML = users[3].gender 
  })
}    
getAllUser()   

function startModal() {
  registration.addEventListener("click", ()=>{
    registration.classList.add('modal')
    registration.innerHTML=""  
    closingModal.style.display= 'block'
    closingModal.innerHTML='X' 
    formInfo.style.display = 'flex'
    closingModal.addEventListener("click", ()=>{
      registration.classList.remove('modal')
      closingModal.style.display= 'none'
      registration.innerHTML="Registration" 
      formInfo.style.display = 'none'
    })
    
  })
  
}
startModal()


















