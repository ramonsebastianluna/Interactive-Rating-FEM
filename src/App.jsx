import { useState } from "react";
import ListRating from "./components/ListRating";
import RatingSelected from "./components/RatingSelected";
import star from "./assets/images/icon-star.svg";
import './sass/main.scss';

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

    const myClass = `warning ${message ? 'show' : 'hidden'}`
    const stylesForm = `form ${showForm ? 'show' : 'hidden'}`
    const showRatingSelected = `rating-selected ${!showForm ? 'show' : 'hidden'}`

    return (
        <div className="mi-app">
            <form className={stylesForm} onSubmit={handleForm} >
                <div className="star-container">
                    <img src={star} alt="Star icon" />
                </div>
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All
                   feedback is appreciated to help us improve our offering!
                </p>
                <ListRating getSelected={getSelected}/>
                <button type="submit">Submit</button>
            </form>
            
            <div className={showRatingSelected}>
                <RatingSelected selectedOption={ratingSelected}/>
            </div>

            <p className={myClass}>please, choose a rating point</p>
        </div>
    )
}

export default App
