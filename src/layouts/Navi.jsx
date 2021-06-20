import React, { useState } from 'react'
import { Menu, Container, Image } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
            <Container className="navi" style={{marginLeft:'0.5em'},{marginRight:'1em'}} >
            <Menu  size='large'>
                
                    <Menu.Item name='Ana Sayfa' as={Link} to={"/"}>
                        < Image
                        size='mini'
                            src='https://res.cloudinary.com/kbsenay/image/upload/v1623965559/HRMSProject/HRMS_Logo_be7mw9.jpg'
                       />
                    </Menu.Item>


                    <Menu.Menu position='right'>
                    {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
                    </Menu.Menu>
                    </Menu>
                </Container>

           
        </div>
    )
}
