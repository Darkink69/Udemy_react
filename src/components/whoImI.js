import { Component } from 'react'

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 24,
            position: ''
        }
        // this.nextYear = this.nextYear.bind(this); // bind - привязать свойство к конкретному экземпляру класса
    }

    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1
        }))
    }

    commitInputChanges = (e, color) => {
        console.log(color)
        this.setState({
            position: e.target.value
        })
    }

    render() {
        const {name, surname, link} = this.props;
        const {position, years} = this.state;

        return (
            <div>
                <button onClick={this.nextYear}>{this.state.years}</button>
                <h1>My name is {name}, surname - {surname}, 
                    age - {years}, 
                    position - {position}</h1>
                <a href={link}>Link</a>
                <form>
                    <span>Ввведите должность</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
                </form>

            </div>
        )
    }
}

export default WhoAmI;