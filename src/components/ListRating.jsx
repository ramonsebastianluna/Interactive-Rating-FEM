import { useEffect, useState } from "react";
import InputRating from "./InputRating";

const ListRating = ({getSelected}) => {
    const [isChecked, setIsChecked] = useState(0)

    useEffect(()=>{
        getSelected(isChecked)
    }, [isChecked])

    const handleIdParent = (idChildren) => {
        setIsChecked(idChildren)
    }
    
    return (
        <div className="container-inputs">  
            <InputRating numberOption={1} idOption={1} handleIdParent={handleIdParent}/>
            <InputRating numberOption={2} idOption={2} handleIdParent={handleIdParent}/>
            <InputRating numberOption={3} idOption={3} handleIdParent={handleIdParent}/>
            <InputRating numberOption={4} idOption={4} handleIdParent={handleIdParent}/>
            <InputRating numberOption={5} idOption={5} handleIdParent={handleIdParent}/>
        </div>
    )
}

export default ListRating