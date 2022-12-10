import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const AddExercisePage = () => {

    const [name, setName]           = useState('');
    const [reps, setReps]           = useState('');
    const [weight, setWeight]       = useState('');
    const [unit, setUnit]           = useState('lbs');
    const [date, setDate]           = useState('');

    const history = useHistory();

    // Add an exercise, load an alert, and go back to home page. 
    // Calls the POST method in exercises-controller.   
    const addExercise = async () => {
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify({ 
                name, 
                reps, 
                weight, 
                unit, 
                date 
            }),
            headers: {'Content-Type': 'application/json',},
        });
        if(response.status === 201){
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add the exercise due to status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <>
        <article>
            <h2>Add an exercise</h2>
            <p>Enter a new exercise in the form below and select Save.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Add exercise form</legend>

                    <div>
                    <label htmlFor="name">Exercise name: </label>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    </div>

                    <div>
                    <label htmlFor="reps">Reps: </label>
                    <input
                        type="number"
                        value={reps}
                        placeholder= "1"
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />
                    </div>

                    <div>
                    <label htmlFor="weight">Weight: </label>
                    <input
                        type="number"
                        value={weight}
                        placeholder="1"
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />
                    </div>

                    <div>
                    <label htmlFor="unit">Unit: </label>
                    <select value={unit} type="text" id="unit" onChange={e => setUnit(e.target.value)}>
                        <option value="lbs">lbs</option>
                        <option value="kgs">kgs</option>
                        <option value="miles">miles</option>
                    </select>
                    </div>

                    <div>
                    <label htmlFor="date">Date: </label>
                    <input
                        type="date"
                        value={date}
                        placeholder="Date"
                        onChange={e => setDate(e.target.value)} 
                        id="date" />
                    </div>

                    <label htmlFor="submit">
                    <button
                        type="submit"
                        onClick={addExercise}
                        id="submit"
                    >Save</button></label>

                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddExercisePage;