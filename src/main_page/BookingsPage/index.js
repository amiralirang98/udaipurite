import api from '../api/bookings'
import BookingTableRows from './bookingTableRows'
import { useEffect,useState } from 'react';
const ViewBookings = () => {
    const [BookingData,setBookingData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const resp = await api.get("/bookings")
            const booking = await resp.data
            await setBookingData(booking)
        }
        fetchData()
    },[BookingData])
    if(BookingData==""){
        return(
            <div>No Data Found</div>
        )
    }
    else{
    return (
        <div className="table-responsive">
        <table className="table table-responsive">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">People</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Days</th>
            <th scope="col">Amount</th>
            <th scope='col'>Status</th>
          </tr>
          </thead>  
          <tbody>

        {BookingData.map((d) => (
            <BookingTableRows data={d}/>
        ))}
        </tbody>
        </table>
        </div>
    );
    }
}
 
export default ViewBookings;