//for testing puposes
// localStorage.removeItem('isLoggedIn');


function checkAuthentication() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    return isLoggedIn;
}


const isLoggedIn = checkAuthentication();
function navigate(route) {

    switch (route) {
        case 'Home':
            window.location.href = isLoggedIn ? 'Gagan/explorer.html' : 'Raj/form.html';
            break;
        case 'Developers':
            window.location.href = isLoggedIn ? 'Riya/dashboard.html' : 'Raj/form.html';
            break;
        case 'Podcasts':
            window.location.href = 'Raj/podcastPage/Spotify/spotify.html';
            break;
        case 'Contact':
            window.location.href = 'Siri/contactus.html';
            break;
        
        case 'About':
            window.location.href = 'Siri/aboutus.html';
            break;

        case 'Signup':
            if (isLoggedIn) {
                alert(`Logged in as ${localStorage.getItem('username')}`);
            } else {
                window.location.href = 'Shreya/form.html';
            }
            break;
        default:
            console.error('Invalid route');
    }
}

//changing the signup button innerhtml is the user is signed up
if(isLoggedIn){
    document.getElementsByClassName('register')[0].innerHTML=`Hello , ${localStorage.getItem('username')}`
}