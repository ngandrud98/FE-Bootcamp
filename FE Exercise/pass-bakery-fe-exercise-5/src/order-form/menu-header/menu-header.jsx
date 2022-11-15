import React from 'react';
import logo from '../../images/1p-site-logo.svg';
import './menu-header.css';

/* 
  This jsx file creates the title/first part of the menu with the name, address, and
  hours of operation.

  The "props" parameter takes in data. In the case of this exercise, it will take in
  the menuData json file.
*/
const MenuHeader = (props) => {
  return (
    <div class="container">
      <section>
        <div className="title-area">
          <img src={logo} width="64" alt="" />
          <h1>{props.name}</h1>

          <address>{props.address}</address>

            <h2>Hours</h2>
            <p>
              Mon-Fri 6AM-5PM PT,<br/>
              Sat-Sun 7AM-4PM PT
            </p>
        </div>
      </section>
    </div>
  );
}

export default MenuHeader;
