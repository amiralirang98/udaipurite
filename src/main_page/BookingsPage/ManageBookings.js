import api from '../api/bookings'
import ManageTableRows from './manageTableRows'
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ManageBookings = () => {
    const [ManageBookingData,setManageBookingData] = useState([])
    const navigate = useNavigate()
    const deleteBooking = async (event) =>
    {
        await api.delete(`/bookings/${event.target.value}`)
        navigate('/managebookings')

    }
    const acceptBooking = async (event) => {
        await api.patch(`/bookings/${event.target.value}`,{status:"Accepted"})
        console.log('clicked')
    }
    useEffect(() => {
        const fetchData = async () => {
            const resp = await api.get("/bookings")
            const booking = await resp.data
            await setManageBookingData(booking)
        }
        fetchData()
    },[ManageBookingData])
    if(ManageBookingData==""){
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
            <th scope='col'></th>
          </tr>
          </thead>  
          <tbody>

        {ManageBookingData.map((d) => (
            <ManageTableRows data={d} deleteBooking={deleteBooking} acceptBooking={acceptBooking} />
        ))}
        </tbody>
        </table>
        </div>
    );
    }
}
 
export default ManageBookings;