import React from 'react'
import AccomodationDetails from "../components/accomodationDetails";
import { useParams } from 'react-router';

function Accommodation() {
    const { id } = useParams();
  return (
    <>
    <AccomodationDetails />
    </>
  )
}

export default Accommodation