import { useState } from "react"

const InputRating = ({numberOption, initialState, idOption}) => {
    const [isChecked, setIsChecked] = useState(initialState)

    const handleInputChage = (event) => {
        setIsChecked(event.target.checked)
    }

    return (
        <>
            <label htmlFor={idOption}>{numberOption}</label>
            <input 
                onChange={handleInputChage} 
                type="checkbox" 
                checked={isChecked} 
                id={idOption}
            />
            <div>{`${isChecked}`}</div>
        </>
    )
}

export default InputRating;