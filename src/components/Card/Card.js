import React, { Component } from 'react';

import './Card.css';

import FontIcon from 'material-ui/FontIcon';

class Card extends Component {

  render() {

    return(
      <div className="Card">
        <div className={!this.props.headerStats ? "Card__header" : "Card__header Card__header--stats"} style={ {backgroundColor: this.props.headerBck}}>
          <FontIcon className="material-icons" style={{color: "inherit", fontSize: "inherit"}} >{this.props.icon}</FontIcon>
        </div>
        <div className="Card__content">
          <p className="Card__category">{this.props.category}</p>
          <h3 className="Card__title">
            {this.props.title} <small className="Card__titleSmall">{this.props.titleSmall}</small>
          </h3>
        </div>
        <div className="Card__footer">
          <FontIcon className="material-icons" style={{color: "inherit", fontSize: "inherit"}} >{this.props.statsIcon}</FontIcon> {this.props.stats}
        </div>
      </div>
    )
  }
}

export default Card;
