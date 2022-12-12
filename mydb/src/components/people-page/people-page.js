import React, {Component} from "react";

import './people-page.css';
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-services";
import Row from "../row";


export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({selectedPerson});
    };

    render() {
        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapiService.getAllPeople}>
                {(i) => (
                    `${i.name} ( ${i.birthYear})`
                )}
            </ItemList>
        );

        const personDetails = (
            <ItemDetails personId={this.state.selectedPerson}/>
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundry>

        );
    };
};