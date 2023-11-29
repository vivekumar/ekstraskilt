@extends('layouts.front_layout')
@section('content')
@section('title', 'Product Details')


<main class="main mt-6 single-product">
    <div class="page-content mb-10 pb-6">
        <div class="container">
            <div class="product product-single row mb-7">
                <div class="col-md-6 sticky-sidebar-wrapper">
                    <div class="product-gallery pg-vertical sticky-sidebar">
                        <div class="product-single">
                            <figure class="product-image">
                                <img src="{{URL::asset('front/images/')}}/product/product-1.jpg" alt="">
                            </figure>
                        </div>


                        <div class="product-label-group">
                            <label class="product-label label-new">new</label>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="product-details">
                        <div class="product-navigation">
                            <ul class="breadcrumb breadcrumb-lg">
                                <li><a href="demo1.html"><i class="d-icon-home"></i></a></li>
                                <li><a href="#" class="active">Products</a></li>
                                <li>Detail</li>
                            </ul>
                            <ul class="product-nav">
                                <li class="product-nav-prev">
                                    <a href="#">
                                        <i class="d-icon-arrow-left"></i> Prev
                                        <span class="product-nav-popup">
                                            <img src="{{URL::asset('front/images/')}}/product/prod1.jpg" alt="product thumbnail" width="110"
                                                height="123">
                                            <span class="product-name">Gjennomgang forbudt</span>
                                        </span>
                                    </a>
                                </li>
                                <li class="product-nav-next">
                                    <a href="#">
                                        Next <i class="d-icon-arrow-right"></i>
                                        <span class="product-nav-popup">
                                            <img src="{{URL::asset('front/images/')}}/product/prod1.jpg" alt="product thumbnail" width="110"
                                                height="123">
                                            <span class="product-name">Gjennomgang forbudt</span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <h1 class="product-name">Kamera skilt med direkte overføring – egen kontaktinfo
                        </h1>
                        <div class="product-meta">
                            Produktn: <span class="product-sku">50316</span>
                            Kategor: <span class="product-brand">Kameraovervåkning</span>
                            Stikkord: <span class="product-brand">Privatrettslig skilt</span>
                        </div>
                        <div class="product-price">Fra 125 kr Ink. mva</div>
                        <div class="ratings-container">
                            <div class="ratings-full">
                                <span class="ratings" style="width:80%"></span>
                                <span class="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="#product-tab-reviews" class="link-to-tab rating-reviews">( 11 reviews )</a>
                        </div>
                        <p class="product-short-desc">Kamera skilt med direkte overføring – egen kontaktinfo er en
                            effektiv måte å sikre seg mot kriminalitet på både i det offentlige, men også på privat
                            grunn. All videoovervåkning og kameraovervåkning skal varsles tydelig med skilt, det er ikke
                            tillatt å ha kameraovervåkning dersom du ikke opplyser om dette.</p>

                        <p class="dark-text"><strong>Str : 297x210mm / 420x297mm</strong></p>

                        <div class="product-input">
                            <label>Kontaktinfo:</label>
                            <div class="input-box">
                                <input type="text" name="" id="" class="form-control" placeholder="(Ditt navn)">
                            </div>
                        </div>

                        <div class="product-input">
                            <label>Telefon nummer:</label>
                            <div class="input-box">
                                <input type="text" name="" id="" class="form-control" placeholder="(Ditt telefonnr)">
                            </div>
                        </div>

                        <div class="design_layout">
                            <input class="design" type="button" value="bekreft ditt design">
                        </div>

                        <div class="product-form product-variations product-color">
                            <label>Størrelse:</label>
                            <div class="select-box">
                                <select name="color" class="form-control">
                                    <option value selected="selected">Velg et alternativ</option>
                                    <option value="black">A3 (297 x 420 mm)</option>
                                    <option value="brown">A4 (210 x 297 mm)</option>
                                </select>
                            </div>
                        </div>

                        <div class="product-form product-variations product-color">
                            <label>Overflate:</label>
                            <div class="radio-box">
                                <input type="radio" name="rd0" id="reflekterende"><label
                                    for="reflekterende">Reflekterende</label>
                            </div>
                            <div class="radio-box">
                                <input type="radio" name="rd0" id="standard" checked><label
                                    for="standard">Standard</label>
                            </div>
                        </div>
                        <div class="product-form product-variations product-color">
                            <label>Materiale:</label>
                            <div class="radio-box">
                                <input type="radio" name="rd1" id="aluminium"><label for="aluminium">Aluminium</label>
                            </div>
                            <div class="radio-box">
                                <input type="radio" name="rd1" id="selvklebende" checked><label
                                    for="selvklebende">Selvklebende</label>
                            </div>
                            <div class="radio-box">
                                <input type="radio" name="rd1" id="kompositt"><label for="kompositt">3mm alu
                                    kompositt</label>
                            </div>
                        </div>

                        <div class="design_layout">
                            <a href="#" class="design">Start på nytt</a>
                        </div>

                        <div class="product-variation-price2">
                            <span><strong>125 <sup>kr</sup></strong> <small>Ink. mva</small></span>
                        </div>

                        <hr class="product-divider">
                        <div class="product-form product-qty">
                            <div class="product-form-group">
                                <div class="input-group mr-2">
                                    <button class="quantity-minus d-icon-minus"></button>
                                    <input class="quantity form-control" type="number" min="1" max="1000000">
                                    <button class="quantity-plus d-icon-plus"></button>
                                </div>
                                <button class="btn-product btn-cart text-normal ls-normal font-weight-semi-bold"><i
                                        class="d-icon-bag"></i>Add to
                                    Cart</button>
                            </div>
                        </div>
                        <hr class="product-divider mb-3">
                        <div class="product-footer">
                            <div class="social-links mr-4">
                                <a href="#" class="social-link social-facebook fab fa-facebook-f"></a>
                                <a href="#" class="social-link social-twitter fab fa-twitter"></a>
                                <a href="#" class="social-link social-pinterest fab fa-pinterest-p"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab tab-nav-simple product-tabs">
                <ul class="nav nav-tabs justify-content-center" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" href="#product-tab-description">Beskrivelse</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#product-tab-additional">Tilleggsinformasjon</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#product-tab-reviews">Omtaler (2)</a>
                    </li>
                </ul>

                <div class="tab-content">
                    <div class="tab-pane active in" id="product-tab-description">
                        <div class="row mt-6">
                            <div class="col-md-6">
                                <h5 class="description-title mb-4 font-weight-semi-bold ls-m">Kamera skilt med direkte
                                    overføring – egen kontaktinfo</h5>
                                <p class="mb-2">Kamera skilt med direkte overføring – egen kontaktinfo er en effektiv
                                    måte å sikre seg mot kriminalitet på både i det offentlige, men også på privat
                                    grunn. All videoovervåkning og kameraovervåkning skal varsles tydelig med skilt, det
                                    er ikke tillatt å ha kameraovervåkning dersom du ikke opplyser om dette.</p>
                                <p class="mb-2">Skiltet brukes i private områder, på privat grunn og på private
                                    fellesområder.
                                    Overvåkningsskilt monteres i private områder for å påvirke publikum til å respektere
                                    regler, lover og bestemmelser som gjelder på stedet. Det er viktig at utformingen av
                                    skiltet er juridiske korrekte og holdbare.</p>
                                <p class="mb-2">Ekstraskilt.no har lang erfaring med denne type skilt og sørger alltid
                                    for at
                                    skiltene inneholder korrekte symboler og tekst. Alle privatrettslige skilt
                                    produseres for lang holdbarhet i nordiske forhold.</p>


                                <h5 class="description-title mb-3 font-weight-semi-bold ls-m">Kamera skilt med direkte
                                    overføring – egen kontaktinfo</h5>
                                <p class="mb-2">Alle våre skilter for kameraovervåkning tilfredsstiller reglene fra
                                    Datatilsynet og holder høy kvalitet som tåler det nordiske klimaet. Kameraovervåket
                                    område skilt finnes i flere forskjellige varianter og både med og uten telefonnummer
                                    og navn på den ansvarlige. Alle virksomheter må ha skilt som inneholder navn og
                                    telefonnummer.</p>
                                <p class="mb-2">Du kan sette opp Kamera skilt med direkte overføring – egen kontaktinfo
                                    som
                                    privatperson, men det er kun tillatt å overvåke egen eiendom. Det vil si at kameraet
                                    kan ikke fange opp hele eller deler av offentlige områder eller noen andres eiendom.
                                    Privat overvåkning dekkes ikke av regelverket til Datatilsynet.</p>


                            </div>

                            <div class="col-md-6 pl-md-6 pt-4 pt-md-0">
                                <h5 class="description-title font-weight-semi-bold ls-m mb-5">Videobeschreibung
                                </h5>
                                <figure class="p-relative d-inline-block mb-2">
                                    <img src="{{URL::asset('front/images/')}}/product/product.jpg" width="559" height="370" alt="Product">
                                    <a class="btn-play btn-iframe" href="video/memory-of-a-woman.mp4">
                                        <i class="d-icon-play-solid"></i>
                                    </a>
                                </figure>

                                <h5 class="description-title mb-3 font-weight-semi-bold ls-m">Montering av Kamera skilt?
                                </h5>
                                <p class="mb-2">Skiltene monteres ved hjelp av skruer eller dobbeltsidig tape</p>

                                <h5 class="description-title mb-3 font-weight-semi-bold ls-m">Prisgaranti</h5>
                                <p class="mb-2">Vi er veldig trygge på at vi leverer de beste skiltene til de laveste
                                    prisene. Derfor tilbyr vi prisgaranti. Finner du ett produkt som er helt identisk
                                    med våre produkter, sender du oss link til produktet – Dersom det kvalifiserer for
                                    garantien, gir vi nøyaktig samme pris.</p>


                            </div>

                            <div class="col-md-12">
                                <ul class="mb-8">
                                    <li><strong>Les bloggartikkelen med 10 grunner til hvorfor det er lurt med
                                            kameraskilter :</strong>
                                        Les denne artikkelen</li>
                                    <li>Se de andre skiltene innen denne kategorien her</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="product-tab-additional">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <th class="font-weight-semi-bold text-dark pl-0">VEKT</th>
                                    <td class="pl-4">1 kg</td>
                                </tr>
                                <tr>
                                    <th class="font-weight-semi-bold text-dark pl-0">DIMENSJONER</th>
                                    <td class="pl-4">35 × 25 × 5 cm</td>
                                </tr>
                                <tr>
                                    <th class="font-weight-semi-bold text-dark pl-0">STØRRELSE</th>
                                    <td class="pl-4">A3 (297 x 420 mm), A4 (210 x 297 mm)</td>
                                </tr>
                                <tr>
                                    <th class="font-weight-semi-bold text-dark pl-0">OVERFLATE</th>
                                    <td class="pl-4">Reflekterende, Standard</td>
                                </tr>
                                <tr>
                                    <th class="font-weight-semi-bold text-dark border-no pl-0">MATERIALE</th>
                                    <td class="border-no pl-4">Aluminium, Selvklebende, 3mm alu kompositt</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane" id="product-tab-reviews">
                        <div class="row">
                            <div class="col-lg-4 mb-6">
                                <div class="avg-rating-container">
                                    <mark>5.0</mark>
                                    <div class="avg-rating">
                                        <span class="avg-rating-title">Average Rating</span>
                                        <div class="ratings-container mb-0">
                                            <div class="ratings-full">
                                                <span class="ratings" style="width:100%"></span>
                                                <span class="tooltiptext tooltip-top"></span>
                                            </div>
                                            <span class="rating-reviews">(2 Reviews)</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="ratings-list mb-2">
                                    <div class="ratings-item">
                                        <div class="ratings-container mb-0">
                                            <div class="ratings-full">
                                                <span class="ratings" style="width:100%"></span>
                                                <span class="tooltiptext tooltip-top"></span>
                                            </div>
                                        </div>
                                        <div class="rating-percent">
                                            <span style="width:100%;"></span>
                                        </div>
                                        <div class="progress-value">100%</div>
                                    </div>
                                    <div class="ratings-item">
                                        <div class="ratings-container mb-0">
                                            <div class="ratings-full">
                                                <span class="ratings" style="width:80%"></span>
                                                <span class="tooltiptext tooltip-top">4.00</span>
                                            </div>
                                        </div>
                                        <div class="rating-percent">
                                            <span style="width:0%;"></span>
                                        </div>
                                        <div class="progress-value">0%</div>
                                    </div>
                                    <div class="ratings-item">
                                        <div class="ratings-container mb-0">
                                            <div class="ratings-full">
                                                <span class="ratings" style="width:60%"></span>
                                                <span class="tooltiptext tooltip-top">4.00</span>
                                            </div>
                                        </div>
                                        <div class="rating-percent">
                                            <span style="width:0%;"></span>
                                        </div>
                                        <div class="progress-value">0%</div>
                                    </div>
                                    <div class="ratings-item">
                                        <div class="ratings-container mb-0">
                                            <div class="ratings-full">
                                                <span class="ratings" style="width:40%"></span>
                                                <span class="tooltiptext tooltip-top">4.00</span>
                                            </div>
                                        </div>
                                        <div class="rating-percent">
                                            <span style="width:0%;"></span>
                                        </div>
                                        <div class="progress-value">0%</div>
                                    </div>
                                    <div class="ratings-item">
                                        <div class="ratings-container mb-0">
                                            <div class="ratings-full">
                                                <span class="ratings" style="width:20%"></span>
                                                <span class="tooltiptext tooltip-top">4.00</span>
                                            </div>
                                        </div>
                                        <div class="rating-percent">
                                            <span style="width:0%;"></span>
                                        </div>
                                        <div class="progress-value">0%</div>
                                    </div>
                                </div>
                                <a class="btn btn-dark btn-rounded submit-review-toggle" href="#">Submit
                                    Review</a>
                            </div>
                            <div class="col-lg-8 comments pt-2 pb-10 border-no">
                                <nav class="toolbox">
                                    <div class="toolbox-right">
                                        <div class="toolbox-item toolbox-sort select-box text-dark">
                                            <label>Sort By :</label>
                                            <select name="orderby" class="form-control">
                                                <option value>Default Order</option>
                                                <option value="newest" selected="selected">Newest Reviews</option>
                                                <option value="oldest">Oldest Reviews</option>
                                                <option value="high_rate">Highest Rating</option>
                                                <option value="low_rate">Lowest Rating</option>
                                                <option value="most_likely">Most Likely</option>
                                                <option value="most_unlikely">Most Unlikely</option>
                                            </select>
                                        </div>
                                    </div>
                                </nav>
                                <ul class="comments-list">
                                    <li>
                                        <div class="comment">
                                            <figure class="comment-media">
                                                <a href="#">
                                                    <img src="{{URL::asset('front/images/')}}/blog/1.jpg" alt="avatar">
                                                </a>
                                            </figure>
                                            <div class="comment-body">
                                                <div class="comment-rating ratings-container">
                                                    <div class="ratings-full">
                                                        <span class="ratings" style="width:100%"></span>
                                                        <span class="tooltiptext tooltip-top"></span>
                                                    </div>
                                                </div>
                                                <div class="comment-user">
                                                    <span class="comment-date">by <span
                                                            class="font-weight-semi-bold text-uppercase text-dark">John
                                                            Doe</span> on
                                                        <span class="font-weight-semi-bold text-dark">Nov 22,
                                                            2018</span></span>
                                                </div>
                                                <div class="comment-content mb-5">
                                                    <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor
                                                        libero sodales leo,
                                                        eget blandit nunc tortor eu nibh. Nullam mollis. Ut
                                                        justo.
                                                        Suspendisse potenti.
                                                        Sed egestas, ante et vulputate volutpat, eros pede
                                                        semper
                                                        est, vitae luctus metus libero eu augue.
                                                    </p>
                                                </div>

                                                <div class="feeling mt-5">
                                                    <button
                                                        class="btn btn-link btn-icon-left btn-slide-up btn-infinite like mr-2">
                                                        <i class="fa fa-thumbs-up"></i>
                                                        Like (<span class="count">0</span>)
                                                    </button>
                                                    <button
                                                        class="btn btn-link btn-icon-left btn-slide-down btn-infinite unlike">
                                                        <i class="fa fa-thumbs-down"></i>
                                                        Unlike (<span class="count">0</span>)
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comment">
                                            <figure class="comment-media">
                                                <a href="#">
                                                    <img src="{{URL::asset('front/images/')}}/blog/2.jpg" alt="avatar">
                                                </a>
                                            </figure>
                                            <div class="comment-body">
                                                <div class="comment-rating ratings-container">
                                                    <div class="ratings-full">
                                                        <span class="ratings" style="width:100%"></span>
                                                        <span class="tooltiptext tooltip-top"></span>
                                                    </div>
                                                </div>
                                                <div class="comment-user">
                                                    <span class="comment-date">by <span
                                                            class="font-weight-semi-bold text-uppercase text-dark">John
                                                            Doe</span> on
                                                        <span class="font-weight-semi-bold text-dark">Nov 22,
                                                            2018</span></span>
                                                </div>
                                                <div class="comment-content">
                                                    <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor
                                                        libero sodales leo, eget blandit nunc tortor eu nibh.
                                                        Nullam
                                                        mollis.
                                                        Ut justo. Suspendisse potenti. Sed egestas, ante et
                                                        vulputate volutpat,
                                                        eros pede semper est, vitae luctus metus libero eu
                                                        augue.
                                                        Morbi purus libero,
                                                        faucibus adipiscing, commodo quis, avida id, est. Sed
                                                        lectus. Praesent elementum
                                                        hendrerit tortor. Sed semper lorem at felis. Vestibulum
                                                        volutpat.
                                                    </p>
                                                </div>
                                                <div class="feeling mt-5">
                                                    <button
                                                        class="btn btn-link btn-icon-left btn-slide-up btn-infinite like mr-2">
                                                        <i class="fa fa-thumbs-up"></i>
                                                        Like (<span class="count">0</span>)
                                                    </button>
                                                    <button
                                                        class="btn btn-link btn-icon-left btn-slide-down btn-infinite unlike">
                                                        <i class="fa fa-thumbs-down"></i>
                                                        Unlike (<span class="count">0</span>)
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <nav class="toolbox toolbox-pagination justify-content-end">
                                    <ul class="pagination">
                                        <li class="page-item disabled">
                                            <a class="page-link page-link-prev" href="#" aria-label="Previous"
                                                tabindex="-1" aria-disabled="true">
                                                <i class="d-icon-arrow-left"></i>Prev
                                            </a>
                                        </li>
                                        <li class="page-item active" aria-current="page"><a class="page-link"
                                                href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item page-item-dots"><a class="page-link" href="#">6</a></li>
                                        <li class="page-item">
                                            <a class="page-link page-link-next" href="#" aria-label="Next">
                                                Next<i class="d-icon-arrow-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="review-form-section">
                            <div class="review-overlay"></div>
                            <div class="review-form-wrapper">
                                <div class="title-wrapper text-left">
                                    <h3 class="title title-simple text-left text-normal">Add a Review</h3>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                </div>
                                <div class="rating-form">
                                    <label for="rating" class="text-dark">Your rating * </label>
                                    <span class="rating-stars selected">
                                        <a class="star-1" href="#">1</a>
                                        <a class="star-2" href="#">2</a>
                                        <a class="star-3" href="#">3</a>
                                        <a class="star-4 active" href="#">4</a>
                                        <a class="star-5" href="#">5</a>
                                    </span>
                                    <select name="rating" id="rating" required style="display: none;">
                                        <option value>Rate…</option>
                                        <option value="5">Perfect</option>
                                        <option value="4">Good</option>
                                        <option value="3">Average</option>
                                        <option value="2">Not that bad</option>
                                        <option value="1">Very poor</option>
                                    </select>
                                </div>
                                <form action="#">
                                    <textarea id="reply-message" cols="30" rows="6" class="form-control mb-4"
                                        placeholder="Comment *" required></textarea>
                                    <div class="review-medias">
                                        <div class="file-input form-control image-input"
                                            style="background-image: url({{URL::asset('front/images/')}}/product/placeholder.png);">
                                            <div class="file-input-wrapper"></div>
                                            <label class="btn-action btn-upload" title="Upload Media">
                                                <input type="file" accept=".png, .jpg, .jpeg"
                                                    name="riode_comment_medias_image_1">
                                            </label>
                                            <label class="btn-action btn-remove" title="Remove Media">
                                            </label>
                                        </div>
                                        <div class="file-input form-control image-input"
                                            style="background-image: url({{URL::asset('front/images/')}}/product/placeholder.png);">
                                            <div class="file-input-wrapper"></div>
                                            <label class=" btn-action btn-upload" title="Upload Media">
                                                <input type="file" accept=".png, .jpg, .jpeg"
                                                    name="riode_comment_medias_image_2">
                                            </label>
                                            <label class="btn-action btn-remove" title="Remove Media">
                                            </label>
                                        </div>
                                        <div class="file-input form-control video-input"
                                            style="background-image: url({{URL::asset('front/images/')}}/product/placeholder.png);">
                                            <video class="file-input-wrapper" controls></video>
                                            <label class="btn-action btn-upload" title="Upload Media">
                                                <input type="file" accept=".avi, .mp4"
                                                    name="riode_comment_medias_video_1">
                                            </label>
                                            <label class="btn-action btn-remove" title="Remove Media">
                                            </label>
                                        </div>
                                    </div>
                                    <p>Upload images and videos. Maximum count: 3, size: 2MB</p>
                                    <button type="submit" class="btn btn-primary btn-rounded">Submit<i
                                            class="d-icon-arrow-right"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="pt-3 mt-10">
                <h2 class="title justify-content-center">Related Products</h2>
                <div class="owl-carousel owl-theme owl-nav-full row cols-2 cols-md-3 cols-lg-4" data-owl-options="{
               'items': 5,
               'nav': false,
               'loop': false,
               'dots': true,
               'margin': 20,
               'responsive': {
               '0': {
               'items': 2
               },
               '768': {
               'items': 3
               },
               '992': {
               'items': 4,
               'dots': false,
               'nav': true
               }
               }
               }">
                    <div class="product">
                        <figure class="product-media">
                            <a href="product-detail.php">
                                <img src="{{URL::asset('front/images/')}}/demos/demo1/products/product5.jpg" alt="Blue Pinafore Denim Dress"
                                    width="220" height="245" style="background-color: #f2f3f5;" />
                            </a>
                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-cart" data-toggle="modal"
                                    data-target="#addCartModal" title="Add to cart"><i class="d-icon-bag"></i></a>
                                <a href="#" class="btn-product-icon btn-wishlist" title="Add to wishlist"><i
                                        class="d-icon-heart"></i></a>
                            </div>
                            <div class="product-action">
                                <a href="#" class="btn-product btn-quickview" title="Hurtigvisning">Hurtigvisning</a>
                            </div>
                        </figure>
                        <div class="product-details">
                            <div class="product-cat">
                                <a href="product-detail.php">FORBUDSSKILT</a>
                            </div>
                            <h3 class="product-name">
                                <a href="product-detail.php">Gjennomgang forbudt – Privat område skilt med symbol og
                                    tekst</a>
                            </h3>
                            <div class="product-price">
                                <span class="price"><strong>1,475 kr</strong> Ink. mva</span>
                            </div>
                            <a href="product-detail.php" class="btn btn-velg">Kjøp</a>
                        </div>
                    </div>
                    <div class="product">
                        <figure class="product-media">
                            <a href="product-detail.php">
                                <img src="{{URL::asset('front/images/')}}/demos/demo1/products/product6.jpg" alt="Blue Pinafore Denim Dress"
                                    width="220" height="245" style="background-color: #f2f3f5;" />
                            </a>
                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-cart" data-toggle="modal"
                                    data-target="#addCartModal" title="Add to cart"><i class="d-icon-bag"></i></a>
                                <a href="#" class="btn-product-icon btn-wishlist" title="Add to wishlist"><i
                                        class="d-icon-heart"></i></a>
                            </div>
                            <div class="product-action">
                                <a href="#" class="btn-product btn-quickview" title="Hurtigvisning">Hurtigvisning</a>
                            </div>
                        </figure>
                        <div class="product-details">
                            <div class="product-cat">
                                <a href="product-detail.php">FORBUDSSKILT</a>
                            </div>
                            <h3 class="product-name">
                                <a href="product-detail.php">Gjennomgang forbudt – Privat område skilt med symbol og
                                    tekst</a>
                            </h3>
                            <div class="product-price">
                                <span class="price"><strong>1,475 kr</strong> Ink. mva</span>
                            </div>
                            <a href="product-detail.php" class="btn btn-velg">Kjøp</a>
                        </div>
                    </div>
                    <div class="product">
                        <figure class="product-media">
                            <a href="product-detail.php">
                                <img src="{{URL::asset('front/images/')}}/demos/demo1/products/product7.jpg" alt="Blue Pinafore Denim Dress"
                                    width="220" height="245" style="background-color: #f2f3f5;" />
                            </a>
                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-cart" data-toggle="modal"
                                    data-target="#addCartModal" title="Add to cart"><i class="d-icon-bag"></i></a>
                                <a href="#" class="btn-product-icon btn-wishlist" title="Add to wishlist"><i
                                        class="d-icon-heart"></i></a>
                            </div>
                            <div class="product-action">
                                <a href="#" class="btn-product btn-quickview" title="Hurtigvisning">Hurtigvisning</a>
                            </div>
                        </figure>
                        <div class="product-details">
                            <div class="product-cat">
                                <a href="product-detail.php">FORBUDSSKILT</a>
                            </div>
                            <h3 class="product-name">
                                <a href="product-detail.php">Gjennomgang forbudt – Privat område skilt med symbol og
                                    tekst</a>
                            </h3>
                            <div class="product-price">
                                <span class="price"><strong>1,475 kr</strong> Ink. mva</span>
                            </div>
                            <a href="product-detail.php" class="btn btn-velg">Kjøp</a>
                        </div>
                    </div>
                    <div class="product">
                        <figure class="product-media">
                            <a href="product-detail.php">
                                <img src="{{URL::asset('front/images/')}}/demos/demo1/products/product8.jpg" alt="Blue Pinafore Denim Dress"
                                    width="220" height="245" style="background-color: #f2f3f5;" />
                            </a>
                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-cart" data-toggle="modal"
                                    data-target="#addCartModal" title="Add to cart"><i class="d-icon-bag"></i></a>
                                <a href="#" class="btn-product-icon btn-wishlist" title="Add to wishlist"><i
                                        class="d-icon-heart"></i></a>
                            </div>
                            <div class="product-action">
                                <a href="#" class="btn-product btn-quickview" title="Hurtigvisning">Hurtigvisning</a>
                            </div>
                        </figure>
                        <div class="product-details">
                            <div class="product-cat">
                                <a href="product-detail.php">FORBUDSSKILT</a>
                            </div>
                            <h3 class="product-name">
                                <a href="product-detail.php">Gjennomgang forbudt – Privat område skilt med symbol og
                                    tekst</a>
                            </h3>
                            <div class="product-price">
                                <span class="price"><strong>1,475 kr</strong> Ink. mva</span>
                            </div>
                            <a href="product-detail.php" class="btn btn-velg">Kjøp</a>
                        </div>
                    </div>
                    <div class="product">
                        <figure class="product-media">
                            <a href="product-detail.php">
                                <img src="{{URL::asset('front/images/')}}/demos/demo1/products/product9.jpg" alt="Blue Pinafore Denim Dress"
                                    width="220" height="245" style="background-color: #f2f3f5;" />
                            </a>
                            <div class="product-action-vertical">
                                <a href="#" class="btn-product-icon btn-cart" data-toggle="modal"
                                    data-target="#addCartModal" title="Add to cart"><i class="d-icon-bag"></i></a>
                                <a href="#" class="btn-product-icon btn-wishlist" title="Add to wishlist"><i
                                        class="d-icon-heart"></i></a>
                            </div>
                            <div class="product-action">
                                <a href="#" class="btn-product btn-quickview" title="Hurtigvisning">Hurtigvisning</a>
                            </div>
                        </figure>
                        <div class="product-details">
                            <div class="product-cat">
                                <a href="product-detail.php">FORBUDSSKILT</a>
                            </div>
                            <h3 class="product-name">
                                <a href="product-detail.php">Gjennomgang forbudt – Privat område skilt med symbol og
                                    tekst</a>
                            </h3>
                            <div class="product-price">
                                <span class="price"><strong>1,475 kr</strong> Ink. mva</span>
                            </div>
                            <a href="product-detail.php" class="btn btn-velg">Kjøp</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</main>

  @stop