import { Component } from "react";

class CatPicture extends Component {
    constructor() {
        super()
        this.state= {
            catURL: ''
        }
    }
    componentDidMount() {
        fetch('https://cataas.com/cat?json=true')
            .then(resp => resp.json())
            .then(json => {
                this.setState({catURL: `https://cataas.com${json.url}`});
            })
    }
    render(){
        return(
            <div>
                <img src={this.state.catURL} className='br4 ba bw2 shadow-2'></img>
            </div>
        )
    }
}

export default CatPicture;