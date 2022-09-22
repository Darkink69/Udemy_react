import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники', colored: false},
        {name: 'rise', label: 'На повышение', colored: false},
        {name: 'more50', label: 'З/П больше 50 000 руб.', colored: true},
        {name: 'like', label: 'У кого лайк', colored: false},

    ];

    const buttons = buttonsData.map(({name, label, colored}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        const style = colored ? {color: 'red'} : null
        return (
            <button
                className={`btn ${clazz}`}
                type='button'
                key={name}
                onClick={() => props.onFilterSelect(name)}
                style={style}>
                {label}
            </button>
        )

    })

    return (
        <div className="btn-group">
            {buttons}
            {/* <button
                className="btn btn-light"
                type='button'>
                    Все сотрудники
            </button>
            <button
                className="btn btn-outline-light"
                type='button'>
                    На повышение
            </button>
            <button
                className="btn btn-outline-light"
                type='button'>
                    З/П больше 50 000 руб.
            </button> */}

        </div>
    )
}

export default AppFilter;