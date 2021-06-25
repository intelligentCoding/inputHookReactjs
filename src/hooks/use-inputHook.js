import { useState } from 'react'

const useInputHook = (inputValidation) => {
    //this would be the value entered in input
    const [value, setValue] = useState('');

    //this state helps our programe to know whether user's curser is in the input.
    const [hasFocused, setHasFocused] = useState(false);
    
    const isValueValid = inputValidation(value)
    //We only want to give error when value is invalid and user has focused on the input.
    const hasError = !isValueValid && hasFocused;

    //if input is focused (blur) we run this function
    const inputFocused = event => {
        setHasFocused(true)
    }

    //if input value is changed we call this function
    const inputValueChanged = event => {
        setValue(event.target.value)
    }

    //Once user submits we need to remove values from the input, we use this function
    const resetField = () => {
        setValue('');
        setHasFocused(false);
    }

    return {
        value,
        isValueValid,
        hasError,
        inputValueChanged,
        inputFocused,
        resetField
    }


}

export default useInputHook;