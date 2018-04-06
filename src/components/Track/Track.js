import React from 'react';
import ReactDOM from 'react-dom';

import './Track.css';

class Track extends Component {
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3><!-- track name will go here --></h3>
          <p><!-- track artist will go here--> | <!-- track album will go here --></p>
        </div>
        <a className="Track-action"><!-- + or - will go here --></a>
      </div>
    )
  }

  renderAction() {
    if (isRemoval.ok)
     {
        <anchor>'-'</anchor>
      } else
      {
        <anchor>'+'</anchor>
      }
  }
}

}

export default Track;