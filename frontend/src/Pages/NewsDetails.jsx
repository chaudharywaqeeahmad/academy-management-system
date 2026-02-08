import React from "react";
import { Link } from "react-router-dom";
export default function NewDetails() {
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
                        <h1 className="title">News Details</h1>
                        <ul className="page-breadcrumb">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>News Details</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* end main-content */}
            {/*Blog Details Start*/}
            <section className="blog-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-details__left">
                                <div className="blog-details__img">
                                    <img
                                        src="{{ asset('assets/images/resource/news-2.jpg"
                                        alt=""
                                    />
                                    <div className="blog-details__date">
                                        <span className="day">28</span>
                                        <span className="month">Aug</span>
                                    </div>
                                </div>
                                <div className="blog-details__content">
                                    <ul className="list-unstyled blog-details__meta">
                                        <li>
                                            <Link to="/news-detail">
                                                <i className="fas fa-user-circle" /> Mam Farhat
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/news-detail">
                                                <i className="fas fa-comments" /> 02 Comments
                                            </Link>
                                        </li>
                                    </ul>
                                    <h3 className="blog-details__title">
                                        SEO is a Cost-Effective Advertising Strategy
                                    </h3>
                                    <p className="blog-details__text-2">
                                        Mauris non dignissim purus, ac commodo diam. Donec sit amet
                                        lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                                        Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at
                                        nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a
                                        rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque
                                        vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
                                    </p>
                                    <p className="blog-details__text-2">
                                        Mauris non dignissim purus, ac commodo diam. Donec sit amet
                                        lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                                        Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at
                                        nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a
                                        rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque
                                        vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
                                    </p>
                                    <p className="blog-details__text-2">
                                        Mauris non dignissim purus, ac commodo diam. Donec sit amet
                                        lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                                        Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at
                                        nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a
                                        rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque
                                        vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
                                    </p>
                                </div>
                                <div className="blog-details__bottom">
                                    <p className="blog-details__tags">
                                        
                                        <span>Tags</span>
                                        <Link to="/news-detail">Education</Link>
                                        <Link to="/news-detail">College</Link>
                                    </p>
                                    <div className="blog-details__social-list">
                                        
                                        <Link to="/news-detail">
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link to="/news-detail">
                                            <i className="fab fa-facebook" />
                                        </Link>
                                        <Link to="/news-detail">
                                            <i className="fab fa-pinterest-p" />
                                        </Link>
                                        <Link to="/news-detail">
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="nav-links">
                                    <div className="prev">
                                        <Link to="/news-detail" rel="prev">
                                            True factors of the modern healthy lifestyle
                                        </Link>
                                    </div>
                                    <div className="next">
                                        <Link to="/news-detail" rel="next">
                                            How to lead a healthy &amp; well-balanced life
                                        </Link>
                                    </div>
                                </div>
                                <div className="comment-one">
                                    <h3 className="comment-one__title">2 Comments</h3>
                                    <div className="comment-one__single">
                                        <div className="comment-one__image">
                                            
                                            <img
                                                src="{{ asset('assets/images/resource/testi-thumb-1.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="comment-one__content">
                                            <h3>Kevin Martin</h3>
                                            <p>
                                                Mauris non dignissim purus, ac commodo diam. Donec sit amet
                                                lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                                                Aliquam tellus nulla, sollicitudin at euismod.
                                            </p>
                                            <Link
                                                to="/news-detail"
                                                className="theme-btn btn-style-one bg-theme-color4 comment-one__btn"
                                            >
                                                <span className="btn-title">Reply</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="comment-one__single">
                                        <div className="comment-one__image">
                                            
                                            <img
                                                src="{{ asset('assets/images/resource/testi-thumb-2.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="comment-one__content">
                                            <h3>Sarah Albert</h3>
                                            <p>
                                                Mauris non dignissim purus, ac commodo diam. Donec sit amet
                                                lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                                                Aliquam tellus nulla, sollicitudin at euismod.
                                            </p>
                                            <Link
                                                to="/news-detail"
                                                className="theme-btn btn-style-one bg-theme-color4 comment-one__btn"
                                            >
                                                <span className="btn-title">Reply</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="comment-form">
                                        <h3 className="comment-form__title">Leave a Comment</h3>
                                        <form
                                            id="contact_form"
                                            name="contact_form"
                                            className=""
                                            action="https://kodesolution.com/html/2022/edulerns-html/includes/sendmail.php"
                                            method="post"
                                        >
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="mb-3">
                                                        <input
                                                            name="form_name"
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="mb-3">
                                                        <input
                                                            name="form_email"
                                                            className="form-control required email"
                                                            type="email"
                                                            placeholder="Enter Email"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <textarea
                                                    name="form_message"
                                                    className="form-control required"
                                                    rows={5}
                                                    placeholder="Enter Message"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <input
                                                    name="form_botcheck"
                                                    className="form-control"
                                                    type="hidden"
                                                    defaultValue=""
                                                />
                                                <button
                                                    type="submit"
                                                    className="theme-btn btn-style-one"
                                                    data-loading-text="Please wait..."
                                                >
                                                    <span className="btn-title">Submit Comment</span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="sidebar">
                                <div className="sidebar__single sidebar__search">
                                    <form action="#" className="sidebar__search-form">
                                        <input type="search" placeholder="Search here" />
                                        <button type="submit">
                                            <i className="lnr-icon-search" />
                                        </button>
                                    </form>
                                </div>
                                <div className="sidebar__single sidebar__post">
                                    <h3 className="sidebar__title">Latest Posts</h3>
                                    <ul className="sidebar__post-list list-unstyled">
                                        <li>
                                            <div className="sidebar__post-image">
                                                
                                                <img
                                                    src="{{ asset('assets/images/resource/news-1.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="sidebar__post-content">
                                                <h3>
                                                    
                                                    <span className="sidebar__post-content-meta">
                                                        <i className="fas fa-user-circle" />
                                                        Mam Farhat
                                                    </span>
                                                    <Link to="/news-detail">
                                                        Top crypto exchange influencers
                                                    </Link>
                                                </h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sidebar__post-image">
                                                
                                                <img
                                                    src="{{ asset('assets/images/resource/news-2.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="sidebar__post-content">
                                                <h3>
                                                    
                                                    <span className="sidebar__post-content-meta">
                                                        <i className="fas fa-user-circle" />
                                                        Mam Farhat
                                                    </span>
                                                    <Link to="/news-detail">
                                                        Necessity may give us best virtual court
                                                    </Link>
                                                </h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sidebar__post-image">
                                                
                                                <img
                                                    src="{{ asset('assets/images/resource/news-3.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="sidebar__post-content">
                                                <h3>
                                                    
                                                    <span className="sidebar__post-content-meta">
                                                        <i className="fas fa-user-circle" />
                                                        Mam Farhat
                                                    </span>
                                                    <Link to="/news-detail">
                                                        You should know about business plan
                                                    </Link>
                                                </h3>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidebar__single sidebar__category">
                                    <h3 className="sidebar__title">Categories</h3>
                                    <ul className="sidebar__category-list list-unstyled">
                                        <li>
                                            <Link to="/news-detail">
                                                Artifical Intelligence
                                                <span className="icon-right-arrow" />
                                            </Link>
                                        </li>
                                        <li className="active">
                                            <Link to="/news-detail">
                                                Cloud Solution
                                                <span className="icon-right-arrow" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/news-detail">
                                                Cyber Data
                                                <span className="icon-right-arrow" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/news-detail">
                                                SEO Marketing
                                                <span className="icon-right-arrow" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/news-detail">
                                                UI/UX Design
                                                <span className="icon-right-arrow" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/news-detail">
                                                Web Development
                                                <span className="icon-right-arrow" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidebar__single sidebar__tags">
                                    <h3 className="sidebar__title">Tags</h3>
                                    <div className="sidebar__tags-list">
                                        
                                        <Link to="#">Education</Link> <Link to="#">Book</Link>
                                        <Link to="#">Collage</Link> <Link to="#">Digital</Link>
                                        <Link to="#">Software</Link> <Link to="#">Language</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Blog Details End*/}
        </>
    );
}