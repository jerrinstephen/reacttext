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
            <div className="col-lg-4 col-sm-4 col-md-4">
            <ul className="ullist">
                <li className="Complete"><span className="listspan">Complete</span></li>
                <li className="PartialLoad"><span className="listspan">Partial Load</span></li>
            </ul>
            <ul className="ullist">
                <li className="QualityAlert"><span className="listspan">Quality Alert</span></li>
                <li className="NoLoad"><span className="listspan">No Load</span></li>
            </ul>
            </div>
           
            </div>
        );
    }
}

export default Headertitle;
