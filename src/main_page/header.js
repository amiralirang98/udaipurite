const Header = () =>
{
    return(
        <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Udaipur Diaries</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
                <a class="nav-link active" href="/blogs">Blogs</a>
                <a class="nav-link active" href="/booktour">Book a Tour</a>
                <a class="nav-link active" href="/viewbookings">View Bookings</a>
                <a class="nav-link active" href="/managebookings">Manage Bookings</a>
            </div>
            </div>
        </div>
        </nav>
        </div>
    )
}
export default Header