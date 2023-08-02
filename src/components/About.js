import React from 'react'
import { Helmet } from "react-helmet-async";


export default function About() {
  return (
    <div>
        <Helmet>
            <title>About Us</title>
            <meta name="description" content="This is the about page is to showcase our work" />
            <link rel="canonical" href="/about" />
        </Helmet>
        <main>
            <h2> The links are showcased below </h2>
            <ul>
                <li>
                    <p> Adesewa: https://github.com/adesewa293/can-of-books-frontend</p>
                    <p> Raaqiya: https://github.com/adesewa293/can-of-books-frontend/tree/raaqiya</p>
                    <p> Darren:  https://github.com/adesewa293/can-of-books-frontend/tree/Daz2255</p>
                </li>
            </ul>

        </main>
    </div>
  )
}

