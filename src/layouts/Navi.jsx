import React, {useState} from 'react'
import { Button, Menu, Container, Image } from 'semantic-ui-react'
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

//name='Anasayfa' 
    return (
        <div>
            <Menu size='large'>
                <Container className="navi">
                    <Menu.Item name='Ana Sayfa' as={Link} to={"/"}>
                       <Image
                       size='mini'
                       src='https://res.cloudinary.com/kbsenay/image/upload/v1623965559/HRMSProject/HRMS_Logo_be7mw9.jpg'
                   />
                    </Menu.Item>
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
