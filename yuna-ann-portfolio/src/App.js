import React, { Component } from 'react';
import './App.css';
import './index.js';
import cover from './img/oc.png'; 
import id from './img/id.jpg'; 
import projectCom1 from './img/projects/gamecity.png';

class App extends Component 
{
  render() 
  {
    return(
    <div className="App">
          <Cover/>
          <AboutMe/>
          <ParallaxSkills/>
          <Skills/>   
          <ParallaxProjects/>
          <Projects/>
          <Footer/>
    </div>);
  }

}

function Cover()
{return( 
    <div className="wrapper">

        <img src={cover} alt="" className="wrapper-image"/>
            <div className="wrapper-text">
                <h1> Anna Grzywnowicz </h1>
                <h2> Portfolio </h2>
            </div>
    </div>        
);
}

function AboutMe()
        {return(
            <div className="about-section">
                <div className="container">	
                    <div className="about-content">
                    <img src={id} alt="" className="id-img"/>
                    <div className="dots"><div></div><div></div><div></div><div></div></div>
                    <h4>My name is Anna Grzywnowicz and I am a beginner developer from Poland.</h4>
                        <div className="row">
                            <div className="col-sm-6">
                                <p> Mostly I'm interested in Front-end developing and UI design . When I create my projects, I pay a lot for attention to aspects <strong> like ease of use, utility, clarity, color selection and efficiency. </strong></p>
                            </div>		
                            <div className="col-sm-6">
                                <p> <strong> I like drawing and creating character designs </strong> in digital ( PaintTool SAI, MediBang Paint Pro) and traditional media ( pencil, markers). I'm active on social media like Instagram, Facebook, Artstation and Deviantart. </p>
                                <p> My hobbies are photography, music and video games as well :) </p>
                                </div>	
                            </div>	
                            <div className="links">
                                <a  target="_blank" rel="noopener noreferrer" href="https://github.com/YunaAnn"><i className="fab fa-github"></i></a>
                                <a  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anna-grzywnowicz-13637316b/"> <i className="fab fa-linkedin"></i></a> 
                                <a  target="_blank" rel="noopener noreferrer" href="https://yunaannie.artstation.com/"><i className="fab fa-artstation"></i></a>
                                <a  target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/yunaannp/"><i className="fab fa-instagram"></i></a>
                            </div>			
                        </div>
                    </div>
              </div>     
        );
        }

        function ParallaxSkills()
        {return(
                <div className="img-skills">
                    <div className="caption">
                        <span className="border"> Skills </span>
                    </div>
                </div>	
     
        );
        }

        function Skills()
        {return(
                <div className="skills-section">
                    <div className="container">
                       <div className="skills-content">

                                <div className="row">
                                        <div className="col-sm-6">
                                            <h3> <i className="fas fa-code"></i> Front-end </h3>
                                                <h6>CSS </h6>
                                                <h6>HTML </h6>
                                                <h6>JavaScript </h6>
                                                <h6>React </h6>
                                                <h6>Bootsrap </h6>      
                                            <h3> <i className="fas fa-server"></i> Back-end & databases </h3>
                                                <h6>Java </h6>
                                                <h6>MySQL </h6>    
                                            <h3> <i className="fas fa-tools"></i> Tools </h3>
                                                <h6>Visual Studio </h6>
                                                <h6>MySQL Workbench </h6>  
                                                <h6>Android Studio </h6>
                                                <h6>Eclipse </h6>  
                                                <h6>cmder </h6>
                                        </div>

                                        <div className="col-sm-6">
                                            <h3> <i className="fas fa-pencil-alt"></i> Designing </h3>
                                                <h6>UI & UX </h6>
                                                <h6>Figma </h6>  
                                                <h6>Web </h6>
                                                <h6>Mobile </h6>  
                                                <h6>Character design </h6>
                                            <h3> <i className="fas fa-ruler-combined"></i> Design tools </h3>
                                                <h6>PaintTool SAI </h6>
                                                <h6>MediBang Paint Pro </h6>  
                                                <h6>Adobe Photoshop </h6>
                                                <h6>Pencil & Paper </h6>  
                                                <h3 className="other"> <i className="fas fa-square"></i> Other </h3>
                                                    <h6>Internet of Things </h6>  
                                                    <h6>GitHub </h6>
                                                    <h6>Trello </h6>  
                                        </div>
                                </div>
                        </div>     
                    </div>
                </div>	
     
        );
        }

        function ParallaxProjects()
        {return(
                <div className="img-projects">
                    <div className="caption">
                        <span className="border"> Projects </span>
                    </div>
                </div>	      
        );
        }

        function Projects()
        {return(
          <div className="projects-section">    
                <div className="container">	
                <div className="projects-content">	

                    <h3> <i id="green-circle-icon" className="fas fa-circle"></i> Commercial Projects </h3>

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                        <div className="containerLink">
                                            <a href="#" target="_blank" rel="noopener noreferrer" id="commercial1"></a>
                                                <div className="overlay">
                                                    <div className="text"> 
                                                        <div className="container">
                                                            <a target="_blank" rel="noopener noreferrer" href="https://www.gamecity.com.pl/"> <i className="fas fa-angle-right"></i></a> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    <div className="card-body">
                                    <h4> GAMECITY </h4>	
                                            <h6> Video game store website done with <a target="_blank" rel="noopener noreferrer" href="https://github.com/Shaventus"> Shaventus </a> in 2019.</h6> 
                                            <h6> CSS3, HTML5, JavaScript, Bootstrap 4.0, WordPress, Font Awesome 5.10.2</h6>	
                                    </div>
                                </div>
                            </div>  
                        </div>         
                    
                    <h3> <i id="green-circle-icon" className="fas fa-circle"></i> GitHub Projects </h3>

                        <div className="row">
                                    <div className="col-sm-4">
                                        <div className="card">
                                                    <div className="containerLink">
                                                        <a href="#" target="_blank" rel="noopener noreferrer" id="weatherapp"></a>
                                                        <div className="overlay">
                                                            <div className="text"> 
                                                                <div className="container">
                                                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/YunaAnn/WeatherAppReact"> <i className="fab fa-github"></i></a> 
                                                                    <a target="_blank" rel="noopener noreferrer" href="https://yunaann.github.io/WeatherAppReact/"> <i className="fas fa-angle-right"></i></a> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            <div className="card-body">
                                                    <h4> WeatherAppReact </h4>
                                                    <h6> Weather app in React. </h6>
                                                    <h6> HTML5, CSS3, React, Open Weather Map API.</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="card">
                                                    <div className="containerLink">
                                                        <a href="#" target="_blank" rel="noopener noreferrer" id="recipeapp"></a>
                                                        <div className="overlay">
                                                            <div className="text"> 
                                                                <div className="container">
                                                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/YunaAnn/RecipeAppDesignFigma"> <i className="fab fa-github"></i></a> 
                                                                    <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/file/lJ2CE9KZuXiVHZNAfqtL3I/RecipeApp?node-id=0%3A1"> <i className="fas fa-angle-right"></i></a> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            <div className="card-body">  
                                                    <h4> RecipeAppDesignFigma </h4>
                                                    <h6> Recipe app design created in Figma.</h6>
                                                    <h6> Default resolution 414x736 (iPhone 8 Plus).</h6>
                                            </div>
                                        </div>
                                    </div>  
                                    <div className="col-sm-4">
                                        <div className="card">
                                                    <div className="containerLink">
                                                        <a href="#" target="_blank" rel="noopener noreferrer" id="uifront"></a>
                                                        <div className="overlay">
                                                            <div className="text"> 
                                                                <div className="container">
                                                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/YunaAnn/UIFrontEndProjects"> <i className="fab fa-github"></i></a> 
                                                                    <a target="_blank" rel="noopener noreferrer" href="https://yunaann.github.io/UIFrontEndProjects/"> <i className="fas fa-angle-right"></i></a> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            <div className="card-body">
                                                        <h4> UIFrontEndProjects  </h4>
                                                        <h6> -IN PROGRESS- UI Front-End Projects.</h6>
                                                        <h6> HTML5, CSS3, JavaScript, React. </h6> 
                                            </div>
                                        </div>
                                    </div>
                        </div>
                        <div className="row">
                                    <div className="col-sm-4">
                                        <div className="card">
                                                    <div className="containerLink">
                                                        <a href="#" target="_blank" rel="noopener noreferrer" id="sensorapp"></a>
                                                        <div className="overlay">
                                                            <div className="text"> 
                                                                <div className="container">
                                                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/YunaAnn/SensorApp"> <i className="fab fa-github"></i></a> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            <div className="card-body">
                                                    <h4> SensorApp </h4>
                                                    <h6> Android sensor app in Java.  </h6>
                                                    <h6> Motion, position and environment sensors.</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="card">
                                                    <div className="containerLink">
                                                        <a href="#" target="_blank" rel="noopener noreferrer" id="javascriptalgorithms"></a>
                                                        <div className="overlay">
                                                            <div className="text"> 
                                                                <div className="container">
                                                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/YunaAnn/JavaScriptAlgorythms"> <i className="fab fa-github"></i></a> 
                                                                    <a target="_blank" rel="noopener noreferrer" href="https://yunaann.github.io/JavaScriptAlgorithms"> <i className="fas fa-angle-right"></i></a> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            <div className="card-body">  
                                                    <h4> JavaScriptAlgorythms </h4>
                                                    <h6> JavaScript algorithms app.</h6>
                                                    <h6> JavaScript, CSS 3, HTML 5, Bootstrap.</h6>
                                            </div>
                                        </div>
                                    </div>  
                                    <div className="col-sm-4">
                                        <div className="card">
                                                    <div className="containerLink">
                                                        <a href="#" target="_blank" rel="noopener noreferrer" id="uiartpage"></a>
                                                        <div className="overlay">
                                                            <div className="text"> 
                                                                <div className="container">
                                                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/YunaAnn/ArtAppFigmaDesign"> <i className="fab fa-github"></i></a> 
                                                                    <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/file/19Koro17nq3r5PzttJoMNM/Art-Website-App?node-id=0%3A1"> <i className="fas fa-angle-right"></i></a> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            <div className="card-body">
                                                        <h4> ArtAppFigmaDesign </h4>
                                                        <h6> -IN PROGRESS- </h6>
                                                        <h6>  Art app design created in Figma. </h6> 
                                            </div>
                                        </div>
                                    </div>
                        </div>
                                    <div className="icon-projects">
                                        <h4>More projects  <a  target="_blank" rel="noopener noreferrer" href="https://github.com/YunaAnn"><i className="fab fa-github"></i></a> </h4>
                                    
                                    </div>     
                    </div>
                    </div>
                </div>                     
        );
        }

        function Footer()
        {return(
          <div className="footer">
              <div className="container">	
                  <div className="footer-content">	
                  <p> thanks for stopping by! </p>
                        <div className="links">
                                      <a  target="_blank" rel="noopener noreferrer" href="https://github.com/YunaAnn"><i className="fab fa-github"></i></a>
                                      <a  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anna-grzywnowicz-13637316b/"> <i className="fab fa-linkedin"></i></a> 
                                      <a  target="_blank" rel="noopener noreferrer" href="https://yunaannie.artstation.com/"><i className="fab fa-artstation"></i></a>
                                      <a  target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/yunaannp/"><i className="fab fa-instagram"></i></a>
                        </div>
                        <p> © ALL RIGHTS RESERVED </p>		        
                  </div>    
              </div> 
            </div>     	
        );
        }

  
export default App;
