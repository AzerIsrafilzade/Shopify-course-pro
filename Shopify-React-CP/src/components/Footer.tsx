import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="footer py-5">
    <div className="container">
      <div className="row">
        {/* footer header */}
        <div className="footer header py-5">
          <div className="container">
            <nav className="nav-links">
              <a href="">About</a>
              <a href="">Careers</a>
              <a href="">Press and Media</a>
              <a href="">Shopify Plus</a>
              <a href="">Sitemap</a>
            </nav>
          </div>
        </div> 
      {/* <!-- footer header--> */}

        {/* <!-- center start --> */}
        <div className="col-12 col-md-3 col-lg-2 footer-center">
          <h5 className="text-uppercase">ONLINE STORE</h5>
          <div className="footer-center-links">
            <a href="" className="text-secondary">Sell online</a>
            <a href="" className="text-secondary">Examples</a>
            <a href="" className="text-secondary">Website builder</a>
            <a href="" className="text-secondary">Online retail</a>
            <a href="" className="text-secondary">Shopping cart</a>
            <a href="" className="text-secondary">Domain names</a>
            <a href="" className="text-secondary">Mobile commerce</a>
            <a href="" className="text-secondary">Online store builder</a>
            <a href="" className="text-secondary">Dropshipping Business</a>
            <a href="" className="text-secondary">Store themes</a>
            <a href="" className="text-secondary">Ecommerce website</a>
          </div>
        </div>

        <div className="col-12 col-md-3 col-lg-2  footer-center">
          <h5 className="text-uppercase">POINT OF SALE</h5>
          <div className="footer-center-links">
            <a href="" className="text-secondary">Point of sale</a>
            <a href="" className="text-secondary">Features</a>
            <a href="" className="text-secondary">Hardware</a>
            <a href="" className="text-secondary">Built-in POS</a>
            <a href="" className="text-secondary">Prestige</a>
            <a href="" className="text-secondary">Warehouse </a>
            <a href="" className="text-secondary">Impulse</a>
            <a href="" className="text-secondary">Venture</a>
          </div>
        </div>

        <div className="col-12 col-md-3 col-lg-2 footer-center">
          <h5 className="text-uppercase">SUPPORT</h5>
          <div className="footer-center-links">
            <a href="" className="text-secondary">24/7 support</a>
            <a href="" className="text-secondary">Shopify Help Center</a>
            <a href="" className="text-secondary">Shopify Community</a>
            <a href="" className="text-secondary">API documentation</a>
            <a href="" className="text-secondary">Free tools</a>
            <a href="" className="text-secondary">Free stock photos</a>
            <a href="" className="text-secondary">Websites for sale</a>
            <a href="" className="text-secondary">Logo Maker</a>
            <a href="" className="text-secondary">Business name generator</a>
            <a href="" className="text-secondary">Research</a>
            <a href="" className="text-secondary">Legal</a>
          </div>
        </div>

        <div className="col-12 col-md-3 col-lg-2  footer-center">
          <h5 className="text-uppercase">SHOPIFY</h5>
          <div className="footer-center-links">
            <a href="" className="text-secondary">Contact</a>
            <a href="" className="text-secondary">Partner program</a>
            <a href="" className="text-secondary">Affiliate program</a>
            <a href="" className="text-secondary">App developers</a>
            <a href="" className="text-secondary">Investors</a>
            <a href="" className="text-secondary">Blog topics</a>
            <a href="" className="text-secondary">Community Events</a>
            <a href="" className="text-secondary">Fulfillment</a>
            
          </div>
        </div>

        <div className="col-12 col-md-3">
          <div className="footer-right mt-9 ">
            <img src="./assets/images/header/logo1.svg" alt="" />
            <h4>Shopify</h4>
            <article>
              Whether you want to sell products down the street or around the world, we have all the tools you need.
            </article>

            <div className="footer-left-end d-flex flex-column my-5">
              <a href="mailto:shopify@gmail.com" className="">
                <img src="./assets/image/footer/mail.svg" alt="" />
                shopify@gmail.com</a>
              <a href="mailto:shopify@gmail.com" className="">
                <img src="./assets/image/footer/phone.svg" alt="" /> Phone:
                (571) 245-098</a>
              <a href="mailto:Company@gmail.com" className="">
                <img src="./assets/image/footer/location.svg" alt="" />
                shopify@gmail.com</a>
            </div>
          </div>
        </div>
        {/* <!-- center end --> */}

        {/* <!-- sag teref --> */}
        <div className=" footer footer py-5">
          <div className="container">

            <div className="social-links">
              <a href=""><img src="./assets/images/footer/facebook.svg" alt="" /></a>
              <a href=""><img src="./assets/images/footer/instagram.svg" alt="" /></a>
              <a href=""><img src="./assets/images/footer/twitter.svg" alt="" /></a>
              <a href=""><img src="./assets/images/footer/linkedin.svg" alt="" /></a>
              <a href=""><img src="./assets/images/footer/youtube.svg" alt="" /></a>
            </div>

            <div className="terms-policy">
              <nav className="nav-links d-flex flex-column">
                <a>Terms of Service</a>
                <a>Privacy Policy</a>
              </nav>
              <a href=""><img src="./assets/images/footer/earth.svg" alt="" /></a>
              <h6>USA</h6>
              <a href=""><img src="./assets/images/footer/spec.svg" alt="" /></a>

            </div>

          </div>
        </div>

        {/* <!-- sag teref son --> */}
         
      </div>
    </div>
  </footer>
  )
}

export default Footer