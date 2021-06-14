import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
            <Menu.Item>
                <Button primary>Kayıt Ol</Button>
                <Button onClick={props.signIn}  positive>Aday Girişi</Button>
            </Menu.Item>
        </div>
    )
}
