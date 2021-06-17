import React, {useState} from 'react'
import { Button, Menu, Container } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useHistory } from 'react-router-dom'

export default function Navi() {

const [isAuthenticated, setIsAuthenticated] = useState(true)
const history = useHistory()

function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
}

function handleSignIn() {
    setIsAuthenticated(true)
}

    return (
        <div>
            <Menu size='large'>
                <Container>
                    <Menu.Item
                         name='Anasayfa'
                    />
                    <Menu.Menu position='right'>


                        <Menu.Item>
                            <Button color='teal'>İş İlânı Ver</Button>
                        </Menu.Item>
                        <Menu.Item>
                            <Button basic color='teal'>İşveren Girişi</Button>
                        </Menu.Item>
                        {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}    
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
