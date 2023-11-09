document.addEventListener('DOMContentLoaded', function () {
    const helloText = document.querySelector(".text_container")
    const careers = ["Software Developer!", "VR Documentary Filmmaker!"];
    const scriptURL = 'https://script.google.com/macros/s/AKfycbysdslR5lI7DjeRsOs4xD7PrArWk6JtbY8gXHij-MBKr6cImPAErzMx1HGIMurmF8Ko/exec'
    const form = document.forms['contact-form']
    const msgSpan = document.querySelector('.msg');

    let careerIndex = 0;
    let characterIndex = 0;
    updateText();

    function updateText() {
        characterIndex++
        helloText.innerHTML = `<h1>Hello! I am Danyang, a <br><br>${careers[careerIndex].slice(0, characterIndex)}</h1>`;

        if (characterIndex === careers[careerIndex].length) {
            careerIndex++;
            characterIndex = 0;
            if (careerIndex === careers.length) {
                careerIndex = 0;
            }
            setTimeout(updateText, 1000);
        } else {
            setTimeout(updateText, 150);
        }
    }

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                console.log('Success!', response)
                msgSpan.style.display = 'inline';
                form.reset();
            })
            .catch(error => console.error('Error!', error.message))
    })
})