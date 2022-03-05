import React from "react";

const ManageTableRows = (props) => {
    return ( 
        <React.Fragment>
          <tr>
            <th scope="row">{props.data.name}</th>
            <td>{props.data.email}</td>
            <td>{props.data.numberOfPeople}</td>
            <td>{props.data.fromDate}</td>
            <td>{props.data.toDate}</td>
            <td>{props.data.noOfDays}</td>
            <td>{`${props.data.amount} Rs`}</td>
            <td>
              <div className="row">
                <div className="col-md-6">
                  <button className="btn btn-sm btn-primary" value={props.data.id} onClick={props.acceptBooking} disabled={props.data.status==="Accepted"? true:false}>{props.data.status==="Accepted"? "Accepted":"Accept"}</button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-sm btn-danger" value={props.data.id} onClick={props.deleteBooking}>Delete</button>
                </div>
              </div>
            </td>
          </tr>
          </React.Fragment>
     );
}
export default ManageTableRows;