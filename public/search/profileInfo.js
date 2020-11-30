var login = localStorage.getItem('emailProfile');

function exibirNome(userName){
  const htmlNome = `${userName}`
  nome.innerHTML = htmlNome
};

function exibirEmail(userEmail){
  const htmlEmail = `${userEmail}`
  email.innerHTML = htmlEmail
};

function exibirData(userData){
  const htmlData = `${userData}`
  dataNasc.innerHTML = htmlData
};


$.get(`https://burnhop-backend.herokuapp.com/users/email/${login}`,function(data){
  exibirNome(data.name);
  exibirEmail(data.login.email);
  exibirData(data.dataNasc);
  localStorage.setItem('idProfileView', data.id);
  console.log(data.login.email);
  console.log(data.name);
  console.log(data.dataNasc);
},'json');

setTimeout(function(){
    console.log("Ready")
}, 1000);

/*Logout*/
function logout(){
    setTimeout(1000)
    window.location = "/"
}


$.get(`https://burnhop-backend.herokuapp.com/users/email/${login}`,function(data){
    Cookies.set('image', data.imagePath,{ path: '', domain: 'localhost' });

},'json');



var img = document.createElement("img");
img.src = Cookies.get('image');
img.className = "rounded-circle foto"
const fotoElement = document.getElementById('foto')

const exibirFoto = (foto)=>{

  //console.log(foto)
  const htmlFoto = `<img href= ${foto}>`
  fotoElement.appendChild(img)
};

exibirFoto(foto);
