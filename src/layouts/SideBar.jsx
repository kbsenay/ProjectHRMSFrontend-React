import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Dropdown, Icon, Header, Divider, Container } from 'semantic-ui-react'
import CityService from '../Services/cityService';
import JobPositionService from '../Services/jobPositionService';
import GradeLevelService from '../Services/gradeLevelService';


export default function SideBar() {


    const [cities, setCities] = useState([])

    const [jobPositions, setJobPositions] = useState([])

    const [gradeLevels, setgradeLevels] = useState([])

    useEffect(() => {
        let cityService = new CityService()
        cityService.getAll().then(result => {
            setCities(result.data.data)

        });
    }, [])

    useEffect(() => {
        let jobPositionService = new JobPositionService()
        jobPositionService.getAll().then(result => {
            setJobPositions(result.data.data)
        });
    }, []);

    useEffect(() => {
        let gradeLevelService = new GradeLevelService()
        gradeLevelService.getAll().then(result => {
            setgradeLevels(result.data.data)
        });
    }, [])

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

    const gradeLevelOption = gradeLevels.map((gradeLevel, index) => ({
        key: index,
        text: gradeLevel.graduationLevel,
        value: gradeLevel.id,
    }));

    const countries = [
        { key: 1, text: 'Türkiye', value: 1 },
    ]


    return (
        <div>
            <Header as='h2'>Filtreler</Header>

            <Container className="filterContainer">
                <Divider ></Divider>
                
                <Header as='h3'><Icon name="periscope" size='big' />  Konum</Header>
                <Header as='h5'>Ülke</Header>
                <Dropdown clearable placeholder="Ülke Seç" search selection options={countries} />
                <Header as='h5'>Şehir</Header>
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
                <Divider />
                <Header as='h5'><Icon name="tag" size='big' />Pozisyon</Header>
                <Dropdown
                    style={{ marginTop: '2em' }}
                    fluid
                    clearable
                    item
                    placeholder="Pozisyon"
                    search
                    selection
                    multiple
                    options={jobPositionOption}
                />
                <Divider />
                <Header as='h5'><Icon name="pencil alternate" size='big' />Eğitim Düzeyi</Header>

                <Dropdown
                    style={{ marginTop: '2em' }}
                    fluid
                    clearable
                    item
                    placeholder="Eğitim Düzeyi"
                    search
                    selection
                    multiple
                    options={gradeLevelOption}
                />
                <Divider ></Divider>
                <Header as='h3'><Icon name="user" size='big' />  Çalışma Şekli</Header>
                <ul>
                    <li>
                        <Checkbox label='Tümü' />
                    </li>
                    <li>
                        <Checkbox label='Tam Zamanlı' />
                    </li>
                    <li>
                        <Checkbox label='Yarı Zamanlı' />
                    </li>
                    <li>
                        <Checkbox label='Dönemsel' />
                    </li>
                    <li>
                        <Checkbox label='Stajyer' />
                    </li>
                    <li>
                        <Checkbox label='Uzaktan' />
                    </li>
                </ul>
                </Container>
                <Button.Group>
                    <Button color='blue'>Uygula</Button>
                </Button.Group>

           
        </div>
    )
}
