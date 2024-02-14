document.getElementById('login-form').addEventListener('submit', function (e) {

    // form 제출 방지
    e.preventDefault();

    /*
    FormData 객체를 사용하여 폼 데이터를 수집
    this는 현재 실행 중인 코드 컨텍스트 내의 객체를 참조(여기서는 이벤트리스너가 연결된 폼 요소를 가르키게 됨)
    */
    var formData = new FormData(this)
    
    /*
    forData 형식으로 서버에 도달하게 되며 백엔드에서는 해당 형식에 맞게 데이터를 처리해야 한다.
    */
    fetch('/login/post', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
            console.log('Success:', data);
    })
    .catch((error) => {
        console.log('Error:', error)
    })

})