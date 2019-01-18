import _ from 'underscore'
import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
const sampleImage = '../sampleImage.jpg'

const columns = _.times(35, i => (
    <Grid.Column>
        <Grid.Row key={i}>
            <Image src='https://via.placeholder.com/300' id={"gridImage" + i} />
        </Grid.Row>
    </Grid.Column>
))

const GridExampleGrid = () => <Grid>{columns}</Grid>

export default GridExampleGrid