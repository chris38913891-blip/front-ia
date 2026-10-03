const InputText = document.getElementById('input-text');

const btnSend = document.getElementById('btn-send');





btnSend.addEventListener('click', () =>{
    const message = InputText.value;
    console.log(message)
    getChat(message);
    InputText.value = ""
})

function getChat(message){
    const chat=document.getElementById('content-chat');
    console.log(message)
    fetch('http://localhost:3000/api/v1/chat', {
        method: 'POST', 
        headers: {
            'Content-Type': 'Application/json',
        },
        body: JSON.stringify({
            message
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
    chat.innerHTML += "<p>"+data.message+"</p>";
    })
}