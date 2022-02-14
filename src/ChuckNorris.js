import { Component } from "react"

class ChuckNorris extends Component {
    constructor() {
        super()
        this.state= {
            joke: ''
        }
    }
    componentDidMount() {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(resp => resp.json())
        .then(json => this.setState({ joke: json.value}))
    }
    render() {
        return(
            <p>{this.state.joke}</p>
        )
    }
}

export default ChuckNorris;