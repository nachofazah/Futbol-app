import React from 'react';
import Badge from 'react-bootstrap/Badge';


//con la liga que traigo de app js, genero la bandera de el pais origen, nombre de la liga y logo de la liga
const Ligas = ({ liga }) => {
  return (
    <>
      <Badge bg="secondary">
        <h3>Bandera</h3>
      </Badge>
        {liga && <img src={liga.country.flag} className='bandera' />}
      <Badge bg="secondary">
        {liga && <h3>{liga.league.name}</h3>}
      </Badge>
      <br></br>
      {liga && <img src={liga.league.logo} className='logo' />}
    </>
  );
}

export default Ligas;