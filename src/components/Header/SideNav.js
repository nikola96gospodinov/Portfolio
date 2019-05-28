import React from 'react'
import SideNav from 'react-simple-sidenav'

import SideNavItems from './sideNav_items'
import Social from './Social'

const SideNavigation = (props) => {
    return (
        <div>
            <SideNav
                showNav = {props.showNav}
                onHideNav = {props.onHideNav}
                navStyle = {{
                    background:'#242424',
                    maxWidth: '12.5%'
                }}
            >
                <SideNavItems/>
                <Social/>
            </SideNav>
        </div>
    )
}

export default SideNavigation