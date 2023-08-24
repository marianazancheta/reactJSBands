import './DropDown.css';

const DropDown = ({label, value, whenChanged, items}) => {
    return (
        <div className="dropdown">
            <label>{label}</label>
            <select value={value} onChange={evt => whenChanged(evt.target.value)} >
                <option value=''></option>
                {items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>)

}

export default DropDown;