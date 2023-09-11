import InputRating from './components/InputRating';

function App() {
    return (
        <>
            <InputRating numberOption={1} initialState={false} idOption="1"/>
            <InputRating numberOption={2} initialState={false} idOption="2"/>
            <InputRating numberOption={3} initialState={false} idOption="3"/>
            <InputRating numberOption={4} initialState={false} idOption="4"/>
            <InputRating numberOption={5} initialState={false} idOption="5"/>
        </>
    )
}

export default App
