import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form'
// import WhoAmI from '../whoImI';

import './app.css';



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'Вова А.', salary: 150000, increase: false, id: 1},
                {name: 'Эля Ч.', salary: 80000, increase: true, id: 2},
                {name: 'Петя П.', salary: 50000, increase: false, id: 3},
                {name: 'Вася В.', salary: 15000, increase: false, id: 4}
                
            ]
        }
        this.maxId = 5;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        console.log('Add!', name, salary)
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }


    render() {
        return (
            <div className="app">
                {/* <WhoAmI name='Vasia' surname ='Ivanov' link = 'site.com' />
                <WhoAmI name='Petia' surname ='Petrov' link = 'site.com' /> */}
    
    
                <AppInfo data={this.state.data}/>
                
    
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployersList 
                data={this.state.data} 
                onDelete={this.deleteItem}/>

                <EmployersAddForm
                data={this.state.data} 
                onAdd={this.addItem}/>
            </div>
            
        )
    }
    
   
}


export default App;