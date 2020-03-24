//global
const contactList = document.getElementById("contact-list")

//initiate contacts array from storage
let contacts = JSON.parse(localStorage.getItem("myContacts"))
if (contacts === null) {
  contacts = []
}

//show contact list and data
const showContacts = () => {
  const nameList = contacts.map(contact => contact.name)
  const phoneList = contacts.map(contact => contact.phone)
  const idList = contacts.map(contact => contact.id)
  for (let index = 0; index < contacts.length; index++) {
    contactList.innerHTML += `<li><button onclick="showDetail(this)" data-id="${idList[index]}">${nameList[index]}\t${phoneList[index]}</button></li>`
  }
}
const showDetail = nodeButton => {
  const contactID = nodeButton.dataset.id
  const selectedContact = JSON.stringify(
    contacts.find(contact => contact.id == contactID)
  )
  nodeButton.parentNode.innerHTML += `<div>${selectedContact}</div>`
}
showContacts()

//store contact as object
class contact {
  constructor(id, name, phone, birthday, email, website, address) {
    this.id = id
    this.name = name
    this.phone = phone
    this.birthday = birthday
    this.email = email
    this.website = website
    this.address = address
  }
}

const getNewContact = event => {
  event.preventDefault()
  const calculateNewID = () => {
    if (contacts.length === 0) {
      firstID = 1
      return firstID
    }
    const lastNum = contacts
      .map(contact => contact.id)
      .reduce((max, value) => Math.max(max, value))
    return lastNum + 1
  }
  const newID = calculateNewID()
  const newName = document.getElementById("new-contact-name").value
  const newPhone = document.getElementById("new-contact-phone").value
  const newBirthday = document.getElementById("new-contact-birthday").value
  const newEmail = document.getElementById("new-contact-email").value
  const newWebsite = document.getElementById("new-contact-website").value
  const newAddress = document.getElementById("new-contact-address").value

  const newEntry = new contact(
    newID,
    newName,
    newPhone,
    newBirthday,
    newEmail,
    newWebsite,
    newAddress
  )
  contacts.push(newEntry)
  saveData()
  document.getElementById("contact-form").reset()
}

const form = document.getElementById("contact-form")
form.addEventListener("submit", getNewContact)

//save data to localstorage
const saveData = () => {
  localStorage.setItem("myContacts", JSON.stringify(contacts))
}
