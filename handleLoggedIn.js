function loggedIn() {
    if ($('.HLWelcome .imgButton').length) {
        $('body').addClass('logged-in');
    }
}