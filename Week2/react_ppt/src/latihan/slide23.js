import React from 'react';
import ReactDOM from 'react-dom/client';


export default function getGreeting(user) {
    if(user) {
        return <h1>Hello, {formatName(user)}!</h1>
    }
    return <h1>Hello, Stranger.</h1>
}

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}