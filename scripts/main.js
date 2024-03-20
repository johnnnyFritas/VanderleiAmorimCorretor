const formulario = document.querySelector("form");
const pegaButao = document.querySelector(".button-submit");

const chamaImagem =()=>{
    pegaButao.innerHTML = '<img src="../assets/Icons/icons8-loading-48.png" class=".button-submit > img">';
};

const removeImagem =()=> {
    alert('Mensagem enviada!');
    pegaButao.innerHTML = 'Enviar';
}

const handleSubmit = (event) =>{
    event.preventDefault();

    const name = document.querySelector('input[name=nome]').value;
    const email = document.querySelector('input[name=email]').value;
    const mensagem = document.querySelector('textarea[name=mensagem]').value;
    chamaImagem();

    fetch('https://api.sheetmonkey.io/form/gvHbSBQSB81Z7HBSNvZh6a', {

     method: 'post',
     headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
     },
     body: JSON.stringify({ name, email, mensagem }),
    }).then(()=> removeImagem());
};

formulario.addEventListener('submit', handleSubmit);