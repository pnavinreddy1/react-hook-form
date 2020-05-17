import React from 'react';
import { useForm } from 'react-hook-form';
import "./style.css"

function Main () {

    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => {
        alert(JSON.stringify(data));
    }
    return (
        <div >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="firstName"> First Name</label>
                    <input name ="firstName" placeholder="chuck" ref={register({required: true})}/>
                    {errors.firstName && 'This is required'}
                </div>

                <div>
                    <label htmlFor="lastName"> Last Name</label>
                    <input name ="lastName" placeholder="McGill" ref={register} />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>

    );
}

export default Main;