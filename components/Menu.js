import React from 'react';
import vegan from "../assets/vegan.jpg";
import pineapple from "../assets/pineapple.jpg";
import pepperoni from "../assets/pepperoni.jpg";
import pedro from "../assets/pedrotechspecial.jpg";
import margerhita from "../assets/margherita.jpg";
import chicken from "../assets/expensive.jpg";
import chia from "../assets/chia pizza.jpeg";
import bun from "../assets/bun.jpeg";
import strawberry from "../assets/strawberry.jpg";
import tomato from "../assets/tomato.jpeg";
import perri from "../assets/perri.avif";
import kashmiri from "../assets/kashmiri.jpeg";
import './Menu.css';
import Footer from './Footer';

function Menu() {
  return (
    <div className="handy">
      <div className="item">
        <img src={vegan} />
        <div>
          <h3>Vegan Pizza</h3>
          <h4>299</h4>
        </div>
      </div>

      <div className="item">
        <img src={pineapple} />
        <div>
          <h3>Pineapple Pizza</h3>
          <h4>499</h4>
        </div>
      </div>

      <div className="item">
        <img src={pepperoni} />
        <div>
          <h3>Pepperoni Pizza</h3>
          <h4>199</h4>
        </div>
      </div>

      <div className="item">
        <img src={pedro} /> 
        <div>
          <h3>Pedro Pizza</h3>
          <h4>699</h4>
        </div>
      </div>

      <div className="item">
        <img src={margerhita} />
        <div>
          <h3>Margerhita Pizza</h3>
          <h4>450</h4>
        </div>
      </div>

      <div className="item">
        <img src={chicken} />
        <div>
          <h3>Chicken Pizza</h3>
          <h4>999</h4>
        </div>
      </div>

      <div className="item">
        <img src={bun} />
        <div>
          <h3>Bun Pizza</h3>
          <h4>299</h4>
        </div>
      </div>

      <div className="item">
        <img src={strawberry} />
        <div>
          <h3>Strawberry Pizza</h3>
          <h4>499</h4>
        </div>
      </div>

      <div className="item">
        <img src={chia} alt="Chia Pizza"/>
        <div>
          <h3>Chia Pizza</h3>
          <h4>199</h4>
        </div>
      </div>

      <div className="item">
        <img src={tomato} />
        <div>
          <h3>Tomato Pizza</h3>
          <h4>699</h4>
        </div>
      </div>

      <div className="item">
        <img src={kashmiri} />
        <div>
          <h3>Kashmiri Pizza</h3>
          <h4>450</h4>
        </div>
      </div>

      <div className="item">
        <img src={perri} />
        <div>
          <h3>Perri Pizza</h3>
          <h4>999</h4>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Menu;
