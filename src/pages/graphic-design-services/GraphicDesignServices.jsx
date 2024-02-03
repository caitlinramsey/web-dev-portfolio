import React from "react";
import "./graphicdesignservices.css";
import Container from "react-bootstrap/Container";
import GraphicDesignSkills from "../skills/graphic-design-skills/GraphicDesignSkills";

function GraphicDesignServices() {
  return (
    <section
      id="graphic-design-services"
      className="graphic-design-services">
      <h1 className="graphic-design-services-title">Graphic & Web Design Services</h1>
      <GraphicDesignSkills />
      <Container className="graphic-design-services-container pt-5 pb-5">
        <article className="graphic-design-service">
          <div className="graphic-design-service-header p-4">
            <h2>Logo Design</h2>
          </div>
          <ul className="graphic-design-service-name p-4">
          <h1 className="gd-price pb-2">$375</h1>
            <li className="gd-desc">1 Logo</li>
            <li className="gd-desc">Full color, black, and white versions included</li>
            <li className="gd-desc">PNG, JPG, and SVG file formats included</li>
            <li className="gd-desc">3 revisions included</li>
          </ul>
        </article>

        <article className="graphic-design-service">
          <div className="graphic-design-service-header p-4">
            <h2>Social Media Graphic</h2>
          </div>
          <ul className="graphic-design-service-name p-4">
          <h1 className="gd-price pb-2">$200</h1>
            <li className="gd-desc">1 social media graphic</li>
            <li className="gd-desc">Sized for Instagram and Facebook posts</li>
            <li className="gd-desc">3 revisions included in price</li>
          </ul>
        </article>

        <article className="graphic-design-service">
          <div className="graphic-design-service-header p-4">
            <h2>Flyer Design</h2>
          </div>
          <ul className="graphic-design-service-name p-4">
          <h1 className="gd-price pb-2">$300</h1>
            <li className="gd-desc">1 graphic 8.5 x 11 or smaller</li>
            <li className="gd-desc">Digital format</li>
            <li className="gd-desc">1 revision included</li>
          </ul>
        </article>

        <article className="graphic-design-service">
          <div className="graphic-design-service-header p-4">
            <h2>Banner Design</h2>
          </div>
          <ul className="graphic-design-service-name p-4">
          <h1 className="gd-price pb-2">$150</h1>
            <li className="gd-desc">1 banner design</li>
            <li className="gd-desc">Sized for either Facebook, LinkedIn, or YouTube</li>
            <li className="gd-desc">1 revision included</li>
          </ul>
        </article>

        <article className="graphic-design-service">
          <div className="graphic-design-service-header p-4">
            <h2>Business Card Design</h2>
          </div>
          <ul className="graphic-design-service-name p-4">
          <h1 className="gd-price pb-2">$200</h1>
            <li className="gd-desc">1 business card</li>
            <li className="gd-desc">Front and back design</li>
            <li className="gd-desc">Print ready</li>
            <li className="gd-desc">1 revision included</li>
          </ul>
        </article>

        <article className="graphic-design-service">
          <div className="graphic-design-service-header p-4">
            <h2>Advertisement Design</h2>
          </div>
          <ul className="graphic-design-service-name p-4">
          <h1 className="gd-price pb-2">$200</h1>
            <li className="gd-desc">1 advertisement graphic</li>
            <li className="gd-desc">Sized for several platforms</li>
            <li className="gd-desc">1 revision included</li>
          </ul>
        </article>

        <article className="graphic-design-service">
          <div className="graphic-design-service-header p-4">
            <h2>Single Web Page Design</h2>
          </div>
          <ul className="graphic-design-service-name p-4">
          <h1 className="gd-price pb-2">$400</h1>
            <li className="gd-desc">1 page website design</li>
            <li className="gd-desc">Offered with Squarespace, Wix, Pixieset, or Weebly</li>
            <li className="gd-desc">3 revisions included</li>
          </ul>
        </article>

        <article className="graphic-design-service">
          <div className="graphic-design-service-header p-4">
            <h2>Website Design</h2>
          </div>
          <ul className="graphic-design-service-name p-4">
          <h1 className="gd-price pb-2">Starting at $1000</h1>
            <li className="gd-desc">Multi-page website design</li>
            <li className="gd-desc">Offered with Squarespace, Wix, Pixieset, or Weebly</li>
            <li className="gd-desc">3 revisions included</li>
          </ul>
        </article>

        <article className="graphic-design-service">
          <div className="graphic-design-service-header p-4">
            <h2>Social Media Management</h2>
          </div>
          <ul className="graphic-design-service-name p-4">
          <h1 className="gd-price pb-2">$500/month</h1>
            <li className="gd-desc">Managing of all social media channels</li>
            <li className="gd-desc">Post scheduling and optimization</li>
            <li className="gd-desc">Monitoring and responsing to comments</li>
          </ul>
        </article>

      </Container>
    </section>
  );
}

export default GraphicDesignServices;