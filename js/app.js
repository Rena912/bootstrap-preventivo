console.log()
// recuperare i dati del form
const selectLavoro = document.getElementById('Lavoro')
const inputNome = document.getElementById('Nome')
const inputCognome = document.getElementById('Cognome')
const inputEmail = document.getElementById('Email')
const inputPromo = document.getElementById('Promo')
const inputText = document.getElementById('Note')
const formpreventivo = document.getElementById('formPreventivo')

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


let prezzoLavoro = 0

if (Lavoro === 'backend') {
   prezzoLavoro = 20.50
   console.log(prezzoLavoro)
} else if (Lavoro === 'frontend') {
   prezzoLavoro = 15.30
   console.log(prezzoLavoro)
} else  {
   prezzoLavoro = 33.60
   console.log(prezzoLavoro)
}


const prezzoBase = prezzoLavoro * 10 
console.log(prezzoBase)

const prezzoScontato = (prezzoBase * 25) / 100

const index = codicePromo.indexOf(Promo)

if (index === -1) {
   console.log('Codice non è Valido')

} else {
   console.log(prezzoScontato)
   console.log('Codice valido')
}



})

