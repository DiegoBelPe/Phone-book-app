const BASE_URL = "http://localhost:8080/api";

export async function getContacts() {
  const response = await fetch(`${BASE_URL}/contacts`);
  const data = await response.json();
  console.log(data);
  return data;
}

export async function getContact(id) {
  const response = await fetch(`${BASE_URL}/contacts/${id}`);
  const data = await response.json();
  console.log(data);
  return data;
}

export async function createContact(contact) {
  const response = await fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  });
  const data = await response.json();
  console.log(data);
  return data;
}

export async function deleteContact(id) {
  const response = await fetch(`${BASE_URL}/contacts/${id}`, {
    method: 'DELETE'
  });
  const data = await response.json();
  console.log(data);
  return data;
}