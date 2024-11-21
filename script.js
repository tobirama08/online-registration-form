$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        // Optional: Add custom client-side validation here if needed.
        const name = $('#name').val();
        const email = $('#email').val();

        if (!name || !email) {
            alert('Please fill all required fields.');
            e.preventDefault();
        }
    });
});
