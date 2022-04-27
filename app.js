let places = [
    'Aruba',
    'Greece',
    'Paris',
    'Italy',
    'Key West',
    'New York',
    'California',
    'Bahamas',
    'Maldives',
    'Iceland'
]

function getPlace(){
    let randomNumber = Math.floor(Math.random()* places.length)
    document.getElementById('newPlaceSection').innerHTML = places[randomNumber]
}