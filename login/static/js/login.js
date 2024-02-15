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
            if (Object.keys(data).length === 0) {
                alert("일치하는 사용자가 없습니다.")
            } else {
            alert(data.id + "님 환영합니다.")        
        }       
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error!');
    });

});