import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const FetchLogements = () => {
  const [logements, setLogements] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogements = async () => {
      try {
        const response = await fetch("logements.json");
        if (!response.ok) {
          throw new Error(`Erreur lors du chargement : ${response.status}`);
        }
        const data = await response.json();
        setLogements(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchLogements();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <section id="grid-appartements">
      <div className="container">
        <div className="grid-content">
          {logements.map((logement, index) => (
            <Link key={logement.id} to={`/Accommodation/${logement.id}`}>
              <div
                key={logement.id}
                className="appartements-card"
                id={logement.id}
              >
                <img
                  className="card-img"
                  src={logement.cover}
                  alt={logement.title}
                />
                <h2 className="appartements-title">{logement.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FetchLogements;
