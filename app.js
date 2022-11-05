// sign-up page code

// alert('verd')1
function foo1() {

    var a = document.getElementById('fname').value;
    var b = document.getElementById('lname').value;
    var getptag1 = document.getElementById('ptag1');
    var getptag2 = document.getElementById('ptag2');
    // var getptag3 = document.getElementById('ptag3');
    var getptag4 = document.getElementById('ptag4');
    var getptag5 = document.getElementById('ptag5');
    var c = document.getElementById('email1').value;
    var d = document.getElementById('pass1').value;
    var e = document.getElementById('pass2').value;

    if(a.length < 5 && b.length < 4 && d.length < 8){
        getptag1.innerHTML = '*Your First Name is too short must be atleast 5 chracters';
        getptag2.innerHTML = '*Your Last Name is too short must be atleast 4 chracters';
        getptag4.innerHTML = '*Your Password is too short must be atleast 8 chracters';
        getptag5.innerHTML = '*Your Password and Confirm Password is not match';
        return false;
    }

    if (a.length < 5) {
        getptag1.innerHTML = '*Your First Name is too short must be atleast 5 chracters';
        return false;
    }
    else {
        getptag1.innerHTML = '';
    }

    if (b.length < 4) {
        getptag2.innerHTML = '*Your Last Name is too short must be atleast 4 chracters';
        return false;
    }

    else {
        getptag2.innerHTML = '';
    }


    if (d.length < 8) {
        getptag4.innerHTML = '*Your Password is too short must be atleast 8 chracters';
        return false;
    }

    else {
        getptag4.innerHTML = '';
    }

    if (d != e) {
        getptag5.innerHTML = '*Your Password and Confirm Password is not match';
        return false;
    }

    else {
        getptag5.innerHTML = '';
    }

    alert('You sign-up your data click ok to go to sign-in page');

    localStorage.setItem('First Name', a);
    localStorage.setItem('Last Name', b);
    localStorage.setItem('Email', c);
    localStorage.setItem('Password', d);
    // localStorage.clear();

    return true;
}

