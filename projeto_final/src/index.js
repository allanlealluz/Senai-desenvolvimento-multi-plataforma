// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfM1ZG8cHyZWZDqAMig6CZ70DIaK4FO2k",
  authDomain: "sujeitopizza.firebaseapp.com",
  databaseURL: "https://sujeitopizza-default-rtdb.firebaseio.com",
  projectId: "sujeitopizza",
  storageBucket: "sujeitopizza.appspot.com",
  messagingSenderId: "617241237243",
  appId: "1:617241237243:web:da5c5332555b864616c25e",
  measurementId: "G-BNVPHCM3DX"
};

const app = initializeApp(firebaseConfig);

// Referência para o Realtime Database
const database = getDatabase(app);
const messagesRef = ref(database, 'sujeitopizza');

// Função para lidar com o formulário de envio
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  let nome = getInputVal('nome');
  let email = getInputVal('email');
  let password = getInputVal('senha');
  saveMessage(nome, password, email);
  document.querySelector('.contact-form').reset();
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, email, password) {
  let newMessageRef = push(messagesRef); // usar push() para gerar um novo ID único
  set(newMessageRef, {
    name: name,
    email: email,
    password: password
  });
}