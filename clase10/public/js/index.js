// Inicializa la conexión con el servidor usando Socket.io
const socket = io(); 

// Variable para almacenar el nombre del usuario que se ingresará más adelante
let usuario; 

// Obtiene el elemento HTML que corresponde al cuadro de texto donde el usuario escribe sus mensajes
const chatBox = document.getElementById('chatBox');

// Muestra una alerta de bienvenida utilizando SweetAlert2, solicitando al usuario que ingrese su nombre
Swal.fire({
    title: "Bienvenido al chat!! :D", // Título de la alerta
    text: 'Ingresa tu nombre', // Texto que acompaña al cuadro de entrada de texto
    input: 'text', // Tipo de entrada que será un cuadro de texto
    inputValidator: (value) => {
        // Valida que el usuario no deje el campo vacío
        return !value && 'Ingresa tu nombre o te matamos!!'; 
    },
    allowOutsideClick: false, // Evita que se pueda cerrar la alerta al hacer clic fuera de ella
}).then((result) => {
    // Una vez que el usuario ingresa su nombre, se guarda en la variable 'usuario'
    usuario = result.value;
}).catch((err) => {
    // En caso de que ocurra un error, se muestra un mensaje en la consola
    console.log('Che...! fijate que algo salió mal y el usuario no se guardó!');
});

// Escucha el evento 'keyup' en el chatBox para detectar cuando el usuario presiona la tecla 'Enter'
chatBox.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        // Verifica que el campo de texto no esté vacío antes de enviar el mensaje
        if (chatBox.value.trim().length > 0) { 
            // Emite un evento 'message' al servidor, enviando el nombre del usuario y el mensaje
            socket.emit('message', {
                usuario: usuario, // Nombre del usuario
                message: chatBox.value // Mensaje escrito por el usuario
            });
            chatBox.value = ''; // Limpia el campo de entrada después de enviar el mensaje
        }
    }
});

// Escucha el evento 'messagesLogs' que envía el servidor para actualizar los mensajes en el chat
socket.on('messagesLogs', data => {
    // Obtiene el elemento HTML donde se mostrarán los mensajes
    const messagesLogs = document.getElementById('messagesLogs');
    let message = ''; // Variable para acumular los mensajes recibidos

    // Itera sobre cada mensaje recibido y los agrega a la variable 'message'
    data.forEach(messageData => {
        message += `${messageData.usuario} dice: ${messageData.message} <br>`;
    });

    // Actualiza el contenido del elemento HTML con los mensajes acumulados
    messagesLogs.innerHTML = message;
});