// HTTP: https://sujeitoprogramador.com/nutriapp/wp-content/uploads/2017/12/Screenshot_3-2.jpg

let listElement = document.querySelector("#app");

let posts = [];

function nutriApp() {
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
        .then((r) => r.json())
        .then((json) => {
            posts = json;

            posts.map((item) => {
                let liElement = document.createElement("li");
                let tituloElement = document.createElement("strong");
                let imgElement = document.createElement("img");
                let descricaoElement = document.createElement("a");

                let tituloText = document.createTextNode(item.titulo);
                tituloElement.appendChild(tituloText);
                liElement.appendChild(tituloElement);

                imgElement.src = item.capa;
                liElement.appendChild(imgElement);

                let descricaoText = document.createTextNode(item.subtitulo);
                descricaoElement.appendChild(descricaoText);
                liElement.appendChild(descricaoElement);

                listElement.appendChild(liElement);
            })
        })
        .catch(() => {
            console.log("Deu algum erro!")
        })
}

nutriApp();