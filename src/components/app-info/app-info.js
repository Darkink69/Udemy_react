import './app-info.scss'

const AppInfo = ({data, increased}) => {
    return (
       <div className="app-info">
            <h1>Учет сотрудников в компании </h1>
            <h2>Общее число сотрудников: {data.length}</h2>
            <h2>Премию получат: {increased}</h2>
       </div> 
    )
}

export default AppInfo;