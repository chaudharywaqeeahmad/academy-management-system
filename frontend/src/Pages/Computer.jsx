import React from "react";
import { Link } from "react-router-dom";
export default function Computer() {
    return (
        <>
            <header className="main-header header-style-one">
                {/* Main box */}
                <div className="main-box">
                    <div className="logo-box">
                        <div className="logo">
                            <Link to="/">
                                <img
                                    src="assets/images/logo.png"
                                    alt=""
                                    title="Tronis"
                                />
                            </Link>
                        </div>
                    </div>
                    {/*Nav Box*/}
                    <div className="nav-outer">
                        <nav className="nav main-menu">
                            <ul className="navigation">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/instructor">Instructor</Link>
                                </li>
                                <li>
                                    <Link to="/courses">Courses</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li className="dropdown">
                                    <Link to="#">News</Link>
                                    <ul>
                                        <li>
                                            <Link to="/news">Latest News</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/admin/dashboard">Dashboard</Link>
                                </li>
                            </ul>
                        </nav>
                        {/* Main Menu End*/}
                        <div className="outer-box">
                            <Link to="tel:+923355138907" className="info-btn">
                                <i className="icon fa fa-phone" />
                                <small>Call Anytime</small>
                                <br /> +92 (333) - 55138907
                            </Link>
                            <div className="ui-btn-outer">
                                <button className="ui-btn ui-btn search-btn">
                                    <span className="icon lnr lnr-icon-search" />
                                </button>
                                <Link to="/signin" className="ui-btn">
                                    <i className="fas fa-sign-in-alt" />
                                </Link>
                                <Link to="#" className="theme-btn btn-style-two">
                                    <span className="btn-title">Try For Free</span>
                                </Link>
                            </div>
                            <Link to="#" className="theme-btn btn-style-one">
                                <span className="btn-title">Try For Free</span>
                            </Link>
                            <div className="mobile-nav-toggler">
                                <span className="icon lnr-icon-bars" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Main Box */}
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div className="menu-backdrop" />
                    {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo">
                                <Link to="/">
                                    <img src="assets/images/logo-2.png" alt="" title="" />
                                </Link>
                            </div>
                            <div className="close-btn">
                                <i className="icon fa fa-times" />
                            </div>
                        </div>
                        <ul className="navigation clearfix">
                            {/*Keep This Empty / Menu will come through Javascript*/}
                        </ul>
                        <ul className="contact-list-one">
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset" />
                                    <span className="title">Call Now</span>
                                    <Link
                                        to="tel:923355138907"
                                        className="text"
                                        style={{ marginLeft: "-11px" }}
                                    >
                                        + (92) 335-5138907{" "}
                                    </Link>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1" />
                                    <span className="title">Send Email</span>
                                    <Link
                                        to="mailto:official.thenestacademy@gmail.com"
                                        className="text"
                                    >
                                        official.thenestacademy@gmail.com
                                    </Link>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-clock" />
                                    <span className="title">Send Email</span>
                                    Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                                </div>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li>
                                <Link to="#">
                                    <i className="fab fa-twitter" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <i className="fab fa-facebook-f" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <i className="fab fa-pinterest" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <i className="fab fa-instagram" />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* End Mobile Menu */}
                {/* Header Search */}
                <div className="search-popup">
                    <span className="search-back-drop" />
                    <button className="close-search">
                        <span className="fa fa-times" />
                    </button>
                    <div className="search-inner">
                        <form
                            method="post"
                            action="https://kodesolution.com/html/2022/edulerns-html/index.html"
                        >
                            <div className="form-group">
                                <input
                                    type="search"
                                    name="search-field"
                                    defaultValue=""
                                    placeholder="Search..."
                                    required=""
                                />
                                <button type="submit">
                                    <i className="fa fa-search" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* End Header Search */}
                {/* Sticky Header  */}
                <div className="sticky-header">
                    <div className="auto-container">
                        <div className="inner-container">
                            {/*Logo*/}
                            <div className="logo">
                                <Link to="/" title="">
                                    <img src="assets/images/logo.png" alt="" title="" />
                                </Link>
                            </div>
                            {/*Right Col*/}
                            <div className="nav-outer">
                                {/* Main Menu */}
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <ul className="navigation clearfix">
                                            {/*Keep This Empty / Menu will come through Javascript*/}
                                        </ul>
                                    </div>
                                </nav>
                                {/* Main Menu End*/}
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler">
                                    <span className="icon lnr-icon-bars" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Sticky Menu */}
            </header>
            {/* Start main-content */}
            <section
                className="page-title"
                style={{ backgroundImage: "url(assets/images/background/page-title.jpg)" }}
            >
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">Basic Computer</h1>
                        <ul className="page-breadcrumb">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>Basic Computer</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/*Start courses Details*/}
            <section className="course-details">
                <div className="container">
                    <div className="row flex-xl-row-reverse">
                        {/*Start courses Details Content*/}
                        <div className="col-xl-8 col-lg-8">
                            <div className="courses-details__content">
                                <img
                                    src="assets/assets/images/new_assets/images/computer.jpeg"
                                    alt=""
                                    style={{ width: 722 }}
                                />
                                <h2 className="mt-4">Course Overview</h2>
                                <p>
                                    The areas that are covered in the fundamental Computer Course
                                    syllabus include computer fundamentals, office productivity tools,
                                    internet and web technologies, programming, database management
                                    systems, networking, and cybersecurity.{" "}
                                </p>
                                <div className="content mt-40">
                                    <div className="text">
                                        <h3>What You Will Learn?</h3>
                                        <p>
                                            Learning the basics of computer usage and operation is
                                            essential in today's digital age for several reasons:
                                            <br />
                                            <strong className="fw-bold">Digital Literacy:</strong>Computer
                                            literacy is akin to reading and writing in the modern world.
                                            Understanding basic computer operations, software usage, and
                                            internet navigation is fundamental for effective communication
                                            and participation in many aspects of life.
                                            <br />
                                            <strong className="fw-bold">Employability:</strong>Many jobs
                                            today require at least a basic level of computer proficiency.
                                            Learning the basics of computers and common software
                                            applications can significantly improve your chances of finding
                                            employment and excelling in your career.
                                            <br />
                                            <strong className="fw-bold">Education:</strong>
                                            Most educational institutions, from elementary schools to
                                            universities, incorporate technology into their curriculum.
                                            Students need computer skills to complete assignments, conduct
                                            research, and communicate with teachers and peers.
                                            <br />
                                            <strong className="fw-bold">Information Access:</strong>
                                            Computers provide access to vast amounts of information
                                            through the internet. Learning how to search for, evaluate,
                                            and use online information is essential for education,
                                            research, and staying informed.
                                            <br />
                                            <strong className="fw-bold">Communications:</strong>
                                            Email, social media, and messaging apps are commonly used for
                                            communication. Understanding how to use these tools
                                            effectively is essential for staying connected with friends,
                                            family, and colleagues.
                                        </p>
                                    </div>
                                    <div className="row mt-30">
                                        {/* Category Block Two */}
                                        <div className="category-block-current-two col-lg-4 col-md-6 col-sm-6">
                                            <div className="inner-box">
                                                <div className="icon-box">
                                                    <i className="icon flaticon-elearning" />
                                                </div>
                                                <h4 className="title">Online degree programs</h4>
                                                <span className="sub-title">26 Courses</span>
                                            </div>
                                        </div>
                                        {/* Category Block Two */}
                                        <div className="category-block-current-two col-lg-4 col-md-6 col-sm-6">
                                            <div className="inner-box">
                                                <div className="icon-box">
                                                    <i className="icon flaticon-study-1" />
                                                </div>
                                                <h4 className="title">Non-degree programs</h4>
                                                <span className="sub-title">38 Courses</span>
                                            </div>
                                        </div>
                                        {/* Category Block Two */}
                                        <div className="category-block-current-two col-lg-4 col-md-6 col-sm-6">
                                            <div className="inner-box">
                                                <div className="icon-box">
                                                    <i className="icon flaticon-study" />
                                                </div>
                                                <h4 className="title">Off campus programs</h4>
                                                <span className="sub-title">13 Courses</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End courses Details Content*/}
                        {/*Start courses Details Sidebar*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="course-sidebar">
                                <ul className="course-details-info">
                                    <li className="course-details-info-link">
                                        <span className="course-details-info-icon">
                                            <i className="far fa-clock" />
                                        </span>
                                        Durations: <span>2 hours</span>
                                    </li>
                                    <li className="course-details-info-link">
                                        <span className="course-details-info-icon">
                                            <i className="far fa-folder-open" />
                                        </span>
                                        Lectures: <span>40</span>
                                    </li>
                                    <li className="course-details-info-link">
                                        <span className="course-details-info-icon">
                                            <i className="far fa-user-circle" />
                                        </span>
                                        Students: <span>Max 40</span>
                                    </li>
                                    <li className="course-details-info-link">
                                        <span className="course-details-info-icon">
                                            <i className="far fa-flag" />
                                        </span>
                                        Skill Level: <span>Advanced</span>
                                    </li>
                                    <li className="course-details-info-link">
                                        <span className="course-details-info-icon">
                                            <i className="far fa-bell" />
                                        </span>
                                        Language: <span>English,Urdu</span>
                                    </li>
                                </ul>
                                <div className="course-details-price">
                                    <p className="course-details-price-text">Course price</p>
                                    <p className="course-details-price-amount">Rs.15k - 25k</p>
                                    <Link
                                        to="javascript:void(0)"
                                        className="theme-btn btn-style-two course-details-price-btn"
                                    >
                                        Buy This Course
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/*End courses Details Sidebar*/}
                    </div>
                </div>
            </section>
            {/*End courses Details*/}
        </>
    );
}