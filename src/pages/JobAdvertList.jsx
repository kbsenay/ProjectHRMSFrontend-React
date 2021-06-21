import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Header, Segment, Container } from 'semantic-ui-react'
import JobAdvertService from '../Services/jobAdvertService'

export default function JobAdvertList() {

    const [jobAdverts, setJobAdverts] = useState([])

    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getAllByIsActiveTrue().then(result => setJobAdverts(result.data.data))
    }, []);

    return (

        <div>
            <Header as='h2'>İş İlanları</Header>
            {
                    jobAdverts.map(jobAdvert => (
            <Card.Group>
               
                        <Card fluid>
                            <Container>
                        <Link to={`/is-ilanlari/${jobAdvert.id}`} >
                                <Card.Content>
                                    <Image
                                        floated='left'
                                        size='small'
                                        src={jobAdvert.photo}
                                    />
                                    
                                    <Card.Header><font size="5" color="black">{jobAdvert.jobPosition?.position}</font></Card.Header>
                                    <Card.Meta>{jobAdvert.employer?.companyName}</Card.Meta>
                                    <Card.Meta>{jobAdvert.city?.cityName}</Card.Meta>
                                    <Card.Description>
                                        <p><font face="tahoma" size="5" color="maroon">
                                            <b>{jobAdvert.jobDescription}</b></font></p>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div>
                                        
                                        <Segment basic floated='right'>{jobAdvert.publishedDate}</Segment>
                                            
                                       
                                    </div>
                                </Card.Content>
                                </Link>
                                </Container>
                        </Card>
                       
                   
            </Card.Group>
            
             ))}
        </div>
    )
}
