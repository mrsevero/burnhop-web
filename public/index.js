function userLogin(){


    let login = document.getElementById('login').value
    let senha = document.getElementById('password').value

    let http = new XMLHttpRequest()
    let url = 'https://burnhop-backend.herokuapp.com/users/login'
    http.open('POST', url, true)
    http.setRequestHeader('Access-Control-Allow-Origin', '*')
    http.setRequestHeader('email', login)
    http.setRequestHeader('password',senha)
    http.onload = function(){
      //console.log(http.responseText)
      //console.log(http.readyState)
      //console.log(http.status)
      Cookies.set('login', login,{ path: '', domain: 'localhost' });
      //Cookies.set('login', login,{ path: '', domain: 'burnhop.herokuapp.com' });
      Cookies.set()
      console.log(Cookies.get('login'))

      if(http.readyState == 4 && http.status == 200) {
        window.location = "/static/feed/feed.html";
      }
      else{
        alert("Usuário ou senha incorreto!")
      }
    }
    console.log(login,senha)
    http.send();

}




