document.getElementById('login-form').addEventListener('submit', function (e) {
    
    e.preventDefault();

    var formData = {
        "id": document.getElementById("id").value,
        "password": document.getElementById("password").value
    };


    fetch('/login/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
        .then(data => {
        alert(data.id + "님 환영합니다.")
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error!');
    });

});