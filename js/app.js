console.log()
// recuperare i dati del form
const selectLavoro = document.getElementById('Lavoro')
const inputNome = document.getElementById('Nome')
const inputCognome = document.getElementById('Cognome')
const inputEmail = document.getElementById('Email')
const inputPromo = document.getElementById('Promo')
const inputText = document.getElementById('Note')
const formpreventivo = document.getElementById('formPreventivo')
const PrezzoFinale = document.getElementById('PrezzoFinale')

formpreventivo.addEventListener('submit', function(event) {
   event.preventDefault()
   console.log('event', event)


// recuperare i dati inseriti da form
const Nome = inputNome.value
const Cognome = inputCognome.value
const Lavoro = selectLavoro.value
const Note = inputText.value
const Email = inputEmail.value
const Promo = inputPromo.value

// array codici promo
const codicePromo = [
   'YHDNU32', 
   'JANJC63', 
   'PWKCN25', 
   'SJDPO96', 
   'POCIE24'
]

// calcolo prezzobase e prezzo scontato 

let prezzoLavoro = 0

if (Lavoro === 'backend') {
   prezzoLavoro = 20.50
   console.log('Prezzo ora Lavoro', prezzoLavoro)
} else if (Lavoro === 'frontend') {
   prezzoLavoro = 15.30
   console.log('Prezzo ora Lavoro',prezzoLavoro)
} else if (Lavoro === 'analisi') {
   prezzoLavoro = 33.60
   console.log('Prezzo ora Lavoro',prezzoLavoro)
}


const prezzoBase = prezzoLavoro * 10 
console.log('Prezzo Base', prezzoBase)
const sconto = (prezzoBase * 25) / 100
const prezzoScontato = prezzoBase - sconto
const index = codicePromo.indexOf(Promo)
const prezzoOutputElement = PrezzoFinale.querySelector('.Prezzo')

if (index === -1) {
   console.log('Codice non è Valido')
   prezzoOutputElement.innerHTML = prezzoBase.toFixed(2)
   alert(` 
   ATTENZIONE!!! 
   Codice Promo non valido
   `)
} else {
   console.log('Codice valido')
   console.log('Prezzo Scontato 25%', prezzoScontato)
   // alert('Codice Valido')
   prezzoOutputElement.innerHTML = prezzoScontato.toFixed(2)
}


})

