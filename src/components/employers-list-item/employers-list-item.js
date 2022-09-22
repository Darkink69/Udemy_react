import './employers-list-item.css'

const EmpoyersListItem = (props) => {
    

    const {name, salary, onDelete, onToggleIncrease, onToggleRise, increase, like} = props;

    let classNames = 'list-group-item d-flex justify-content-between';
    if (increase) {
        classNames += ' increase';
    }

    if (like) {
        classNames += ' like';
    }

    return(
        <li className={classNames}>
            <span className="list-group-item-label" 
            onClick={onToggleRise}
            // style={{fontSize: '4rem', color: 'red'}}
            >{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + ' руб.'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm " 
                    onClick={onToggleIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )

}

export default EmpoyersListItem;