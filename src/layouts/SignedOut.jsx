import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
            <Menu.Item>

                <Button basic color='teal' style={{ marginLeft: '2em', marginRight: '2em' }}
                    as={Link} to={"/isveren"} target="_blank" >İşveren Girişi
                </Button>
                <Button primary style={{ marginRight: '0.5em' }} >Kayıt Ol</Button>
                <Button onClick={props.signIn} positive>Aday Girişi</Button>
            </Menu.Item>
        </div>
    )
}


