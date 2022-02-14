import react, { Component } from "react";
import CatPicture from './CatPicture';
import ChuckNorris from './ChuckNorris';
import 'tachyons';

class App extends Component {
    render() {
        return(
            <div className='tc'>
                <h1>I am very random</h1>
                <CatPicture />
                <ChuckNorris />
            </div>
        )
    }
}

export default App;