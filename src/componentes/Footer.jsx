import React from 'react';
import Nav from 'react-bootstrap/Nav';
import facebook from './facebook.png';
import twitter from './twitter.png';
import instagram from './instagram.png';


const Footer = () => {
    return ( 
      <div className='footer'>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Developed by @NachoFazah
            </Nav.Link>  
          </Nav.Item>
          <Nav.Item>  
            <Nav.Link href="https://www.facebook.com/"><img src={facebook} className='iconof'/></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://twitter.com/"><img src={twitter} className='iconof'/></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://www.instagram.com/"><img src={instagram} className='iconof'/></Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
     );
}
 
export default Footer;
