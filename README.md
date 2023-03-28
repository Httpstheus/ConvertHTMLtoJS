# Conversor de HTML para JPG

> Neste projeto, a ideia foi conseguir trabalhar com Download de arquivos após mudanças.

### :hammer: Biblioteca Utilizada

```
html2canvas.min.js
```


### :books: Aprimoramento de Skills:
<ul>
<li> DOM </li>
<li> Eventos </li>
<li> Switch Case </li>
</ul>

> Observação: O trecho abaixo não é alterável, pois permanece a componentes da biblioteca usada; <br>
> Apenas a varíavel "dl-png" é alterável, pois você está chamando ela em seu HTML pelo id dela.
```
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
```
