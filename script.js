function checkPalindrome(){
    const textInput = document.getElementById('text-input').value;

    if(textInput === ""){
        alert("Please input a text");
        return;
    }

    const cleanedString = textInput.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const isPalindrome = cleanedString === cleanedString.split('').reverse().join('');
    const result = document.getElementById('result');

    if (isPalindrome){
        result.textContent = `Yes, "${textInput}" is  a PALINDROME!`;
        result.style.color = '#90ee90';
    } else{
        result.textContent = `No, "${textInput}" is NOT a palindrome!`;
        result.style.color = 'red';
    }
}