
const InputRating = ({numberOption, idOption, handleIdParent, onClick, bgColor}) => {

    const handleId = () => {
        handleIdParent(idOption)
        onClick(idOption)
    }

    const myClass = `rating-number ${bgColor ? 'orange-color' : 'gray-color'}`;

    return (
        <>
            <label className={myClass} htmlFor={idOption}>{numberOption}</label>
            <input 
                className="rating-input" 
                type="radio" 
                id={idOption} 
                name="input" 
                onClick={handleId}
            />
        </>
    )
}

export default InputRating;