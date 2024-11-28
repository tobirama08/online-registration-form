document.getElementById('submitBtn').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Validate that all fields are filled
    if (!name || !email || !phone || !address) {
        alert("Please fill out all fields.");
        return;
    }

    // Validate Gmail email address
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(email)) {
        alert("Please enter a valid Gmail address (e.g., example@gmail.com).");
        return;
    }

    // Validate mobile number (10 digits only)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    // Redirect to results.html with form data as URL parameters
    const params = new URLSearchParams({
        name: name,
        email: email,
        phone: phone,
        address: address
    }).toString();

    window.location.href = `results.html?${params}`;
});
