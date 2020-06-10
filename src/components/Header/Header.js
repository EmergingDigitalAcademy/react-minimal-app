import React from 'react';

// functional components get props as the first argument
// props.title will be what i want to display
const Header = (props) => {
    return <h1>{props.title}</h1>
}

export default Header;