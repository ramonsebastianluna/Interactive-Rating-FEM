
const InputRating = ({numberOption, idOption, handleIdParent}) => {

    const handleId = () => {
        handleIdParent(idOption)
    }

    return (
        <>
            <label className="rating-number" htmlFor={idOption}>{numberOption}</label>
            <input className="rating-input" type="radio" id={idOption} name="input" onClick={handleId}/>
        </>
    )
}

export default InputRating;