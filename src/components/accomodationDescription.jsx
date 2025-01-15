import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Slider from "./slider";

const AccommodationDescription = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogementDetails = async () => {
      try {
        const response = await fetch('/logements.json');
        if (!response.ok) {
          throw new Error(`Erreur lors du chargement : ${response.status}`);
        }
        const data = await response.json();
        const logementDetails = data.find((item) => item.id === id);
        if (!logementDetails) {
          throw new Error('Logement non trouvé');
        }
        setLogement(logementDetails);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLogementDetails();
  }, [id]);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;
  if (!logement) return <div>Aucune donnée disponible pour ce logement.</div>;

  const stars = Array(5)
  .fill(null)
  .map((_, index) => (
    <li
      key={index}
      className={`accomodation-reviews-stars ${
        index < logement.rating ? 'full-stars' : ''
      }`}
    >
      <i className="fa-solid fa-star"></i>
    </li>
  ));

  return (
    <>
    <div className="container">
        <Slider pictures={logement.pictures} />
        <div className="accomodation-top-content">
            <div className="accomodation-description-content-left">
                <h1 className="accomodation-title">{logement.title}</h1>
                <h2 className="accomodation-geographie">{logement.location}</h2>
                <div className="accomodation-tags">
                    <ul className="accomodation-tags-list">
                        {logement.tags.map((tag, index) => (
                        <li key={index} className="accomodation-tags-item">{tag}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="accomodation-description-content-right">
                <div className="accomodation-host">
                    <h2 className="accomodation-host-name">{logement.host.name}</h2>
                    <img className="accomodation-host-img" src={logement.host.picture} alt={logement.host.name} />
                </div>
                <div className="accomodation-reviews-content">
                    <ul className="accomodation-reviews-content">{stars}</ul>
                </div>
            </div>
        </div>
        <div className="accomodation-description-content-tabs">
            <div className='collapse-content'>
                <input type="checkbox" id="description" name="description" className="collapse-ask" />
                <label htmlFor="description" className="collapse-items">Description<span className='icon-collapse'><i className="fa-solid fa-chevron-up"></i></span></label>
                <p className="answer-collapse">{logement.description}</p>
            </div>
            <div className='collapse-content'>
                <input type="checkbox" id="items" name="items" className="collapse-ask" />
                <label htmlFor="items" className="collapse-items">Équipements<span className='icon-collapse'><i className="fa-solid fa-chevron-up"></i></span></label>
                <ul className="accomodation-equipemnts-list answer-collapse">
                    {logement.equipments.map((equipment, index) => (
                    <li key={index} className="accomodation-tags-item">{equipment}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    </>
  );
};

export default AccommodationDescription;