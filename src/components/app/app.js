import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form'
// import WhoAmI from '../whoImI';

import './app.css';



function App() {

    const data = [
        {name: 'Вова А.', salary: 150000, increase: false, id: 1},
        {name: 'Эля Ч.', salary: 80000, increase: true, id: 2},
        {name: 'Петя П.', salary: 50000, increase: false, id: 3},
        {name: 'Вася В.', salary: 15000, increase: false, id: 4},
    ];

    return (
        <div className="app">
            {/* <WhoAmI name='Vasia' surname ='Ivanov' link = 'site.com' />
            <WhoAmI name='Petia' surname ='Petrov' link = 'site.com' /> */}


            <AppInfo data={data}/>
            

            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployersList data={data} />
            <EmployersAddForm/>
        </div>
    )
}

export default App;