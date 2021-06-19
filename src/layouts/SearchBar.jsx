import React from 'react'
import { Dropdown, Button, Menu, Container, Input, Icon, Form } from 'semantic-ui-react'
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

export default function SearchBar() {

  return (


    <Container>
      <div>
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
          <Button><a>İŞ ARA</a></Button>
        </Menu.Item>
        <Menu.Item>
          <div class="detailed-search">
            <a href="http://localhost:3000/jobAdverts/" onClick="('http://localhost:3000/jobAdverts/')">
              DETAYLI ARA
            </a>
          </div>

        </Menu.Item>
      </Menu>
      </div>
    </Container>

  )
}
