@extends('layouts.front_layout')
@section('content')
@section('title', 'Blog')



<main class="main">
    <nav class="breadcrumb-nav">
        <div class="container">
            <ul class="breadcrumb">
                <li><a href="index.php"><i class="d-icon-home"></i></a></li>
                <li><a href="#" class="active">Blog</a></li>
                <li>all blog</li>
            </ul>
        </div>
    </nav>
    <div class="page-content with-sidebar">
        <div class="container">
            <div class="row gutter-lg">
                <div class="col-lg-9">
                    <div class="posts row mb-4">
                        <article class="col-md-6 post post-frame overlay-zoom">
                            <figure class="post-media">
                                <a href="blog-detail.php">
                                    <img src="{{URL::asset('front/images/')}}/blog/frame/1.jpg" alt="Blog post" width="340" height="206"
                                        style="background-color: #919fbc;" />
                                </a>
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
                        <article class="col-md-6 post post-frame overlay-zoom">
                            <figure class="post-media">
                                <a href="blog-detail.php">
                                    <img src="{{URL::asset('front/images/')}}/blog/frame/2.jpg" alt="Blog post" width="340" height="206"
                                        style="background-color: #e5e6e6;" />
                                </a>
                            </figure>
                            <div class="post-details">
                                <p class="small">KAMERASKILTER</p>
                                <h4 class="post-title"><a href="blog-detail.php">Kameraskilter: 10 grunner til at det
                                        minsker sjansen for innbrudd/tyveri</a></h4>
                                <p class="post-content">Kameraskilter: 10 grunner til at det minsker sjansen for
                                    innbrudd/tyveri De 10 grunnene...</p>
                                <a href="blog-detail.php" class="btn btn-primary btn-link btn-underline">CONTINUE
                                    READING<i class="d-icon-arrow-right"></i></a>
                            </div>
                        </article>
                        <article class="col-md-6 post post-frame overlay-zoom">
                            <figure class="post-media">
                                <a href="blog-detail.php">
                                    <img src="{{URL::asset('front/images/')}}/blog/frame/3.jpg" alt="Blog post" width="340" height="206"
                                        style="background-color: #eaeef1;" />
                                </a>
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
                        <article class="col-md-6 post post-frame overlay-zoom">
                            <figure class="post-media">
                                <a href="blog-detail.php">
                                    <img src="{{URL::asset('front/images/')}}/blog/frame/1.jpg" alt="Blog post" width="340" height="206"
                                        style="background-color: #919fbc;" />
                                </a>
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
                    </div>

                    <ul class="pagination">
                        <li class="page-item disabled">
                            <a class="page-link page-link-prev" href="#" aria-label="Previous" tabindex="-1"
                                aria-disabled="true">
                                <i class="d-icon-arrow-left"></i>Prev
                            </a>
                        </li>
                        <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item">
                            <a class="page-link page-link-next" href="#" aria-label="Next">
                                Next<i class="d-icon-arrow-right"></i>
                            </a>
                        </li>
                    </ul>
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