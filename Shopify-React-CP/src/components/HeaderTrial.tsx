import React from 'react'

// JavaSript dinamik type-dir, TypeScript statik type-dir
// bir funksiya geriye html lementleri (xml) qaytarirsa bu finksiya olur component

const HeaderTrial:React.FC = () => {
  return (
    <header className="header-trial py-3">
    <div className="container">
      <div className="nav-links d-flex justify-content-center align-items-center flex-column flex-md-row text-center">
        <a href="#" className="trial-text">Start a free trial and enjoy 3 months of Shopify for $1/month on select
          plans.</a>
        <a href="#" className="sign-up-btn ms-md-3">Sign up now</a>
      </div>
    </div>
  </header>
  )
}

export default HeaderTrial