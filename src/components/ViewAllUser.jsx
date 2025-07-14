import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAllUser = () => {
    const [userData,changeUserData]=useState(
        []
    )
    const fetchData=()=>{
        axios.get(" https://jsonplaceholder.typicode.com/users").then(
            (response)=>{
                changeUserData(response.data)
            }
        ).catch()
    }
    useEffect(()=>{ fetchData()},[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <table className="table table-bordered border-secondary caption-top">
                                 <caption>List of Users</caption>
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Website</th>
                                            <th scope="col">Company</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userData.map(
                                            (value,index)=>{
                                                return(
                                                    <tr>
                                            <th scope="row">{value.id}</th>
                                            <td>{value.name}</td>
                                            <td>{value.email}</td>
                                            <td>{value.phone}</td>
                                            <td>{value.website}</td>
                                            <td>{value.company.name}</td>
                                        </tr>
                                                )
                                            }
                                        )}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllUser