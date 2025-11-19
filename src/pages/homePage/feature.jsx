import React from 'react'
import './feature.css';

import { motion } from "framer-motion";
import img1 from '../../assets/hero5.jpg';
import img2 from '../../assets/teaPlantation.png';

import img3 from '../../assets/plantwalk.jpg';
import img4 from '../../assets/waterfalls.jpg';
import img5 from '../../assets/wildlife.jpg';
import img6 from '../../assets/lake2.jpg';

function Feature() {
  return (
<section className="page2">

<motion.div
        className="left"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } }
        }}
      >

        <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}>
          Where Every Journey Becomes a Story
        </motion.h2>

        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
          South India’s hills are living postcards — mist, trails, wildlife,
          and moments that stay with you long after the trip ends.
        </motion.p>

      </motion.div>
<div className="right">

<div className="item card" style={{ gridArea: "item1", backgroundImage: `url(${img1})` , objectFit: "cover" ,}}>
  <h4>Misty Mornings</h4>
</div>

<div className="item card" style={{ gridArea: "item2", backgroundImage: `url(${img2})` }}>
  <h4>Tea Trails</h4>
</div>

<div className="item card" style={{ gridArea: "item3", backgroundImage: `url(${img3})` }}>
  <h4>Plantation Walks</h4>
</div>

<div className="item card" style={{ gridArea: "item4", backgroundImage: `url(${img4})` }}>
  <h4>Hidden Waterfalls</h4>
</div>

<div className="item card" style={{ gridArea: "item5", backgroundImage: `url(${img5})` }}>
  <h4>Wildlife & Forests</h4>
</div>

<div className="item card" style={{ gridArea: "item6", backgroundImage: `url(${img6})`,backgroundPosition:"left"}}>
  <h4>Lake Views</h4>
</div>




</div>

</section>

  );
}

export default Feature;
