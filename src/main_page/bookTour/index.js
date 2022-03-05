import "./booktour.css"
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import api from '../api/bookings'

const BookTourPage = () => {
    const initialValues = {email:"",name:"",numberOfPeople:0,fromDate:"",toDate:""}
    const [FormValues,setFormValues]=useState(initialValues)
    const navigate = useNavigate()
    const onChangeFormValues = (e) => {
        setFormValues({...FormValues,[e.target.name] : e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const timeDiff = new Date(FormValues.toDate).getTime()-new Date(FormValues.fromDate).getTime()
        const noOfDays = timeDiff/(1000*3600*24);
        const amount = FormValues.numberOfPeople*2000*noOfDays
        const submitValues = {
            id:`${FormValues.email}${parseInt(FormValues.numberOfPeople)}${noOfDays}${FormValues.toDate}${FormValues.fromDate }`,
            email:FormValues.email,
            name:FormValues.name,
            numberOfPeople:parseInt(FormValues.numberOfPeople),
            fromDate:FormValues.fromDate,
            toDate:FormValues.toDate,
            noOfDays:noOfDays,
            amount:amount,
            status:"In Progress"
        }
        api.post("/bookings",submitValues)
        alert(`Booking submitted successfully the cost will be ${amount}`)
        navigate('/')
    }
    return(
        <div className="container form-block">
            <div className="form-title-block">
            <h3>Book Your Trip today</h3>
            </div>
            <form onSubmit={submitHandler}>
                 <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={FormValues.email} onChange={onChangeFormValues}/>
                </div>
                 <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" value={FormValues.name} onChange={onChangeFormValues} />
                </div>
                <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Number of people</label>
                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="numberOfPeople" value={FormValues.numberOfPeople} onChange={onChangeFormValues} />
                </div>
                <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">From Date</label>
                <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="fromDate" value={FormValues.fromDate} onChange={onChangeFormValues} />
                </div>
                <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">To Date</label>
                <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="toDate" value={FormValues.toDate} onChange={onChangeFormValues} />
                </div>
                <div className="form-submit-button">
                    <button className="btn btn-lg btn-danger" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default BookTourPage