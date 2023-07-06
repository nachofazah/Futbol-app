
import React from 'react';
import Badge from 'react-bootstrap/Badge';

    const Promediador = ({ promedio }) => {
        
      let promedioEquipo;
       //si promedio existe, reviso su tamaño, si tiene 2 ligas, tomo la segunda
       //cuyo caso aplica solo para la liga argentina
       //si el tamaño de promedio es 1, entonces uso la unica liga disponible
       //si todavia no hay información en promedio devuelvo "No se encontraron datos de promedio"
        if (promedio && promedio.length > 0 && promedio[0].league.standings.length === 2) {
          promedioEquipo = promedio[0].league.standings[1][0];
        } else if (promedio && promedio.length > 0 && promedio[0].league.standings.length === 1) {
          promedioEquipo = promedio[0].league.standings[0][0];
        }
      
        return (
          <>
            <br></br>
            <Badge bg="secondary"><h3>Liderando la liga:</h3> </Badge>
              {promedioEquipo ? (
                <>
                  <br></br>
                  <Badge bg="secondary"><p>Equipo: {promedioEquipo.team.name}</p></Badge>
                  <br></br>
                  <img src={promedioEquipo.team.logo} alt={promedioEquipo.team.name} />
                  <Badge bg="secondary"><p>Partidos jugados: {promedioEquipo.all.played}</p></Badge>
                  <br />
                  <Badge bg="secondary"><p>Ganados: {promedioEquipo.all.win} - </p></Badge>
                  <Badge bg="secondary"><p>Empates: {promedioEquipo.all.draw} - </p></Badge>
                  <Badge bg="secondary"><p>Perdidos: {promedioEquipo.all.lose}</p></Badge>
                  <br />
                  <Badge bg="secondary"><p>Goles a favor: {promedioEquipo.all.goals.for}</p></Badge>
                  <Badge bg="secondary"><p>Goles en contra: {promedioEquipo.all.goals.against}</p></Badge>
                  <br />
                  <br />

                </>
              ) : (
                <Badge bg="secondary"><p>No se encontraron datos de promedio.</p></Badge>
              )}
          
          </>
        );
      };
 
export default Promediador;
