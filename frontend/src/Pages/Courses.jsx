import React from "react";
import { Link } from "react-router-dom";
export default function Courses() {
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
                                        + (92) 335-5138907
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
                        <h1 className="title">Courses</h1>
                        <ul className="page-breadcrumb">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>Courses</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* end main-content */}
            <section className="">
                <div className="container pb-100">
                    <div className="row">
                        {/* Course Block Two*/}
                        <div className="course-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/amazon_fba">
                                            <img
                                                src="assets/images/new_images/amazon_fba.jpg"
                                                alt=""
                                                style={{ height: 187 }}
                                            />
                                        </Link>
                                    </figure>
                                    <span className="price">Rs. 40,000</span>
                                    <div className="value">Advanced</div>
                                </div>
                                <div className="content-box">
                                    <ul className="course-info">
                                        <li>
                                            <i className="fa fa-book" /> 32 Lectures
                                        </li>
                                        <li>
                                            <i className="fa fa-users" /> 20 Students
                                        </li>
                                        <li>
                                            <i className="fa fa-clock" /> 6-8 weeks
                                        </li>
                                        <li>
                                            <i className="fas fa-money-bill-wave-alt" /> Rs. 30,000 –
                                            40,000
                                        </li>
                                    </ul>
                                    <h5 className="title">
                                        <Link to="/amazon_fba">
                                            Amazon (FBA &amp; Wholesale)
                                        </Link>
                                    </h5>
                                    <div className="other-info">
                                        <div className="rating-box">
                                            <span className="text">(4.9 /8 Rating)</span>
                                            <div className="rating">
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Course Block Two*/}
                        <div className="course-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/digital_marketing">
                                            <img
                                                src="assets/images/new_images/digital_marketing.jpg"
                                                alt=""
                                                style={{ height: 187 }}
                                            />
                                        </Link>
                                    </figure>
                                    <span className="price">Rs. 45,000</span>
                                    <div className="value">Advanced</div>
                                </div>
                                <div className="content-box">
                                    <ul className="course-info">
                                        <li>
                                            <i className="fa fa-book" /> 32 Lectures
                                        </li>
                                        <li>
                                            <i className="fa fa-users" /> 30 Students
                                        </li>
                                        <li>
                                            <i className="fa fa-clock" /> 6-8 weeks
                                        </li>
                                        <li>
                                            <i className="fas fa-money-bill-wave-alt" /> Rs. 35,000 –
                                            45,000
                                        </li>
                                    </ul>
                                    <h5 className="title">
                                        <Link to="/digital_marketing">Digital Marketing</Link>
                                    </h5>
                                    <div className="other-info">
                                        <div className="rating-box">
                                            <span className="text">(4.9 /8 Rating)</span>
                                            <div className="rating">
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Course Block Two*/}
                        <div className="course-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/shopify">
                                            <img
                                                src="assets/images/new_images/shopify.jpg"
                                                alt=""
                                                style={{ height: 187 }}
                                            />
                                        </Link>
                                    </figure>
                                    <span className="price">Rs. 40,000</span>
                                    <div className="value">Advanced</div>
                                </div>
                                <div className="content-box">
                                    <ul className="course-info">
                                        <li>
                                            <i className="fa fa-book" /> 32 Lectures
                                        </li>
                                        <li>
                                            <i className="fa fa-users" /> 40 Students
                                        </li>
                                        <li>
                                            <i className="fa fa-clock" /> 6-8 weeks
                                        </li>
                                        <li>
                                            <i className="fas fa-money-bill-wave-alt" /> Rs. 30,000 –
                                            40,000
                                        </li>
                                    </ul>
                                    <h5 className="title">
                                        <Link to="/shopify"> Shopify Course</Link>
                                    </h5>
                                    <div className="other-info">
                                        <div className="rating-box">
                                            <span className="text">(4.9 /8 Rating)</span>
                                            <div className="rating">
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Course Block Two*/}
                        <div className="course-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/ielts">
                                            <img
                                                src="assets/images/new_images/ielts.jpg"
                                                alt=""
                                                style={{ height: 187 }}
                                            />
                                        </Link>
                                    </figure>
                                    <span className="price">Rs. 40,000</span>
                                    <div className="value">Advanced</div>
                                </div>
                                <div className="content-box">
                                    <ul className="course-info">
                                        <li>
                                            <i className="fa fa-book" /> 32 Lectures
                                        </li>
                                        <li>
                                            <i className="fa fa-users" /> 40 Students
                                        </li>
                                        <li>
                                            <i className="fa fa-clock" /> 2-6 weeks
                                        </li>
                                        <li>
                                            <i className="fas fa-money-bill-wave-alt" /> Rs. 25,000 –
                                            40,000
                                        </li>
                                    </ul>
                                    <h5 className="title">
                                        <Link to="/ielts"> IELTS Course</Link>
                                    </h5>
                                    <div className="other-info">
                                        <div className="rating-box">
                                            <span className="text">(4.9 /8 Rating)</span>
                                            <div className="rating">
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Course Block Two*/}
                        <div className="course-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/computer">
                                            <img
                                                src="assets/images/new_images/computer.jpeg"
                                                alt=""
                                                style={{ height: 187 }}
                                            />
                                        </Link>
                                    </figure>
                                    <span className="price">Rs. 40,000</span>
                                    <div className="value">Advanced</div>
                                </div>
                                <div className="content-box">
                                    <ul className="course-info">
                                        <li>
                                            <i className="fa fa-book" /> 32 Lectures
                                        </li>
                                        <li>
                                            <i className="fa fa-users" /> 40 Students
                                        </li>
                                        <li>
                                            <i className="fa fa-clock" /> 4-6 weeks
                                        </li>
                                        <li>
                                            <i className="fas fa-money-bill-wave-alt" /> Rs. 15,000 –
                                            25,000
                                        </li>
                                    </ul>
                                    <h5 className="title">
                                        <Link to="/computer">

                                            Basic Computer Science Course
                                        </Link>
                                    </h5>
                                    <div className="other-info">
                                        <div className="rating-box">
                                            <span className="text">(4.9 /8 Rating)</span>
                                            <div className="rating">
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Course Block Two*/}
                        <div className="course-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/freelancing">
                                            <img
                                                src="assets/images/new_images/freelancing.jpg"
                                                alt=""
                                                style={{ height: 187 }}
                                            />
                                        </Link>
                                    </figure>
                                    <span className="price">Rs. 40,000</span>
                                    <div className="value">Advanced</div>
                                </div>
                                <div className="content-box">
                                    <ul className="course-info">
                                        <li>
                                            <i className="fa fa-book" /> 32 Lectures
                                        </li>
                                        <li>
                                            <i className="fa fa-users" /> 40 Students
                                        </li>
                                        <li>
                                            <i className="fa fa-clock" /> 6-8 weeks
                                        </li>
                                        <li>
                                            <i className="fas fa-money-bill-wave-alt" /> Rs. 30,000 –
                                            40,000
                                        </li>
                                    </ul>
                                    <h5 className="title">
                                        <Link to="/freelancing"> Freelancing Course</Link>
                                    </h5>
                                    <div className="other-info">
                                        <div className="rating-box">
                                            <span className="text">(4.9 /8 Rating)</span>
                                            <div className="rating">
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Course Block Two*/}
                        <div className="course-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/graphic">
                                            <img
                                                src="assets/images/new_images/graphic.png"
                                                alt=""
                                                style={{ height: 187 }}
                                            />
                                        </Link>
                                    </figure>
                                    <span className="price">Rs. 40,000</span>
                                    <div className="value">Advanced</div>
                                </div>
                                <div className="content-box">
                                    <ul className="course-info">
                                        <li>
                                            <i className="fa fa-book" /> 28 Lectures
                                        </li>
                                        <li>
                                            <i className="fa fa-users" /> 40 Students
                                        </li>
                                        <li>
                                            <i className="fa fa-clock" /> 4-6 weeks
                                        </li>
                                        <li>
                                            <i className="fas fa-money-bill-wave-alt" /> Rs. 30,000 –
                                            40,000
                                        </li>
                                    </ul>
                                    <h5 className="title">
                                        <Link to="/graphic"> Graphic Designing Course</Link>
                                    </h5>
                                    <div className="other-info">
                                        <div className="rating-box">
                                            <span className="text">(4.9 /8 Rating)</span>
                                            <div className="rating">
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Course Block Two*/}
                        <div className="course-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/english">
                                            <img
                                                src="assets/images/new_images/english.jpg"
                                                alt=""
                                                style={{ height: 187 }}
                                            />
                                        </Link>
                                    </figure>
                                    <span className="price">Rs. 40,000</span>
                                    <div className="value">Advanced</div>
                                </div>
                                <div className="content-box">
                                    <ul className="course-info">
                                        <li>
                                            <i className="fa fa-book" /> 40 Lectures
                                        </li>
                                        <li>
                                            <i className="fa fa-users" /> 50 Students
                                        </li>
                                        <li>
                                            <i className="fa fa-clock" /> 6-12 weeks
                                        </li>
                                        <li>
                                            <i className="fas fa-money-bill-wave-alt" /> Rs. 15,000 –
                                            35,000
                                        </li>
                                    </ul>
                                    <h5 className="title">
                                        <Link to="/english">

                                            English Language(Spoken) Course
                                        </Link>
                                    </h5>
                                    <div className="other-info">
                                        <div className="rating-box">
                                            <span className="text">(4.9 /8 Rating)</span>
                                            <div className="rating">
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Course Block Two*/}
                        <div className="course-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/nat">
                                            <img
                                                src="assets/images/new_images/nat.jpg"
                                                alt=""
                                                style={{ height: 187 }}
                                            />
                                        </Link>
                                    </figure>
                                    <span className="price">Rs. 40,000</span>
                                    <div className="value">Advanced</div>
                                </div>
                                <div className="content-box">
                                    <ul className="course-info">
                                        <li>
                                            <i className="fa fa-book" /> 28 Lectures
                                        </li>
                                        <li>
                                            <i className="fa fa-users" /> 40 Students
                                        </li>
                                        <li>
                                            <i className="fa fa-clock" /> 4-6 weeks
                                        </li>
                                        <li>
                                            <i className="fas fa-money-bill-wave-alt" /> Rs. 25,000 –
                                            35,000
                                        </li>
                                    </ul>
                                    <h5 className="title">
                                        <Link to="/nat">

                                            NAT, NET, MD-CAT, E-CAT, etc. Course
                                        </Link>
                                    </h5>
                                    <div className="other-info">
                                        <div className="rating-box">
                                            <span className="text">(4.9 /8 Rating)</span>
                                            <div className="rating">
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Course Block Two*/}
                        <div className="course-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/test_series">
                                            <img
                                                src="assets/images/new_images/test_series.jpeg"
                                                alt=""
                                                style={{ height: 187 }}
                                            />
                                        </Link>
                                    </figure>
                                    <span className="price">Rs. 40,000</span>
                                    <div className="value">Advanced</div>
                                </div>
                                <div className="content-box">
                                    <ul className="course-info">
                                        <li>
                                            <i className="fa fa-book" /> 0 Lectures
                                        </li>
                                        <li>
                                            <i className="fa fa-users" /> 100 Students
                                        </li>
                                        <li>
                                            <i className="fa fa-clock" /> 4-6 weeks
                                        </li>
                                        <li>
                                            <i className="fas fa-money-bill-wave-alt" /> Rs. 1,000 –
                                            15,000 Per Test
                                        </li>
                                    </ul>
                                    <h5 className="title">
                                        <Link to="/test_series"> Test Series </Link>
                                    </h5>
                                    <div className="other-info">
                                        <div className="rating-box">
                                            <span className="text">(4.9 /8 Rating)</span>
                                            <div className="rating">
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Course Block Two*/}
                        <div className="course-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/amazon_virtual">
                                            <img
                                                src="assets/images/new_images/amazon_virtual.jpg"
                                                alt=""
                                                style={{ height: 187 }}
                                            />
                                        </Link>
                                    </figure>
                                    <span className="price">Rs. 40,000</span>
                                    <div className="value">Advanced</div>
                                </div>
                                <div className="content-box">
                                    <ul className="course-info">
                                        <li>
                                            <i className="fa fa-book" /> 32 Lectures
                                        </li>
                                        <li>
                                            <i className="fa fa-users" /> 40 Students
                                        </li>
                                        <li>
                                            <i className="fa fa-clock" /> 6-8 weeks
                                        </li>
                                        <li>
                                            <i className="fas fa-money-bill-wave-alt" /> Rs. 30,000 –
                                            40,000
                                        </li>
                                    </ul>
                                    <h5 className="title">
                                        <Link to="/amazon_virtual">

                                            Amazon(Virtual Assitant) Course
                                        </Link>
                                    </h5>
                                    <div className="other-info">
                                        <div className="rating-box">
                                            <span className="text">(4.9 /8 Rating)</span>
                                            <div className="rating">
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                                <span className="fa fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}