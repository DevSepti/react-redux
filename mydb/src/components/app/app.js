import React from "react";

import {Component} from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-services";
import Row from "../row";

import './app.css';


export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true
    }



    componentDidCatch() {
        this.setState({
            hasError: true
        });
    };

    render() {

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> : null;

        const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}>

                <Record field="gender" label="Gender"/>
                <Record field="eyeColor" label="Eye Color"/>
            </ItemDetails>
        )
        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={(getStarshipImage)}>

                <Record field="model" label="Model"/>
                <Record field="length" label="Length"/>
                <Record field="costInCredit" label="Cost"/>

            </ItemDetails>
        )

        return (
            <div>
                <Header/>
                <Row
                    left={personDetails}
                    right={starshipDetails}
                />
            </div>
        );
    };
};