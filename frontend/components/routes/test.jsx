import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Test extends React.Component {
  render() {
    return (
      <div>
        <h1>Hover on the plus button and select "Create new route"</h1>
      </div>
    );
  }
}

export default withRouter(Test);
