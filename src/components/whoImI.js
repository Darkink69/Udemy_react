import { Component } from 'react'
import styled from 'styled-components';

const EmpItem = styled.div`
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0,0,0, .2);
    a {
        display: block;
        margin: 10px;
        color: ${props => props.active ? 'orange' : 'black'};
    }
`;


const Header = styled.h2`
    font-size: 22px;
`;

export const Button = styled.button`
    display: block;
    padding: 5px 20px;
    background-color: brown;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0, .15); 
    box-shadow: 15px 15px 30px rgba(0,0,0, .15);
    color: #fff;
`;

const BigButtom = styled(Button)`
    margin: 0 auto;
    width: 300px
`;

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
            <EmpItem active>
                <Button onClick={this.nextYear}>{this.state.years}</Button>
                <Header>My name is {name}, surname - {surname}, 
                    age - {years}, 
                    position - {position}</Header>
                <a href={link}>Link</a>
                <form>
                    <span>Ввведите должность</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
                </form>
                <BigButtom>Биг Кнопка</BigButtom>

            </EmpItem>
        )
    }
}

export default WhoAmI;