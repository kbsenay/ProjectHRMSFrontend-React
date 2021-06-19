import React from 'react'
import JobAdvertList from '../pages/JobAdvertList';
import { Grid} from 'semantic-ui-react';
import SideBar from './SideBar';
import { Route } from 'react-router';
import JobAdvertDetail from '../pages/JobAdvertDetail';


export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                <Grid.Column width={4}>
                <Route exact path="/jobAdverts" component={SideBar}/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                    <Route exact path="/" />
                    <Route exact path="/jobAdverts" component={JobAdvertList} />
                    <Route path="/jobAdverts/:id" component={JobAdvertDetail} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
           
        </div>
    )
}
