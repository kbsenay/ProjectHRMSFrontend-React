import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Menu, Table } from 'semantic-ui-react'
import JobAdvertService from '../Services/jobAdvertService'
 
export default function JobAdvertList() {

    const [jobAdverts, setJobAdverts] = useState([])

    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getAllByIsActiveTrue().then(result=>setJobAdverts(result.data.data))
    }, []);

    return (

        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                    <Table.HeaderCell>İşveren</Table.HeaderCell>
                    <Table.HeaderCell>Şehir</Table.HeaderCell>
                        <Table.HeaderCell>İlân Açıklaması</Table.HeaderCell>
                        {/* <Table.HeaderCell>Min Ücret</Table.HeaderCell> */}
                        <Table.HeaderCell>Maks Ücret</Table.HeaderCell>
                        <Table.HeaderCell>Alınacak Kişi Sayısı</Table.HeaderCell>
                        <Table.HeaderCell>Yayın Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Yayında Kalma Süresi</Table.HeaderCell>
                        <Table.HeaderCell>İletişim</Table.HeaderCell>
                        <Table.HeaderCell>Web Adres</Table.HeaderCell>
                       
                        
                        
                       
                        
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdverts.map(jobAdvert => (
                            <Table.Row key={jobAdvert.id}>
                                <Table.Cell><Link to={`/jobAdverts/${jobAdvert.id}`} >{jobAdvert.jobPosition.position}</Link></Table.Cell>
                                <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvert.city.cityName}</Table.Cell>
                                <Table.Cell>{jobAdvert.jobDescription}</Table.Cell>
                                <Table.Cell>{jobAdvert.maxSalary}</Table.Cell>
                                <Table.Cell>{jobAdvert.vacantPosition}</Table.Cell>
                                <Table.Cell>{jobAdvert.publishedDate}</Table.Cell>
                                <Table.Cell>{jobAdvert.deadline}</Table.Cell>
                                <Table.Cell>{jobAdvert.employer.phoneNumber}</Table.Cell>
                                <Table.Cell>{jobAdvert.employer.wedAddress}</Table.Cell>
                                
                               
                            </Table.Row>
                        ))}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
