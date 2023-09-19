import { useState } from "react";
import ListRating from "./components/ListRating";
import RatingSelected from "./components/RatingSelected";
import './styles.css';

function App() {
    const [showForm, setShowForm] = useState(true)
    const [message, setMessage] = useState(false)
    const [ratingSelected, setRatingSelected] = useState(0)

    const getSelected = (numberSelected) => {
        setRatingSelected(numberSelected)
    }
    
    const handleForm = (event) => {
        event.preventDefault()
        ratingSelected == 0 ? setMessage(true) : setMessage(false)
        ratingSelected == 0 ? setShowForm(true) : setShowForm(false)
    }

    return (
        <>
            <form className={showForm ? 'show' : 'hidden'} onSubmit={handleForm} >
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All
                   feedback is appreciated to help us improve our offering!
                </p>
                <ListRating getSelected={getSelected}/>
                <button type="submit">Submit</button>
            </form>
            
            <div className={!showForm ? 'show' : 'hidden'}>
                <RatingSelected selectedOption={ratingSelected}/>
            </div>

            <p className={message ? 'show' : 'hidden'}>please, choose a rating point</p>
        </>
    )
}

export default App
