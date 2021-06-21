import React, { useEffect, useState } from 'react'
import { Button, Menu, Dropdown } from 'semantic-ui-react'
import CityService from '../Services/cityService';
import JobPositionService from '../Services/jobPositionService';


export default function SideBar() {


    const [cities, setCities] = useState([])

    useEffect(() => {
        let cityService = new CityService()
        cityService.getAll().then(result => {
            setCities(result.data.data)

        });
    }, [])

    const [jobPositions, setJobPositions] = useState([])

    useEffect(() => {
        let jobPositionService = new JobPositionService()
        jobPositionService.getAll().then(result => {
            setJobPositions(result.data.data)
        });
    }, []);

    const cityOption = cities.map((city, index) => ({
        key: index,
        text: city.cityName,
        value: city.id,
    }));

    const jobPositionOption = jobPositions.map((jobPosition, index) => ({
        key: index,
        text: jobPosition.position,
        value: jobPosition.id,
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

            <Dropdown
            style={{marginTop:'2em'}}
                fluid
                clearable
                item
                placeholder="Pozisyon"
                search
                selection
                multiple
                options={jobPositionOption}
            />

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
