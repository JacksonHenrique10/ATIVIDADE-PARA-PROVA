// é o que vai permitir o carregamento das paginas dentro da main 

function carregarPagina(pagina) {
    const conteudoPrincipal = document.getElementById("conteudoPrincipal");
  
    const url = `${pagina}.html`;
    const script = `${pagina}.js`;
  
    fetch(url)
      .then((response) => {
        return response.text();
      })
      .then((html) => {
        conteudoPrincipal.innerHTML = html;
        const scriptNovo = document.createElement("script");
        scriptNovo.src = `../javaScript/${script}`;
        document.body.appendChild(scriptNovo);
      });
  }
  // console.log(response);

localStorage.setItem("ipApi","http://10.0.3.148:3000/");