import React from 'react'

export default function LaunchItem({launch: {flight_number, mission_name, launch_date_local, launch_success}}) {
  return (
    <div className="row">
        <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="col-md-9">
                <h5 className="card-title">Mission: {mission_name}</h5>
                <p className="card-text">Date: {launch_date_local}</p>
            </div>
            <div className="col-md-3">
                <button className="btn btn-primary">Launch details</button>
            </div>
        </div>
    </div>
  )
}
