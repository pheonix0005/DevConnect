//for testing puposes
// localStorage.removeItem('isLoggedIn');


function checkAuthentication() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    return isLoggedIn;
}
function navigate(route) {
    const isLoggedIn = checkAuthentication();

    switch (route) {
        case 'Home':
            window.location.href = isLoggedIn ? 'Gagan/explorer.html' : 'Raj/form.html';
            break;
        case 'Developers':
            window.location.href = isLoggedIn ? 'Riya/dashboard.html' : 'Raj/form.html';
            break;
        case 'Podcasts':
            window.location.href = 'podcasts.html';
            break;
        case 'Contact':
            window.location.href = 'Siri/contactus.html';
            break;
        
        case 'About':
            window.location.href = 'Siri/aboutus.html';
            break;

        case 'LoginSignup':
            if (isLoggedIn) {
                alert('Logged in as Username');
            } else {
                window.location.href = 'Raj/form.html';
            }
            break;
        default:
            console.error('Invalid route');
    }

    //changing the signup button innerhtml is the user is signed up
    if(isLoggedIn){
        document.getElementsByClassName('register')[0].innerHTML=`Hello , ${localStorage.getItem('username')}`
    }
}