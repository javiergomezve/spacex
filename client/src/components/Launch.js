import classNames from 'classname';
import gql from 'graphql-tag';
import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!) {
        launch(flight_number: $flight_number) {
            flight_number
            mission_name
            launch_year
            launch_date_local
            launch_success,
            rocket {
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }
`;

export default class Launch extends Component {
    render() {
        let { flight_number } = this.props.match.params;
        flight_number = parseInt(flight_number);

        return (
            <Fragment>
                <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h4>Loading</h4>
                            if (error) console.log(error)

                            const {
                                mission_name, flight_number, launch_year, launch_success,
                                rocket: { rocket_id, rocket_name, rocket_type } } = data.launch;

                            return <div>
                                <h2 className="dosplay-4 my-3">
                                    <span className="text-dark">Mission</span>: {mission_name}
                                </h2>
                                <h3 className="mb-3">Launch details</h3>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Flight number: {flight_number}
                                    </li>
                                    <li className="list-group-item">
                                        Launch year: {launch_year}
                                    </li>
                                    <li className="list-group-item">
                                        Launch successful: <span className={classNames({
                                            'text-success': launch_success,
                                            'text-danger': !launch_success
                                        })}>
                                            {launch_success ? 'Yes' : 'No'}
                                        </span>
                                    </li>
                                </ul>

                                <h3 className="mb-3">Rocket details</h3>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        ID: {rocket_id}
                                    </li>
                                    <li className="list-group-item">
                                        Name: {rocket_name}
                                    </li>
                                    <li className="list-group-item">
                                        Type: {rocket_type}
                                    </li>
                                </ul>

                                <hr />
                                <Link to="/" className="btn btn-secondary">Go back</Link>
                            </div>
                        }
                    }
                </Query>
            </Fragment>
        )
    }
};
