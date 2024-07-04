/* Новые элементы должны добавляться в список по нажатию на Enter */
const sendInput = document.querySelector('#input');
const messagesContainer = document.querySelector('.input-wrapper');
const itemsContainer = document.querySelector('#items');

sendInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        console.log('Сообщение отправлено');

        const messageText = sendInput.value;

        const newMessage = document.createElement('div');
        newMessage.textContent = messageText;

        if (messageText != '') {
            itemsContainer.append(newMessage);
        }

        sendInput.value = '';

        newMessage.addEventListener('click', function() {
            newMessage.classList.toggle('done');
        })

    }
})


/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */