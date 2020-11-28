import React, {useState} from 'react';

export default function InputForm() {

    const [Name, setName] = useState('N/A');
    const [Address, setAddress] = useState('N/A');
    const [Number, setNumber] = useState('N/A');

    const onChangeName = (event) => {
        setName(event.target.value);
    }
    const onChangeAddress = (event) => {
        setAddress(event.target.value);
    }
    const onChangeNumber = (event) => {
        setNumber(event.target.value);
    }

    return(
        <div>
            <div>
                Name: <input type="text" placeholder="input Full Name" onChange={onChangeName}></input>
                Address: <input type="text" placeholder="input Address" onChange={onChangeAddress}></input>
                Phone: <input type="text" placeholder="input Phone Number" onChange={onChangeNumber}></input>
                <input type='button' value='submit'></input>
            </div>
            <h3>Your Input</h3>
            <h4>Name: {Name.toUpperCase()}</h4>
            <h4>Address: {Address.toUpperCase()}</h4>
            <h4>Phone: {Number.toUpperCase()}</h4>
        </div>
        
    )
}