import React from 'react'
import { Button, Menu, Container } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Menu size='large'>
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Menu position='right'>


                        <Menu.Item>
                            <Button color='teal'>İş İlânı Ver</Button>
                            </Menu.Item>
                            <Menu.Item>
                            <Button basic color='teal'>İşveren Girişi</Button>
                            </Menu.Item>
                            <Menu.Item>
                            <Button.Group>
                                <Button primary>Kayıt Ol</Button>
                                <Button positive>Aday Girişi</Button>
                            </Button.Group>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
