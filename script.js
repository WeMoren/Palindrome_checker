function checkPalindrome(){
    const textInput = document.getElementById('text-input').value;
    const cleanedString = textInput.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const isPalindrome = cleanedString === cleanedString.split('').reverse().join('');
    const result = document.getElementById('result');

    if (isPalindrome){
        result.textContent = `"${textInput}" is  a PALINDROME`;
        result.style.color = '#90ee90';
    } else{
        result.textContent = `"${textInput}" is NOT a palindrome`;
        result.style.color = 'red';
    }
}