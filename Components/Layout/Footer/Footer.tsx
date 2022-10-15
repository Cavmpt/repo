import Image from "next/image";

function Footer(props: any) {
  const { children } = props;
  return (
    <footer className="footer">
      <div className="footer__first-section">
        <section className="footer__about-us">
          {/* <Image
            src="me.png"
            alt="image for out website"
            width={500}
            height={500}
          /> */}
          <div className="footer__description">
            Founded in 2007, Bestland Canada Industrial has become a trusted
            name in the automotive, agricultural, and industrial sectors.
          </div>
        </section>
        <section className="footer__information">
          <h1>Information</h1>
          <ul>
            <li>Contact Us</li>
            <li>Warranty</li>
            <li>Shipping Info</li>
            <li>Order Status</li>
            <li>Customer Service</li>
            <li>Q&A</li>
          </ul>
        </section>
        <section className="footer__work-with-us">
          <h1>Work with us</h1>
          <ul>
            <li>News</li>
            <li>Become a Dealer</li>
            <li>Affiliate</li>
            <li>Installers</li>
            <li>Careers</li>
            <li>Product Gallery</li>
          </ul>
        </section>
        <section className="footer__newsletter">
          <h1>Subscribe</h1>
          <div>
            <p>Join our mailing list for updates on new products and deals!</p>
            <input className="footer__newsletter__input" />
          </div>
        </section>
      </div>
      <div>
        Copyright © 2022 Wholesale Industrial.Privacy PolicyTerms & Conditions
      </div>
    </footer>
  );
}

export default Footer;
