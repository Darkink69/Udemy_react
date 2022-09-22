import '../app-info/app-info.css'

const Test = ({data}) => {
    // eslint-disable-next-line
    const bigSalary = data.map(elem => { 
        // console.log(typeof(elem.salary))
        if (elem.salary > 50000) {
            return elem.salary + ', '
        }
    })

    // eslint-disable-next-line
    const correctNames = data.map(elem => { 
        if (elem.name.includes('В')) {
            return elem.name + ', '
        }
    })

    // console.log(bigSalary)
    return (
        <div className="app-info">
            <h1>Имена на букву «В»: {correctNames}</h1>
            <h2>З/П больше полтинника: {bigSalary}</h2>
        </div>
    )
}

export default Test;