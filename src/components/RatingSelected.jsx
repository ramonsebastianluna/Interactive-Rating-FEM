import thankYou from '../assets/images/illustration-thank-you.svg';

const RatingSelected = ({selectedOption}) => {
    return (
        <div>
            <img src={thankYou} alt="thank you" />
            <p>You selected {selectedOption} out of 5</p>
            <h2>Thank you!</h2>
            <p>We appreciated you taking the time to give a rating. If you ever need more support,
               don´t hesitate to get in touch!
            </p>
        </div>
    )
}

export default RatingSelected;