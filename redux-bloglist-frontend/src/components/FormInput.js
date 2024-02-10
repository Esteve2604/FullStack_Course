import Form from 'react-bootstrap/Form'
const FormInput = ({ entry, setEntry, entryName }) => {
    return (
        <div>

            <Form.Label>{entryName}:</Form.Label>
            <Form.Control
                onChange={({ target }) => setEntry(target.value)}
                type="text"
                name={entryName}
                placeholder={entryName}

            />
        </div>
    )
}

export default FormInput