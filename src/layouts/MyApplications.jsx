import React from 'react'
import { Menu, Header } from 'semantic-ui-react'

export default function MyApplications(props) {
    return (
        <div>
            <Menu.Menu position='left'>
                <Menu.Item color='teal'>
                    <a href="/basvurularim" >
                        <Header as='h2' color='teal'>
                            Başvurularım
                        </Header>
                    </a>
                </Menu.Item>
            </Menu.Menu>
        </div>
    )
}
