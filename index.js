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

let contacts = []

const newContact = event => {
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
}

const form = document.getElementById("contact-form")
form.addEventListener("submit", newContact)
