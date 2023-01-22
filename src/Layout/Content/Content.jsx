import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'

const Content = () => {
    return (
        <div>
            <div className="content-wrapper">
                <Breadcrumb />
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>150</h3>
                                        <p>New Orders</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag" />
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>53<sup style={{ fontSize: 20 }}>%</sup></h3>
                                        <p>Bounce Rate</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-stats-bars" />
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-warning">
                                    <div className="inner">
                                        <h3>44</h3>
                                        <p>User Registrations</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-person-add" />
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-danger">
                                    <div className="inner">
                                        <h3>65</h3>
                                        <p>Unique Visitors</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-pie-graph" />
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row">
                            <section className="col-lg-7 connectedSortable">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            <i className="fas fa-chart-pie mr-1" />
                                            Sales
                                        </h3>
                                        <div className="card-tools">
                                            <ul className="nav nav-pills ml-auto">
                                                <li className="nav-item">
                                                    <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="tab-content p-0">
                                            <div className="chart tab-pane active" id="revenue-chart" style={{ position: 'relative', height: 300 }}>
                                                <canvas id="revenue-chart-canvas" height={300} style={{ height: 300 }} />
                                            </div>
                                            <div className="chart tab-pane" id="sales-chart" style={{ position: 'relative', height: 300 }}>
                                                <canvas id="sales-chart-canvas" height={300} style={{ height: 300 }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card direct-chat direct-chat-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Direct Chat</h3>
                                        <div className="card-tools">
                                            <span title="3 New Messages" className="badge badge-primary">3</span>
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                <i className="fas fa-minus" />
                                            </button>
                                            <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
                                                <i className="fas fa-comments" />
                                            </button>
                                            <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                <i className="fas fa-times" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="direct-chat-messages">
                                            <div className="direct-chat-msg">
                                                <div className="direct-chat-infos clearfix">
                                                    <span className="direct-chat-name float-left">Alexander Pierce</span>
                                                    <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                                                </div>
                                                <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image" />
                                                <div className="direct-chat-text">
                                                    Is this template really for free? That's unbelievable!
                                                </div>
                                            </div>
                                            <div className="direct-chat-msg right">
                                                <div className="direct-chat-infos clearfix">
                                                    <span className="direct-chat-name float-right">Sarah Bullock</span>
                                                    <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                                                </div>
                                                <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image" />
                                                <div className="direct-chat-text">
                                                    You better believe it!
                                                </div>
                                            </div>
                                            <div className="direct-chat-msg">
                                                <div className="direct-chat-infos clearfix">
                                                    <span className="direct-chat-name float-left">Alexander Pierce</span>
                                                    <span className="direct-chat-timestamp float-right">23 Jan 5:37 pm</span>
                                                </div>
                                                <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image" />
                                                <div className="direct-chat-text">
                                                    Working with AdminLTE on a great new app! Wanna join?
                                                </div>
                                            </div>
                                            <div className="direct-chat-msg right">
                                                <div className="direct-chat-infos clearfix">
                                                    <span className="direct-chat-name float-right">Sarah Bullock</span>
                                                    <span className="direct-chat-timestamp float-left">23 Jan 6:10 pm</span>
                                                </div>
                                                <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image" />
                                                <div className="direct-chat-text">
                                                    I would love to.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="direct-chat-contacts">
                                            <ul className="contacts-list">
                                                <li>
                                                    <a href="#">
                                                        <img className="contacts-list-img" src="dist/img/user1-128x128.jpg" alt="User Avatar" />
                                                        <div className="contacts-list-info">
                                                            <span className="contacts-list-name">
                                                                Count Dracula
                                                                <small className="contacts-list-date float-right">2/28/2015</small>
                                                            </span>
                                                            <span className="contacts-list-msg">How have you been? I was...</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img className="contacts-list-img" src="dist/img/user7-128x128.jpg" alt="User Avatar" />
                                                        <div className="contacts-list-info">
                                                            <span className="contacts-list-name">
                                                                Sarah Doe
                                                                <small className="contacts-list-date float-right">2/23/2015</small>
                                                            </span>
                                                            <span className="contacts-list-msg">I will be waiting for...</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img className="contacts-list-img" src="dist/img/user3-128x128.jpg" alt="User Avatar" />
                                                        <div className="contacts-list-info">
                                                            <span className="contacts-list-name">
                                                                Nadia Jolie
                                                                <small className="contacts-list-date float-right">2/20/2015</small>
                                                            </span>
                                                            <span className="contacts-list-msg">I'll call you back at...</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img className="contacts-list-img" src="dist/img/user5-128x128.jpg" alt="User Avatar" />
                                                        <div className="contacts-list-info">
                                                            <span className="contacts-list-name">
                                                                Nora S. Vans
                                                                <small className="contacts-list-date float-right">2/10/2015</small>
                                                            </span>
                                                            <span className="contacts-list-msg">Where is your new...</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img className="contacts-list-img" src="dist/img/user6-128x128.jpg" alt="User Avatar" />
                                                        <div className="contacts-list-info">
                                                            <span className="contacts-list-name">
                                                                John K.
                                                                <small className="contacts-list-date float-right">1/27/2015</small>
                                                            </span>
                                                            <span className="contacts-list-msg">Can I take a look at...</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img className="contacts-list-img" src="dist/img/user8-128x128.jpg" alt="User Avatar" />
                                                        <div className="contacts-list-info">
                                                            <span className="contacts-list-name">
                                                                Kenneth M.
                                                                <small className="contacts-list-date float-right">1/4/2015</small>
                                                            </span>
                                                            <span className="contacts-list-msg">Never mind I found...</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div> */}
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Content