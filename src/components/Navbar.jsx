import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <nav class="navbar navbar-expand-lg bg-body-secondary">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#">User App</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div class="navbar-nav">
                                        <Link class="nav-link active" aria-current="page" to="/">Add user</Link>
                                        <Link class="nav-link" to="/search">Search user</Link>
                                        <Link class="nav-link" to="/delete">Delete user</Link>
                                        <Link class="nav-link" to="/view">View all users</Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar