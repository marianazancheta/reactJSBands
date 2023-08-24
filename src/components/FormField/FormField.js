import './FormField.css';

export const FormField = ({label, value, isRequired, placeholder, whenChanged, type = 'text'}) => {
    const modPlaceholder = `${placeholder}...`

    const handleChange = evt => {
        whenChanged(evt.target.value);
    }

    return (
        <div className={`field field-${type}`} >
            <label>{label}</label>
            <input 
                type={type} 
                value={value} 
                onChange={handleChange} 
                required={isRequired} 
                placeholder={modPlaceholder}>
            </input>
        </div>
    )
}