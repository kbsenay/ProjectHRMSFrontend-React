import React from 'react'
import { Menu, Button} from 'semantic-ui-react'

export default function JobAdvertAccess() {
    return (
        <div>
            <Menu.Menu position='right'>
                <Menu.Item >
                    <Button color='teal'  >
                        <a href="/is-ilani-ver" target="_blank">
                            İş İlânı Ver
                        </a>
                    </Button>
                </Menu.Item>
            </Menu.Menu>
        </div>
    )
}
