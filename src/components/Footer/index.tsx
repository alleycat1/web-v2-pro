import React from "react";
import { images } from "../../constants/images";
import { BsTwitter, BsGithub } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export const Footer = (props: any) => {
  return (
    <footer className="page-footer font-small pt-4 h-[279px] bg-slate-900">
      <div className="container-fluid text-md-left">
        <div className="row justify-content-evenly">
          <Col
            xs={12}
            md={4}
            lg="auto"
            className="col-md-2 mt-md-0 mt-3"
            style={{ justifyContent: "left", display: "inline-block" }}
          >
            <div className="text-white text-[14px] font-semibold">Follow us</div>
            <a href="https://twitter.com/TowneSquarexyz">
              <BsTwitter
                size={30}
                style={{
                  color: "#F2F0FF",
                  paddingRight: "8px",
                  marginRight: "8px",
                }}
              />
            </a>
            <a href="https://github.com/TowneSquare">
              <BsGithub
                size={30}
                style={{
                  color: "#F2F0FF",
                  paddingRight: "8px",
                  marginRight: "8px",
                }}
              />
            </a>
          </Col>
          <Col xs={12} md={4} lg="auto" className="col-md-2 mb-md-0 mb-3">
            <div className="text-white text-[14px] font-semibold">Docs</div>
            <div className="text-stone-300 text-[14px] font-normal leading-7">
              <a href="https://github.com/TowneSquare">GitHub</a><br />
              <a href="https://docs.townesquare.xyz/townesquare-whitepaper/">Gitbook</a>
            </div>
          </Col>
          <Col xs={12} md={4} lg="auto" className="col-md-2 mb-md-0 mb-3">
            <div className="text-white text-[14px] font-semibold">Legal</div>
            <div className="text-stone-300 text-[14px] font-normal leading-7">
              <a href="/termsofservice">Terms of Service</a><br />
              <a href="/legal">Legal</a><br />
              <a href="/privacypolicy">Privacy Policy</a>
            </div>
          </Col>
          <Col xs={12} md={4} lg="auto" className="mb-md-0 mb-3 mr-md-4">
            <div className="text-white text-[14px] font-semibold">Community</div>
            <div className="text-stone-300 text-[14px] font-normal leading-7">
              <a href="https://twitter.com/TowneSquarexyz">Twitter</a><br />
              <a href="https://discord.gg/yMRmqFzrDW">Discord</a><br />
              <a href="https://medium.com/">Medium</a><br />
              <a href="https://telegram.org/">Telegram</a>
            </div>
          </Col>
          <Col xs={12} md={4} lg="auto" className="col-md-2 mb-md-0 mb-3">
            <div className="w-[321px] text-stone-300 text-[14px] font-normal leading-7">Copyright © 2023 TowneSquare. All rights reserved.</div>
          </Col>
        </div>
      </div>
    </footer>
  );
};