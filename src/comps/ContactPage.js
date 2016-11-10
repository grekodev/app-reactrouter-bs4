import React, {Component} from 'react';

export default class ContactPage extends Component {
    constructor(props) {
    super(props);
    }

    render() {
    return( 
        <div className="container-fluid">
            <div className="row">
                <h1>Contact Page</h1>
                <form>
                    <div className="form-group row">
                    <label htmlFor="example-text-input1" className="col-xs-2 col-form-label">Text 1</label>
                    <div className="col-xs-4">
                        <input className="form-control" type="text" id="example-text-input1" />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label htmlFor="example-text-input2" className="col-xs-2 col-form-label">Text 2</label>
                    <div className="col-xs-4">
                        <input className="form-control" type="text" id="example-text-input2" />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label htmlFor="example-text-input3" className="col-xs-2 col-form-label">Text 3</label>
                    <div className="col-xs-4">
                        <input className="form-control" type="text" id="example-text-input3" />
                    </div>
                    </div>                            
                </form>

            </div>
        </div>
    );
    }
}