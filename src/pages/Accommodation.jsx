import React from 'react'
import AccomodationDescription from "../components/accomodationDescription";
import { useParams } from 'react-router';

function Accommodation() {
    const { id } = useParams();
  return (
    <>
    <div className="container">
        <AccomodationDescription />
    </div>
    </>
  )
}

export default Accommodation