import React , {Component} from 'react';

class Data extends Component{

    constructor(props){
        super(props);
        this.state = {
            userEngagement : [
                {
                  name: "Google Analytics",
                  statusByDate: [
                    {
                      status: "Complete",
                      date: "2/21"
                    },
                    {
                      status: "Complete",
                      date: "2/22"
                    },
                    {
                      status: "Complete",
                      date: "2/23"
                    },
                    {
                      status: "Complete",
                      date: "2/24"
                    },
                    {
                      status: "PartialLoad",
                      date: "2/25"
                    },
                    {
                      status: "QualityAlert",
                      date: "2/26"
                    },
                    {
                      status: "Complete",
                      date: "2/27"
                    },
                    {
                      status: "NoLoad",
                      date: "2/28"
                    },
                    {
                      status: "Schedule",
                      date: "3/1"
                    }
                  ]
                },
                {
                  name: "Omniture",
                  statusByDate: [
                    {
                      status: "Complete",
                      date: "2/21"
                    },
                    {
                      status: "Complete",
                      date: "2/22"
                    },
                    {
                      status: "Complete",
                      date: "2/23"
                    },
                    {
                      status: "Complete",
                      date: "2/24"
                    },
                    {
                      status: "PartialLoad",
                      date: "2/25"
                    },
                    {
                      status: "QualityAlert",
                      date: "2/26"
                    },
                    {
                      status: "Complete",
                      date: "2/27"
                    },
                    {
                      status: "NoLoad",
                      date: "2/28"
                    },
                    {
                      status: "Schedule",
                      date: "3/1"
                    }
                  ]
                },
              
                {
                  name: "Sparrow",
                  statusByDate: [
                    {
                      status: "Complete",
                      date: "2/21"
                    },
                    {
                      status: "Complete",
                      date: "2/22"
                    },
                    {
                      status: "Complete",
                      date: "2/23"
                    },
                    {
                      status: "Complete",
                      date: "2/24"
                    },
                    {
                      status: "PartialLoad",
                      date: "2/25"
                    },
                    {
                      status: "QualityAlert",
                      date: "2/26"
                    },
                    {
                      status: "Complete",
                      date: "2/27"
                    },
                    {
                      status: "NoLoad",
                      date: "2/28"
                    },
                    {
                      status: "Schedule",
                      date: "3/1"
                    }
                  ]
                }
            ],
            adDelivery : [
                {
                    name: "Google DFP",
                    statusByDate: [
                      {
                        status: "Complete",
                        date: "2/21"
                      },
                      {
                        status: "Complete",
                        date: "2/22"
                      },
                      {
                        status: "Complete",
                        date: "2/23"
                      },
                      {
                        status: "Complete",
                        date: "2/24"
                      },
                      {
                        status: "PartialLoad",
                        date: "2/25"
                      },
                      {
                        status: "QualityAlert",
                        date: "2/26"
                      },
                      {
                        status: "Complete",
                        date: "2/27"
                      },
                      {
                        status: "NoLoad",
                        date: "2/28"
                      },
                      {
                        status: "Schedule",
                        date: "3/1"
                      }
                    ]
                  },
                  {
                    name: "Moat",
                    statusByDate: [
                      {
                        status: "Complete",
                        date: "2/21"
                      },
                      {
                        status: "Complete",
                        date: "2/22"
                      },
                      {
                        status: "Complete",
                        date: "2/23"
                      },
                      {
                        status: "Complete",
                        date: "2/24"
                      },
                      {
                        status: "PartialLoad",
                        date: "2/25"
                      },
                      {
                        status: "QualityAlert",
                        date: "2/26"
                      },
                      {
                        status: "Complete",
                        date: "2/27"
                      },
                      {
                        status: "NoLoad",
                        date: "2/28"
                      },
                      {
                        status: "Schedule",
                        date: "3/1"
                      }
                    ]
                  },
                
                  {
                    name: "DoubleClick",
                    statusByDate: [
                      {
                        status: "Complete",
                        date: "2/21"
                      },
                      {
                        status: "Complete",
                        date: "2/22"
                      },
                      {
                        status: "Complete",
                        date: "2/23"
                      },
                      {
                        status: "Complete",
                        date: "2/24"
                      },
                      {
                        status: "PartialLoad",
                        date: "2/25"
                      },
                      {
                        status: "QualityAlert",
                        date: "2/26"
                      },
                      {
                        status: "Complete",
                        date: "2/27"
                      },
                      {
                        status: "NoLoad",
                        date: "2/28"
                      },
                      {
                        status: "Schedule",
                        date: "3/1"
                      }
                    ]
                }
            ],
            consumerMarketing : [
                {
                    name: "GDS Global",
                    statusByDate: [
                      {
                        status: "Complete",
                        date: "2/21"
                      },
                      {
                        status: "Complete",
                        date: "2/22"
                      },
                      {
                        status: "Complete",
                        date: "2/23"
                      },
                      {
                        status: "Complete",
                        date: "2/24"
                      },
                      {
                        status: "PartialLoad",
                        date: "2/25"
                      },
                      {
                        status: "QualityAlert",
                        date: "2/26"
                      },
                      {
                        status: "Complete",
                        date: "2/27"
                      },
                      {
                        status: "NoLoad",
                        date: "2/28"
                      },
                      {
                        status: "Schedule",
                        date: "3/1"
                      }
                    ]
                  },
                  {
                    name: "Acxion",
                    statusByDate: [
                      {
                        status: "Complete",
                        date: "2/21"
                      },
                      {
                        status: "Complete",
                        date: "2/22"
                      },
                      {
                        status: "Complete",
                        date: "2/23"
                      },
                      {
                        status: "Complete",
                        date: "2/24"
                      },
                      {
                        status: "PartialLoad",
                        date: "2/25"
                      },
                      {
                        status: "QualityAlert",
                        date: "2/26"
                      },
                      {
                        status: "Complete",
                        date: "2/27"
                      },
                      {
                        status: "NoLoad",
                        date: "2/28"
                      },
                      {
                        status: "Schedule",
                        date: "3/1"
                      }
                    ]
                  },
                
                  {
                    name: "Bing",
                    statusByDate: [
                      {
                        status: "Complete",
                        date: "2/21"
                      },
                      {
                        status: "Complete",
                        date: "2/22"
                      },
                      {
                        status: "Complete",
                        date: "2/23"
                      },
                      {
                        status: "Complete",
                        date: "2/24"
                      },
                      {
                        status: "PartialLoad",
                        date: "2/25"
                      },
                      {
                        status: "QualityAlert",
                        date: "2/26"
                      },
                      {
                        status: "Complete",
                        date: "2/27"
                      },
                      {
                        status: "NoLoad",
                        date: "2/28"
                      },
                      {
                        status: "Schedule",
                        date: "3/1"
                      }
                    ]
                }
            ]
        };
    }


    render(){
        const userEngagement = this.state.userEngagement;
        const consumerMarketing = this.state.consumerMarketing;
        const adDelivery = this.state.adDelivery;
        var i=0;
        return(
            <div className="content row">
                <div className="user engagement col-lg-4 col-sm-4 col-md-4">
                    <h2>user engagement</h2>
                    {userEngagement.map(data =>{
                        return(
                            <div className={data.name} key={i++}>
                                    <ol>
                                        <li>
                                        <span>{data.name}</span>
                                        <ul>
                                            {data.statusByDate.map(details =>{
                                            return(
                                                <li className={details.status}><p>{details.date}</p></li>
                                            )
                                            })}
                                        </ul>
                                        </li>
                                    </ol>
                            </div>
                        )
                    })}
                </div>
                <div className="Ad Delivery col-lg-4 col-sm-4 col-md-4">
                   <h2>Ad Delivery</h2>
                    {adDelivery.map(data =>{
                        return(
                            <div className={data.name} key={i++}>
                                <ol>
                                    <li>
                                        <span>{data.name}</span>
                                        <ul>
                                            {data.statusByDate.map(details =>{
                                                return(
                                                    <li className={details.status}><p>{details.date}</p></li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        )
                    })}
                </div>
                <div className="Consumer Marketing col-lg-4 col-sm-4 col-md-4">
                <h2>Consumer Marketing</h2>
                    {consumerMarketing.map(data =>{
                        return(
                            <div className={data.name} key={i++}>
                                <ol>
                                    <li>
                                        <span>{data.name}</span>
                                        <ul>
                                            {data.statusByDate.map(details =>{
                                                return(
                                                    <li className={details.status}><p>{details.date}</p></li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Data;