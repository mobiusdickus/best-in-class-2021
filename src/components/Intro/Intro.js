import './Intro.css';


function Intro() {
  return (
    <section className="intro bg-dark">
      <div className="content-container-intro">
        <div className="content-intro">
          <div></div>
          <div className="content push"> 
            <h1 className="outline light">
                Calling<br/>
                Interns and<br/>
                Companies
            </h1>
            <h1 className="light">
              ARE YOU BEST<br/>
              IN CLASS?
            </h1>
            <p className="light" style={{paddingTop: "1rem"}}>
              Best In Class is Superunion’s paid-internship program that runs 
              from June 7th to August 27th, 2021.
            </p>
          </div>
          <div className="cta-intro push">
            <div className="submit-project">
              <a 
                href="https://www.superunion.nyc/best-in-className/submit-company/" 
                target="_blank"
                rel="noreferrer">
                <p className="small light">
                  put some brilliant<br/>
                  minds to work for you
                </p>
                <h3 className="light">SUBMIT YOUR PROJECT</h3>
              </a>
            </div>
            <div className="submit-intern">
              <a 
                href="https://www.superunion.com/join/description/?id=2752618" 
                target="_blank"
                rel="noreferrer">
                <p className="small light">
                  YOUR FUTURE<br/>
                  STARTS Today
                </p>
                <h3 className="light">APPLY TO BE AN INTERN</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Intro;
