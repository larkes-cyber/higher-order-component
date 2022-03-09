import {useState, useReducer} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

function reducer(state, types){
    switch (types.type) {
        case "toggle":
            return {autoplay:"auto"}
        case "fast":
            return {autoplay:"300"}
        case "slow":
            return {autoplay:"800"}
        default:
             throw new Error()
    }
}

const Slider = () => {
    const [slide, setSlide] = useState(0);
    // const [autoplay, setAutoplay] = useState(false);

    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    const [state, dispatch] = useReducer(reducer, {autoplay:false})

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br/> {state.autoplay} </div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type:"toggle"})}>toggle autoplay</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type:"fast"})}>toggle autoplay</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type:"slow"})}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}

function App() {
    return (
        <Slider/>
    );
}

export default App;
