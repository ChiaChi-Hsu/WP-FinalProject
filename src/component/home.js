import React from 'react';
import './home.css';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import Health from './health'


export default function Home(){
    return(
        <div class="all">
            <div class="container">
                <div>
                    <Health/>
                </div>
                <div class="intro">
                    <h5>In daily life, how does food provide us with energy for nutrition?</h5>
                    <h5>Food are divided into six categories: Grains, Vegetables, Meats and Protein, Ｍilk and Diary products, Fruits, Fats.</h5>
                    <h5>We are going to introduce three of these categories!</h5>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div>
                    <h6>Have a healthy diet.</h6>
                </div>
                <div class="icon">
                    <RestaurantIcon fontSize="large"/>
                    <DirectionsWalkIcon fontSize="large"/>
                </div>
            </div>
        </div>       
    );
}
