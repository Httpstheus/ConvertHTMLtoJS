        // We are using a lib/script (html2canvas.min.js)
        // Copyright (c) 2023 - Bookplay/Mundial Editora
        //Last commit 26/01/2023


        $(document).ready(function(){
            $('#Confirm').on('click', validarDados);
          
            function validarDados() {
              let tipo           = $('#tipo').val();
         switch(tipo) {
                // Message for Option == Mundial Editora
            case 'mundialEditora':
                    document.getElementById('img-header').innerHTML = "<img src=\"https://mund.digital/mkt/CartoesAniversario/Mundial_Anivers%c3%a1rio_Cima.png\" width=\"800px\">";
                    document.getElementById('btn').innerHTML = "<img src=\"https://mund.digital/mkt/CartoesAniversario/Mundial_Anivers%c3%a1rio_Baixo.png\" width=\"800px\">";
                
            break;
                // Message for Option == Bookplay
            case 'Bookplay':
                    document.getElementById('img-header').innerHTML = "<img src=\"https://mund.digital/mkt/CartoesAniversario/Bookplay_Anivers%c3%a1rio_Cima.png\" width=\"800px\">";
                    document.getElementById('btn').innerHTML = "<img src=\"https://mund.digital/mkt/CartoesAniversario/Bookplay_Anivers%c3%a1rio_Baixo.png\" width=\"800px\">";
            break;
            
                }
            }
        });

        //input for manipulate with DOM
                var nameClient = document.getElementById("nameColaborator");

                    function Validate(){
                        document.getElementById("innerName").innerHTML = nameClient.value; 
                        //document.getElementById("innerName").innerHTML = "testando"; 
                    }
                    
        // Download and Generate PNG archive            
                document.getElementById("dl-png").onclick = function(){
                    const screenshotTarget = document.getElementById("htmlContent");

                        html2canvas(screenshotTarget).then((canvas) => {
                            const base64image = canvas.toDataURL("image/png");
                            var anchor = document.createElement('a');
                            anchor.setAttribute("href", base64image);
                            anchor.setAttribute("download", "Cartão_Aniversário-"+nameClient.value+".png");
                            anchor.click();
                            anchor.remove();
                        });
                };
 
