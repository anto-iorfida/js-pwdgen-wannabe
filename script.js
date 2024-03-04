// Chiedi all’utente il suo nome,poi chiedi il suo cognome,poi chiedi il suo colore preferito.Infine scrivi sulla pagina nomecognomecolorepreferito23

// chiedi nome
const userName = prompt('Dimmi il tuo nome');
console.log(userName);

// chiedi cognome
const userSurname = prompt('Dimmi il tuo cognome')
console.log(userSurname);

// chiedi colore preferito
const userColor = prompt('qual è il tuo colore preferito?')
console.log(userColor);

// genera passsword
const userMessage = `${userName}${userSurname}${userColor}23`
console.log(userMessage);

// visualizzazione messaggio su html 
document.getElementById('message').innerHTML =userMessage
