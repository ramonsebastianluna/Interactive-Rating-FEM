import thankYou from '../assets/images/illustration-thank-you.svg';

const RatingSelected = ({selectedOption}) => {
    return (
        <>
            <img src={thankYou} alt="thank you" />
            <p className='number-selected'>You selected {selectedOption} out of 5</p>
            <h2>Thank you!</h2>
            <p>We appreciate you taking the time to give a rating. <br/> If you ever need more support,
               don't hesitate to <br/> get in touch!
            </p>
        </>
    )
}

export default RatingSelected;