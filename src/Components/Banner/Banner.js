import React, { useState } from 'react';
import DynamicPosts from '../DynamicPosts/DynamicPosts';
import bannerimg from './banner.png';

import './Banner.css';

function Banner() {
  let [category, setCategory] = useState();

  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {' '}
              <option value="null">ALL CATEGORIES</option>
              <option value="Mattress">Mattress</option>
              <option value="Tubelight & LED">Tubelight & LED</option>
              <option value="Table Lamp">Table Lamp</option>
              <option value="Cooler">Cooler</option>
              <option value="Heater">Heater</option>
              <option value="Electric Kettle">Electric Kettle</option>
              <option value="Blankets">Blankets</option>
              <option value="Umbrella">Umbrella</option>
              <option value="Induction">Induction</option>
              <option value="Extension Cord">Extension Cord</option>
              <option value="Router">Router</option>
              <option value="Heating Rod">Heating Rod</option>
              <option value="Mosquito Racket">Mosquito Racket</option>
              <option value="Mosquito Net">Mosquito Net</option>
            </select>
          </div>
          <div className="otherQuickOptions">
            <span onClick={() => setCategory('Mattress')}>Mattress</span>
            {/* <span onClick={() => setCategory('Tubelight & LED')}>
              Tubelight & LED
            </span> */}
            <span onClick={() => setCategory('Table Lamp')}>Table Lamp</span>
            <span onClick={() => setCategory('Cooler')}>Cooler</span>
            <span onClick={() => setCategory('Heater')}>Heater</span>
            {/* <span onClick={() => setCategory('Electric Kettle')}>
              Electric Kettle
            </span> */}
            {/* <span onClick={() => setCategory('Blankets')}>Blankets</span>
            <span onClick={() => setCategory('Umbrella')}>Umbrella</span> */}
            <span onClick={() => setCategory('Induction')}>Induction</span>
            <span onClick={() => setCategory('Extension Cord')}>
              Extension Cord
            </span>
            {/* <span onClick={() => setCategory('Router')}>Router</span> */}
            <span onClick={() => setCategory('Heating Rod')}>Heating Rod</span>
            <span onClick={() => setCategory('Mosquito Racket')}>
              Mosquito Racket
            </span>
            {/* <span onClick={() => setCategory('Mosquito Net')}>
              Mosquito Net
            </span> */}
          </div>
        </div>
        <div className="banner">
          <img src={bannerimg} alt="" />
        </div>
      </div>
      {category != null && <DynamicPosts category={category} />}
    </div>
  );
}

export default Banner;
