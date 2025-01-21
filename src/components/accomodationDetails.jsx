import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Slider from "./slider";
import Collapse from "./collapse";

const AccommodationDescription = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLogementDetails = async () => {
      try {
        const response = await fetch("/logements.json");
        if (!response.ok) {
          throw new Error(`Erreur lors du chargement : ${response.status}`);
        }
        const data = await response.json();
        const logementDetails = data.find((item) => item.id === id);
        if (!logementDetails) {
          navigate("/error", { replace: true });
          return;
        }
        setLogement(logementDetails);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLogementDetails();
  }, [id, navigate]);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;

  if (!logement) return null;

  const stars = Array(5)
    .fill(null)
    .map((_, index) => (
      <li
        key={index}
        className={`accomodation-reviews-stars ${
          index < logement.rating ? "full-stars" : ""
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
                  <li key={index} className="accomodation-tags-item">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="accomodation-description-content-right">
            <div className="accomodation-host">
              <h2 className="accomodation-host-name">{logement.host.name}</h2>
              <img
                className="accomodation-host-img"
                src={logement.host.picture}
                alt={logement.host.name}
              />
            </div>
            <div className="accomodation-reviews-content">
              <ul className="accomodation-reviews-content">{stars}</ul>
            </div>
          </div>
        </div>
        <div className="accomodation-description-content-tabs">
          <Collapse id="description" title="Description">
            <p className="answer-collapse">{logement.description}</p>
          </Collapse>
          <Collapse id="items" title="Équipements">
            <ul className="accomodation-equipemnts-list answer-collapse">
              {logement.equipments.map((equipment, index) => (
                <li key={index} className="accomodation-tags-item">
                  {equipment}
                </li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default AccommodationDescription;
