import React from "react";

const BookingTableRows = (props) => {
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
            <td>{props.data.status}</td>
          </tr>
          </React.Fragment>
     );
}
export default BookingTableRows;