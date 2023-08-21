import './TextField.css';

export const TextField = (props) => {
    const modPlaceholder = `${props.placeholder}...`

    const handleChange = evt => {
        props.whenChanged(evt.target.value);
    }

    return (
        <div className="text-field" >
            <label>{props.label}</label>
            <input value={props.value} onChange={handleChange} required={props.isRequired} placeholder={modPlaceholder}></input>
        </div>
    )
}