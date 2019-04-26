import React , {Component} from 'react';

class Headertitle extends Component{
    render(){
        return(
            <div className="header row">
            <span className="col-lg-4 col-sm-4 col-md-4">
                <h1>CONDENAST</h1>
                <p>Data Status</p>
            </span>
            <span className="col-lg-4 col-sm-4 col-md-4"></span>
            <ul className="col-lg-4 col-sm-4 col-md-4">
                <li className="Complete">Complete</li>
                <li className="PartialLoad">Partial Load</li>
                <li className="QualityAlert">Quality Alert</li>
                <li className="NoLoad">No Load</li>
            </ul>
            </div>
        );
    }
}

export default Headertitle;
