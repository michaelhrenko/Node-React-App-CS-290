import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditExercisePage = ({ exercise }) => {
 
    // Load form with the current values.
    const [name, setName]           = useState(exercise.name);
    const [reps, setReps]           = useState(exercise.reps);
    const [weight, setWeight]       = useState(exercise.weight);
    const [unit, setUnit]           = useState(exercise.unit);
    const [date, setDate]           = useState(exercise.date.substring(0,10));
    
    const history = useHistory();

    // Update an exercise, load an alert, and go back to home page. 
    // Calls the PUT method in exercises-controller.   
    const editExercise = async () => {
        const response = await fetch(`/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                reps: reps, 
                weight: weight,
                unit: unit,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert("Successfully updated the exercise.");
        } else {
            alert(`Failed to update the exercise due to status code = ${response.status}`);
        }
        history.push("/");
    }

    return (
        <>
        <article>
            <h2>Update an exercise</h2>
            <p>Enter your updates in the form below and select Save.</p>
            <form onSubmit={(e) => { e.preventDefault() }}>
                <fieldset>
                    <legend>Update exercise form</legend>

                    <div>
                    <label htmlFor="name">Exercise name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    </div>

                    <div>
                    <label htmlFor="reps">Reps: </label>
                    <input
                        type="number"
                        value={reps}
                        onChange={e => setReps(e.target.value)} 
                        id="reps" />
                    </div>

                    <div>
                    <label htmlFor="weight">Weight: </label>
                    <input
                        type="number"
                        value={weight}
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
                        onChange={e => setDate(e.target.value)} 
                        id="date" />
                    </div>

                    <label htmlFor="submit">
                    <button
                        onClick={editExercise}
                        id="submit"
                        >Save
                    </button>
                    </label>
                    
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditExercisePage;