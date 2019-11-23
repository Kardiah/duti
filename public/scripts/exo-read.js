document.getElementById('conf').addEventListener("click",function(){

    let pwdElt = document.getElementById("password")

    console.log(pwdElt.value)

    let newPwdElt = pwdElt.value.replace(/\s/g, "");

    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    if(strongRegex.test(newPwdElt))
    {
        console.log('ok' + newPwdElt)
        document.getElementById('correct').classList.add('flash')
        document.getElementById('correct').textContent = 'Nice you do it well !'
        document.getElementById('correct').classList.add('animated')
    }

    if(!strongRegex.test(newPwdElt))
    {
        console.log("pas ok"  + newPwdElt)
        document.getElementById('fail').classList.add('animated')
        document.getElementById('fail').textContent = 'Geez, you idiot !';
        document.getElementById('fail').classList.add('flash')
    }

})