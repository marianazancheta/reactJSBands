import './DropDown.css';

const DropDown = (props) => {

    const handleChange = evt => {
        props.whenChanged(evt.target.value);
    }

    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select value={props.value} onChange={evt => props.whenChanged(evt.target.value)} >
                <option value=''></option>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>)

}

export default DropDown;