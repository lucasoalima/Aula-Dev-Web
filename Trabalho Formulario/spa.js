        window.onload = ()=> {

            function carregarHTML(url, elemento) {
                fetch(url).then((resposta) => {
                    return resposta.text();
                }).then((html) => {
                    elemento.innerHTML = html;
                });
            }

            function getMain(){
                return document.getElementsByTagName('main')[0];     
            }                               
            carregarHTML('index.html', getMain());

            var btnHome = document.getElementById('btnHome');
            btnHome.onclick = () =>{
                carregarHTML('index.html', getMain());                    
            };

            var btnPagina1 = document.getElementById('btnPagina1');
            btnPagina1.onclick = () =>{
                carregarHTML('playstation.html',  getMain());                    
            };

            var btnPagina2 = document.getElementById('btnPagina2');
            btnPagina2.onclick = () =>{
                carregarHTML('nintendo.html',  getMain());                    
            };

            var btnPagina3 = document.getElementById('btnPagina3');
            btnPagina3.onclick = () =>{
                carregarHTML('form.html',  getMain());                    
            };
        }