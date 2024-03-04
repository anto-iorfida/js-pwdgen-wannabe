// Chiedi all’utente il suo nome,poi chiedi il suo cognome,poi chiedi il suo colore preferito.Infine scrivi sulla pagina nomecognomecolorepreferito23 BONUS(chiedi un numero e sommalo al 23)

// chiedi nome
const userName = prompt('Dimmi il tuo nome');
console.log(userName);

// chiedi cognome
const userSurname = prompt('Dimmi il tuo cognome')
console.log(userSurname);

// chiedi colore preferito
const userColor = prompt('qual è il tuo colore preferito?')
console.log(userColor);

//chiedi numero preferito
const userNumber =prompt('qual è il tuo numero preferito?')
console.log(userNumber)

// converti il numero cosi da sommarlo
const userNumberAsNumber = parseInt(userNumber)
console.log(userNumberAsNumber)

// sommare numero scento a 23
const sum = userNumberAsNumber + 23;
console.log(sum)

// genera passsword
const userMessage = `${userName}${userSurname}${userColor}${sum}`;
console.log(userMessage);

// visualizzazione messaggio su html 
document.getElementById('message').innerHTML =userMessage
