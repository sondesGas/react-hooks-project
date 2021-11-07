import React from "react";

const Footer = () => {
  return (
    <footer className="w3-container w3-padding-64 w3-center w3-black w3-xlarge">
      <a href="">
        <i className="fa fa-facebook-official" style={{ marginRight: 10 }} />
      </a>
      <a href="">
        <i className="fa fa-pinterest-p" style={{ marginRight: 10 }} />
      </a>
      <a href="">
        <i className="fa fa-twitter" style={{ marginRight: 10 }} />
      </a>
      <a href="">
        <i className="fa fa-flickr" style={{ marginRight: 10 }} />
      </a>
      <a href="">
        <i className="fa fa-linkedin" />
      </a>
      <p className="w3-medium">
        Powered by
        <a href="" target="_blank">
          MOVIE SHOW
        </a>
      </p>
    </footer>
  );
};
export default Footer;
