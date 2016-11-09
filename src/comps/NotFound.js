import React, {Component} from 'react';

export default class NotFound extends Component {
constructor(props) {
    super(props);
    }

render() {
    return( 
<div className="row text-xs-center">
	<h1>404!</h1>
	<p>The page you are looking for does not exist</p>
</div>
    );
  }
}