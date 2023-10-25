document.addEventListener('DOMContentLoaded', function () {
    const helloText = document.querySelector(".text_container")
    const careers = ["Software Developer!", "VR Documentary Filmmaker!"];
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxTBMDolg32SoE5QpdrvgoNpWR0CCevQf9xhU5jBJLJ0ngmQ7amqX1ngIu9KvLPiDrv/exec'
    const form = document.querySelector('form');
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

    form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const formData = new FormData(form);
        fetch('https://script.google.com/macros/s/AKfycbxTBMDolg32SoE5QpdrvgoNpWR0CCevQf9xhU5jBJLJ0ngmQ7amqX1ngIu9KvLPiDrv/exec', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
      });
});
