import React from "react";
import { withTranslation } from 'react-i18next';
import "./home.css";
import BackgroundImage1 from './flag-2.jpg';
import BackgroundImage2 from './kidsgroup.jpg';
import BackgroundImage3 from './immigrants.png';
import ThumbnailImage1 from './multicolour.jpg';
import ThumbnailImage2 from './multiracial-hands.jpeg';
import ThumbnailImage3 from './unity-2.png';
import ThumbnailImage4 from './love-grow-serve.jpg';


class Home extends React.Component {
  constructor({ t, i18n }) {
    super({ t, i18n })
    this.t = t
  }
  render () {
    return (
 
<div className="container-fluid">
  <div className="row">

  <div className="col col-sm-4">
    <p><h1 className = "motto">{this.t('Arrive and Thrive')}</h1></p>
  </div>

  <div className="col col-sm-8">
<div id="carouselSlides" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <img src={BackgroundImage1} className="mx-auto d-block slide"  alt="not found"/>
    </div>
    <div className="carousel-item">
      <img src={BackgroundImage2} className="mx-auto d-block w-100 slide" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={BackgroundImage3} className="mx-auto d-block w-90 slide" alt="..."/>
    </div>
    </div>
  </div>
</div>

</div>
<br/>

<div className="row">
 
  <div className="col col-sm-5">
    <div className="card">
      <div className="card-header">
        {this.t("Latest News")}
             </div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus. Auctor urna nunc id cursus metus aliquam eleifend mi in. Orci eu lobortis elementum nibh tellus. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Est pellentesque elit ullamcorper dignissim cras. Euismod nisi porta lorem mollis aliquam ut porttitor leo a.</li>
        <li className="list-group-item">Sed viverra ipsum nunc aliquet bibendum enim. Cursus sit amet dictum sit amet justo donec. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Tortor dignissim convallis aenean et. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Ullamcorper malesuada proin libero nunc consequat. Aenean pharetra magna ac placerat vestibulum lectus.</li>
        <li className="list-group-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus. Auctor urna nunc id cursus metus aliquam eleifend mi in. Orci eu lobortis elementum nibh tellus. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Est pellentesque elit ullamcorper dignissim cras. Euismod nisi porta lorem mollis aliquam ut porttitor leo a.</li>
      </ul>
    </div>
  </div>
  </div>
    
  <div className="row">
  <div className="col">
<img src={ThumbnailImage1} className="rounded-circle" alt="Cinque Terre" width="304" height="236"/>
</div>
<div className="col">
<img src={ThumbnailImage2} className="rounded-circle" alt="Cinque Terre" width="304" height="236"/>
</div>
<div className="col">
<img src={ThumbnailImage3} className="rounded-circle" alt="Cinque Terre" width="304" height="236"/>
</div>
</div>
</div>

    )
  }
}

export default withTranslation()(Home);  