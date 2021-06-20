import React, { useEffect, useState } from 'react'
import { Button, Menu, Dropdown } from 'semantic-ui-react'
import CityService from '../Services/cityService';


export default function SideBar() {


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
        <div>
            <Dropdown
                fluid
                clearable
                item
                placeholder="Şehir"
                search
                selection
                multiple
                options={cityOption}
            />





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
