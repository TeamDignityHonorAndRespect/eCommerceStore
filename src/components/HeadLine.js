import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const HeadLine = () => (
  <Header as='h2' icon className="headline">
    <Icon name='money' />
    Bargain Depot
    <Header.Subheader>Buy Stuff, Sell Stuff, Stuff Stuff.</Header.Subheader>
  </Header>
)

export default HeadLine;