import React from 'react';
import { Link } from 'react-router-dom';

export default function homePagina() {
    return(
        <>
            <p>Log<Link to="/loginPagina">in</Link></p>

        </>
    );
}