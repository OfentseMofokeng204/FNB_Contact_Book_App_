let contacts = [];
let editIndex = null;

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function loadContacts() {
  const list = document.getElementById("contactList");
  list.innerHTML = "";

  contacts.forEach((contact, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${contact.name} - ${contact.phone} - ${contact.email}
      <button onclick="editContact(${index})">✏️</button>
      <button onclick="deleteContact(${index})">🗑️</button>
    `;
    list.appendChild(li);
  });
}

function addContact() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  if (name && phone && email) {
    contacts.push({ name, phone, email });
    loadContacts();
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
  }
}

function editContact(index) {
  editIndex = index;
  const contact = contacts[index];

  document.getElementById("editName").value = contact.name;
  document.getElementById("editPhone").value = contact.phone;
  document.getElementById("editEmail").value = contact.email;
  document.getElementById("editModal").classList.remove("hidden");
}

function saveEdit() {
  contacts[editIndex] = {
    name: document.getElementById("editName").value,
    phone: document.getElementById("editPhone").value,
    email: document.getElementById("editEmail").value,
  };
  closeModal();
  loadContacts();
}

function closeModal() {
  document.getElementById("editModal").classList.add("hidden");
}

function deleteContact(index) {
  contacts.splice(index, 1);
  loadContacts();
}
