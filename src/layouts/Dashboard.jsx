import React from 'react'
import JobAdvertList from '../pages/JobAdvertList';
import { Grid} from 'semantic-ui-react';
import SideBar from './SideBar';
import { Route } from 'react-router';
import JobAdvertDetail from '../pages/JobAdvertDetail';
import { Image } from 'semantic-ui-react'
import NewJobAdvert from '../pages/NewJobAdvert';
import NewJobAdvertAdd from '../pages/NewJobAdvertAdd';





export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                <Grid.Column width={4}>
                <Route exact path="/is-ilanlari" component={SideBar}/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        
                    <Route exact path="/" >
                        < Image
                        size='large'
                            src='https://res.cloudinary.com/kbsenay/image/upload/v1623965559/HRMSProject/HRMS_Logo_be7mw9.jpg'
                       /></Route>
                    
                    <Route exact path="/isveren"/>
                    {/* <Route  path="/is-ilani-ver2" component={NewJobAdvert} /> */}
                    <Route  path="/is-ilani-ver" component={NewJobAdvertAdd} />
                    <Route exact path="/is-ilanlari" component={JobAdvertList} />
                    <Route path="/is-ilanlari/:id" component={JobAdvertDetail} />
                    <Route path="/basvurularim"/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
           
        </div>
    )
}
