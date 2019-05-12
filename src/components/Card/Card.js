import React from "react";
import "./style.css";


const Cards = props => (
    <div class="card agencySubCards">
    <div class="card-body">
    <div className=" row one_card">
        <div className=" col col-sm-3 image_box">
            <img className="card-img-top img-responsive" alt={props.name} src={props.image} />
            <h5>{props.name}</h5>
        </div>
        <div className="col col-sm-9 agencyDetails">
        
            <p>{props.address}</p>
            <p>{props.phone}</p>
            <p><a href={props.url} target="_blank" class="btn agenciesButton rubberBand">Website</a></p>
            </div>  
        </div>
        </div>
        </div>
   



)


{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */}

export default Cards;