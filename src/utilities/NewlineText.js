import React from 'react' 

export function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p key={str}>{str}</p>);
}