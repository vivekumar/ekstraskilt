@extends('layouts.front_layout')
@section('content')
@section('title', 'Blog')


<main class="main">
    <nav class="breadcrumb-nav">
        <div class="container">
            <ul class="breadcrumb">
                <li>
                    <a href="demo1.html">
                        <i class="d-icon-home"></i>
                    </a>
                </li>
                <li>
                    <a href="blog.php" class="active">Blog</a>
                </li>
                <li>Blog Detail</li>
            </ul>
        </div>
    </nav>
    <div class="page-content with-sidebar">
        <div class="container">
            <div class="row gutter-lg">
                <div class="col-lg-9">
                    <article class="post-single">
                        <figure class="post-media">
                            <a href="#">
                                <img src="{{URL::asset('front/images/')}}/blog/single/1.jpg" width="880" height="450" alt="post" />
                            </a>
                        </figure>
                        <div class="post-details">
                            
                            <h4 class="post-title">
                                <a href="#">Husnummerskilt modern 3 siffer – Alu m/ refleks</a>
                            </h4>
                            <div class="post-body mb-7">
                                <p class="mb-5"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
                                    hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus
                                    id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
                                    libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                                    Suspendisse potenti.</p>
                                <p class="mb-6">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
                                    luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis,
                                    gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem
                                    at felis. Vestibulum volutpat, lacus a <a href="#">ultrices sagittis</a>, mi neque
                                    euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
                                    fermentum et, dapibus sed, urna. </p>
                                <div class="with-img row align-items-center">
                                    <div class="col-md-6 mb-6">
                                        <figure>
                                            <img src="{{URL::asset('front/images/')}}/blog/single/2.jpg" alt="image" width="336" height="415"
                                                class="float-left">
                                            <figcaption class="text-left mt-1"> Designe by <a href="#">Casper Dalin</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div class="col-md-6 mb-6">
                                        <h4 class="font-weight-semi-bold ls-s">Quisque volutpat mattiseros. </h4>
                                        <p class="mb-8 col-lg-11">Sed pretium, ligula sollicitudin laoreet viverra,
                                            tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.
                                            Ut justo. Suspendisse potenti. </p>
                                        <h4 class="font-weight-semi-bold ls-s">More Details</h4>
                                        <ul class="list list-type-check mb-6">
                                            <li>Praesent id enim sit amet.</li>
                                            <li>Tdio vulputate eleifend in in tortor. ellus massa.</li>
                                            <li>Massa ristique sit amet condim vel</li>
                                            <li>Dilisis Facilisis quis sapien. Praesent id enim sit amet</li>
                                            <li>Praesent id enim sit amet.</li>
                                            <li>Tdio vulputate eleifend in in tortor. ellus massa.</li>
                                        </ul>
                                    </div>
                                </div>
                                <blockquote class="mt-1 mb-6 p-relative">
                                    <p class="font-weight-semi-bold ls-m"> “ Morbi purus libero, faucibus adipiscing,
                                        commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor.
                                        ” </p>
                                </blockquote>
                                <p>Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
                                    Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat,
                                    lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare
                                    nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi
                                    interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper
                                    laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. </p>
                            </div>
                            <div class="post-author-detail">
                                <figure class="author-media">
                                    <a href="#">
                                        <img src="{{URL::asset('front/images/')}}/blog/comments/1.jpg" alt="avatar" width="50" height="50">
                                    </a>
                                </figure>
                                <div class="author-body">
                                    <div class="author-header d-flex justify-content-between align-items-center">
                                        <div>
                                            <span class="author-title">AUTHOR</span>
                                            <h4 class="author-name font-weight-bold mb-0">Admin</h4>
                                        </div>
                                        <div>
                                            <a href="#" class="author-link font-weight-semi-bold">View all posts by admin <i class="d-icon-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="author-content">
                                        <p class="mb-0">Praesent dapibus, neque id cursus faucibus, tortor neque egestas
                                            auguae, eu vulputate magna eros euerat. Aliquam erat volutpat.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="post-footer mt-7 mb-3">
                                <div class="post-tags">
                                    <a href="#" class="tag">classic</a>
                                    <a href="#" class="tag">converse</a>
                                </div>
                                <div class="social-icons">
                                    <a href="#" class="social-icon social-facebook" title="Facebook">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" class="social-icon social-twitter" title="Twitter">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" class="social-icon social-pinterest" title="Pinterest">
                                        <i class="fab fa-pinterest-p"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>

                    <nav class="page-nav">
                        <a class="pager-link pager-link-prev" href="#"> Previous Post <span
                                class="pager-link-title">Lorem ipsum dolor sit amet</span>
                        </a>
                        <a class="pager-link pager-link-next" href="#"> Go To Post <span class="pager-link-title">Lorem,
                                ipsum dolor...</span>
                        </a>
                    </nav>

                    <div class="related-posts">
                        <h3 class="title title-simple text-left text-normal font-weight-bold ls-normal">Related Posts
                        </h3>
                        <div class="owl-carousel owl-theme row cols-lg-3 cols-sm-2" data-owl-options="{
                                    'items': 1,
                                    'margin': 20,
                                    'loop': false,
                                    'responsive': {
                                        '576': {
                                            'items': 2
                                        },
                                        '768': {
                                            'items': 3
                                        }
                                    }
                                }">
                            <article class="post post-frame overlay-zoom">
                                <figure class="post-media">
                                    <a href="blog-detail.php">
                                        <img src="{{URL::asset('front/images/')}}/blog/frame/1.jpg" alt="Blog post" width="340" height="206"
                                            style="background-color: #919fbc;" />
                                    </a>
                                    <div class="post-calendar">
                                        <span class="post-day">23</span>
                                        <span class="post-month">JAN</span>
                                    </div>
                                </figure>
                                <div class="post-details">
                                    <p class="small">EKSTRASKILTER</p>
                                    <h4 class="post-title"><a href="blog-detail.php">10 gode grunner til å kjøpe
                                            ekstraskilt</a></h4>
                                    <p class="post-content">Økt sikkerhet og sikt: Fordelene med å bruke et ekstraskilt
                                        bak...</p>
                                    <a href="blog-detail.php" class="btn btn-primary btn-link btn-underline">CONTINUE
                                        READING<i class="d-icon-arrow-right"></i></a>
                                </div>
                            </article>
                            <article class="post post-frame overlay-zoom">
                                <figure class="post-media">
                                    <a href="blog-detail.php">
                                        <img src="{{URL::asset('front/images/')}}/blog/frame/2.jpg" alt="Blog post" width="340" height="206"
                                            style="background-color: #e5e6e6;" />
                                    </a>
                                    <div class="post-calendar">
                                        <span class="post-day">23</span>
                                        <span class="post-month">JAN</span>
                                    </div>
                                </figure>
                                <div class="post-details">
                                    <p class="small">KAMERASKILTER</p>
                                    <h4 class="post-title"><a href="blog-detail.php">Kameraskilter: 10 grunner til at
                                            det
                                            minsker sjansen for innbrudd/tyveri</a></h4>
                                    <p class="post-content">Kameraskilter: 10 grunner til at det minsker sjansen for
                                        innbrudd/tyveri De 10 grunnene...</p>
                                    <a href="blog-detail.php" class="btn btn-primary btn-link btn-underline">CONTINUE
                                        READING<i class="d-icon-arrow-right"></i></a>
                                </div>
                            </article>
                            <article class="post post-frame overlay-zoom">
                                <figure class="post-media">
                                    <a href="blog-detail.php">
                                        <img src="{{URL::asset('front/images/')}}/blog/frame/3.jpg" alt="Blog post" width="340" height="206"
                                            style="background-color: #eaeef1;" />
                                    </a>
                                    <div class="post-calendar">
                                        <span class="post-day">23</span>
                                        <span class="post-month">JAN</span>
                                    </div>
                                </figure>
                                <div class="post-details">
                                    <p class="small">KAMERASKILTER</p>
                                    <h4 class="post-title"><a href="blog-detail.php">Lorem ipsum dolor sit amet</a></h4>
                                    <p class="post-content">Lorem ipsum dolor sit amet,onadipiscing elit, sedsd
                                        doeiu smod tempo...</p>
                                    <a href="blog-detail.php" class="btn btn-primary btn-link btn-underline">CONTINUE
                                        READING<i class="d-icon-arrow-right"></i></a>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div class="comments">
                        <h3 class="title title-simple text-left text-normal font-weight-bold">3 Comments</h3>
                        <ul>
                            <li>
                                <div class="comment">
                                    <figure class="comment-media">
                                        <a href="#">
                                            <img src="{{URL::asset('front/images/')}}/blog/comments/1.jpg" alt="avatar">
                                        </a>
                                    </figure>
                                    <div class="comment-body">
                                        <div class="comment-user">
                                            <span class="comment-date">November 9, 2018 at 2:19 pm</span>
                                            <h4>
                                                <a href="#">Jimmy Pearson</a>
                                            </h4>
                                        </div>
                                        <div class="comment-content mb-2">
                                            <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales
                                                leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                                                Suspendisse potenti. </p>
                                        </div>
                                        <a href="#" class="btn btn-link btn-reveal-right">REPLY <i
                                                class="d-icon-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <div class="comment">
                                            <figure class="comment-media">
                                                <a href="#">
                                                    <img src="{{URL::asset('front/images/')}}/blog/comments/2.jpg" alt="avatar">
                                                </a>
                                            </figure>
                                            <div class="comment-body">
                                                <div class="comment-user">
                                                    <span class="comment-date">November 9, 2018 at 2:19 pm</span>
                                                    <h4>
                                                        <a href="#">Lena Knight</a>
                                                    </h4>
                                                </div>
                                                <div class="comment-content mb-2">
                                                    <p>Morbi interdum mollis sapien. Sed ac risus.</p>
                                                </div>
                                                <a href="#" class="btn btn-link btn-reveal-right">REPLY <i
                                                        class="d-icon-arrow-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div class="comment">
                                    <figure class="comment-media">
                                        <a href="#">
                                            <img src="{{URL::asset('front/images/')}}/blog/comments/1.jpg" alt="avatar">
                                        </a>
                                    </figure>
                                    <div class="comment-body">
                                        <div class="comment-user">
                                            <span class="comment-date">November 9, 2018 at 2:19 pm</span>
                                            <h4>
                                                <a href="#">Johnathan Castillo</a>
                                            </h4>
                                        </div>
                                        <div class="comment-content mb-2">
                                            <p>Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
                                                pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
                                                fermentum et, dapibus sed, urna.</p>
                                        </div>
                                        <a href="#" class="btn btn-link btn-reveal-right">REPLY <i
                                                class="d-icon-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="reply">
                        <div class="title-wrapper text-left">
                            <h3 class="title title-simple text-left text-normal">Leave A Reply</h3>
                            <p>Your email address will not be published. Required fields are marked *</p>
                        </div>
                        <form action="#">
                            <textarea id="reply-message" cols="30" rows="6" class="form-control mb-4"
                                placeholder="Comment *" required></textarea>
                            <div class="row">
                                <div class="col-md-6 mb-5">
                                    <input type="text" class="form-control" id="reply-name" name="reply-name"
                                        placeholder="Name *" required />
                                </div>
                                <div class="col-md-6 mb-5">
                                    <input type="email" class="form-control" id="reply-email" name="reply-email"
                                        placeholder="Email *" required />
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary btn-rounded">POST COMMENT <i
                                    class="d-icon-arrow-right"></i>
                            </button>
                        </form>
                    </div>
                </div>


                <aside class="col-lg-3 right-sidebar sidebar-fixed sticky-sidebar-wrapper">
                    <div class="sidebar-overlay">
                    </div>
                    <a class="sidebar-close" href="#"><i class="d-icon-times"></i></a>
                    <a href="#" class="sidebar-toggle"><i class="fas fa-chevron-left"></i></a>
                    <div class="sidebar-content">
                        <div class="sticky-sidebar" data-sticky-options="{'top': 89, 'bottom': 70}">
                            <div class="widget widget-search border-no mb-2">
                                <form action="#" class="input-wrapper input-wrapper-inline btn-absolute">
                                    <input type="text" class="form-control" name="search" autocomplete="off"
                                        placeholder="Search in Blog" required />
                                    <button class="btn btn-search btn-link" type="submit">
                                        <i class="d-icon-search"></i>
                                    </button>
                                </form>
                            </div>
                            <div class="widget widget-collapsible border-no">
                                <h3 class="widget-title">Blog Categories</h3>
                                <ul class="widget-body filter-items search-ul">
                                    <li><a href="#">Accessories</a></li>
                                    <li>
                                        <a href="#">Ekstraskilter</a>
                                        <ul class="children">
                                            <li><a href="#">Lorem ipsum</a></li>
                                            <li><a href="#">Lorem ipsum</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Navy</a>
                                        <ul class="children">
                                            <li><a href="#">Lorem ipsum</a></li>
                                            <li><a href="#">Lorem ipsum</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Dørskilt</a></li>
                                    <li><a href="#">Husnummerskilt</a></li>
                                    <li><a href="#">TO THE HOME</a></li>
                                </ul>
                            </div>
                            <div class="widget widget-collapsible">
                                <h3 class="widget-title">Popular Posts</h3>
                                <div class="widget-body">
                                    <div class="post-col">
                                        <div class="post post-list-sm">
                                            <figure class="post-media">
                                                <a href="blog-detail.php">
                                                    <img src="{{URL::asset('front/images/')}}/wishlist/product-1.jpg" width="90" height="90"
                                                        alt="post" />
                                                </a>
                                            </figure>
                                            <div class="post-details">
                                                <div class="post-meta">
                                                    <a href="#" class="post-date">Sep 01, 2023</a>
                                                </div>
                                                <h4 class="post-title"><a href="blog-detail.php">Lorem ipsum dolor
                                                        sit</a></h4>
                                            </div>
                                        </div>
                                        <div class="post post-list-sm">
                                            <figure class="post-media">
                                                <a href="blog-detail.php">
                                                    <img src="{{URL::asset('front/images/')}}/wishlist/product-2.jpg" width="90" height="90"
                                                        alt="post" />
                                                </a>
                                            </figure>
                                            <div class="post-details">
                                                <div class="post-meta">
                                                    <a href="#" class="post-date">Sep 01, 2013</a>
                                                </div>
                                                <h4 class="post-title"><a href="blog-detail.php">Lorem ipsum dolor
                                                        sit</a></h4>
                                            </div>
                                        </div>
                                        <div class="post post-list-sm">
                                            <figure class="post-media">
                                                <a href="blog-detail.php">
                                                    <img src="{{URL::asset('front/images/')}}/wishlist/product-3.jpg" width="90" height="90"
                                                        alt="post" />
                                                </a>
                                            </figure>
                                            <div class="post-details">
                                                <div class="post-meta">
                                                    <a href="#" class="post-date">Sep 01, 2023</a>
                                                </div>
                                                <h4 class="post-title"><a href="blog-detail.php">Lorem ipsum dolor
                                                        sit</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="widget widget-collapsible">
                                <h3 class="widget-title">About us</h3>
                                <div class="widget-body">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                        nonummy nibh euismod tincidunt.</p>
                                </div>
                            </div>
                            <div class="widget widget-posts widget-collapsible">
                                <h3 class="widget-title">Tag Cloud</h3>
                                <div class="widget-body">
                                    <a href="#" class="tag">Ekstraskilter</a>
                                    <a href="#" class="tag">Navy</a>
                                    <a href="#" class="tag">Dørskilt</a>
                                    <a href="#" class="tag">Husnummerskilt</a>
                                    <a href="#" class="tag">N BRANDS</a>
                                    <a href="#" class="tag">Signage</a>
                                    <a href="#" class="tag">Camera</a>
                                    <a href="#" class="tag">Parking sign</a>
                                    <a href="#" class="tag">Protection</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</main>


    @stop