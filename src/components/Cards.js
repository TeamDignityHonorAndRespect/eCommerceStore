import React, { Component } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import sampleImage from '../sampleimage.jpg';

class CardExampleCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: "Placeholder product name",
        }
    }
    render() {
        return (
            <Card>
                <Image src={sampleImage} />
                <Card.Content>
                    <Card.Header>{this.state.productName}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Created 2015</span>
                    </Card.Meta>
                    <Card.Description>Short Product Description</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name="star outline" handleclick="liked(event)" />
                        22 People Like this Item
      </a>
                </Card.Content>
            </Card>
        );
    }
}

export default CardExampleCard