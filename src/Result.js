import React from 'react';

export default function Result(props) {
    if(!props.err) {
        return (
            <div>
                <img src={props.image} alt={props.search} />
                <p>{props.info.desc}</p>
            </div>
        );
    } else {
        return (
            <div>
                <p>Invalid card name</p>
            </div>
        )
    }
}