import React from 'react';
import './Sidebar.css';

import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/action/search';

import {List, ListItem} from 'material-ui/List';
import ContentDashboard from 'material-ui/svg-icons/action/dashboard';
import ContentNotifications from 'material-ui/svg-icons/social/notifications';
import ContentPerson from 'material-ui/svg-icons/social/person';

import Divider from 'material-ui/Divider';

const ListStyle = {
  padding: 0
}

const SearchInputStyle = {
  width: "200px"
}

const NavList = {
  padding: 0,
  marginTop: "20px"
}

const Sidebar = (props) => {
    return (
      <div className="Sidebar">
        <div className="Sidebar__logo">
          <h1>Some Logo</h1>
        </div>
        <div className="Sidebar__wrapper">
          <div className="Sidebar__form">
            <TextField
              hintText="Search" style={SearchInputStyle}
            />
            <FloatingActionButton mini={true} >
              <ContentAdd />
            </FloatingActionButton>
          </div>
          <List style={ListStyle}>
            <ListItem primaryText="Dashboard" leftIcon={<ContentDashboard />} />
            <ListItem primaryText="5 Notifications" leftIcon={<ContentNotifications />} />
            <ListItem primaryText="Profile" leftIcon={<ContentPerson />} />
          </List>

          <List style={NavList}>
            <ListItem primaryText="Dashboard" leftIcon={<ContentDashboard />} />
            <ListItem primaryText="5 Notifications" leftIcon={<ContentNotifications />} />
            <ListItem primaryText="Profile" leftIcon={<ContentPerson />} />
            <ListItem primaryText="Dashboard" leftIcon={<ContentDashboard />} />
            <ListItem primaryText="5 Notifications" leftIcon={<ContentNotifications />} />
            <ListItem primaryText="Profile" leftIcon={<ContentPerson />} />
            <ListItem primaryText="Profile" leftIcon={<ContentPerson />} />

            <ListItem primaryText="5 Notifications" leftIcon={<ContentNotifications />} />
            <ListItem primaryText="Profile" leftIcon={<ContentPerson />} />
            <ListItem primaryText="Profile" leftIcon={<ContentPerson />} />
            <ListItem primaryText="5 Notifications" leftIcon={<ContentNotifications />} />
            <ListItem primaryText="Profile" leftIcon={<ContentPerson />} />
            <ListItem primaryText="Profile" leftIcon={<ContentPerson />} />
            <ListItem primaryText="5 Notifications" leftIcon={<ContentNotifications />} />
            <ListItem primaryText="Profile" leftIcon={<ContentPerson />} />
            <ListItem primaryText="Profile" leftIcon={<ContentPerson />} />
          </List>
        </div>
      </div>
    );
  }

export default Sidebar;
