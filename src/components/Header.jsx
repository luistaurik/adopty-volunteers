import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/Header.css";
import Logo from "../assets/imgs/favicon.png"

function Header(){

    return (
        <>
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-4 px-4 border-bottom header">
                <div class="col-md-3 mb-2 mb-md-0">
                    <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                    <img src={Logo} className="logo"/>
                    </a>
                </div>

                <div class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <h5 className="text-primary">Adopty<strong> Volunteers</strong></h5>
                </div>

                <div class="col-md-3 text-end">
                    <button type="button" class="btn btn-outline-primary me-2">Login</button>
                    <button type="button" class="btn btn-primary">Sign-up</button>
                </div>
        </div>
        </>
    )
}

export default Header