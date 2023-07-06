import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Ligas from './componentes/Ligas';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import { useState , useEffect  } from 'react';
import Promediador from './componentes/Promediador';


function App() {


//inicio localSorage
let ligaGuardada = JSON.parse(localStorage.getItem('liga'));
  if(!ligaGuardada){
    ligaGuardada = []
  };

//actualiza el local storage cada vez que hay cambios en liga guardada
useEffect(() => {
  if(ligaGuardada){
    localStorage.setItem('liga', JSON.stringify(liga));
  } else {
    localStorage.setItem('liga', JSON.stringify([]))
  }
}, [ligaGuardada]);

//guardo la url de la api
const url = "https://v3.football.api-sports.io/"

//guardo la información obtenida del response de api furvo
const [data, editarData] = useState("")
//guardo el estado elegido en el handle change
const [opcion, editarOpcion] = useState('');
//liga elegida en el handlechange
const [liga, editarLiga] = useState(ligaGuardada);

//consulta de datos a la api
const ApiFurvo = async() => {
  try{
    const api = await fetch(url+"leagues", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io/",
        "x-rapidapi-key": "771bbcc69c07fb41e1bc6aff973fd96c"
    }
  })
    console.log(api)
    console.log('primer paso, ver que trae el fetch')
    const resultado = await api.json();
    console.log(resultado)
    console.log('lo que trajo el fetch, hecho json')
    editarData(resultado.response)
    //console.log('acá tengo en la variable data las 1000 ligas ')
    


  } catch (error) {
    console.log(error)
  }
}
//ejecuta apifurvo cuando inicia la pagina
useEffect(() => {
  ApiFurvo();
}, []);
//id de la liga elegida en el handle change, se usa para armar dinamicamente el fetch de apiPromedios
const [ligaid, editarLigaid] = useState(liga.league.id);
//idem ligaid
const [seasonActual, editarSeason] = useState("2023")
//el valor guardado de el fetch de apiPromedios, se envia al componente Promediador
const [promedio, editarPromedio] = useState(null);

//consulta de datos a la api
  const ApiPromedios = async() => {
    try{
      const api = await fetch(url+"standings?league="+ligaid+"&season="+seasonActual, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io/",
          "x-rapidapi-key": "771bbcc69c07fb41e1bc6aff973fd96c"
      }
    })

      const resultado = await api.json();
      console.log('reviso si llega el resultado')
      console.log(resultado)
      console.log('reviso lo que estoy cargando a promedios con resultado.response')
      console.log(resultado.response)
      //guardo lo que traigo en promedio
      editarPromedio(resultado.response)
      
      //console.log('acá tengo en la variable promedio el response, que trae una lista ')


    } catch (error) {
      console.log(error)
    }
  }

  //cada vez que se actualiza la liga, se vuelve a ejecutar api promedios para ver el campeon actual de esa liga
  useEffect(() => {
    ApiPromedios();
  }, [liga]);
  
//menu de ligas
  const handleChange = (e) => {
    const elegido = e.target.value;
    editarOpcion(elegido);
    if (elegido === '1') {
    const liga = data.find(a => a.league.id === 128)
    editarLiga(liga)
    editarLigaid(liga.league.id)
    editarSeason(2023)
    } else if (elegido === '2') {
      const liga = data.find(a => a.league.id === 61)
      editarLiga(liga)
      editarLigaid(liga.league.id)
      editarSeason(2022)
    } else if (elegido === '3') {
      const liga = data.find(a => a.league.id === 140)
      editarLiga(liga)
      editarLigaid(liga.league.id)
      editarSeason(2022)
    } else if (elegido === '4') {
      const liga = data.find(a => a.league.id === 135)
      editarLiga(liga)
      editarLigaid(liga.league.id)
      editarSeason(2022)
    } else if (elegido === '5') {
      const liga = data.find(a => a.league.id === 39)
      editarLiga(liga)
      editarLigaid(liga.league.id)
      editarSeason(2022)
    } else if (elegido === '0') {
      const liga = data.find(a => a.league.id === 128)
      editarLiga(liga)
      editarLigaid(liga.league.id)
      editarSeason(2023)
    }
  }



  return (
    <>      
      <Header/>
      <div className='cuerpo'>
        <Container>
          <Row>
            <Col sm={8}>    
              <Form.Select aria-label="Default select example" className='buscador' onChange={handleChange} value={opcion}>
                <option value ="0">¿Que liga estas buscando?</option>
                <option value="1">Liga Argentina</option>
                <option value="2">Liga Francesa</option>
                <option value="3">Liga Española</option>
                <option value="4">Liga Italiana</option>
                <option value="5">Liga Inglesa</option>
              </Form.Select>
            </Col>
            <Col sm={4}>
              <Badge bg="secondary">
                 <h3>Información de la liga</h3>
              </Badge>
            </Col>
          </Row>
          <Row>
              <Col sm={8} id="Partidos">
                <div id="wg-api-football-games"
                    data-host="v3.football.api-sports.io"
                    data-key="Your-Api-Key-Here"
                    data-date=""
                    data-league=""
                    data-season=""
                    data-theme=""
                    data-refresh="15"
                    data-show-toolbar="true"
                    data-show-errors="false"
                    data-show-logos="true"
                    data-modal-game="true"
                    data-modal-standings="true"
                    data-modal-show-logos="true">
                </div>
              </Col>
              <Col sm={4} id="Liga">
                <Ligas
                  liga = {liga}
                />
                <Promediador
                  promedio = {promedio}
                />
              </Col>
          </Row>
        </Container>
      </div>
      <Footer/>
    </>
  );
}

export default App;