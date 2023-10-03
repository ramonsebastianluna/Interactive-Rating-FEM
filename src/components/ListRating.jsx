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
            {[1, 2, 3, 4, 5].map((optionNumber) => (
                <InputRating
                    key={optionNumber}
                    numberOption={optionNumber}
                    idOption={optionNumber}
                    handleIdParent={handleIdParent}
                    bgColor={isChecked === optionNumber}
                />
            ))}
        </div>
    )
}

export default ListRating