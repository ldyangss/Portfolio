document.addEventListener('DOMContentLoaded',function(){
    const helloText = document.querySelector(".text_container")

    const careers = ["Software Developer!","VR Documentary Filmmaker!"];

    let careerIndex = 0;
    let characterIndex = 0;
    updateText();

    function updateText(){
        
        characterIndex++
        helloText.innerHTML =`<h1>Hello! I am Danyang, a <br><br>${careers[careerIndex].slice(0,characterIndex)}</h1>`;

        if(characterIndex === careers[careerIndex].length){
            careerIndex++;
            characterIndex = 0;
            if(careerIndex === careers.length){
                careerIndex = 0;
            }
            setTimeout(updateText,1000);
        } else {
            setTimeout(updateText,150);
        }
            
  
    }



})



