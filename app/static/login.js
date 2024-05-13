function handleInput(input) {
    const placeholderText = input.id === 'phone' ? 'Телефон' : 'Пароль';
    const inputValue = input.value.trim();

    // Если введен хотя бы один символ, заменяем текст
    if (inputValue.length > 0) {
        input.placeholder = '';
    } else {
        input.placeholder = placeholderText;
    }
}