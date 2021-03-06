import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const HeadLine = () => (
  <Header as='h2' icon className="headline">
    <Icon name='money' className="headIcon" />
    Bargain Depot
    <Header.Subheader>Buy Stuff | Sell Stuff | Your Stuff</Header.Subheader>
  </Header>
)

export default HeadLine;