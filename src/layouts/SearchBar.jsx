import React, { useState, useEffect } from 'react'
import { Dropdown, Button, Menu, Container, Input, Icon } from 'semantic-ui-react'
import CityService from '../Services/cityService';



export default function SearchBar() {

  const [cities, setCities] = useState([])

  useEffect(() => {
    let cityService = new CityService()
    cityService.getAll().then(result => {
      setCities(result.data.data)

    });
  }, [])

  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));

  return (


    <Container>
      <div>
        <Menu className="searchbar">
          <Input type='text' inputPosition='left' icon='search' iconPosition='left' placeholder='Pozisyon, firma, sektör...' />
          
            <Dropdown
              clearable
              item content icon='map marker alternate'
              placeholder="Şehir"
              search
              selection
              options={cityOption} />
            
          






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
