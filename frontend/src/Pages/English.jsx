import React from "react";
import { Link } from "react-router-dom";
export default function English() {
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
                        <h1 className="title">English Language(Spoken)</h1>
                        <ul className="page-breadcrumb">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>English Language(Spoken)</li>
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
                                    src="assets/assets/images/new_assets/images/english.jpg"
                                    alt=""
                                    style={{ width: 722 }}
                                />
                                <h2 className="mt-4">Course Overview</h2>
                                <p>
                                    English Speaking Proficiency Course enables students to develop
                                    problem solving skills in English language with ability to listen
                                    and comprehend, reading and develop critical thinking, heighten
                                    the use of correct grammar for fluency and accuracy.{" "}
                                </p>
                                <div className="content mt-40">
                                    <div className="text">
                                        <h3>What You Will Learn?</h3>
                                        <p>
                                            Learning English through a spoken course or improving your
                                            spoken English skills can be incredibly beneficial for various
                                            reasons, regardless of whether it's your first language or a
                                            second language. Here are some key reasons why learning
                                            English through a spoken course is valuable:
                                            <br />
                                            <strong className="fw-bold">Global Communication:</strong>
                                            English is one of the most widely spoken languages in the
                                            world, and it serves as a lingua franca in international
                                            business, diplomacy, travel, and academia. Learning spoken
                                            English enables you to communicate effectively with people
                                            from diverse linguistic backgrounds.
                                            <br />
                                            <strong className="fw-bold">Career Opportunities:</strong>Many
                                            multinational companies and international organizations use
                                            English as their primary language for communication.
                                            Proficiency in spoken English can enhance your employability
                                            and open doors to job opportunities around the world.
                                            <br />
                                            <strong className="fw-bold">Education:</strong>
                                            English is often the medium of instruction in universities and
                                            academic research. If you plan to study abroad or pursue
                                            higher education in an English-speaking country, strong spoken
                                            English skills are essential.
                                            <br />
                                            <strong className="fw-bold">Travel:</strong>
                                            English is a valuable tool for travelers. Knowing how to speak
                                            English can make your travel experiences more enjoyable and
                                            less stressful, as it allows you to navigate transportation,
                                            communicate with locals, and access information easily.
                                            <br />
                                            <strong className="fw-bold">Access to Information:</strong>A
                                            significant amount of information on the internet, including
                                            articles, videos, and resources, is available in English.
                                            Proficiency in spoken English helps you access this wealth of
                                            knowledge.
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
                                        Students: <span>Max 50</span>
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
                                    <p className="course-details-price-amount">Rs.15k - 35k</p>
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