import React from 'react'
import { Helmet } from "react-helmet-async";




export default function About() {
    return (
    <main>
        <Helmet>
            <title>About Us</title>
            <meta name="description" content="This is the about page is to showcase our work" />
            <link rel="canonical" href="/about" />
        </Helmet>
        <div>
            <h2> The links are showcased below </h2>
            <ul>
                <li>
                    <p>Backend</p>
                    <p> Darren:  https://github.com/Daz2255/can-of-books-backend </p>
                    <p> Adesewa: https://github.com/Daz2255/can-of-books-backend </p>
                    <p> Raaqiya: https://github.com/Daz2255/can-of-books-backend </p>

                    <p>Frontend</p>
                    <p> Adesewa: https://github.com/adesewa293/can-of-books-frontend</p>
                    <p> Raaqiya: https://github.com/adesewa293/can-of-books-frontend/tree/raaqiya</p>
                    <p> Darren:  https://github.com/adesewa293/can-of-books-frontend/tree/Daz2255</p>
                </li>
            </ul>
    
        </div>

    </main>
    
    )
}

