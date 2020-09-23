import React from 'react';

export default function Result(props) {
    return (
        <div>
            <img src={props.image} alt={props.search} />
            <p>{props.info.desc}</p>
        </div>

    );
}