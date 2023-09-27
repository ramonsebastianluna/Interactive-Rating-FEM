import { useEffect, useState } from "react";
import InputRating from "./InputRating";

const ListRating = ({getSelected}) => {
    const [isChecked, setIsChecked] = useState(0)
    const [inputOneIsActive, setInputOneIsActive] = useState(false)
    const [inputTwoIsActive, setInputTwoIsActive] = useState(false)
    const [inputThreeIsActive, setInputThreeIsActive] = useState(false)
    const [inputFourIsActive, setInputFourIsActive] = useState(false)
    const [inputFiveIsActive, setInputFiveIsActive] = useState(false)

    useEffect(()=>{
        getSelected(isChecked)
    }, [isChecked])

    const handleIdParent = (idChildren) => {
        setIsChecked(idChildren)
    }

    const setStateActive = (inputActive) => {
        if (inputActive === 1) {
            setInputOneIsActive(true);
            setInputTwoIsActive(false);
            setInputThreeIsActive(false);
            setInputFourIsActive(false);
            setInputFiveIsActive(false);
        } else if (inputActive === 2) { 
            setInputOneIsActive(false);
            setInputTwoIsActive(true);
            setInputThreeIsActive(false);
            setInputFourIsActive(false);
            setInputFiveIsActive(false);
        } else if (inputActive === 3) {
            setInputOneIsActive(false);
            setInputTwoIsActive(false);
            setInputThreeIsActive(true);
            setInputFourIsActive(false);
            setInputFiveIsActive(false);
        } else if (inputActive === 4) {
            setInputOneIsActive(false);
            setInputTwoIsActive(false);
            setInputThreeIsActive(false);
            setInputFourIsActive(true);
            setInputFiveIsActive(false);
        } else if (inputActive === 5) {
            setInputOneIsActive(false);
            setInputTwoIsActive(false);
            setInputThreeIsActive(false);
            setInputFourIsActive(false);
            setInputFiveIsActive(true);
        }
    }
    
    return (
        <div className="container-inputs">  
            <InputRating numberOption={1} idOption={1} handleIdParent={handleIdParent} onClick={setStateActive}/>
            <InputRating numberOption={2} idOption={2} handleIdParent={handleIdParent} onClick={setStateActive}/>
            <InputRating numberOption={3} idOption={3} handleIdParent={handleIdParent} onClick={setStateActive}/>
            <InputRating numberOption={4} idOption={4} handleIdParent={handleIdParent} onClick={setStateActive}/>
            <InputRating numberOption={5} idOption={5} handleIdParent={handleIdParent} onClick={setStateActive}/>
        </div>
    )
}

export default ListRating