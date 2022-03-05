import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import './App.css';
import {useState,useEffect} from 'react'
import Header from './header'
import Footer from './footer'
import IndexPage from './IndexPage'
import Blogs from './BlogsPage'
import Blog from './BlogsPage/Blog'
import BookTourPage from './bookTour'
import ViewBookings from "./BookingsPage"
import ManageBookings from "./BookingsPage/ManageBookings"

function App() {
  const [AllBlogs,setAllBlogs]=useState([])
  useEffect(() => {
    const fetchBlogs = async() =>
    {
      const resp = await fetch("/blogs.json")
      const blogs = await resp.json();
      setAllBlogs(blogs)
    }
    fetchBlogs();
  },[])

  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
     <Route path='/' element={ <IndexPage /> }/>
     <Route path='/blogs' element={<Blogs AllBlogs={AllBlogs} />} />
     <Route path='/blogs/:id' element={<Blog AllBlogs={AllBlogs}/>} />
     <Route path='/booktour' element={<BookTourPage />} />
     <Route path='/viewbookings' element={<ViewBookings />} />
     <Route path='/managebookings' element={<ManageBookings />} />
      </Routes>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
