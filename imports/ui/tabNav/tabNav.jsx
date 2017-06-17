import React from 'react';
import { observer } from "mobx-react"
import { Center, Page, VBox, Box } from 'react-layout-components';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import Divider from 'material-ui/Divider';
import PersonOutline from 'material-ui/svg-icons/social/person-outline'
import People from 'material-ui/svg-icons/social/people'
import DateRange from 'material-ui/svg-icons/action/date-range'
import Equalizer from 'material-ui/svg-icons/av/equalizer'
import Dashboard from 'material-ui/svg-icons/action/dashboard'
import FormatListNumbered from 'material-ui/svg-icons/editor/format-list-numbered'
import GeneralState from '../general/state'

let tabStyle = {
    box: {
        textAlign: 'center',
        zIndex: '3',
        borderTop: '2px solid #2790B0'
    },
    selectedBox:{
        color: '#ECF0F1',
        background: 'linear-gradient(90deg, #142131, #2E4256)',
        boxShadow: "2px 2px 5px rgba(0,0,0,.4)",
        zIndex: '4',
        borderTop: '2px solid #DE4A3A',
    },
    text: {
        fontSize: '13px'
    },
    icon:{
        color: '#34495E',
        marginTop: '10px',
        width: '100%'

    },
    selectedIcon:{
        mixBlendMode: 'screen',
        color: '#2ECC71',
        marginTop: '10px',
    }
}

const TabNav = ({selected}) => {
    return (
            <VBox style={{
                'position' : 'absolute',
                'bottom' : '0',
                'zIndex' : '2',
                'backgroundColor' : '#ECF0F1',
                'fontFamily' : 'sans-serif'
            }}
            justifyContent='space-between'>
            <Box>
                <BottomNavigation
                    style={{width: '100vw'}}
                    selectedIndex={selected-1}>
                    <BottomNavigationItem
                        icon={<Dashboard/>}
                        label="Dashboard"
                        onTouchTap={()=>{GeneralState.changeTab(1)}}
                        iconStyle={selected == 1 ? tabStyle.selectedIcon : tabStyle.icon}
                        style={selected == 1 ? tabStyle.selectedBox : tabStyle.box}>
                    </BottomNavigationItem>
                    <BottomNavigationItem
                        icon={<People/>}
                        label="Contact Us"
                        onTouchTap={()=>{GeneralState.changeTab(2)}}
                        iconStyle={selected == 2 ? tabStyle.selectedIcon : tabStyle.icon}
                        style={selected == 2 ? tabStyle.selectedBox : tabStyle.box}>
                    </BottomNavigationItem>
                    <BottomNavigationItem
                        icon={<Equalizer/>}
                        label="Logout"
                        onTouchTap={()=>{GeneralState.changeTab(3)}}
                        iconStyle={selected == 3 ? tabStyle.selectedIcon : tabStyle.icon}
                        style={selected == 3 ? tabStyle.selectedBox : tabStyle.box}>
                    </BottomNavigationItem>
                </BottomNavigation>
            </Box>
        </VBox>
        )
}

TabNav.propTypes = {
    selected: React.PropTypes.number.isRequired
}

export default observer(TabNav)
