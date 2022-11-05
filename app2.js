// sign-in page code

function foo2(){
    var a = document.getElementById('email2').value;
    var b = document.getElementById('pass3').value;
    var c = localStorage.getItem('Email');
    var d = localStorage.getItem('Password');

    if(a != c){
        document.getElementById('signinptag1').style.display = "inherit";
        return false;
    }

    else if(b != d){
        document.getElementById('signinptag1').style.display = "inherit";
        return false;
    }

    alert('Congratulations you are going to quiz application Thanks for login to that website');

    return true;

}
