import React from 'react';

function Recipe(props) {
    return (
        <div>
            <h2>Recipe for {props.name}</h2>
            <p>Time: {props.time}</p>
            <p>Difficulty: {props.difficulty}</p>
            <p>Steps: {props.steps}</p>
        </div>
    );
}

export default Recipe;

