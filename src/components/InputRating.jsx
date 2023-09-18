
const InputRating = ({numberOption, idOption, handleIdParent}) => {

    const handleId = () => {
        handleIdParent(idOption)
    }

    return (
        <>
            <label htmlFor={idOption}>{numberOption}</label>
            <input type="radio" id={idOption} name="input" onClick={handleId}/>
        </>
    )
}

export default InputRating;