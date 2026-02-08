import React from "react";
import { Link } from "react-router-dom";
export default function AmazonFba() {
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
                        <h1 className="title">Amazon (FBA &amp; Wholesale)</h1>
                        <ul className="page-breadcrumb">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>Amazon (FBA &amp; Wholesale)</li>
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
                                    src="assets/images/new_images/amazon_fba.jpg"
                                    alt=""
                                    style={{ width: 722 }}
                                />
                                <h2 className="mt-4">Course Overview</h2>
                                <p>
                                    Amazon FBA, or Fulfillment by Amazon, is a popular e-commerce
                                    program offered by Amazon that allows individuals and businesses
                                    to sell products on the Amazon platform while utilizing Amazon's
                                    extensive fulfillment network. When creating product descriptions
                                    for Amazon FBA listings, it's important to be clear, informative,
                                    and persuasive.{" "}
                                </p>
                                <div className="content mt-40">
                                    <div className="text">
                                        <h3>What You Will Learn?</h3>
                                        <p>
                                            Starting and running an Amazon business can be a valuable
                                            learning experience. Here are some of the key things you can
                                            learn from operating an Amazon business:
                                            <br />
                                            <strong className="fw-bold">E-commerce Skills:</strong>You
                                            will gain a deep understanding of how e-commerce works,
                                            including product sourcing, listing optimization, pricing
                                            strategies, and order fulfillment.
                                            <br />
                                            <strong className="fw-bold">Market Research:</strong>You'll
                                            learn how to research and analyze market trends, competitor
                                            products, and customer preferences to make informed decisions
                                            about which products to sell.
                                            <br />
                                            <strong className="fw-bold">Product Sourcing:</strong>
                                            Whether through private labeling, dropshipping, or other
                                            methods, you'll learn how to source products, negotiate with
                                            suppliers, and manage inventory effectively.
                                            <br />
                                            <strong className="fw-bold">Amazon Seller Central:</strong>
                                            You'll become proficient in using Amazon's Seller Central
                                            platform, where you'll manage your listings, monitor sales,
                                            and handle customer service.
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
                                        Lectures: <span>32</span>
                                    </li>
                                    <li className="course-details-info-link">
                                        <span className="course-details-info-icon">
                                            <i className="far fa-user-circle" />
                                        </span>
                                        Students: <span>Max 20</span>
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
                                    <p className="course-details-price-amount">Rs.30k - 40k</p>
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