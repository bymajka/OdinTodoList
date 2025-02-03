export const validateForm = (title, desc, date, compleated) => {
    if(!title.input.value || !desc.input.value || !date.input.value || !compleated.input.value){
        alert('Please fill in all input fields.')
        return false;
    }
    return true;
}