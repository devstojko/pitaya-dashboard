import React, { Component } from 'react';
import './MainPanel.css';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import ContentWarning from 'material-ui/svg-icons/alert/warning';

import { Grid, Row, Col } from 'react-flexbox-grid';

const CardContainerStle = {
  margin: "25px 0"
}

const CardHeaderStyle = {
  float: "left",
  margin: "-20px 15px 0",
  padding: "0"
}

const CardHeaderStatsStyle = {
  width: "86px",
  height: "86px",
  marginTop: "-16px",
  backgroundColor: "#FC9107"
}

const DividerStyle = {
  width: "100%"
}

const CardTextStyle = {
  textAlign: "right"
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
              <Col xs={12} sm={6} lg={3}>
                <Card className="CARD" style={CardContainerStle}>
                  <CardHeader style={CardHeaderStyle}>

                    <Paper style={CardHeaderStatsStyle}>
                      <ContentWarning />
                    </Paper>

                  </CardHeader>
                  <CardText style={CardTextStyle}>
                    <p>Used Space</p>
                    <h3>49/50<small>GB</small></h3>

                  </CardText>

                  <CardActions>
                    <Divider style={DividerStyle}/>
                    <FlatButton
                      href="https://github.com/callemall/material-ui"
                      target="_blank"
                      label="Get More Space..."
                      secondary={true}
                      hoverColor="none"
                      icon={<ContentWarning />}
                    />
                  </CardActions>
                </Card>
              </Col>

              <Col xs={12} sm={6} lg={3}>
                <Card style={CardContainerStle}>
                  <div className="CardHeader">
                    This is card header
                  </div>
                </Card>
              </Col>

              <Col xs={12} sm={6} lg={3}>
                <Card style={CardContainerStle}>
                  <CardText>
                    Hello
                  </CardText>
                </Card>
              </Col>

              <Col xs={12} sm={6} lg={3}>
                <Card style={CardContainerStle}>
                  <CardText>
                    Hello
                  </CardText>
                </Card>
              </Col>

            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default MainPanel;
