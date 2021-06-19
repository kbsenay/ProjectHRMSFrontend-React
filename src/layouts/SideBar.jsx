import React, { useEffect, useState } from 'react'
import { Button, Menu, Dropdown } from 'semantic-ui-react'
import CityService from '../Services/cityService'
import _ from 'lodash'
import axios from 'axios'



export default function SideBar() {

    const city = axios.city
    const cityOptions = _.map(axios.city, (city, axios) => ({
        key: axios.city,
        text: city,
        value: axios.city,
      }))

      const DropdownCityMultipleSearchSelection = () => (
        <Dropdown placeholder='Şehir' fluid multiple selection search options={cityOptions} >
        <Dropdown.Menu>
            {
                cities.map(city => (
                    <Dropdown.Item >{city.cityName}</Dropdown.Item>
                ))
            }
        </Dropdown.Menu>
    </Dropdown>
    )

    

    const [cities, setCities] = useState([])

    useEffect(() => {
        let cityService = new CityService()
        cityService.getAll().then(result => {
            setCities(result.data.data)

        });
    }, [])

    




    return (
        <div>
            

            <DropdownCityMultipleSearchSelection/>



            <Menu vertical>
                <Menu.Item
                    name='İş Pozisyonu'

                >

                    İş Pozisyonu
                </Menu.Item>
            </Menu>

            <Menu vertical>
                <Menu.Item
                    name='Eğitim Seviyesi'

                >

                    Eğitim Seviyesi
                </Menu.Item>
            </Menu>
            <Button.Group>
                <Button color='blue'>Uygula</Button>
            </Button.Group>


        </div>
    )
}
