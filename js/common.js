function getInputFieldValueById (inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value ;
    const inputValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputValue;
    }
    
    function getTextElementValueById (textElementId){
    const textElement = document.getElementById(textElementId);
    const textElementString = textElement.innerText;
    const textElementValue = parseFloat(textElementString);
    return textElementValue;
    }
    
    function setTextElementValueById(textElementId, newValue){
    const textElement = document.getElementById(textElementId);
    textElement.innerText = newValue;
    }