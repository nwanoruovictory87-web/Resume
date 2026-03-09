function User() {
  return (
    <div className="about-user-box">
      <span className="head-user-img-box">
        <img src="./src/assets/profil-pic/profil-pic.jpg"></img>
      </span>
      <span className="skills-head-text-box">
        <span className="skills-head-content-box">
          <i className="fas fa-laptop-code"></i>
          <h5>Technical Skills</h5>
        </span>
        <span className="skills-head-end-line"></span>
      </span>
      <div className="skills-content">
        <span className="skills-content-each">
          <span className="frontend-head-text-box">
            <span className="frontend-head-content-box">
              <i className="fas fa-code"></i>
              <h5>Programming</h5>
            </span>
          </span>
          <ul className="ul-list ul-list-frontend">
            <li>JAVASCRIPT</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </span>
        <span className="skills-content-each">
          <span className="backend-head-text-box">
            <span className="backend-head-content-box">
              <i className="fas fa-file-code"></i>
              <h5>LANGUAGES</h5>
            </span>
          </span>
          <ul className="ul-list ul-list-backend">
            <li>JAVSCRIPT(ES6)</li>
            <li>TYPESCRIPT</li>
          </ul>
        </span>
        <span className="skills-content-each">
          <span className="frontend-head-text-box">
            <span className="frontend-head-content-box">
              <i className="fas fas fa-display"></i>
              <h5>FRONTEND</h5>
            </span>
          </span>
          <ul className="ul-list ul-list-frontend">
            <li>REACT JS</li>
            <li>RESPONSIVE DESIGN</li>
            <li>USER INTERFACE</li>
            <li>TAILWIND CSS</li>
          </ul>
        </span>

        <span className="skills-content-each">
          <span className="backend-head-text-box">
            <span className="backend-head-content-box">
              <i className="fas fa-server"></i>
              <h5>BACKEND</h5>
            </span>
          </span>
          <ul className="ul-list ul-list-backend">
            <li>NODE JS</li>
            <li>WEBRTC</li>
            <li>REST API</li>
          </ul>
        </span>
        <span className="skills-content-each">
          <span className="backend-head-text-box">
            <span className="backend-head-content-box">
              <i className="fas fa-tools"></i>
              <h5>TOOLS</h5>
            </span>
          </span>
          <ul className="ul-list ul-list-backend">
            <li>GIT</li>
            <li>GITHUB</li>
            <li>VS CODE</li>
            <li>RENDER DEPLOYMENT</li>
          </ul>
        </span>
        <span className="skills-content-each">
          <span className="databases-head-text-box">
            <span className="databases-head-content-box">
              <i className="fas fa-database"></i>
              <h5>DATABASES</h5>
            </span>
          </span>
          <ul className="ul-list ul-list-database">
            <li>NO-SQL(Mongodb)</li>
          </ul>
        </span>
      </div>
      <span className="interest-head-text-box">
        <span className="interest-head-content-box">
          <i className="fas fa-star"></i>
          <h5>INTEREST</h5>
        </span>
        <span className="interest-head-end-line"></span>
      </span>
      <div className="interest-content-box">
        <span className="interest-text-content-box">
          <i className="fa fa-puzzle-piece"></i>
          <h5 className="inerest-text">Puzzle Solving</h5>
        </span>
        <span className="interest-text-content-box">
          <i className="fa fa-cogs"></i>
          <h5 className="inerest-text">Complex Systems</h5>
        </span>
        <span className="interest-text-content-box">
          <i className="fa fa-brain"></i>
          <h5 className="inerest-text">Artifical Inteligents</h5>
        </span>
        <span className="interest-text-content-box">
          <i className="fa fa-code"></i>
          <h5 className="inerest-text">Programing</h5>
        </span>
      </div>
      <span className="languages-head-text-box">
        <span className="languages-head-content-box">
          <i className="fas fa-language"></i>
          <h5>LANGUAGES</h5>
        </span>
        <span className="languages-head-end-line"></span>
      </span>
      <div className="languges-content-box">
        <span className="languges-content-text-box">
          <h5 className="languges-content-text">English</h5>
          <h5 className="languges-sub-content-text">-Conversational</h5>
        </span>
      </div>
      <span className="languages-head-text-box">
        <span className="languages-head-content-box">
          <i className="fas fa-award"></i>
          <h5>ACHIEVEMENTS</h5>
        </span>
        <span className="languages-head-end-line"></span>
      </span>
      <div className="languages-content-box">
        <span className="languages-content-text-box">
          <i className="fa fa-star"></i>
          <h5 className="languages-content-text">
            Build and deployed ecommas website for small busness with over 200
            users
          </h5>
        </span>
        <span className="languages-content-text-box ">
          <i className="fa fa-star"></i>
          <h5 className="languages-content-text">
            Build and deployed a chart app
          </h5>
        </span>
      </div>
      <span className="interest-head-text-box">
        <span className="interest-head-content-box">
          <i className="fas fa-location"></i>
          <h5>FOCUS</h5>
        </span>
        <span className="interest-head-end-line"></span>
      </span>
      <span className="focus-span">
        <ul className="focus-ul">
          <li>Frontend development</li>
          <li>Backend development</li>
          <li>Real-time communication systems</li>
          <li>Web application deployment</li>
          <li>Full-stack development</li>
        </ul>
      </span>
    </div>
  );
}
export default User;
