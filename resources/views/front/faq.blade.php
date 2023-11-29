@extends('layouts.front_layout')
@section('content')
@section('title', 'Faq')


<main class="main faq">
    <nav class="breadcrumb-nav">
        <div class="container">
            <ul class="breadcrumb">
                <li><a href="index.php"><i class="d-icon-home"></i></a></li>
                <li>FAQs</li>
            </ul>
        </div>
    </nav>
    <div class="page-header" style="background-image: url({{URL::asset('front/images/')}}/page-header/faq.jpg)">
        <div class="banner-content">
            <h3 class="page-subtitle lh-1">Frequently</h3>
            <h1 class="page-title font-weight-bold text-capitalize lh-1">Asked Questions</h1>
        </div>
    </div>
    <div class="page-content mb-10 pb-8">
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mt-10">
                        <h2 class="title pl-2 pr-2 ls-m text-left">Customer Management</h2>
                        <div class="accordion accordion-border accordion-boxed accordion-plus">
                            <div class="card">
                                <div class="card-header">
                                    <a href="#collapse1-1" class="collapse">How can add vendor role to the
                                        customer?</a>
                                </div>
                                <div id="collapse1-1" class="expanded">
                                    <div class="card-body">
                                        <div class="o-video">
                                            <iframe src="https://www.youtube.com/embed/jRIEOWtYAGY"
                                                allowfullscreen></iframe>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget
                                            felis facilisis fermentum.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <a href="#collapse1-2" class="expand">What benefits a customer can take?</a>
                                </div>
                                <div id="collapse1-2" class="collapsed">
                                    <div class="card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget
                                            felis facilisis fermentum.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <a href="#collapse1-3" class="expand">How to change customer's address?</a>
                                </div>
                                <div id="collapse1-3" class="collapsed">
                                    <div class="card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget
                                            felis facilisis fermentum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-10">
                        <h2 class="title pl-2 pr-2 ls-m">Product Type</h2>
                        <div class="accordion accordion-border accordion-boxed accordion-plus">
                            <div class="card">
                                <div class="card-header">
                                    <a href="#collapse2-1" class="collapse">What is difference between simple &
                                        variable product?</a>
                                </div>
                                <div id="collapse2-1" class="expanded">
                                    <div class="card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget
                                            felis facilisis fermentum.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <a href="#collapse2-2" class="expand">How to buy several products at
                                        once?</a>
                                </div>
                                <div id="collapse2-2" class="collapsed">
                                    <div class="card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget
                                            felis facilisis fermentum.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <a href="#collapse2-3" class="expand">How to add downloadable product?</a>
                                </div>
                                <div id="collapse2-3" class="collapsed">
                                    <div class="card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget
                                            felis facilisis fermentum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mt-10">
                        <h2 class="title pl-2 pr-2 ls-m">Ordering Products</h2>
                        <div class="accordion accordion-border accordion-boxed accordion-plus">
                            <div class="card">
                                <div class="card-header">
                                    <a href="#collapse3-1" class="collapse">How can a guest order the
                                        product?</a>
                                </div>
                                <div id="collapse3-1" class="expanded">
                                    <div class="card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget
                                            felis facilisis fermentum.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <a href="#collapse3-2" class="expand">What kind of payment methods are
                                        available?</a>
                                </div>
                                <div id="collapse3-2" class="collapsed">
                                    <div class="card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget
                                            felis facilisis fermentum.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <a href="#collapse3-3" class="expand">What is benefit of paypal payment?</a>
                                </div>
                                <div id="collapse3-3" class="collapsed">
                                    <div class="card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget
                                            felis facilisis fermentum.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <a href="#collapse3-4" class="expand">How to register as a customer?</a>
                                </div>
                                <div id="collapse3-4" class="collapsed">
                                    <div class="card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget
                                            felis facilisis fermentum.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <a href="#collapse3-5" class="expand">What is the preferable way to buy
                                        product?</a>
                                </div>
                                <div id="collapse3-5" class="collapsed">
                                    <div class="card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget
                                            felis facilisis fermentum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-10">
                        <h2 class="title pl-2 pr-2 ls-m">The Others</h2>
                        <div class="accordion accordion-border accordion-boxed accordion-plus">
                            <div class="card">
                                <div class="card-header">
                                    <a href="#collapse4-1" class="collapse">How can I return an purchased item
                                        online?</a>
                                </div>
                                <div id="collapse4-1" class="expanded">
                                    <div class="card-body">
                                        <div class="o-video">
                                            <iframe src="https://www.youtube.com/embed/jRIEOWtYAGY"
                                                allowfullscreen></iframe>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget
                                            felis facilisis fermentum.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <a href="#collapse4-2" class="expand">How to add coupon code?</a>
                                </div>
                                <div id="collapse4-2" class="collapsed">
                                    <div class="card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget
                                            felis facilisis fermentum.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <a href="#collapse4-3" class="expand">How can I find theme style?</a>
                                </div>
                                <div id="collapse4-3" class="collapsed">
                                    <div class="card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget
                                            felis facilisis fermentum.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <a href="#collapse4-4" class="expand">What are the delivery types you can
                                        use?</a>
                                </div>
                                <div id="collapse4-4" class="collapsed">
                                    <div class="card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit. Donec odio.
                                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                            Suspendisse
                                            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
                                            justo eget
                                            felis facilisis fermentum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>

  @stop