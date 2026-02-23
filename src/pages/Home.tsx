import React from 'react'

export const Home = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="" alt="" />
          <h2>Aondona Precious</h2>
        </div>

        {/* nav  links */}
        <div className="navlinks">
          <ul>
            <li>projects</li>
            <li>Experience</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <div className="resume-download">
            <button>
              Resume
            </button>
          </div>

        </div>
      </nav>

      {/* nav section ends  */}

      {/* home section begins  */}

      {/* <div className="home-section">
        <div className="available">
          AVAILABLE FOR HIRE
        </div>

        <h3>Hello, i am</h3>

        <div className="name">
          <h1>Aondona 
            <div>Precious.</h1></div>

              <div>
            <img src="" alt="" />
            <h3>
          Front end Developer
            </h3>

            <h4>
              i build accessible, pixel perfect, and performant web experiences. currently focued on building human-centric Ai interfaces and scalable backend systems.
            </h4>

           <Button variant= "view Projects" />
            <Button variant= "Contact Me" />
             
             </div>
        </div>
      </div> */}
    </>
  );
}
