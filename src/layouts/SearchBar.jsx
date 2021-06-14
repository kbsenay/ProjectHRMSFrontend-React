import React from 'react'
import { Dropdown, Button, Menu, Container, Input, Icon } from 'semantic-ui-react'

export default function SearchBar() {
    return (
       
            <Container>
        <Menu position=''>
        <Input type='text' inputPosition='left' icon='search' iconPosition='left' placeholder='Pozisyon, firma, sektör...' />
        <Icon name='map marker alternate' size='large'></Icon>
          <Dropdown item text='Şehir'   >
            <Dropdown.Menu >
              <Dropdown.Item>İstanbul</Dropdown.Item>
              <Dropdown.Item>Ankara</Dropdown.Item>
              <Dropdown.Item>İzmir</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>
            <Button>İŞ ARA</Button>
          </Menu.Item>
        </Menu>
        </Container>
      
    )
}
