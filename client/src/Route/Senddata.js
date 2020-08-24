import React, { useState } from 'react';
import productService from './services/productService';
import { useHistory } from "react-router-dom";


function AddPersonForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();
    async function handleSubmit() {
        await productService.postSandData(name, description)
        setName('');
        setDescription('');        
        history.push("/datasubmited");
    }

    return (
        <>
            <input type="text"
                placeholder="Add new name"
                onChange={(e) => { setName(e.target.value) }}
                value={name} />
            <input type="text"
                placeholder="Add new description"
                onChange={(e) => { setDescription(e.target.value) }}
                value={description} />
            <button onClick={handleSubmit}>Add</button>
        </>
    )
}
function X() {
    return (
        <div>
            <AddPersonForm />
        </div>
    );
}
export default X;