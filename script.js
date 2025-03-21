document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-button');
    const personImage = document.getElementById('person-image');
    const personName = document.getElementById('person-name');
    const personEmail = document.getElementById('person-email');
    const personLocation = document.getElementById('person-location');
    //const countrySelect = document.getElementById('country-select');

    generateButton.addEventListener('click', generateRandomPerson);

    function generateRandomPerson() {
        //const selectedCountry = countrySelect.value;
        fetch(`https://randomuser.me/api/`)
            .then(response => response.json())
            .then(data => {
                const person = data.results[0];
                personImage.src = person.picture.large;
                personName.textContent = `${person.name.first} ${person.name.last}`;
                personEmail.textContent = person.email;
                personLocation.textContent = `${person.location.city}, ${person.location.country}`;
            })
            .catch(error => console.error('Error fetching random user:', error));
    }

    // Generate a person on page load
    generateRandomPerson();
});

