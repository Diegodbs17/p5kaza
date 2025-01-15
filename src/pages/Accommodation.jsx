import React from 'react'
import Slider from "../components/slider";
import AccomodationDescription from "../components/accomodationDescription";
import { useParams } from 'react-router';

function Accommodation() {
    const { id } = useParams();
  return (
    <>
    {/* <Slider /> */}
    <AccomodationDescription />
    </>
  )
}

export default Accommodation