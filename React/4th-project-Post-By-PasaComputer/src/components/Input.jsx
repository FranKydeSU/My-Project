import React, { useState } from 'react'
import '../App.css'
import PropTypes from 'prop-types';

export default function Input({ addPost }) {
    const [input, setInput] = useState([]);

    function onChange(event) {
        setInput(event.target.value)
    }

    function onKeyDown(event) {
        const title = event.target.value;

        if (event.key === 'Enter' && title) {
            addPost(title);
            setInput('');
        }
    }

    return (
        <div className="input">
            <div className="input_header">Create Post</div>
            <input
                className="input_field"
                type="text"
                value={input}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    )
}

Input.propTypes = {
    addPost: PropTypes.func.isRequired
}