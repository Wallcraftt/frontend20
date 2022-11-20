const createUserUrl = "https://borjomi.loremipsum.ge/api/register", //method POST  ყველა ველი სავალდებულო
  getAllUsersUrl = "https://borjomi.loremipsum.ge/api/all-users", //method GET
  getSingleUserUrl = "https://borjomi.loremipsum.ge/api/get-user/1 ", //id, method  GET
	updateUserUrl = "https://borjomi.loremipsum.ge/api/update-user/1 ", //id, method PUT
	deleteUserUrl = "https://borjomi.loremipsum.ge/api/delete-user/1"; //id, method DELETE


const userEdit = document.querySelector(".edit")
const userDelete = document.querySelector(".delete")
const userId = document.querySelector(".id")
const userName = document.querySelector(".name")
const userEmail = document.querySelector(".email")
const userPersonalId = document.querySelector(".personal-id")
const userMobNumber = document.querySelector(".mobile-number")
const userZipCode = document.querySelector(".zip")
const userGender = document.querySelector(".gender")
const registration = document.querySelector(".registration")
const closingModal = document.querySelector('#close')
const formInfo = document.querySelector('.add-form')   
const newUserName = document.querySelector("#new-user")
const newUserEmail = document.querySelector(".new-user-email")
const newUserPersonalId = document.querySelector("#new-user-personal-id")
const newUserMobNumber = document.querySelector("#new-user-mob-number")
const newUserZipCode = document.querySelector("#new-user-zip-code")
const newUserGenderfemale = document.querySelector("#gender-female")
const newUserGenderMale = document.querySelector("#gender-male")

function getAllUser() {
  fetch("https://borjomi.loremipsum.ge/api/all-users").then((res)=>{
    return res.json()
  }).then((data)=>{
    const users = data.users

    userId.innerHTML = users[3].id
    userName.innerHTML = users[3].first_name
    userEmail.innerHTML = users[3].email
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




formInfo.addEventListener("submit",(e)=>{
  e.preventDefault()

  const newUserNameValue = newUserName.value
  const newUserEmailValue = newUserEmail.value
  const newUserPersonalIdValue = newUserPersonalId.value
  const newUserMobNumberValue = newUserMobNumber.value
  const newUserZipCodeValue = newUserZipCode.value
  const newUserGenderfemaleValue = newUserGenderfemale.value
  const newUserGendermaleValue = newUserGenderMale.value


  
    const user = {
      first_name: newUserNameValue,
      email: newUserEmailValue,
      id_number: newUserPersonalIdValue,
      phone: newUserMobNumberValue,
      zip_code: newUserZipCodeValue,
      gender: newUserGenderfemaleValue,newUserGendermaleValue
    }  
    addNewUser(user)
    formInfo.reset()
})

function addNewUser(userInfo){
  fetch("https://borjomi.loremipsum.ge/api/register",{
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(userInfo)  
  })
  .then((res)=> res.json())
  .then((data)=> {
    
  })
  .catch(err=>{
  })
}

userDelete.addEventListener('click',()=>{
    userId.innerHTML = ""
    userName.innerHTML = ""
    userEmail.innerHTML = ""
    userPersonalId.innerHTML =""
    userMobNumber.innerHTML = ""
    userZipCode.innerHTML = ""
    userGender.innerHTML = ""
})


















