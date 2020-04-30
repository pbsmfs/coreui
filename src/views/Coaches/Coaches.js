import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';

import usersData from '../Users/UsersData';
//import coachesData from './CoachesData';

function CoachRow(props) {
    const coach = props.coach
    const coachLink = `/users/${coach.id}`

    const getBadge = (status) => {
        return status === 'Active' ? 'success' :
            status === 'Inactive' ? 'secondary' :
                status === 'Pending' ? 'warning' :
                    status === 'Banned' ? 'danger' :
                        'primary'  
    }

    return (
        <tr key={coach.id.toString()}>
            <th scope="row"><Link to={coachLink}>{coach.id}</Link></th>
            <td><Link to={coachLink}>{coach.name}</Link></td>
            <td>{coach.registered}</td>
            <td>{coach.role}</td>
            <td><Link to={coachLink}><Badge color={getBadge(coach.status)}>{coach.status}</Badge></Link></td>
        </tr>
    )
}

class Coaches extends Component {

    render() {
        
        const coachList = usersData.filter((coach)=> coach.id < 50)

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xl={12}>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Coaches <small className="text-muted">эти парни знают толк</small>
                            </CardHeader>
                            <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">registered</th>
                      <th scope="col">role</th>
                      <th scope="col">status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coachList.map((coach, index) =>
                      <CoachRow key={index} coach={coach}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Coaches;
