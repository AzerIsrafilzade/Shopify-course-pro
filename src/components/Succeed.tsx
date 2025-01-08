import React from 'react'

const Succeed: React.FC = () => {
    return (
        <section className="succeed py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <div className="suc-right-side position-relative">
                            <img src="./assets/images/succeed/suc.svg" alt="succeed Image" className="w-100 succeed -image" />
                            

                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="suc-left-side pt-2 text-dark">

                            <h1>Everything you need <br /> to succeed</h1>
                            <h5>Manage inventory, track payments, and view <br /> real-time business insights from a single <br />
                                dashboard. We've built all the tools you need,<br /> so you can focus on building your business.

                            </h5>
                            <nav>
                                <a href="">Do more from day one</a>
                            </nav>

                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Succeed