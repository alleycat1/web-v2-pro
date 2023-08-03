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
        <div id="bg1" className="bg1">&nbsp;</div>
        <div id="area1" className="motionElement"><img src="/images/home/L1.svg" alt="area1"/></div>
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
          <br/>
          <img src="/images/home/text1.svg" alt="image51"/>
        </div>
        <div id="image6" className="motionElement">
          <img src="/images/home/m_features 6.svg" alt="image6"/>
          <br/>
          <img src="/images/home/text2.svg" alt="image61"/>
        </div>
        <div id="image7" className="motionElement">
          <img src="/images/home/m_features 7.svg" alt="image7"/>
          <br/>
          <img src="/images/home/text3.svg" alt="image71"/>
        </div>
        <div id="label1" className="motionElement">
          Introducing <br />
          <b>TowneSquare</b>
        </div>
        <div id="label2" className="motionElement">
          <b>Contextual social feed</b><br/>
          TowneSquare feed enables context-specific<br/>
          features for each post to maximize utility for<br/>
          viewers. Users can seamlessly transition between<br/>
          finance and sosical experience in our user-friendly<br/>
          feed.
        </div>
        <div id="label3" className="motionElement">
          <b>One-click community <br/>onboarding</b><br/>
          Users now have to hop between multiple platforms<br/>
          to access the full offerings of a community.<br/><br/>
          Community members on TowneSquare can access community<br/>
          servers with their token or NFT in just one-click.<br/>
          It also allows non-token communities to be created with<br/>
          the same full suite of features from governance to<br/>
          townhall spaces.
        </div>
        <div id="label4" className="motionElement">
          <b>An easy-to-use<br/>
          Web3 identity frontend</b><br/>
          Your user profile on TowneSquare is an identity<br/>
          system that seamlessly connects on-chain credentials,<br/>
          NFT membership, and other verifiable experiences to<br/>
          enable new use cases such as ticketing, reward drops,<br/>
          and authentication services.
        </div>
        <div id="label5" className="motionElement">
          <b>An all-in-one DM system</b><br/>
          Your user profile on TowneSquare is an identity<br/>
          system that seamlessly connects on-chain credentials,<br/>
          NFT membership, and other verifiable experiences to<br/>
          enable new use cases such as ticketing, reward drops,<br/>
          and authentication services.
        </div>
        <div id="label6" className="motionElement">
          <b>Own, spend, and social <br/>anytime anywhere</b>
        </div>
        <div id="line1" className="motionElement">
          <img src="/images/home/line1.svg" alt="line1"/>
        </div>
        <div id="line2" className="motionElement">
          <img src="/images/home/line1.svg" alt="line2"/>
        </div>
        <div id="line3" className="motionElement">
          <img src="/images/home/line2.svg" alt="line3"/>
        </div>
        <div id="line4" className="motionElement">
          <img src="/images/home/line3.svg" alt="line4"/>
        </div>
      </div>
    </>
  )
}

export default Features