import React from 'react';
import Exercise from './Exercise';

function ExerciseList({ exercises, onEdit, onDelete }) {
    return (
        <table>
            <caption>Current Exercise Goals</caption>
            <thead>
                <tr>
                    <th>Exercise name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) => 
                    <Exercise 
                        exercise={exercise} 
                        key={i}
                        onEdit={onEdit}                         
                        onDelete={onDelete}
                    />)}
            </tbody>
        </table>
    );
}

export default ExerciseList;
