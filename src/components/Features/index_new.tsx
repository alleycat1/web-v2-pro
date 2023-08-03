import React, { useState } from "react";
import { useEffect } from "react";
import { useInView } from 'react-cool-inview'
import { motion, useScroll } from "framer-motion"

function Features() {
  const {observe, unobserve, inView, scrollDirection, entry} = useInView({
    threshold:1,
    onEnter:({scrollDirection, entry, observe, unobserve}) => {
    },
    onChange:({inView, observe}) => {
      observe()
    },
  })

  return (
    <>
      <div className="bg">
        <div id="bg1" className="motionElement">aaaa&nbsp;</div>
        <div id="area1" className="motionElement"><img src="/images/home/line1.svg" alt="line1"/></div>
        <div id="mark1" className="motionElement">
          <img src="/images/home/watermark1.svg" alt="watermark1"/>
        </div>
        <div id="mark2" className="motionElement">
          <img src="/images/home/watermark2.svg" alt="watermark1"/>
        </div>
        <div id="image1" className="motionElement">
          <img src="/images/home/m_features 1.svg" alt="image1"/>
        </div>
        <div id="image2" className="motionElement">
          <img src="/images/home/m_features 2.svg" alt="image2"/>
        </div>
        <div id="image3" className="motionElement">
          <img src="/images/home/m_features 3.svg" alt="image3"/>
        </div>
        <div id="image4" className="motionElement">
          <img src="/images/home/m_features 4.svg" alt="image4"/>
        </div>
        <div id="image5" className="motionElement">
          <img src="/images/home/m_features 5.svg" alt="image5"/>
        </div>
        <div id="image6" className="motionElement">
          <img src="/images/home/m_features 6.svg" alt="image6"/>
        </div>
        <div id="image7" className="motionElement">
          <img src="/images/home/m_features 7.svg" alt="image7"/>
        </div>
        <div id="label1" className="motionElement">
          1111
        </div>
        <div id="label2" className="motionElement">
          2222
        </div>
        <div id="label3" className="motionElement">
          3333
        </div>
        <div id="label4" className="motionElement">
          4444
        </div>
        <div id="label5" className="motionElement">
          5555
        </div>
        <div id="label6" className="motionElement">
          6666
        </div>
        <div id="label7" className="motionElement">
          7777
        </div>
        <div id="line0" className="motionElement">
          <img src="/images/home/line1.svg" alt="line1"/>
        </div>
        <div id="line2" className="motionElement">
          <img src="/images/home/line1.svg" alt="line1"/>
        </div>
        <div id="line3" className="motionElement">
          <img src="/images/home/line2.svg" alt="line2"/>
        </div>
        <div id="line4" className="motionElement">
          <img src="/images/home/line3.svg" alt="line3"/>
        </div>
      </div>
    </>
  )
}

export default Features