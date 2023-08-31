function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light');
   
}

    document.addEventListener("DOMContentLoaded", function() {
        let copyButton = document.getElementById("copy-btn");
        let textToCopy = document.getElementById("textToCopy");
        let copyInforme = document.getElementById("copy-informe");

        copyButton.addEventListener("click", function(){
            let text = textToCopy.innerText;
            let tempTextArea = document.createElement("textarea");
            let res =  document.createElement("res");
        
            tempTextArea.value = text;
            document.body.appendChild(tempTextArea);

            tempTextArea.select();
            document.execCommand("copy");

            document.body.removeChild(tempTextArea);

    

            if(textToCopy){
                copyInforme.innerText = ("Texto Copiado!")
            } 

            setTimeout(function(){
                copyInforme.innerText = ("")
                
            },1000) 
        
        });
    });



