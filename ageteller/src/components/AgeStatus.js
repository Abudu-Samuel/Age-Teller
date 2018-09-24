import React, {Component} from 'react';
import partPopper from '../assets/party-popper.jpg'

class AgeStatus extends Component {
  timeSince(date) {
    let today = new Date().getTime();
    let otherDate =  new Date(date).getTime();
    let difference = Math.abs(today - otherDate);
    let days = Math.floor(difference / (1000 * 3600 * 24));
    let years = Math.floor(days / 365);
    days -= years * 365;
    let months = Math.floor(days / 31);
    days -= months * 31;

    return `${years} years, ${months} months, and ${days} days`

  }

  render() {
    return(
      <div>
        <h3>{this.props.date}</h3>
        <h4>Congrats on {this.timeSince(this.props.date)}!</h4>
        <img src={partPopper} alt="party-popper" className="party-popper" />
      </div>
    )
  }
}

export default AgeStatus;