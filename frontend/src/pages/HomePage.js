import React from 'react';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({ setExercise }) {
    
    const history = useHistory();
    const [exercises, setExercises] = useState([]);

    // Retrieve the list of exercises.
    // Calls the GET method in exercises-controller.
    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const exercises = await response.json();
        setExercises(exercises);
    } 
    
    // Update an exercise.
    const onEditExercise = async exercise => {
        setExercise(exercise);
        history.push("/edit-exercise");
    }

    // Delete an exercise and reload the list.
    // Calls the DELETE method in exercises-controller. 
    const onDeleteExercise = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            loadExercises();
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // Load the exercises
    useEffect(() => { loadExercises() }, []);

    // Display the exercise list.
    return (
        <>
            <article>
                <h2>Below is your list of exercise goals</h2>
                <p>Use this tool to add, update, or delete your exercise goals.</p>
                <ExerciseList 
                    exercises={exercises} 
                    onEdit={onEditExercise} 
                    onDelete={onDeleteExercise} 
                />
            </article>
        </>
    );
}

export default HomePage;
