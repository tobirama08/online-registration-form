document.getElementById('submitBtn').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    if (!name || !email || !phone || !address) {
        alert("Please fill out all fields.");
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
