import React from 'react'

function Navbar() {
    return (
        <div>
            <nav class="navbar">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#p1">
                            <span class="icon-bar"></span>
                            <span clasns="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#"> MessStories</a>
                    </div>
                    <div class="collapse navbar-collapse" id="p1">
                        <ul class="nav navbar-nav">
                            <li class="active"><a class="navbar-link" href="#">Home</a></li>
                            <li class="active"><a class="navbar-link " href="#">Register</a></li>
                            <li class="active"><a class="navbar-link" href="#">login</a></li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
}
export default Navbar