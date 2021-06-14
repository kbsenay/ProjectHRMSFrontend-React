import React from 'react'
import { Button, Menu} from 'semantic-ui-react'

export default function SideBar() {
    return (
        <div>
            <Menu vertical>
                <Menu.Item
                    name='Şehir'


                >
                    Şehir
                </Menu.Item>
            </Menu>

            <Menu vertical>
                <Menu.Item
                    name='İş Pozisyonu'

                >

                    İş Pozisyonu
                </Menu.Item>

                <Menu.Item
                    name='Eğitim Seviyesi'

                >

                    Eğitim Seviyesi
                </Menu.Item>
                <Menu.Item>
                    <Button color='blue'>Uygula</Button>
                </Menu.Item>
            </Menu>
        </div>
    )
}