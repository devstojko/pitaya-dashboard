import React, { Component } from 'react';
import './MainPanel.css';

import AppBar from 'material-ui/AppBar';
import Card from '../Card/Card'

import { Grid, Row, Col } from 'react-flexbox-grid';

const data = {
  cardStats: [
    {
      title: "49/50",
      titleSmall: "GB",
      color: "#fb8c00",
      category: "Used Space",
      stats: "Get More Space...",
      statsIcon: "warning",
      icon: "home",
      id: 1
    },
    {
      title: "$34,245",
      titleSmall: null,
      color: "#4fa953",
      category: "Revenue",
      stats: "Last 24 Hours",
      statsIcon: "date_range",
      icon: "store",
      id: 2
    },
    {
      title: "75",
      titleSmall: null,
      color: "#EA4542",
      category: "Fixed Issues",
      stats: "Tracked from Github",
      statsIcon: "local_offer",
      icon: "info_outline",
      id: 3
    },
    {
      title: "+245",
      titleSmall: null,
      color: "#03AEC3",
      category: "Followers",
      stats: "Just Updated",
      statsIcon: "update",
      icon: "people",
      id: 4
    }
  ]
}

class MainPanel extends Component {
  render() {
    const defaultClassName = "MainPanel";
    const activeClassName = "MainPanel--active";
    const isActive = `${defaultClassName} ${!this.props.isActive ? '' : activeClassName}`;

    return (
      <div className={isActive}>
        <AppBar
          title="Material Dashboard"
          onLeftIconButtonTouchTap={this.props.triggerParentUpdate}
        />
        <div className="MainPanel__content">
          <Grid fluid>
            <Row>
              {
                data.cardStats.map( item =>
                  <Col key={item.id} xs={12} sm={6} lg={3}>
                    <Card title={item.title} titleSmall={item.titleSmall} category={item.category} headerStats={true} headerBck={item.color} icon={item.icon} stats={item.stats} statsIcon={item.statsIcon}/>
                  </Col>
                )
              }
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default MainPanel;
