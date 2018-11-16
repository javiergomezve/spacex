import React from 'react'
import classNames from 'classname';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

export default function LaunchItem({launch: {flight_number, mission_name, launch_date_local, launch_success}}) {
  return (
    <div className="row shadow p-3 mb-5 bg-white rounded">
        <div className="col-md-9">
            <h5 className="card-title">
                Mission: <span className={classNames({
                    'text-success': launch_success,
                    'text-danger': !launch_success
                    })}>{mission_name}</span>
            </h5>
            <p className="card-text">Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment></p>
        </div>
        <div className="col-md-3">
            <Link to={`/launch/${flight_number}`} className="btn btn-primary">Launch details</Link>
        </div>
    </div>
  )
}
