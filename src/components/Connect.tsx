import React from 'react'

const Connect: React.FC = () => {
  return (
    <section className="connect py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <div className="con-left-side text-dark">

            <h1>Connect with <br/> customers everywhere</h1>
            <h5>Sell online, in person, or both with the marketing <br/> tools, social integrations, and sales channels
              you <br/>
              need to get your products in front of customers <br/>—and out the door.
            </h5>
            <nav>
              <a href="">Marketing made easy</a>
            </nav>


          </div>
        </div>

        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className="con-right-side position-relative">
            <img src="/assets/images/connect/con.svg" alt="connection Image" className="w-100 con-image" />
          </div>
        </div>

      </div>

    </div>
   
  </section>
  )
}

export default Connect