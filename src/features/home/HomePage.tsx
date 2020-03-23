import React, { FC } from 'react'
import { Segment, Container, Header, Button, Icon,Image } from 'semantic-ui-react'
import { HomePageFromProp } from './Entity/HomePageEntity'

export const HomePage:FC<HomePageFromProp> = (prop) => {
     const{history} =prop;
    const  handleGetStarted=(path:string)=>{
            history.push(path);
     } 
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
        <Container text>
          <Header as='h1' inverted>
            <Image
              size='massive'
              src='/assets/logo.png'
              alt='logo'
              style={{ marginBottom: 12 }}
            />
            Re-vents
          </Header>
          <Button size='huge' inverted onClick={()=>handleGetStarted('/events')}>
            Get started
            <Icon name='arrow right' inverted />
          </Button>
        </Container>
      </Segment>
    
    )
}
