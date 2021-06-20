import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
            <Menu.Item>
                <Button color='teal'>İş İlânı Ver</Button>
                <Button  basic color='teal' style={{marginLeft:'2em', marginRight:'2em'}} >İşveren Girişi</Button>
                <Button primary style={{marginRight:'0.5em'}} >Kayıt Ol</Button>
                <Button onClick={props.signIn} positive>Aday Girişi</Button>
            </Menu.Item>
        </div>
    )
}


