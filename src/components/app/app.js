import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form'
import Test from '../test/test';
// import WhoAmI from '../whoImI';
// import styled from 'styled-components'
import BootstrapTest from '../test/bootstrap-Components';

import './app.css';



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'Вова А.', salary: 150000, increase: false, like: true, id: 1},
                {name: 'Эля Ч.', salary: 80000, increase: true, like: false, id: 2},
                {name: 'Петя П.', salary: 50000, increase: false, like: false, id: 3},
                {name: 'Вася В.', salary: 15000, increase: false, like: false, id: 4}
                
            ],
            term: '',
            filter: 'all'
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
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleIncrease = (id) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);

        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

        //     return {
        //         data: newArr
        //     }
        // })
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, like: !item.like}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.increase);
            case 'like':
                return items.filter(item => item.like);    
            case 'more50' :
                return items.filter(item => item.salary > 50000);
            default:
                return items
        }
        
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    static Log = () => {
        console.log('Wow!')
    }

    static logged = 'on'


    render() {
        const {data, term, filter} = this.state;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        // const Wrapper = styled.div`
        //     width: 600px;
        //     margin: 80px auto 0 auto
        // `;

        return (
            <div className="app">
                {/* <Wrapper>
                    <WhoAmI name='Vasia' surname ='Ivanov' link = 'site.com' />
                    <WhoAmI name='Petia' surname ='Petrov' link = 'site.com' />
                </Wrapper> */}
                    
                <AppInfo data={this.state.data} increased={increased}/>
                
    
                <div className='search-panel'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmployersList 
                data={visibleData} 
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise}/>

                <EmployersAddForm
                data={this.state.data} 
                onAdd={this.addItem}/>

                <Test data={this.state.data}/>
                <BootstrapTest data={visibleData}/>
            </div>
            
        )
    }
    
   
}

App.Log()
console.log(App.logged)

export default App;