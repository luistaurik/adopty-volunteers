import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search';

function List({volunteers}) {

    return (
        <>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">City</th>
                        <th scope="col">Specialty</th>
                        <th scope="col">Instagram</th>
                        <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                    {volunteers.map((volunteer, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td> {/* Usamos index + 1 para mostrar el índice basado en 1 */}
                                <td>{volunteer.name}</td>
                                <td>{volunteer.city}</td>
                                <td>{volunteer.specialty}</td>
                                <td>{volunteer.instagram}</td>
                                <td>{volunteer.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
        </>
    )
};
export default List;