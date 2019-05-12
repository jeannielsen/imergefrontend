import React from "react";
import { useTranslation } from 'react-i18next';
import "./home.css";
import BackgroundImage1 from './flag-2.jpg';
import BackgroundImage2 from './kidsgroup.jpg';
import BackgroundImage3 from './immigrants.png';
import ThumbnailImage1 from './multicolour.jpg';
import ThumbnailImage2 from './multiracial-hands.jpeg';
import ThumbnailImage3 from './unity-2.png';
import ThumbnailImage4 from './color-hand.jpg';
import BackgroundImage4 from './flag-3.png';
import BackgroundImage5 from './kids-flag.jpg';
import BackgroundImage6 from './love-grow-serve.jpg';



class Home extends React.Component {
  render () {
    return (
 
<div className="container-fluid">
  <div className="row">

  <div className="col col-sm-8">
<div id="carouselSlides" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <img src={BackgroundImage1} className="mx-auto d-block w-90 slide"  alt="not found"/>
    </div>
    <div className="carousel-item">
      <img src={BackgroundImage2} className="mx-auto d-block w-90 slide" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={BackgroundImage3} className="mx-auto d-block w-90 slide" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={BackgroundImage4} className="mx-auto d-block w-90 slide" alt="..."/>
    </div>
    {/* <div className="carousel-item">
      <img src={BackgroundImage5} className="mx-auto d-block w-90 slide" alt="..."/>
    </div> */}
    </div>
  </div>
</div>

  <div className="col col-sm-4 flex-container">
  
    <div className = "motto display-1">Arrive</div>
  <div className = "motto display-1">&</div>
  <div className = "motto display-1">Thrive</div>
  </div>

 

</div>
<br/>

<div className="row">
 
  <div className="col">
    <div className="card">
      <div className="card-header homeServicesHeader">
       <h3> Our Services</h3>
      </div>
        <div className="card-body">
        <p className="homeServicesPara">
        We believe that diversity makes America stronger and that we should celebrate, not just tolerate the differing cultural expressions and ideals that immigrants bring to this country. Diversity broadens our perspective, bringing new ideas and different experiences which inspires innovation and creativity. A diverse society facilitates acceptance. It teaches us to accept differences in others and look beyond language, race, and religion.
We also strive to help immigrants integrate into American society and deal with the bureaucracy and laws required to become a productive American citizen.
          </p>
          <div className="row">
  <div className="col">
<img src={ThumbnailImage1} className="rounded-circle" alt="Cinque Terre" width="184" height="156"/>
<figcaption className="thumbnailCaption">&emsp;Agencies Info</figcaption>
</div>
<div className="col">
<img src={ThumbnailImage2} className="rounded-circle" alt="Cinque Terre" width="184" height="156"/>
<figcaption className="thumbnailCaption">&emsp;Nearby Facilities map</figcaption>
</div>
<div className="col">
<img src={ThumbnailImage3} className="rounded-circle" alt="Cinque Terre" width="184" height="156"/>
<figcaption className="thumbnailCaption">Latest News</figcaption>
</div>
<div className="col">
<img src={ThumbnailImage4} className="rounded-circle" alt="Cinque Terre" width="184" height="156"/>
<figcaption className="thumbnailCaption">Translator</figcaption>
</div>
</div>

        </div>
      </div>
  </div>
  </div>
    
  
</div>

    )
  }
}

export default Home;   