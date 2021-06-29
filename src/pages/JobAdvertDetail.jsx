import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';
import JobAdvertService from '../Services/jobAdvertService';
import { useDispatch } from 'react-redux';
// import { applyToJobAdvert } from '../store/actions/jobAdvertApplyActions';




export default function JobAdvertDetail() {

    // const dispatch = useDispatch()
    let { id } = useParams()

    const [jobAdvert, setJobAdvert] = useState({});

    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getAllById(id).then(result => setJobAdvert(result.data.data))
    }, []);

    // const handleApplyJobAdvert = (jobAdvert) => {
    //     dispatch(applyToJobAdvert(jobAdvert))
    // }

    return (
        <div>

            <Card.Group>
                <Card fluid>
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
                            <Button floated='right' color='teal' >BAŞVUR</Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
