import React from 'react';
import { MdDelete } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';

function Exercise({ exercise, onEdit, onDelete }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date.substring(0,10)}</td>
            <td><FaRegEdit onClick={() => onEdit(exercise)} /></td>            
            <td><MdDelete onClick={() => onDelete(exercise._id)} /></td>
        </tr>
    );
}

export default Exercise;
