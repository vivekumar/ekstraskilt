/**
 * Ekstraskilt Main Javascript File
 */
"use strict";

var $ = jQuery.noConflict();

/* jQuery easing */
$.extend($.easing, {
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        return $.easing[$.easing.def](x, t, b, c, d);
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    }
});

/**
 * Ekstraskilt Object
 */
window.Ekstraskilt = {};

(function () {

    // Ekstraskilt Properties
    Ekstraskilt.$window = $(window);
    Ekstraskilt.$body = $(document.body);
    Ekstraskilt.status = '';                                           // Ekstraskilt Status
    Ekstraskilt.minDesktopWidth = 992;                                 // Detect desktop screen
    Ekstraskilt.isIE = navigator.userAgent.indexOf("Trident") >= 0;  // Detect Internet Explorer
    Ekstraskilt.isEdge = navigator.userAgent.indexOf("Edge") >= 0;   // Detect Edge
    Ekstraskilt.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);   // Detect Mobile
    Ekstraskilt.resizeChanged = false;
    Ekstraskilt.canvasWidth = window.innerWidth;
    Ekstraskilt.resizeTimeStamp = 0;
    Ekstraskilt.defaults = {
        animation: {
            name: 'fadeIn',
            duration: '1.2s',
            delay: '.2s'
        },
        isotope: {
            itemsSelector: '.grid-item',
            layoutMode: 'masonry',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-space'
            },
            sortBy: 'original-order'
        },
        minipopup: {
            // info
            message: '',
            productClass: '', // ' product-cart', ' product-list-sm'
            imageSrc: '',
            imageLink: '#',
            name: '',
            nameLink: '#', // 'product.html',
            price: '',
            count: null,
            rating: null,
            actionTemplate: '',
            isPurchased: false,

            // option
            delay: 4000, // milliseconds
            space: 20,

            // template
            priceTemplate: '<span class="product-price">{{price}}</span>',
            ratingTemplate: '<div class="ratings-container"><div class="ratings-full"><span class="ratings" style="width:{{rating}}"></span><span class="tooltiptext tooltip-top"></span></div></div>',
            priceQuantityTemplate: '<div class="price-box"><span class="product-quantity">{{count}}</span><span class="product-price">{{price}}</span></div>',
            purchasedTemplate: '<span class="purchased-time">12 MINUTES AGO</span>',

            template: '<div class="minipopup-box"><p class="minipopup-title">{{message}}</p>' +
                '<div class="product product-purchased {{productClass}} mb-0">' +
                '<figure class="product-media"><a href="{{imageLink}}"><img src="{{imageSrc}}" alt="product" width="90" height="90"></a></figure>' +
                '<div class="product-detail">' +
                '<a href="{{nameLink}}" class="product-name">{{name}}</a>' +
                '{{detailTemplate}}' +
                '</div>' +
                '</div>' +
                '{{actionTemplate}}' +
                '</div>',
        },
        popup: {
            removalDelay: 350,
            callbacks: {
                open: function () {
                    $('html').css('overflow-y', 'hidden');
                    $('body').css('overflow-x', 'visible');
                    $('.mfp-wrap').css('overflow', 'hidden auto');
                    $('.sticky-header.fixed').css('padding-right', window.innerWidth - document.body.clientWidth);
                },
                close: function () {
                    $('html').css('overflow-y', '');
                    $('body').css('overflow-x', 'hidden');
                    $('.mfp-wrap').css('overflow', '');
                    $('.sticky-header.fixed').css('padding-right', '');
                }
            }
        },
        popupPresets: {
            login: {
                type: 'ajax',
                mainClass: "mfp-login mfp-fade",
                tLoading: '',
                preloader: false
            },
            video: {
                type: 'iframe',
                mainClass: "mfp-fade",
                preloader: false,
                closeBtnInside: false
            },
            img: {
                type: 'iframe',
                mainClass: "mfp-fade",
                preloader: false,
                closeBtnInside: false
            },
            quickview: {
                type: 'ajax',
                mainClass: "mfp-product mfp-fade",
                tLoading: '',
                preloader: false
            }
        },
        slider: {
            responsiveClass: true,
            navText: ['<i class="d-icon-angle-left">', '<i class="d-icon-angle-right">'],
            checkVisible: false,
            items: 1,
            smartSpeed: Ekstraskilt.isEdge ? 200 : 500,
            autoplaySpeed: Ekstraskilt.isEdge ? 200 : 1000,
            autoplayTimeout: 10000

        },
        sliderPresets: {
            'intro-slider': {
                animateIn: 'fadeIn',
                animateOut: 'fadeOut'
            },
            'product-single-carousel': {
                dots: false,
                nav: true,
            },
            'product-gallery-carousel': {
                dots: false,
                nav: true,
                margin: 20,
                items: 1,
                responsive: {
                    576: {
                        items: 2
                    },
                    768: {
                        items: 3
                    }
                },
            },
            'rotate-slider': {
                dots: false,
                nav: true,
                margin: 0,
                items: 1,
                animateIn: '',
                animateOut: ''
            }
        },
        sliderThumbs: {
            margin: 0,
            items: 4,
            dots: false,
            nav: true,
            navText: ['<i class="fas fa-chevron-left">', '<i class="fas fa-chevron-right">']
        },
        stickyContent: {
            minWidth: Ekstraskilt.minDesktopWidth,
            maxWidth: 20000,
            top: 300,
            hide: false, // hide when it is not sticky.
            max_index: 1060, // maximum z-index of sticky contents
            scrollMode: false
        },
        stickyHeader: {
            // activeScreenWidth: Ekstraskilt.minDesktopWidth
            activeScreenWidth: 768
        },
        stickyFooter: {
            minWidth: 0,
            maxWidth: 767,
            top: 150,
            hide: true,
            scrollMode: true
        },
        stickyToolbox: {
            minWidth: 0,
            maxWidth: 767,
            top: false,
            scrollMode: true
        },
        stickySidebar: {
            autoInit: true,
            minWidth: 991,
            containerSelector: '.sticky-sidebar-wrapper',
            autoFit: true,
            activeClass: 'sticky-sidebar-fixed',
            paddingOffsetTop: 67,
            paddingOffsetBottom: 0,
        },
        templateCartAddedAlert: '<div class="alert alert-simple alert-btn cart-added-alert">' +
            '<a href="cart.html" class="btn btn-success btn-md">View Cart</a>' +
            '<span>"{{name}}" has been added to your cart.</span>' +
            '<button type="button" class="btn btn-link btn-close"><i class="d-icon-times"></i></button>' +
            '</div>',
        zoomImage: {
            responsive: true,
            zoomWindowFadeIn: 750,
            zoomWindowFadeOut: 500,
            borderSize: 0,
            zoomType: 'inner',
            cursor: 'crosshair'
        }
    }

    /**
     * Get jQuery object
     * @param {string|jQuery} selector
     */
    Ekstraskilt.$ = function (selector) {
        return selector instanceof jQuery ? selector : $(selector);
    }

    /**
     * Make a macro task
     * @param {function} fn
     * @param {number} delay
     */
    Ekstraskilt.call = function (fn, delay) {
        setTimeout(fn, delay);
    }

    /**
     * Get dom element by id
     * @param {string} id
     */
    Ekstraskilt.byId = function (id) {
        return document.getElementById(id);
    }

    /**
     * Get dom elements by tagName
     * @param {string} tagName
     * @param {HTMLElement} element this can be omitted.
     */
    Ekstraskilt.byTag = function (tagName, element) {
        return element ?
            element.getElementsByTagName(tagName) :
            document.getElementsByTagName(tagName);
    }

    /**
     * Get dom elements by className
     * @param {string} className
     * @param {HTMLElement} element this can be omitted.
     */
    Ekstraskilt.byClass = function (className, element) {
        return element ?
            element.getElementsByClassName(className) :
            document.getElementsByClassName(className);
    }

    /**
     * Set cookie
     * @param {string} name Cookie name
     * @param {string} value Cookie value
     * @param {number} exdays Expire period
     */
    Ekstraskilt.setCookie = function (name, value, exdays) {
        var date = new Date();
        date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
        document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
    }

    /**
     * Get cookie
     * @param {string} name Cookie name
     */
    Ekstraskilt.getCookie = function (name) {
        var n = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; ++i) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(n) == 0) {
                return c.substring(n.length, c.length);
            }
        }
        return "";
    }

    /**
     * Parse options string to object
     * @param {string} options
     */
    Ekstraskilt.parseOptions = function (options) {
        return 'string' == typeof options ?

            JSON.parse(options.replace(/'/g, '"').replace(';', '')) :
            {};
    }

    /**
     * Parse html template with variables.
     * @param {string} template
     * @param {object} vars
     */
    Ekstraskilt.parseTemplate = function (template, vars) {
        return template.replace(/\{\{(\w+)\}\}/g, function () {
            return vars[arguments[1]];
        });
    }

    /**
     * @function isOnScreen
     * @param {HTMLElement} el
     * @param {number} dx
     * @param {number} dy
     */
    Ekstraskilt.isOnScreen = function (el, dx, dy) {
        var a = window.pageXOffset,
            b = window.pageYOffset,
            o = el.getBoundingClientRect(),
            x = o.left + a,
            y = o.top + b,
            ax = typeof dx == 'undefined' ? 0 : dx,
            ay = typeof dy == 'undefined' ? 0 : dy;

        return y + o.height + ay >= b &&
            y <= b + window.innerHeight + ay &&
            x + o.width + ax >= a &&
            x <= a + window.innerWidth + ax;
    }

    /**
     * @function windowResized
     * @param {number} timeStamp 
     * @returns 
     * @since 1.2.1
     */
    Ekstraskilt.windowResized = function (timeStamp) {
        if (timeStamp == Ekstraskilt.resizeTimeStamp) {
            return Ekstraskilt.resizeChanged;
        }

        if (Ekstraskilt.canvasWidth != window.innerWidth) {
            Ekstraskilt.resizeChanged = true;
        } else {
            Ekstraskilt.resizeChanged = false;
        }

        Ekstraskilt.canvasWidth = window.innerWidth;
        Ekstraskilt.resizeTimeStamp = timeStamp;

        return Ekstraskilt.resizeChanged;
    }

    /**
     * @function doLoading
     * Show loading overlay
     * @param {string|jQuery} selector 
     * @param {string} type This can be omitted.
     */
    Ekstraskilt.doLoading = function (selector, type) {
        var $selector = Ekstraskilt.$(selector);
        if (typeof type == 'undefined') {
            $selector.append('<div class="d-loading"><i></i></div>');
        } else if (type == 'small') {
            $selector.append('<div class="d-loading small"><i></i></div>');
        } else if (type == 'simple') {
            $selector.append('<div class="d-loading small"></div>');
        }

        if ('static' == $selector.css('position')) {
            Ekstraskilt.$(selector).css('position', 'relative');
        }
    }

    /**
     * @function endLoading
     * Hide loading overlay
     * @param {string|jQuery} selector 
     */
    Ekstraskilt.endLoading = function (selector) {
        Ekstraskilt.$(selector).find('.d-loading').remove();
        Ekstraskilt.$(selector).css('position', '');
    }

    /**
     * @function appear
     * 
     * @param {HTMLElement} el
     * @param {function} fn
     * @param {object} options
     */
    Ekstraskilt.appear = (function () {
        var checks = [],
            timerId = false,
            one;

        var checkAll = function () {
            for (var i = checks.length; i--;) {
                one = checks[i];

                if (Ekstraskilt.isOnScreen(one.el, one.options.accX, one.options.accY)) {
                    typeof $(one.el).data('appear-callback') == 'function' && $(one.el).data('appear-callback').call(one.el, one.data);
                    one.fn && one.fn.call(one.el, one.data);
                    checks.splice(i, 1);
                }
            }
        };

        window.addEventListener('scroll', checkAll, { passive: true });
        window.addEventListener('resize', checkAll, { passive: true });
        $(window).on('appear.check', checkAll);

        return function (el, fn, options) {
            var settings = {
                data: undefined,
                accX: 0,
                accY: 0
            };

            if (options) {
                options.data && (settings.data = options.data);
                options.accX && (settings.accX = options.accX);
                options.accY && (settings.accY = options.accY);
            }

            checks.push({ el: el, fn: fn, options: settings });
            if (!timerId) {
                timerId = Ekstraskilt.requestTimeout(checkAll, 100);
            }
        }
    })();

    Ekstraskilt.zoomImageObjects = [];
    /**
     * @function zoomImage
     *
     * @requires elevateZoom
     * @param {string|jQuery} selector
     */
    Ekstraskilt.zoomImage = function (selector) {
        if ($.fn.elevateZoom && selector) {
            Ekstraskilt.$(selector).find('img').each(function () {
                var $this = $(this);
                Ekstraskilt.defaults.zoomImage.zoomContainer = $this.parent();
                $this.elevateZoom(Ekstraskilt.defaults.zoomImage);
                Ekstraskilt.zoomImageObjects.push($this);
            });
        }
    }

    /**
     * @function initZoom
     */
    Ekstraskilt.initZoom = function () {
        window.addEventListener('resize', function () {

            Ekstraskilt.zoomImageObjects.forEach(function ($img) {
                $img.each(function () {
                    var $this = $(this);
                    var elevateZoom = $this.data('elevateZoom');
                    if ($this.closest('.rotate-slider').length > 0 && elevateZoom) {
                        // Refresh elevateZoom plugin after finished resize transition.
                        setTimeout(function () {
                            elevateZoom.refresh();
                        }, 1200);
                    } else {
                        elevateZoom && elevateZoom.refresh();
                    }
                });
            });
        }, { passive: true });
    }

    /**
     * @function countTo
     *
     * @requires jQuery.countTo
     * @param {string} selector
     */
    Ekstraskilt.countTo = function (selector) {
        if ($.fn.numerator) {
            Ekstraskilt.$(selector).each(function () {
                var $this = $(this),
                    options = {
                        fromValue: $this.data('fromvalue'),
                        toValue: $this.data('tovalue'),
                        duration: $this.data('duration'),
                        delimiter: $this.data('delimiter'),
                        rounding: $this.data('round')
                    };
                Ekstraskilt.appear(this, function () {
                    setTimeout(function () {
                        $this.numerator(options);
                    }, 300);
                })
            });
        }
    }

    /**
     * @function countdown
     *
     * @requires jquery-countdown
     * @param {string} selector
     */
    Ekstraskilt.countdown = function (selector) {
        if ($.fn.countdown) {
            Ekstraskilt.$(selector).each(function () {
                var $this = $(this),
                    untilDate = $this.data('until'),
                    compact = $this.data('compact'),
                    dateFormat = (!$this.data('format')) ? 'DHMS' : $this.data('format'),
                    newLabels = (!$this.data('labels-short')) ?
                        ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'] :
                        ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Mins', 'Secs'],
                    newLabels1 = (!$this.data('labels-short')) ?
                        ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'] :
                        ['Year', 'Month', 'Week', 'Day', 'Hour', 'Min', 'Sec'];

                var newDate;

                // Split and created again for ie and edge
                if (!$this.data('relative')) {
                    var untilDateArr = untilDate.split(", "), // data-until 2019, 10, 8 - yy,mm,dd
                        newDate = new Date(untilDateArr[0], untilDateArr[1] - 1, untilDateArr[2]);
                } else {
                    newDate = untilDate;
                }

                $this.countdown({
                    until: newDate,
                    format: dateFormat,
                    padZeroes: true,
                    compact: compact,
                    compactLabels: [' y', ' m', ' w', ' days, '],
                    timeSeparator: ' : ',
                    labels: newLabels,
                    labels1: newLabels1
                });
            });
            // Pause
            // $('.countdown').countdown('pause');
        }

    }


    /**
     * @function priceSlider
     *
     * @requires noUiSlider
     * @param {string} selector
     * @param {object} option
     */
    Ekstraskilt.priceSlider = function (selector, option) {
        if (typeof noUiSlider === 'object') {
            Ekstraskilt.$(selector).each(function () {
                var self = this;

                noUiSlider.create(self, $.extend(true, {
                    start: [18, 35],
                    connect: true,
                    step: 1,
                    range: {
                        min: 18,
                        max: 35
                    }
                }, option));

                // Update Price Range
                self.noUiSlider.on('update', function (values, handle) {
                    var values = values.map(function (value) {
                        return '$' + parseInt(value);
                    })
                    $(self).parent().find('.filter-price-range').text(values.join(' - '));
                });
            });
        }
    }

    Ekstraskilt.lazyload = function (selector, force) {
        function load() {
            this.setAttribute('src', this.getAttribute('data-src'));
            this.addEventListener('load', function () {
                this.style['padding-top'] = '';
                this.classList.remove('lazy-img');
            });
        }

        // Lazyload images
        Ekstraskilt.$(selector).find('.lazy-img').each(function () {
            if ('undefined' != typeof force && force) {
                load.call(this);
            } else {
                Ekstraskilt.appear(this, load);
            }
        })
    }

    /**
     * @function isotopes
     *
     * @requires isotope,imagesLoaded
     * @param {string} selector
     * @param {object} options
     */
    Ekstraskilt.isotopes = function (selector, options) {
        if (typeof imagesLoaded === 'function' && $.fn.isotope) {
            var self = this;

            Ekstraskilt.$(selector).each(function () {
                var $this = $(this),
                    settings = $.extend(true, {},
                        Ekstraskilt.defaults.isotope,
                        Ekstraskilt.parseOptions($this.attr('data-grid-options')),
                        options ? options : {}
                    );

                Ekstraskilt.lazyload($this);
                $this.imagesLoaded(function () {
                    settings.customInitHeight && $this.height($this.height());
                    settings.customDelay && Ekstraskilt.call(function () {
                        $this.isotope(settings);
                    }, parseInt(settings.customDelay));

                    $this.isotope(settings);
                })
            });
        }
    }

    /**
     * @function initNavFilter
     *
     * @requires isotope
     * @param {string} selector
     */
    Ekstraskilt.initNavFilter = function (selector) {
        if ($.fn.isotope) {
            Ekstraskilt.$(selector).on('click', function (e) {
                var $this = $(this),
                    filterValue = $this.attr('data-filter'),
                    filterTarget = $this.parent().parent().attr('data-target');
                (filterTarget ? $(filterTarget) : $('.grid'))
                    .isotope({ filter: filterValue })
                    .isotope('on', 'arrangeComplete', function () {
                        Ekstraskilt.$window.trigger('appear.check');
                    });
                $this.parent().siblings().children().removeClass('active');
                $this.addClass('active');
                e.preventDefault();
            });
        }
    }

    /**
     * @function initShowVendorSearch
     * 
     * @param {string} selector
     */
    Ekstraskilt.initShowVendorSearch = function (selector) {
        Ekstraskilt.$body.on('click', selector, function (e) {

            var $this = $(this),
                $formWrapper = $this.closest('.toolbox').next('.form-wrapper');

            if (!$formWrapper.hasClass('open')) {
                $formWrapper.slideDown().addClass('open');
            } else {
                $formWrapper.slideUp().removeClass('open');
            }
            e.preventDefault();
        });
    }

    /**
     * @function parallax
     * Initialize Parallax Background
     * @requires themePluginParallax
     * @param {string} selector
     */
    Ekstraskilt.parallax = function (selector, options) {
        if ($.fn.themePluginParallax) {
            Ekstraskilt.$(selector).each(function () {
                var $this = $(this);
                $this.themePluginParallax(
                    $.extend(true, Ekstraskilt.parseOptions($this.attr('data-parallax-options')), options)
                );
            });
        }
    }

    /**
     * Initialize floating elements
     * @since 1.1
     * @param {string|jQuery} selector
     * @return {void}
     */
    Ekstraskilt.initFloatingElements = function (selector) {
        if ($.fn.parallax) {
            var $selectors = Ekstraskilt.$(selector);

            $selectors.each(function () {
                var $this = $(this);

                if ($this.attr('data-floating-depth'))
                    $this.children('.layer').attr('data-depth', $this.attr('data-floating-depth'));
                else
                    $this.children('.layer').attr('data-depth', '.3');

                $this.parallax($this.data('options'));
            });
        }
    }

    /**
     * Initialize advanced motions
     * @param {string} selector
     * @return {void}
     */
    Ekstraskilt.initAdvancedMotions = function (selector) {
        if (Ekstraskilt.isMobile) {
            return;
        }

        if (typeof skrollr == 'undefined') {
            return;
        }

        var $selectors = Ekstraskilt.$(selector);

        $selectors.each(function () {
            var $this = $(this),
                options = {
                    'data-bottom-top': 'transform: translate(10%, 0);',
                    'data-center': 'transform: translate(-10%, 0);'
                },
                keys = [];

            if ($this.data('options')) {
                options = $this.data('options');
                keys = Object.keys(options);
            }
            if ('object' == typeof options && (keys = Object.keys(options)).length) {
                keys.forEach(function (key) {
                    $this.attr(key, options[key]);
                })
            }
        });

        if ($selectors.length) {
            skrollr.init({ forceHeight: false, smoothScrolling: true });
        }
    }

    /**
     * @function degree360
     * Register events for 360 degree
     * @param {string} selector
     */
    Ekstraskilt.degree360 = function (selector) {
        if (!$.fn.ThreeSixty) {
            return;
        }

        Ekstraskilt.$(selector).ThreeSixty({
            imagePath: 'images/demos/demo-single-product/degree/',
            filePrefix: '360-',
            ext: '.png',
            totalFrames: 32,
            endFrame: 32,
            currentFrame: 1,
            imgList: Ekstraskilt.$body.find('.product-degree-images'),
            progress: '.d-loading',
            height: 500,
            width: 830,
            navigation: true
        });
        // if ( !$.fn.ThreeSixty ) {
        //     return;
        // }

        // if ( typeof selector == 'undefined' ) {
        //     selector = '.product-gallery-degree';
        // }

        // Ekstraskilt.$body.find( selector ).each( function() {
        //     var images = $( this ).find( '.Ekstraskilt-360-gallery-wrap' ).attr( 'data-srcs' ).split( ',' ),
        //         $degree_viewport = $( this );

        //     $degree_viewport.addClass( 'not_loaded' );

        //     $degree_viewport.ThreeSixty(
        //         {
        //             totalFrames: images.length, // Total no. of image you have for 360 slider
        //             endFrame: images.length, // end frame for the auto spin animation
        //             currentFrame: images.length - 1, // This the start frame for auto spin
        //             imgList: $degree_viewport.find( '.Ekstraskilt-360-gallery-wrap' ), // selector for image list
        //             progress: '.Ekstraskilt-degree-progress-bar', // selector to show the loading progress
        //             imgArray: images, // path of the image assets
        //             height: $degree_viewport.children( '.post-div' ).length ? '' : 500,
        //             width: $degree_viewport.outerWidth(),
        //             navigation: true
        //         }
        //     );

        //     $degree_viewport.find( '.Ekstraskilt-360-gallery-wrap' ).imagesLoaded(
        //         function() {
        //             console.log( 'image loaded' );
        //             setTimeout( function() {
        //                 $degree_viewport.removeClass( 'not_loaded' ).addClass( 'loaded' );
        //                 $degree_viewport.find( '.nav_bar' ).removeClass( 'hide' );
        //             }, 200 );
        //         }
        //     );
        // } );
    }

    /**
     * @function headerToggleSearch
     * Init header toggle search.
     * @param {string} selector
     */

    Ekstraskilt.headerToggleSearch = function (selector) {
        var $search = Ekstraskilt.$(selector);
        $search.find('.form-control')
            .on('focusin', function (e) {
                $search.addClass('show');
            })
            .on('focusout', function (e) {
                $search.removeClass('show');
            });

        // Initialize sticky footer's search toggle.
        Ekstraskilt.$body.on('click', '.sticky-footer .search-toggle', function (e) {
            $(this).parent().toggleClass('show');
            e.preventDefault();
        });
    }

    /**
     * @function closeTopNotice
     * Init header toggle search.
     * @param {string} selector
     */

    Ekstraskilt.closeTopNotice = function (selector) {
        var $closeBtn = Ekstraskilt.$(selector);
        $closeBtn.on('click', function (e) {
            e.preventDefault();
            $closeBtn.closest('.top-notice').css('display', 'none');
        });
    }

    /**
     * @function stickyHeader
     * Init sticky header
     * @param {string} selector
     */
    Ekstraskilt.stickyHeader = function (selector) {
        var $stickyHeader = Ekstraskilt.$(selector);
        if ($stickyHeader.length == 0) return;

        var height, top, isWrapped = false;

        // define wrap function
        var stickyHeaderWrap = function () {
            height = $stickyHeader[0].offsetHeight;
            top = $stickyHeader.offset().top + height;

            // if sticky header has category dropdown, increase top
            if ($stickyHeader.hasClass('has-dropdown')) {
                var $box = $stickyHeader.find('.category-dropdown .dropdown-box');

                if ($box.length) {
                    top += $stickyHeader.find('.category-dropdown .dropdown-box')[0].offsetHeight;
                }
            }

            // wrap sticky header
            if (!isWrapped && window.innerWidth >= Ekstraskilt.defaults.stickyHeader.activeScreenWidth) {
                isWrapped = true;
                $stickyHeader.wrap('<div class="sticky-wrapper" style="height:' + height + 'px"></div>');
            }

            Ekstraskilt.$window.off('resize', stickyHeaderWrap);
        };

        // define refresh function
        var stickyHeaderRefresh = function () {
            var isFixed = window.innerWidth >= Ekstraskilt.defaults.stickyHeader.activeScreenWidth && window.pageYOffset >= top;

            // fix or unfix
            if (isFixed) {
                $stickyHeader[0].classList.add('fixed');
                document.body.classList.add('sticky-header-active');
            } else {
                $stickyHeader[0].classList.remove('fixed');
                document.body.classList.remove('sticky-header-active');
            }
        };

        // register events
        window.addEventListener('scroll', stickyHeaderRefresh, { passive: true });
        Ekstraskilt.$window.on('resize', stickyHeaderWrap);
        Ekstraskilt.$window.on('resize', stickyHeaderRefresh);

        // init
        Ekstraskilt.call(stickyHeaderWrap, 500);
        Ekstraskilt.call(stickyHeaderRefresh, 500);
    }

    /**
     * @function stickyContent
     * Init Sticky Content
     * @param {string, Object} selector
     * @param {Object} settings
     */
    Ekstraskilt.stickyContent = function (selector, settings) {
        var $stickyContents = Ekstraskilt.$(selector),
            options = $.extend({}, Ekstraskilt.defaults.stickyContent, settings),
            scrollPos = window.pageYOffset;

        if (0 == $stickyContents.length) return;

        var setTopOffset = function ($item) {
            var offset = 0,
                index = 0;
            $('.sticky-content.fixed.fix-top').each(function () {
                offset += $(this)[0].offsetHeight;
                index++;
            });
            $item.data('offset-top', offset);
            $item.data('z-index', options.max_index - index);
        }

        var setBottomOffset = function ($item) {
            var offset = 0,
                index = 0;
            $('.sticky-content.fixed.fix-bottom').each(function () {
                offset += $(this)[0].offsetHeight;
                index++;
            });
            $item.data('offset-bottom', offset);
            $item.data('z-index', options.max_index - index);
        }

        var wrapStickyContent = function ($item, height) {
            if (window.innerWidth >= options.minWidth && window.innerWidth <= options.maxWidth) {
                $item.wrap('<div class="sticky-content-wrapper"></div>');
                $item.parent().css('height', height + 'px');
                $item.data('is-wrap', true);
            }
        }

        var initStickyContent = function () {
            $stickyContents.each(function (index) {
                var $item = $(this);
                if (!$item.data('is-wrap')) {
                    var height = $item.removeClass('fixed').outerHeight(true), top;
                    top = $item.offset().top + height;

                    // if sticky header has category dropdown, increase top
                    if ($item.hasClass('has-dropdown')) {
                        var $box = $item.find('.category-dropdown .dropdown-box');

                        if ($box.length) {
                            top += $box[0].offsetHeight;
                        }
                    }

                    $item.data('top', top);
                    wrapStickyContent($item, height);
                } else {
                    if (window.innerWidth < options.minWidth || window.innerWidth >= options.maxWidth) {
                        $item.unwrap('.sticky-content-wrapper');
                        $item.data('is-wrap', false);
                    }
                }
            });
        }

        var refreshStickyContent = function (e) {
            if (e && !e.isTrusted) return;
            $stickyContents.each(function (index) {
                var $item = $(this),
                    showContent = true;
                if (options.scrollMode) {
                    showContent = scrollPos > window.pageYOffset;
                    scrollPos = window.pageYOffset;
                }
                if (window.pageYOffset > (false == options.top ? $item.data('top') : options.top) && window.innerWidth >= options.minWidth && window.innerWidth <= options.maxWidth) {
                    if ($item.hasClass('fix-top')) {
                        if (undefined === $item.data('offset-top')) {
                            setTopOffset($item);
                        }
                        $item.css('margin-top', $item.data('offset-top') + 'px');
                    } else if ($item.hasClass('fix-bottom')) {
                        if (undefined === $item.data('offset-bottom')) {
                            setBottomOffset($item);
                        }
                        $item.css('margin-bottom', $item.data('offset-bottom') + 'px');
                    }
                    $item.css('z-index', $item.data('z-index'));
                    if (options.scrollMode) {
                        if ((showContent && $item.hasClass('fix-top')) || (!showContent && $item.hasClass('fix-bottom'))) {
                            $item.addClass('fixed');
                            if ($item.closest('.page-wrapper').find('.header').hasClass('.header-transparent')) {
                                if (!Ekstraskilt.$body.hasClass('sidebar-active') && !Ekstraskilt.$body.hasClass('top-sidebar-active')
                                    && !Ekstraskilt.$body.hasClass('right-sidebar-active')) {
                                    $item.closest('.main').css('z-index', '19');
                                } else {
                                    $item.closest('.main').css('z-index', 'unset');
                                }
                            }
                        } else {
                            $item.removeClass('fixed');
                            $item.css('margin', '');
                            if ($item.closest('.page-wrapper').find('.header').hasClass('.header-transparent')) {
                                if (!Ekstraskilt.$body.hasClass('sidebar-active') && !Ekstraskilt.$body.hasClass('top-sidebar-active')
                                    && !Ekstraskilt.$body.hasClass('right-sidebar-active')) {
                                    $item.closest('.main').css('z-index', '19');
                                } else {
                                    $item.closest('.main').css('z-index', 'unset');
                                }
                            }
                        }
                    } else {
                        $item.addClass('fixed');
                    }
                    options.hide && $item.parent('.sticky-content-wrapper').css('display', '');
                } else {
                    $item.removeClass('fixed');
                    $item.css('margin-top', '');
                    $item.css('margin-bottom', '');
                    options.hide && $item.parent('.sticky-content-wrapper').css('display', 'none');
                }
            });
        }

        var resizeStickyContent = function (e) {
            $stickyContents.removeData('offset-top')
                .removeData('offset-bottom')
                .removeClass('fixed')
                .css('margin', '')
                .css('z-index', '');

            Ekstraskilt.call(function () {
                initStickyContent();
                refreshStickyContent();
            });
        }

        setTimeout(initStickyContent, 550);
        setTimeout(refreshStickyContent, 600);

        Ekstraskilt.call(function () {
            window.addEventListener('scroll', refreshStickyContent, { passive: true });
            Ekstraskilt.$window.on('resize', resizeStickyContent);
        }, 700);
    }

    /**
     * @function alert
     * Register events for alert
     * @param {string} selector
     */
    Ekstraskilt.initAlert = function (selector) {
        Ekstraskilt.$body.on('click', selector + ' .btn-close', function (e) {
            $(this).closest(selector).fadeOut(function () {
                $(this).remove();
            });
        });
    }


    /**
     * @function accordion
     * Register events for accordion
     * @param {string} selector
     */
    Ekstraskilt.initAccordion = function (selector) {
        Ekstraskilt.$body.on('click', selector, function (e) {
            var $this = $(this),
                $header = $this,
                $body = $this.closest('.card').find($this.attr('href')),
                $parent = $this.closest('.accordion');

            e.preventDefault();

            if (0 === $parent.find(".collapsing").length &&
                0 === $parent.find(".expanding").length) {

                if ($body.hasClass('expanded')) {
                    if (!$parent.hasClass('radio-type'))
                        slideToggle($body);

                } else if ($body.hasClass('collapsed')) {

                    if ($parent.find('.expanded').length > 0) {
                        if (Ekstraskilt.isIE) {
                            slideToggle($parent.find('.expanded'), function () {
                                slideToggle($body);
                            });

                        } else {
                            slideToggle($parent.find('.expanded'));
                            slideToggle($body);
                        }
                    } else {
                        slideToggle($body);
                    }
                }
            }
        });

        // define slideToggle method
        var slideToggle = function ($wrap, callback) {
            var $header = $wrap.closest('.card').find(selector);

            if ($wrap.hasClass("expanded")) {
                $header
                    .removeClass("collapse")
                    .addClass("expand");
                $wrap
                    .addClass("collapsing")
                    .slideUp(300, function () {
                        $wrap.removeClass("expanded collapsing").addClass("collapsed");
                        callback && callback();
                    })

            } else if ($wrap.hasClass("collapsed")) {
                $header
                    .removeClass("expand")
                    .addClass("collapse");
                $wrap
                    .addClass("expanding")
                    .slideDown(300, function () {
                        $wrap.removeClass("collapsed expanding").addClass("expanded");
                        callback && callback();
                    })
            }
        };
    }


    /**
     * @function tab
     * Register events for tab
     * @param {string} selector
     */
    Ekstraskilt.initTab = function (selector) {

        Ekstraskilt.$body
            // tab nav link
            .on('click', '.tab .nav-link', function (e) {
                var $this = $(this);
                e.preventDefault();

                if (!$this.hasClass("active")) {
                    var $panel = $($this.attr('href'));
                    $panel.siblings().removeClass('in active');
                    $panel.addClass('active in');

                    // owl-carousel init
                    Ekstraskilt.slider($panel.find('.owl-carousel'));


                    $this.parent().parent().find('.active').removeClass('active');
                    $this.addClass('active');
                }
            })

            // link to tab
            .on('click', '.single-product:not(.element-single-product) .link-to-tab', function (e) {
                var selector = $(e.currentTarget).attr('href'),
                    $tab = $(selector),
                    $nav = $tab.parent().siblings('.nav');
                e.preventDefault();

                $tab.siblings().removeClass('active in');
                $tab.addClass('active in');
                $nav.find('.nav-link').removeClass('active');
                $nav.find('[href="' + selector + '"]').addClass('active');

                $('html').animate({
                    scrollTop: $tab.offset().top - 150
                });
            });
    }

    /**
     * @function playableVideo
     *
     * @param {string} selector
     */
    Ekstraskilt.playableVideo = function (selector) {
        $(selector + ' .video-play').on('click', function (e) {
            var $video = $(this).closest(selector);
            if ($video.hasClass('playing')) {
                $video.removeClass('playing')
                    .addClass('paused')
                    .find('video')[0].pause();
            } else {
                $video.removeClass('paused')
                    .addClass('playing')
                    .find('video')[0].play();
            }
            e.preventDefault();
        });
        $(selector + ' video').on('ended', function () {
            $(this).closest(selector).removeClass('playing');
        });
    }

    /**
     * @function appearAnimate
     *
     * @param {string} selector
     */
    Ekstraskilt.appearAnimate = function (selector) {
        Ekstraskilt.$(selector).each(function () {
            var el = this;
            Ekstraskilt.appear(el, function () {
                if (el.classList.contains('appear-animate')) {
                    var settings = $.extend({}, Ekstraskilt.defaults.animation, Ekstraskilt.parseOptions(el.getAttribute('data-animation-options')));

                    Ekstraskilt.call(function () {
                        setTimeout(
                            function () {
                                el.style['animation-duration'] = settings.duration;
                                el.classList.add(settings.name);
                                el.classList.add('appear-animation-visible');
                            },
                            settings.delay ? Number(settings.delay.slice(0, -1)) * 1000 : 0
                        );
                    });
                }
            });
        });
    }

    /**
     * @function stickySidebar
     *
     * @requires themeSticky
     * @param {string} selector
     */
    Ekstraskilt.stickySidebar = function (selector) {
        if ($.fn.themeSticky) {
            Ekstraskilt.$(selector).each(function () {
                var $this = $(this);
                $this.themeSticky($.extend(Ekstraskilt.defaults.stickySidebar, Ekstraskilt.parseOptions($this.attr('data-sticky-options'))));
                $this.trigger('recalc.pin');
            });
        }
    }
    /**
     * @function refreshSidebar
     *
     * @param {string} selector
     */
    Ekstraskilt.refreshSidebar = function (selector) {
        if ($.fn.themeSticky) {
            Ekstraskilt.$(selector).each(function () {
                $(this).trigger('recalc.pin');
            });
        }
    }

    /**
     * @function ratingTooltip
     * Find all .ratings-full from root, and initialize tooltip.
     *
     * @param {HTMLElement} root
     */
    Ekstraskilt.ratingTooltip = function (root) {
        var els = Ekstraskilt.byClass('ratings-full', root ? root : document.body),
            len = els.length;

        var ratingHandler = function () {
            var res = parseInt(this.firstElementChild.style.width.slice(0, -1)) / 20;
            this.lastElementChild.innerText = res ? res.toFixed(2) : res;
        }
        for (var i = 0; i < len; ++i) {
            els[i].addEventListener('mouseover', ratingHandler, { passive: true });
            els[i].addEventListener('touchstart', ratingHandler, { passive: true });
        }
    }

    /**
     * @function popup
     * @requires magnificPopup
     * @params {object} options
     * @params {string|undefined} preset
     */
    Ekstraskilt.popup = function (options, preset) {
        var mpInstance = $.magnificPopup.instance,
            opt = $.extend(true, {},
                Ekstraskilt.defaults.popup,
                ('undefined' != typeof preset) ? Ekstraskilt.defaults.popupPresets[preset] : {},
                options
            );

        // if something is already opened ( except login popup )
        if (mpInstance.isOpen && mpInstance.content) {
            mpInstance.close(); // close current
            setTimeout(function () { // and open new after a moment
                $.magnificPopup.open(opt);
            }, 500);
        } else {
            $.magnificPopup.open(opt); // if nothing is opened, open new
        }
    }

    /**
     * @function initPopups
     */
    Ekstraskilt.initPopups = function () {

        Ekstraskilt.$body
            // Register Login Popup
            .on('click', 'a.login, .login-link', function (e) {
                e.preventDefault();
                Ekstraskilt.popup({
                    items: {
                        src: $(e.currentTarget).attr('href')
                    }
                }, 'login');

            })

            // Register "Register" Popup
            .on('click', '.register-link', function (e) {
                e.preventDefault();
                Ekstraskilt.popup({
                    items: {
                        src: $(e.currentTarget).attr('href')
                    },
                    callbacks: {
                        ajaxContentAdded: function () {
                            this.wrap.find('[href="#register"]').click();
                        }
                    }
                }, 'login');
            })

            // Register "Image" Popup
            // .on( 'click', '.btn-img', function ( e ) {
            //     e.preventDefault();
            //     Ekstraskilt.popup( {
            //         items: {
            //             src: '<img src="' + $( e.currentTarget ).attr( 'href' ) + '" alt="popup"> ',
            //             type: "inline"
            //         },
            //         mainClass: "mfp-img-popup"
            //     }, "img" )
            // } )

            // Register "Play Video" Popup
            .on('click', '.btn-iframe', function (e) {
                e.preventDefault();
                Ekstraskilt.popup({
                    items: {
                        src: '<video src="' + $(e.currentTarget).attr('href') + '" autoplay loop controls>',
                        type: "inline"
                    },
                    mainClass: "mfp-video-popup"
                }, "video")
            });

        // Open newsletter Popup after 7.5s in home pages
        if ($('.home > #newsletter-popup').length > 0 && Ekstraskilt.getCookie('hideNewsletterPopup') !== 'true') {
            setTimeout(function () {
                Ekstraskilt.popup({
                    items: {
                        src: '#newsletter-popup'
                    },
                    type: 'inline',
                    tLoading: '',
                    mainClass: 'mfp-newsletter mfp-flip-popup',
                    callbacks: {
                        beforeClose: function () {
                            // if "do not show" is checked
                            $('#hide-newsletter-popup')[0].checked && Ekstraskilt.setCookie('hideNewsletterPopup', true, 7);
                        }
                    },
                });
            }, 7500);
        }
    }

    /**
     * @function initScrollTopButton
     */
    Ekstraskilt.initScrollTopButton = function () {
        // register scroll top button

        var domScrollTop = Ekstraskilt.byId('scroll-top');

        if (domScrollTop) {
            domScrollTop.addEventListener('click', function (e) {
                $('html, body').animate({ scrollTop: 0 }, 600);
                e.preventDefault();
            });

            var refreshScrollTop = function () {
                if (window.pageYOffset > 400) {
                    domScrollTop.classList.add('show');
                } else {
                    domScrollTop.classList.remove('show');
                }
            }

            Ekstraskilt.call(refreshScrollTop, 500);
            window.addEventListener('scroll', refreshScrollTop, { passive: true });
        }
    }

    /**
     * Scroll To
     * 
     * @param {string} arg 
     * @param {number} duration 
     */
    Ekstraskilt.scrollTo = function (arg, duration) {
        var offset = 0;
        var _duration = typeof duration == 'undefined' ? 600 : duration;
        if (typeof arg == 'number') {
            offset = arg;
        } else {
            offset = Ekstraskilt.$(arg).offset().top;
        }
        $('html,body').stop().animate({ scrollTop: offset }, _duration);
    }

    /**
     * @function scrollSet
     */
    Ekstraskilt.scrollSet = function (selector) {
        var $selector = $(selector);
        Ekstraskilt.$window.on('scroll', function (e) {
            var $this = $(this),
                pos = $this.scrollTop(),
                height = $this.outerHeight();
            $('.section').each(function (index) {
                var $item = $(this),
                    itemPos = $(this).offset().top;

                if (pos <= itemPos && itemPos <= pos + height / 2) {
                    $selector.filter('[href="#' + $item.attr('id') + '"]').parent().addClass('active').siblings().removeClass('active');
                    return;
                }
            });
        });
        Ekstraskilt.$body.on('click', selector, function (e) {
            var $this = $(this), link = e.currentTarget, hash = link.hash ? link.hash : link.slice(link.lastIndexOf('#'));
            if (hash.startsWith('#')) {
                $('.mobile-menu-overlay').click();
                Ekstraskilt.scrollTo(hash);
                e.preventDefault();
            }
            $this.closest('li').addClass('active').siblings().removeClass('active');
        })
    }

    /**
     * @function requestTimeout
     * @param {function} fn
     * @param {number} delay
     */
    Ekstraskilt.requestTimeout = function (fn, delay) {
        var handler = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
        if (!handler) {
            return setTimeout(fn, delay);
        }
        var start, rt = new Object();

        function loop(timestamp) {
            if (!start) {
                start = timestamp;
            }
            var progress = timestamp - start;
            progress >= delay ? fn() : rt.val = handler(loop);
        };

        rt.val = handler(loop);
        return rt;
    }

    /**
     * @function requestInterval
     * @param {function} fn
     * @param {number} step
     * @param {number} timeOut
     */
    Ekstraskilt.requestInterval = function (fn, step, timeOut) {
        var handler = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
        if (!handler) {
            if (!timeOut)
                return setTimeout(fn, timeOut);
            else
                return setInterval(fn, step);
        }
        var start, last, rt = new Object();
        function loop(timestamp) {
            if (!start) {
                start = last = timestamp;
            }
            var progress = timestamp - start;
            var delta = timestamp - last;
            if (!timeOut || progress < timeOut) {
                if (delta > step) {
                    rt.val = handler(loop);
                    fn();
                    last = timestamp;
                } else {
                    rt.val = handler(loop);
                }
            } else {
                fn();
            }
        };
        rt.val = handler(loop);
        return rt;
    }

    /**
     * @function deleteTimeout
     * @param {number} timerID
     */
    Ekstraskilt.deleteTimeout = function (timerID) {
        if (!timerID) {
            return;
        }
        var handler = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
        if (!handler) {
            return clearTimeout(timerID);
        }
        if (timerID.val) {
            return handler(timerID.val);
        }
    }

    /**
     * @function sidebar
     */
    Ekstraskilt.sidebar = (function () {
        var is_mobile = window.innerWidth < Ekstraskilt.minDesktopWidth;
        var onResizeNavigationStyle = function () {
            if (window.innerWidth < Ekstraskilt.minDesktopWidth && !is_mobile) {
                this.$sidebar.find('.sidebar-content, .filter-clean').removeAttr('style');
                this.$sidebar.find('.sidebar-content').attr('style', '');
                this.$sidebar.siblings('.toolbox').children(':not(:first-child)').removeAttr('style');
            } else if (window.innerWidth >= Ekstraskilt.minDesktopWidth) {
                if (!this.$sidebar.hasClass('closed') && is_mobile) {
                    this.$sidebar.addClass('closed')
                    this.$sidebar.find('.sidebar-content').css('display', 'none');
                }
            }
            is_mobile = window.innerWidth < Ekstraskilt.minDesktopWidth;
        }

        /**
         * @class Sidebar
         * Sidebar active class will be added to body tag : "sidebar class" + "-active"
         */
        function Sidebar(name) {
            return this.init(name);
        }

        Sidebar.prototype.init = function (name) {
            var self = this;

            self.name = name;
            self.$sidebar = $('.' + name);
            self.isNavigation = false;

            // If sidebar exists
            if (self.$sidebar.length) {

                // check if navigation style
                self.isNavigation = self.$sidebar.hasClass('sidebar-fixed') &&
                    self.$sidebar.parent().hasClass('toolbox-wrap');

                if (self.isNavigation) {
                    onResizeNavigationStyle = onResizeNavigationStyle.bind(this);
                    Ekstraskilt.$window.on('resize', onResizeNavigationStyle);
                }

                if (Ekstraskilt.$body.find('.header').hasClass('header-transparent')) {
                    Ekstraskilt.$body.find('.main').css('z-index', '19');
                }

                Ekstraskilt.$window.on('resize', function () {
                    Ekstraskilt.$body.removeClass(name + '-active');
                    if (Ekstraskilt.$body.find('.header').hasClass('header-transparent')) {
                        setTimeout(function () {
                            Ekstraskilt.$body.find('.main').css('z-index', '19');
                        }, 400);
                    }
                });

                // Register toggle event
                self.$sidebar.find('.sidebar-toggle, .sidebar-toggle-btn')
                    .add(name === 'sidebar' ? '.left-sidebar-toggle' : ('.' + name + '-toggle'))
                    .on('click', function (e) {
                        self.toggle();
                        $(this).blur();
                        $('.sticky-sidebar').trigger('recalc.pin.left', [400]);
                        if (Ekstraskilt.$body.find('.header').hasClass('header-transparent') && $(window).innerWidth() < 992) {
                            Ekstraskilt.$body.find('.main').css('z-index', 'unset');
                        }
                        e.preventDefault();
                    });

                // Register close event
                self.$sidebar.find('.sidebar-overlay, .sidebar-close')
                    .on('click', function (e) {
                        Ekstraskilt.$body.removeClass(name + '-active');
                        if (Ekstraskilt.$body.find('.header').hasClass('header-transparent')) {
                            setTimeout(function () {
                                Ekstraskilt.$body.find('.main').css('z-index', '19');
                            }, 400);
                        }
                        $('.sticky-sidebar').trigger('recalc.pin.left', [400]);
                        e.preventDefault();
                    });

                setTimeout(function () {
                    $('.sticky-sidebar').trigger('recalc.pin', [400]);
                })
            }
            return false;
        }

        Sidebar.prototype.toggle = function () {
            var self = this;

            // if fixed sidebar
            if (window.innerWidth >= Ekstraskilt.minDesktopWidth && self.$sidebar.hasClass('sidebar-fixed')) {

                // is closed ?
                var isClosed = self.$sidebar.hasClass('closed');

                // if navigation style's sidebar
                if (self.isNavigation) {

                    isClosed || self.$sidebar.find('.filter-clean').hide();

                    self.$sidebar.siblings('.toolbox').children(':not(:first-child)').fadeToggle('fast');

                    self.$sidebar
                        .find('.sidebar-content')
                        .stop()
                        .animate(
                            {
                                'height': 'toggle',
                                'margin-bottom': isClosed ? 'toggle' : -6
                            }, function () {
                                $(this).css('margin-bottom', '');
                                isClosed && self.$sidebar.find('.filter-clean').fadeIn('fast');
                            }
                        );
                }

                // if shop sidebar
                if (self.$sidebar.hasClass('shop-sidebar')) {

                    // change columns
                    var $wrapper = $('.main-content .product-wrapper');
                    if ($wrapper.length) {
                        if ($wrapper.hasClass('product-lists')) {

                            // if list type, toggle 2 cols or 1 col
                            $wrapper.toggleClass('row cols-xl-2', !isClosed);

                        } else {

                            // if grid type
                            var colData = $wrapper.data('toggle-cols'),
                                colsClasses = $wrapper.attr('class').match(/cols-\w*-*\d/g),
                                // get max cols count
                                maxColsCount = colsClasses ?
                                    Math.max.apply(null, colsClasses.map(function (cls) {
                                        return cls.match(/\d/)[0];
                                    })) :
                                    0;

                            if (isClosed) { // when open
                                4 === maxColsCount &&
                                    3 == colData &&
                                    $wrapper.removeClass('cols-md-4');

                            } else { // when close
                                if (3 === maxColsCount) {
                                    $wrapper.addClass('cols-md-4');

                                    if (!colData) {
                                        $wrapper.data('toggle-cols', 3);
                                    }
                                }
                            }
                        }
                    }
                }

                // finally, toggle fixed sidebar
                self.$sidebar.toggleClass('closed');

            } else {

                self.$sidebar.find('.sidebar-overlay .sidebar-close').css('margin-left', - (window.innerWidth - document.body.clientWidth));

                // activate sidebar
                Ekstraskilt.$body
                    .toggleClass(self.name + '-active')
                    .removeClass('closed');

                // issue
                if (window.innerWidth >= 1200 && Ekstraskilt.$body.hasClass('with-flex-container')) {
                    $('.owl-carousel').trigger('refresh.owl.carousel');
                }
            }
        }

        return function (name) {
            return new Sidebar(name);
        }
    })();

    /**
     * @function initProductSingle
     *
     * @param {jQuery} $el
     * @param {object} options
     *
     * @requires OwlCarousel
     * @requires ImagesLoaded (only quickview needs)
     * @requires elevateZoom
     * @instance multiple
     */

    Ekstraskilt.initProductSingle = (function () {
        /**
         * @class ProductSingle
         */
        function ProductSingle($el) {
            return this.init($el);
        }

        var thumbsInit = function (self) {
            // members for thumbnails
            self.$thumbs = self.$wrapper.find('.product-thumbs');
            self.$thumbsWrap = self.$thumbs.closest('.product-thumbs-wrap');
            self.$thumbUp = self.$thumbsWrap.find('.thumb-up');
            self.$thumbDown = self.$thumbsWrap.find('.thumb-down');
            self.$thumbsDots = self.$thumbs.children();
            self.thumbsCount = self.$thumbsDots.length;
            self.$productThumb = self.$thumbsDots.eq(0);
            self._isPgvertical = self.$thumbsWrap.parent().hasClass('pg-vertical');
            self.thumbsIsVertical = self._isPgvertical && window.innerWidth >= Ekstraskilt.minDesktopWidth;

            // register events
            self.$thumbDown.on('click', function (e) {
                self.thumbsIsVertical && thumbsDown(self);
            });

            self.$thumbUp.on('click', function (e) {
                self.thumbsIsVertical && thumbsUp(self);
            });

            self.$thumbsDots.on('click', function () {
                var $this = $(this),
                    index = ($this.parent().filter(self.$thumbs).length ? $this : $this.parent()).index();
                self.$wrapper.find('.product-single-carousel').trigger('to.owl.carousel', index);
            });

            // refresh thumbs
            thumbsRefresh(self);
            Ekstraskilt.$window.on('resize', function () {
                thumbsRefresh(self);
            });
        }

        var thumbsDown = function (self) {
            var maxBottom = self.$thumbsWrap.offset().top + self.$thumbsWrap[0].offsetHeight,
                curBottom = self.$thumbs.offset().top + self.thumbsHeight;

            if (curBottom >= maxBottom + self.$productThumb[0].offsetHeight) {
                self.$thumbs.css('top', parseInt(self.$thumbs.css('top')) - self.$productThumb[0].offsetHeight);
                self.$thumbUp.removeClass('disabled');
            } else if (curBottom > maxBottom) {
                self.$thumbs.css('top', parseInt(self.$thumbs.css('top')) - Math.ceil(curBottom - maxBottom));
                self.$thumbUp.removeClass('disabled');
                self.$thumbDown.addClass('disabled');
            } else {
                self.$thumbDown.addClass('disabled');
            }
        }

        var thumbsUp = function (self) {
            var maxTop = self.$thumbsWrap.offset().top,
                curTop = self.$thumbs.offset().top;

            if (curTop <= maxTop - self.$productThumb[0].offsetHeight) {
                self.$thumbs.css('top', parseInt(self.$thumbs.css('top')) + self.$productThumb[0].offsetHeight);
                self.$thumbDown.removeClass('disabled');
            } else if (curTop < maxTop) {
                self.$thumbs.css('top', parseInt(self.$thumbs.css('top')) - Math.ceil(curTop - maxTop));
                self.$thumbDown.removeClass('disabled');
                self.$thumbUp.addClass('disabled');
            } else {
                self.$thumbUp.addClass('disabled');
            }
        }

        var thumbsRefresh = function (self) {
            if (typeof self.$thumbs == 'undefined') {
                return;
            }

            var oldIsVertical = 'undefined' == typeof self.thumbsIsVertical ? false : self.thumbsIsVertical; // is vertical?
            self.thumbsIsVertical = self._isPgvertical && window.innerWidth >= Ekstraskilt.minDesktopWidth;

            if (self.thumbsIsVertical) { // enable vertical product gallery thumbs.
                // disable thumbs carousel
                self.$thumbs.hasClass('owl-carousel') &&
                    self.$thumbs
                        .trigger('destroy.owl.carousel')
                        .removeClass('owl-carousel');

                // enable thumbs vertical nav
                self.thumbsHeight = self.$productThumb[0].offsetHeight * self.thumbsCount + parseInt(self.$productThumb.css('margin-bottom')) * (self.thumbsCount - 1);
                self.$thumbUp.addClass('disabled');
                self.$thumbDown.toggleClass('disabled', self.thumbsHeight <= self.$thumbsWrap[0].offsetHeight);
                self.isQuickview && recalcDetailsHeight();
            } else {
                // if not vertical, remove top property
                oldIsVertical && self.$thumbs.css('top', '');

                // enable thumbs carousel
                self.$thumbs.hasClass('owl-carousel') || self.$thumbs.addClass('owl-carousel').owlCarousel(
                    $.extend(
                        true,
                        self.isQuickview ? {
                            onInitialized: recalcDetailsHeight,
                            onResized: recalcDetailsHeight
                        } : {},
                        Ekstraskilt.defaults.sliderThumbs
                    ));
            }
        }

        var initVariation = function (self) {
            self.$selects = self.$wrapper.find('.product-variations select');
            self.$items = self.$wrapper.find('.product-variations');
            self.$priceWrap = self.$wrapper.find('.product-variation-price');
            self.$clean = self.$wrapper.find('.product-variation-clean'),
                self.$btnCart = self.$wrapper.find('.btn-cart');

            // check
            self.variationCheck();
            self.$selects.on('change', function (e) {
                self.variationCheck();
            });
            self.$items.children('a').on('click', function (e) {
                $(this).toggleClass('active').siblings().removeClass('active');
                e.preventDefault();
                self.variationCheck();
            });

            // clean
            self.$clean.on('click', function (e) {
                e.preventDefault();
                self.variationClean(true);
            });
        }

        var initCartAction = function (self) {

            // Product Single's Add To Cart Button
            self.$wrapper.on('click', '.btn-cart', function (e) {
                e.preventDefault();

                var $product = self.$wrapper,
                    name = $product.find('.product-name').text();

                // minipopup if only quickview or home pages
                if (
                    $product.closest('.product-popup').length ||
                    document.body.classList.contains('home')
                ) {
                    Ekstraskilt.Minipopup.open({
                        message: 'Successfully Added',
                        productClass: 'product-cart',
                        name: name,
                        nameLink: $product.find('.product-name > a').attr('href'),
                        imageSrc: $product.find('.product-image img').eq(0).attr('src'),
                        imageLink: $product.find('.product-name > a').attr('href'),
                        price: $product.find('.product-variation-price').length > 0 ? $product.find('.product-variation-price').children('span').html() : $product.find('.product-price .price').html(),

                        count: $product.find('.quantity').val(),
                        actionTemplate: '<div class="action-group d-flex mt-3"><a href="cart.php" class="btn btn-sm btn-outline btn-primary btn-rounded mr-2">View Cart</a><a href="checkout.php" class="btn btn-sm btn-primary btn-rounded">Check Out</a></div>'
                    });
                }
            });
        }
        var initCompareAction = function (self) {

            // Product Single's Add To Cart Button
            self.$wrapper.on('click', '.btn-compare', function (e) {
                e.preventDefault();

                var $product = self.$wrapper,
                    name = $product.find('.product-name').text();

                // minipopup if only quickview or home pages
                if (
                    (($product.closest('.product-popup').length ||
                        document.body.classList.contains('home'))) & ($product.find('.btn-product.btn-cart').attr('disabled') != 'disabled')
                ) {
                    Ekstraskilt.Minipopup.open({
                        message: 'Successfully Added',
                        productClass: 'product-compare',
                        name: name,
                        nameLink: $product.find('.product-name > a').attr('href'),
                        imageSrc: $product.find('.product-image img').eq(0).attr('src'),
                        imageLink: $product.find('.product-name > a').attr('href'),
                        price: $product.find('.product-variation-price').length > 0 ? $product.find('.product-variation-price').children('span').html() : $product.find('.product-price .price').html(),
                        count: $product.find('.quantity').val(),
                        actionTemplate: '<div class="action-group d-flex mt-3"><a href="compare.html" class="btn btn-sm btn-outline btn-primary btn-rounded mr-2">Compare</a><a href="checkout.html" class="btn btn-sm btn-primary btn-rounded">Check Out</a></div>'
                    });
                }
            });
        }
        // For only Quickview
        var recalcDetailsHeight = function () {
            var self = this;
            self.$wrapper.find('.product-details').css(
                'height',
                window.innerWidth > 767 ? self.$wrapper.find('.product-gallery')[0].clientHeight : ''
            );
        }

        // Public Properties

        ProductSingle.prototype.init = function ($el) {
            var self = this,
                $slider = $el.find('.product-single-carousel');

            // members
            self.$wrapper = $el;
            self.isQuickview = !!$el.closest('.mfp-content').length;
            self._isPgvertical = false;

            // bind
            if (self.isQuickview) {
                recalcDetailsHeight = recalcDetailsHeight.bind(this);
                Ekstraskilt.ratingTooltip();
            }
            // init thumbs
            $slider.on('initialized.owl.carousel', function (e) {
                //run on only single product
                if (!document.body.classList.contains('home')) {
                    // if not quickview, make full image toggle
                    self.isQuickview || $slider.append('<a href="#" class="product-image-full"><i class="d-icon-zoom"></i></a>');
                }

                if ($slider.parent().hasClass('product-gallery-degree')) {
                    self.isQuickView || $slider.append('<a href="#" class="product-gallery-btn product-degree-viewer" title="Product 360 Degree Gallery"><i class="w-icon-rotate-3d"></i></a>');
                }
                // init thumbnails
                thumbsInit(self);

            }).on('translate.owl.carousel', function (e) {
                var currentIndex = (e.item.index - $(e.currentTarget).find('.cloned').length / 2 + e.item.count) % e.item.count;
                self.thumbsSetActive(currentIndex);
            });

            // if this is created after document ready, init plugins
            if ('complete' === Ekstraskilt.status) {
                Ekstraskilt.slider($slider);
                Ekstraskilt.quantityInput($el.find('.quantity'));
            }

            // if ( $slider.length == 0 ) {
            //     Ekstraskilt.zoomImage( this.$wrapper );
            // }

            initVariation(this);
            initCartAction(this);
            initCompareAction(this);
        }

        ProductSingle.prototype.thumbsSetActive = function (index) {
            var self = this,
                $curThumb = self.$thumbsDots.eq(index);

            self.$thumbsDots.filter('.active').removeClass('active');
            $curThumb.addClass('active');

            // show current thumb
            if (self.thumbsIsVertical) { // if vertical
                var offset = parseInt(self.$thumbs.css('top')) + index * self.thumbsHeight;

                if (offset < 0) {
                    // if above
                    self.$thumbs.css('top', parseInt(self.$thumbs.css('top')) - offset);
                } else {
                    offset = self.$thumbs.offset().top + self.$thumbs[0].offsetHeight - $curThumb.offset().top - $curThumb[0].offsetHeight;

                    if (offset < 0) {
                        // if below
                        self.$thumbs.css('top', parseInt(self.$thumbs.css('top')) + offset);
                    }
                }
            } else { // if thumb carousel
                self.$thumbs.trigger('to.owl.carousel', index, 100);
            }
        }

        ProductSingle.prototype.variationCheck = function () {
            var self = this,
                isAllSelected = true;

            // check all select variations are selected
            self.$selects.each(function () {
                return this.value || (isAllSelected = false);
            });

            // check all item variations are selected
            self.$items.each(function () {
                var $this = $(this);
                if ($this.children('a:not(.size-guide)').length) {
                    return $this.children('.active').length || (isAllSelected = false);
                }
            });

            isAllSelected ?
                self.variationMatch() :
                self.variationClean();
        }

        ProductSingle.prototype.variationMatch = function () {
            var self = this;
            self.$priceWrap.find('span').text('$' + (Math.round(Math.random() * 50) + 200) + '.00');
            self.$priceWrap.slideDown();
            self.$clean.slideDown();
            self.$btnCart.removeAttr('disabled');
        }

        ProductSingle.prototype.variationClean = function (reset) {
            reset && this.$selects.val('');
            reset && this.$items.children('.active').removeClass('active');
            this.$priceWrap.slideUp();
            this.$clean.css('display', 'none');
            this.$btnCart.attr('disabled', 'disabled');

        }

        return function ($el, options) {
            if ($el) {
                return new ProductSingle($el.eq(0), options);
            }
            return null;
        }
    })();

    /**
     * @function initProductSinglePage
     *
     * @requires Slider
     * @requires ProductSingle
     * @requires PhotoSwipe
     * @instance single
     */
    Ekstraskilt.initProductSinglePage = (function () {
        function alertCartAdded(e) {
            var $product = $(e.currentTarget).closest('.product-single');
            $('.cart-added-alert').remove();
            $(Ekstraskilt.parseTemplate(Ekstraskilt.defaults.templateCartAddedAlert, {
                name: $product.find('h1.product-name').text()
            }))
                .insertBefore($product).fadeIn();
            $('.sticky-sidebar').trigger('recalc.pin');
        }
        function compareAdded(e) {
            var $product = $(e.currentTarget).closest('.product-single');
            if ($product.find('.btn-product.btn-cart').attr('disabled') != 'disabled') {
                Ekstraskilt.Minipopup.open({
                    message: 'Successfully Added',
                    productClass: 'product-compare',
                    name: $product.find('h1.product-name').text(),
                    nameLink: $product.find('.product-name > a').attr('href'),
                    imageSrc: $product.find('.product-image img').eq(0).attr('src'),
                    imageLink: $product.find('.product-name > a').attr('href'),
                    price: $product.find('.product-variation-price').length > 0 ? $product.find('.product-variation-price').children('span').html() : $product.find('.product-price').html(),
                    count: $product.find('.quantity').val(),
                    actionTemplate: '<div class="action-group d-flex mt-3"><a href="compare.html" class="btn btn-sm btn-outline btn-primary btn-rounded mr-2">Compare</a><a href="checkout.html" class="btn btn-sm btn-primary btn-rounded">Check Out</a></div>'
                });
            }
        }
        function openFullImage(e) {
            e.preventDefault();

            var $this = $(e.currentTarget),
                $product = $this.closest('.product-single'),
                $images,
                images;

            if ($product.find('.product-single-carousel').length) {
                // single carousel
                $images = $product.find('.product-single-carousel .owl-item:not(.cloned) img');

            } else if ($product.find('.product-gallery-carousel').length) {
                // gallery carousel
                $images = $product.find('.product-gallery-carousel .owl-item:not(.cloned) img');

            } else {
                // simple gallery
                $images = $product.find('.product-gallery img');
            }

            // if images exist
            if ($images.length) {
                var images = $images.map(function () {
                    var $this = $(this);

                    return {
                        src: $this.attr('data-zoom-image'),
                        w: 800,
                        h: 899,
                        title: $this.attr('alt')
                    };
                }).get(),

                    carousel = $product.find('.product-single-carousel, .product-gallery-carousel').data('owl.carousel'),
                    currentIndex = carousel ?
                        // Carousel Type
                        ((carousel.current() - carousel.clones().length / 2 + images.length) % images.length) :

                        // Gallery Type
                        ($product.find('.product-gallery > *').index());

                if (typeof PhotoSwipe !== 'undefined') {
                    var pswpElement = $('.pswp')[0];
                    //if( ! pswpElement ) return;
                    var photoswipe = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, images, {
                        index: currentIndex,
                        closeOnScroll: false,
                    });
                    photoswipe.init();
                    Ekstraskilt.photoswipe = photoswipe;
                }
            }
        }
        // Open 360 Degree
        function open360DegreeView(e) {
            e.preventDefault();
            Ekstraskilt.popup({
                type: 'inline',
                mainClass: "product-popupbox wm-fade product-360-popup",
                preloader: false,
                items: {
                    src: '<div class="product-gallery-degree">\
                        <div class="w-loading"><i></i></div>\
                        <ul class="product-degree-images"></ul>\
                    </div>'
                },
                callbacks: {
                    open: function () {
                        this.container.find('.product-gallery-degree').ThreeSixty({
                            imagePath: 'images/product/shoes/',
                            filePrefix: 'filename_',
                            ext: '.jpg',
                            totalFrames: 36,
                            endFrame: 36,
                            currentFrame: 1,
                            imgList: this.container.find('.product-degree-images'),
                            progress: '.w-loading',
                            height: 500,
                            width: 830,
                            navigation: true
                        });
                    },
                    beforeClose: function () {
                        this.container.empty();
                    }
                }
            });
        }
        function ratingForm() {
            Ekstraskilt.$body.on('click', '.rating-form .rating-stars > a', function (e) {
                var $star = $(this);
                $star.addClass('active').siblings().removeClass('active');
                $star.parent().addClass('selected');
                $star.closest('.rating-form').find('select').val($star.text());
                e.preventDefault();
            });
        }
        function initWishlistAction(e) {
            var $this = $(e.currentTarget);
            if ($this.hasClass('added')) {
                return;
            }
            e.preventDefault();
            $this.addClass('load-more-overlay loading');

            setTimeout(function () {
                $this
                    .removeClass('load-more-overlay loading')
                    .html('<i class="d-icon-heart-full"></i> Browse wishlist')
                    .addClass('added')
                    .attr('title', 'Browse wishlist')
                    .attr('href', 'wishlist.html');
            }, 500);
        }
        function reviewOpenToggler() {
            Ekstraskilt.$body.on('click', '.submit-review-toggle', function (e) {
                $('.review-form-section').toggleClass('opened');
                e.stopPropagation();
                e.preventDefault();
            });
            Ekstraskilt.$body.on('click', '.review-overlay', function (e) {
                $('.review-form-section').removeClass('opened');
                e.stopPropagation();
            });
            Ekstraskilt.$body.on('click', '.btn.like', function (e) {
                var $this = $(this), val = $this.find('.count').text();
                $this.toggleClass('active');
                $this.find('.count').text(1 - val);
                $this.closest('.feeling').find('.btn.unlike').removeClass('active');
                $this.closest('.feeling').find('.btn.unlike .count').text('0');
            });
            Ekstraskilt.$body.on('click', '.btn.unlike', function (e) {
                var $this = $(this), val = $this.find('.count').text();
                $this.toggleClass('active');
                $this.find('.count').text(1 - val);
                $this.closest('.feeling').find('.btn.like').removeClass('active');
                $this.closest('.feeling').find('.btn.like .count').text('0');
            });
        }

        function openLightBox(e) {
            e.preventDefault();
            var $img = $(e.currentTarget);
            var images = $img.parent().children('img').map(function () {
                return {
                    src: this.getAttribute('src'),
                    w: this.getAttribute('width'),
                    h: this.getAttribute('height'),
                    title: this.getAttribute('alt') || ''
                };
            }).get();

            if (typeof PhotoSwipe !== 'undefined') {
                var pswpElement = $('.pswp')[0];
                var photoSwipe = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, images, {
                    index: $img.index(),
                    closeOnScroll: false
                });
                // show image at first.
                photoSwipe.listen('afterInit', function () {
                    photoSwipe.shout('initialZoomInEnd');
                });
                photoSwipe.init();
            }
        }
        // Public Properties
        return function () {
            var $product = $('.product-single');
            // Wishlist button
            Ekstraskilt.$body.on('click', '.product-single .btn-wishlist', initWishlistAction);

            if ($product.length) {
                // if home page, init single products
                if (document.body.classList.contains('home')) {
                    $product.each(function () {
                        Ekstraskilt.initProductSingle($(this));
                    });

                    // image zoom for grid type
                    Ekstraskilt.zoomImage('.product-gallery.row');

                    return null;

                    // else, init single product page
                } else {
                    if (Ekstraskilt.initProductSingle($product) === null) {
                        return null;
                    }
                }
            } else {
                // if no single product exists, return
                return null;
            }

            // image full
            Ekstraskilt.$body.on('click', '.product-single .product-image-full', openFullImage);

            // cart added alert and compare popup
            {
                Ekstraskilt.$body.on('click', '.single-product .btn-cart:not(.disabled)', alertCartAdded);
                Ekstraskilt.$body.on('click', '.single-product .btn-compare', compareAdded);
            }

            // image zoom for grid type
            Ekstraskilt.zoomImage('.product-gallery.row');

            // 360 degree
            Ekstraskilt.$body.on('click', '.product-degree-viewer', open360DegreeView);

            // image pswp
            Ekstraskilt.$body.on('click', '.btn-img', openLightBox);

            // init rating from.(new)
            ratingForm();
            reviewOpenToggler();
        }
    })();

    /**
     * @class CommentWithMedia
     */
    Ekstraskilt.CommentWithMedia = {
        /**
         * Initialize
         * @since 1.0
         */
        init: function () {
            // Register events.
            Ekstraskilt.$body
                .on('change', '.review-medias input[type="file"]', this.uploadMedia)
                .on('click', '.review-medias .btn-remove', this.removeMedia);
        },

        uploadMedia: function (e) {
            if (!$(this)[0].files.length) {
                return;
            }

            var $this = $(this),
                file = $(this)[0].files[0],
                reader = new FileReader(),
                $control = $this.closest('.file-input');

            var URL = window.URL || window.webkitURL;
            var src = URL.createObjectURL(file);

            if (src) {
                if ($control.hasClass('image-input')) {
                    $control.find('.file-input-wrapper').css('background-image', 'url(' + src + ')');
                } else if ($control.hasClass('video-input')) {
                    $control.find('video').attr('src', src);
                }
            }
        },

        removeMedia: function (e) {
            var $this = $(this),
                $fileInput = $this.closest('.file-input');

            $fileInput.find('input[type="file"]').val('');
            $fileInput.find('.file-input-wrapper').css('background-image', '');
            $fileInput.find('video').attr('src', '');
        }
    }

    /**
     * @function slider
     *
     * @requires OwlCarousel
     */
    Ekstraskilt.slider = (function () {
        /**
         * @class Slider
         */
        function Slider($el, options) {
            return this.init($el, options);
        }

        var onInitialize = function (e) {
            var i, j, breaks = ['', '-xs', '-sm', '-md', '-lg', '-xl', '-xxl'];
            this.classList.remove('row');
            for (i = 0; i < 7; ++i) {
                for (j = 1; j <= 12; ++j) {
                    this.classList.remove('cols' + breaks[i] + '-' + j);
                }
            }
            this.classList.remove('gutter-no');
            this.classList.remove('gutter-sm');
            this.classList.remove('gutter-lg');
            if (this.classList.contains("animation-slider")) {
                var els = this.children,
                    len = els.length;
                for (var i = 0; i < len; ++i) {
                    els[i].setAttribute('data-index', i + 1);
                }
            }
        }
        var onInitialized = function (e) {
            var els = this.firstElementChild.firstElementChild.children,
                i,
                len = els.length;
            for (i = 0; i < len; ++i) {
                if (!els[i].classList.contains('active')) {
                    var animates = Ekstraskilt.byClass('appear-animate', els[i]),
                        j;
                    for (j = animates.length - 1; j >= 0; --j) {
                        animates[j].classList.remove('appear-animate');
                    }
                }
            }

            // Video
            var $el = $(e.currentTarget);
            $el.find('video').on('ended', function () {
                var $this = $(this);
                if ($this.closest('.owl-item').hasClass('active')) {
                    if (true === $el.data('owl.carousel').options.autoplay) {
                        if (false === $el.data('owl.carousel').options.loop && ($el.data().children - 1) === $el.find('.owl-item.active').index()) {
                            this.loop = true;
                            this.play();
                        }
                        $el.trigger('next.owl.carousel');
                        $el.trigger('play.owl.autoplay');
                    } else {
                        this.loop = true;
                        this.play();
                    }
                }
            });
        }
        var onTranslated = function (e) {
            $(window).trigger('appear.check');

            // Video Play   
            var $el = $(e.currentTarget),
                $activeVideos = $el.find('.owl-item.active video');

            $el.find('.owl-item:not(.active) video').each(function () {
                if (!this.paused) {
                    $el.trigger('play.owl.autoplay');
                }
                this.pause();
                this.currentTime = 0;
            });

            if ($activeVideos.length) {
                if (true === $el.data('owl.carousel').options.autoplay) {
                    $el.trigger('stop.owl.autoplay');
                }
                $activeVideos.each(function () {
                    this.paused && this.play();
                });
            }
        }
        var onSliderInitialized = function (e) {
            var self = this,
                $el = $(e.currentTarget);

            // carousel content animation

            $el.find('.owl-item.active .slide-animate').each(function () {
                var $animation_item = $(this),
                    settings = $.extend(true, {},
                        Ekstraskilt.defaults.animation,
                        Ekstraskilt.parseOptions($animation_item.data('animation-options'))
                    ),
                    duration = settings.duration,
                    delay = settings.delay,
                    aniName = settings.name;

                $animation_item.css('animation-duration', duration);

                var temp = Ekstraskilt.requestTimeout(function () {
                    $animation_item.addClass(aniName);
                    $animation_item.addClass('show-content');
                }, (delay ? Number((delay).slice(0, -1)) * 1000 : 0));

                self.timers.push(temp);
            });
        }

        var onSliderResized = function (e) {
            $(e.currentTarget).find('.owl-item.active .slide-animate').each(function () {
                var $animation_item = $(this);
                $animation_item.addClass('show-content');
                $animation_item.attr('style', '');
            });
        }

        var onSliderTranslate = function (e) {
            var self = this,
                $el = $(e.currentTarget);
            self.translateFlag = 1;
            self.prev = self.next;
            $el.find('.owl-item .slide-animate').each(function () {
                var $animation_item = $(this),
                    settings = $.extend(true, {}, Ekstraskilt.defaults.animation, Ekstraskilt.parseOptions($animation_item.data('animation-options')));
                $animation_item.removeClass(settings.name);
            });
        }

        var onSliderTranslated = function (e) {
            var self = this,
                $el = $(e.currentTarget);
            if (1 == self.translateFlag) {
                self.next = $el.find('.owl-item').eq(e.item.index).children().attr('data-index');
                $el.find('.show-content').removeClass('show-content');
                if (self.prev != self.next) {
                    $el.find('.show-content').removeClass('show-content');
                    /* clear all animations that are running. */
                    if ($el.hasClass("animation-slider")) {
                        for (var i = 0; i < self.timers.length; i++) {
                            Ekstraskilt.deleteTimeout(self.timers[i]);
                        }
                        self.timers = [];
                    }
                    $el.find('.owl-item.active .slide-animate').each(function () {
                        var $animation_item = $(this),
                            settings = $.extend(true, {}, Ekstraskilt.defaults.animation, Ekstraskilt.parseOptions($animation_item.data('animation-options'))),
                            duration = settings.duration,
                            delay = settings.delay,
                            aniName = settings.name;

                        $animation_item.css('animation-duration', duration);
                        $animation_item.css('animation-delay', delay);
                        $animation_item.css('transition-property', 'visibility, opacity');
                        $animation_item.css('transition-delay', delay);
                        $animation_item.css('transition-duration', duration);
                        $animation_item.addClass(aniName);

                        duration = duration ? duration : '0.75s';
                        $animation_item.addClass('show-content');
                        var temp = Ekstraskilt.requestTimeout(function () {
                            $animation_item.css('transition-property', '');
                            $animation_item.css('transition-delay', '');
                            $animation_item.css('transition-duration', '');
                            self.timers.splice(self.timers.indexOf(temp), 1)
                        }, (delay ? Number((delay).slice(0, -1)) * 1000 + Number((duration).slice(0, -1)) * 500 : Number((duration).slice(0, -1)) * 500));
                        self.timers.push(temp);
                    });
                } else {
                    $el.find('.owl-item').eq(e.item.index).find('.slide-animate').addClass('show-content');
                }
                self.translateFlag = 0;
            }
        }

        // Public Properties

        Slider.zoomImage = function () {
            Ekstraskilt.zoomImage(this.$element);
        }

        Slider.zoomImageRefresh = function () {
            this.$element.find('img').each(function () {
                var $this = $(this);
                if ($.fn.elevateZoom) {
                    var elevateZoom = $this.data('elevateZoom');
                    if (typeof elevateZoom !== 'undefined') {
                        elevateZoom && elevateZoom.refresh();
                    } else {
                        Ekstraskilt.defaults.zoomImage.zoomContainer = $this.parent();
                        $this.elevateZoom($this.elevateZoom);
                    }
                }

            });
        }

        Ekstraskilt.defaults.sliderPresets['product-single-carousel'].onInitialized = Ekstraskilt.defaults.sliderPresets['product-gallery-carousel'].onInitialized = Slider.zoomImage;
        Ekstraskilt.defaults.sliderPresets['product-single-carousel'].onRefreshed = Ekstraskilt.defaults.sliderPresets['product-gallery-carousel'].onRefreshed = Slider.zoomImageRefresh;

        Slider.prototype.init = function ($el, options) {
            this.timers = [];
            this.translateFlag = 0;
            this.prev = 1;
            this.next = 1;

            Ekstraskilt.lazyload($el, true);

            var classes = $el.attr('class').split(' '),
                settings = $.extend(true, {}, Ekstraskilt.defaults.slider);

            // extend preset options
            classes.forEach(function (className) {
                var preset = Ekstraskilt.defaults.sliderPresets[className];
                preset && $.extend(true, settings, preset);
            });

            var $videos = $el.find('video');
            $videos.each(function () {
                this.loop = false;
            });

            // extend user options
            $.extend(true, settings, Ekstraskilt.parseOptions($el.attr('data-owl-options')), options);

            onSliderInitialized = onSliderInitialized.bind(this);
            onSliderTranslate = onSliderTranslate.bind(this);
            onSliderTranslated = onSliderTranslated.bind(this);

            // init
            $el.on('initialize.owl.carousel', onInitialize)
                .on('initialized.owl.carousel', onInitialized)
                .on('translated.owl.carousel', onTranslated);

            // if animation slider
            $el.hasClass('animation-slider') &&
                $el.on('initialized.owl.carousel', onSliderInitialized)
                    .on('resized.owl.carousel', onSliderResized)
                    .on('translate.owl.carousel', onSliderTranslate)
                    .on('translated.owl.carousel', onSliderTranslated);

            $el.owlCarousel(settings);
        }

        return function (selector, options) {
            Ekstraskilt.$(selector).each(function () {
                var $this = $(this);

                Ekstraskilt.call(function () {
                    new Slider($this, options);
                });
            });
        }
    })();

    /**
     * @function quantityInput
     */
    Ekstraskilt.quantityInput = (function () {
        /**
         * @class QuantityInput
         */
        function QuantityInput($el) {
            return this.init($el);
        }
        QuantityInput.min = 1;
        QuantityInput.max = 1000000;
        QuantityInput.value = 1;
        QuantityInput.prototype.init = function ($el) {
            var self = this;

            self.$minus = false;
            self.$plus = false;
            self.$value = false;
            self.value = false;

            // Bind Events
            self.startIncrease = self.startIncrease.bind(self);
            self.startDecrease = self.startDecrease.bind(self);
            self.stop = self.stop.bind(self);

            // Variables
            self.min = parseInt($el.attr('min')),
                self.max = parseInt($el.attr('max'));

            self.min || ($el.attr('min', self.min = QuantityInput.min))
            self.max || ($el.attr('max', self.max = QuantityInput.max))

            // Add DOM elements and event listeners
            self.$value = $el.val(self.value = QuantityInput.value);

            self.$minus = $el.prev()
                .on('mousedown', function (e) {
                    e.preventDefault();
                    self.startDecrease();
                })
                .on('touchstart', function (e) {
                    if (e.cancelable) {
                        e.preventDefault();
                    }
                    self.startDecrease();
                })
                .on('mouseup', self.stop);

            self.$plus = $el.next()
                .on('mousedown', function (e) {
                    e.preventDefault();
                    self.startIncrease();
                })
                .on('touchstart', function (e) {
                    if (e.cancelable) {
                        e.preventDefault();
                    }
                    self.startIncrease();
                })
                .on('mouseup', self.stop);

            Ekstraskilt.$body.on('mouseup', self.stop)
                .on('touchend', self.stop)
                .on('touchcancel', self.stop);
        }
        QuantityInput.prototype.startIncrease = function (e) {
            e && e.preventDefault();
            var self = this;
            self.value = self.$value.val();
            self.value < self.max && self.$value.val(++self.value);
            self.increaseTimer = Ekstraskilt.requestTimeout(function () {
                self.speed = 1;
                self.increaseTimer = Ekstraskilt.requestInterval(function () {
                    self.$value.val(self.value = Math.min(self.value + Math.floor(self.speed *= 1.05), self.max));
                }, 50);
            }, 400);
        }
        QuantityInput.prototype.stop = function (e) {
            Ekstraskilt.deleteTimeout(this.increaseTimer);
            Ekstraskilt.deleteTimeout(this.decreaseTimer);
        }
        QuantityInput.prototype.startDecrease = function () {
            var self = this;
            self.value = self.$value.val();
            self.value > self.min && self.$value.val(--self.value);
            self.decreaseTimer = Ekstraskilt.requestTimeout(function () {
                self.speed = 1;
                self.decreaseTimer = Ekstraskilt.requestInterval(function () {
                    self.$value.val(self.value = Math.max(self.value - Math.floor(self.speed *= 1.05), self.min));
                }, 50);
            }, 400);
        }
        return function (selector) {
            Ekstraskilt.$(selector).each(function () {
                var $this = $(this);
                // if not initialized
                $this.data('quantityInput') ||
                    $this.data('quantityInput', new QuantityInput($this));
            });
        }
    })();

    /**
     * @class Menu
     */
    Ekstraskilt.Menu = {
        init: function () {
            this.initMenu();
            this.initMobileMenu();
            this.initFilterMenu();
            this.initCategoryMenu();
            this.initCollapsibleWidget();
        },
        initMenu: function () {
            // setup menu
            $('.menu li').each(function () {
                if (this.lastElementChild && (
                    this.lastElementChild.tagName === 'UL' ||
                    this.lastElementChild.classList.contains('megamenu'))
                ) {
                    this.classList.add('submenu');
                }
            });

            $('.menu > li > a').each(function () {
                var $this = $(this);
                if ($this.text() == "Elements") {
                    var $parent = $this.closest('li');
                    $parent.addClass('submenu-container');
                }
            });

            $('.main-nav .megamenu, .main-nav .submenu > ul').each(function () {
                var $this = $(this),
                    left = $this.offset().left,
                    outerWidth = $this.outerWidth(),
                    offset = (left + outerWidth) - (window.innerWidth - 20);
                if ($this.closest('li').hasClass('submenu-container')) {
                    var winWidth = $(window).innerWidth();
                    if (winWidth <= 1200) {
                        $this.css('width', winWidth - 40);
                    }
                    $this.css('margin-left', ((winWidth - outerWidth) / 2 - left));
                }
                else {
                    if (offset >= 0 && left > 20) {
                        $this.css('margin-left', '-=' + offset);
                    }
                }
            });


            // calc megamenu position
            Ekstraskilt.$window.on('resize', function () {
                $('.main-nav .megamenu, .main-nav .submenu > ul').each(function () {
                    var $this = $(this),
                        left = $this.offset().left,
                        outerWidth = $this.outerWidth(),
                        offset = (left + outerWidth) - (window.innerWidth - 20);
                    if ($this.closest('li').hasClass('submenu-container')) {
                        var winWidth = $(window).innerWidth();
                        if (winWidth <= 1200) {
                            $this.css('width', winWidth - 40);
                            outerWidth = $this.innerWidth();
                        }
                        $this.css('margin-left', 0);
                        left = $this.offset().left;
                        $this.css('margin-left', ((winWidth - outerWidth) / 2 - left));
                    } else {
                        if (offset >= 0 && left > 20) {
                            $this.css('margin-left', '-=' + offset);
                        }
                    }
                });
            });


        },
        initMobileMenu: function () {
            function showMobileMenu() {
                Ekstraskilt.$body.addClass('mmenu-active');
            };
            function hideMobileMenu(e) {
                if (e && e.type && 'resize' == e.type && !Ekstraskilt.windowResized(e.timeStamp)) {
                    return;
                }
                e.preventDefault();
                Ekstraskilt.$body.removeClass('mmenu-active');
            };

            $('.mobile-menu li, .toggle-menu li').each(function () {
                if (this.lastElementChild && (
                    this.lastElementChild.tagName === 'UL' ||
                    this.lastElementChild.classList.contains('megamenu'))
                ) {
                    var span = document.createElement('span');
                    span.className = "toggle-btn";
                    this.firstElementChild.appendChild(span);
                }
            });
            $('.mobile-menu-toggle').on('click', showMobileMenu);
            $('.mobile-menu-overlay').on('click', hideMobileMenu);
            $('.mobile-menu-close').on('click', hideMobileMenu);
            Ekstraskilt.$window.on('resize', hideMobileMenu);
        },
        initFilterMenu: function () {
            $('.search-ul li').each(function () {
                if (this.lastElementChild && this.lastElementChild.tagName === 'UL') {
                    var i = document.createElement('i');
                    i.className = "fas fa-chevron-down";
                    this.classList.add('with-ul');
                    this.firstElementChild.appendChild(i);
                }
            });
            $('.with-ul > a i, .toggle-btn').on('click', function (e) {
                $(this).parent().next().slideToggle(300).parent().toggleClass("show");
                setTimeout(function () {
                    $('.sticky-sidebar').trigger('recalc.pin');
                }, 320);
                e.preventDefault();
            });
        },
        initCategoryMenu: function () {
            // cat dropdown
            var $menu = $('.category-dropdown');
            if ($menu.length) {
                var $box = $menu.find('.dropdown-box');
                if ($box.length) {
                    var top = $('.main').offset().top + $box[0].offsetHeight;
                    if (window.pageYOffset > top || window.innerWidth < Ekstraskilt.minDesktopWidth) {
                        $menu.removeClass('show');
                    }
                    window.addEventListener('scroll', function () {
                        if (window.pageYOffset <= top && window.innerWidth >= Ekstraskilt.minDesktopWidth) {
                            $menu.removeClass('show');
                        }
                    }, { passive: true });
                    $('.category-toggle').on("click", function (e) {
                        e.preventDefault();
                    })
                    $menu.on("mouseover", function (e) {
                        if (window.pageYOffset > top && window.innerWidth >= Ekstraskilt.minDesktopWidth) {
                            $menu.addClass('show');
                        }
                    })
                    $menu.on("mouseleave", function (e) {
                        if (window.pageYOffset > top && window.innerWidth >= Ekstraskilt.minDesktopWidth) {
                            $menu.removeClass('show');
                        }
                    })
                }
                if ($menu.hasClass('with-sidebar')) {
                    var sidebar = Ekstraskilt.byClass('sidebar');
                    if (sidebar.length) {
                        $menu.find('.dropdown-box').css('width', sidebar[0].offsetWidth - 20);

                        // set category menu's width same as sidebar.
                        Ekstraskilt.$window.on('resize', function () {
                            $menu.find('.dropdown-box').css('width', (sidebar[0].offsetWidth - 20));
                        });
                    }
                }
            }
        },
        initCollapsibleWidget: function () {
            // generate toggle icon
            $('.widget-collapsible .widget-title').each(function () {
                var span = document.createElement('span');
                span.className = 'toggle-btn';
                this.appendChild(span);
            });
            // slideToggle
            $('.widget-collapsible .widget-title').on('click', function (e) {
                var $this = $(this);
                if (!$this.hasClass('sliding')) {
                    var $body = $this.siblings('.widget-body');

                    $this.hasClass("collapsed") || $body.css('display', 'block');

                    $this.addClass("sliding");
                    $body.slideToggle(300, function () {
                        $this.removeClass("sliding");
                    });

                    $this.toggleClass("collapsed");
                    setTimeout(function () {
                        $('.sticky-sidebar').trigger('recalc.pin');
                    }, 320);
                }
            });
        }
    };

    /**
     * @class  StickyLink
     */
    Ekstraskilt.StickyLink = {
        init: function () {
            this.initShowDemos();
        },
        initShowDemos: function () {
            function showStickyLinks() {
                $('.demos-list').addClass('show');

                var $demos = $('.demos-list .demos'),
                    $content = $('.demos-list .demos-content');
                //call demos list
                if (0 == $demos.children().length) {
                    Ekstraskilt.doLoading($content);
                    $.ajax({
                        url: "ajax/demos-list.html",
                        method: 'post',
                        data: {
                            action: "Ekstraskilt_demos_list",
                        },
                        success: function (data) {
                            if (data) {
                                Ekstraskilt.endLoading($content);
                                $demos.html(data);
                            }
                        }
                    })
                }
            };
            function hideStickyLinks() {
                $('.demos-list').removeClass('show');
            };

            $('.demo-toggle').on('click', function (e) {
                e.preventDefault();
                showStickyLinks();
            });
            $('.demos-overlay').on('click', function (e) {
                e.preventDefault();
                hideStickyLinks();
            });
            $('.demos-close').on('click', function (e) {
                e.preventDefault();
                hideStickyLinks();
            });
        },
    };

    /**
     * @class MiniPopup
     */
    Ekstraskilt.Minipopup = (function () {
        var $area,
            offset = 0,
            boxes = [],
            isPaused = false,
            timers = [],
            timerId = false,
            timerInterval = 200,
            timerClock = function () {
                if (isPaused) {
                    return;
                }
                for (var i = 0; i < timers.length; ++i) {
                    (timers[i] -= timerInterval) <= 0 && this.close(i--);
                }
            }

        return {
            init: function () {
                // init area
                var area = document.createElement('div');
                area.className = "minipopup-area";
                Ekstraskilt.byClass('page-wrapper')[0].appendChild(area);

                $area = $(area);
                $area.on('click', '.btn-close', function (e) {
                    self.close($(this).closest('.minipopup-box').index());
                });

                // bind methods
                this.close = this.close.bind(this);
                timerClock = timerClock.bind(this);
            },

            open: function (options, callback) {
                var self = this,
                    settings = $.extend(true, {}, Ekstraskilt.defaults.minipopup, options),
                    $box;
                if (!settings.isPurchased) {
                    settings.detailTemplate = Ekstraskilt.parseTemplate(
                        (null != settings.count ? settings.priceQuantityTemplate : settings.priceTemplate),
                        settings
                    )
                } else {
                    settings.detailTemplate = Ekstraskilt.parseTemplate(
                        settings.purchasedTemplate,
                        settings
                    )
                }
                if (null != settings.rating) {
                    settings.detailTemplate += Ekstraskilt.parseTemplate(settings.ratingTemplate, settings);
                }
                $box = $(Ekstraskilt.parseTemplate(settings.template, settings));
                self.space = settings.space;

                // open
                $box
                    .appendTo($area)
                    .css('top', - offset)
                    .find("img")[0]
                    .onload = function () {
                        offset += $box[0].offsetHeight + self.space;

                        $box.addClass('show');
                        if ($box.offset().top - window.pageYOffset < 0) {
                            self.close();
                            $box.css('top', - offset + $box[0].offsetHeight + self.space);
                        }
                        $box.on('mouseenter', function () { self.pause() })
                            .on('mouseleave', function () { self.resume() })
                            .on('touchstart', function (e) { self.pause(); e.stopPropagation(); })
                            .on('mousedown', function () {
                                $(this).addClass('focus');
                            })
                            .on('mouseup', function () {
                                self.close($(this).index());
                            });
                        Ekstraskilt.$body.on('touchstart', function () {
                            self.resume();
                        });

                        boxes.push($box);
                        timers.push(settings.delay);

                        (timers.length > 1) || (
                            timerId = setInterval(timerClock, timerInterval)
                        )

                        callback && callback($box);
                    };
            },

            close: function (indexToClose) {
                var self = this,
                    index = ('undefined' === typeof indexToClose) ? 0 : indexToClose,
                    $box = boxes.splice(index, 1)[0];

                // remove timer
                timers.splice(index, 1)[0];

                // remove box
                offset -= $box[0].offsetHeight + self.space;
                $box.removeClass('show');
                setTimeout(function () {
                    $box.remove();
                }, 300);

                // slide down other boxes
                boxes.forEach(function ($box, i) {
                    if (i >= index && $box.hasClass('show')) {
                        $box.stop(true, true).animate({
                            top: parseInt($box.css('top')) + $box[0].offsetHeight + 20
                        }, 600, 'easeOutQuint');
                    }
                });

                // clear timer
                boxes.length || clearTimeout(timerId);
            },

            pause: function () {
                isPaused = true;
            },

            resume: function () {
                isPaused = false;
            }
        }
    })();

    /**
     * @function floatSVG
     * @param {string|jQuery} selector 
     * @param {object} options
     */
    Ekstraskilt.floatSVG = (function () {
        function FloatSVG(svg, options) {
            this.$el = $(svg);
            this.set(options);
            this.start();
        }

        FloatSVG.prototype.set = function (options) {
            this.options = $.extend({
                delta: 15,
                speed: 10,
                size: 1,
            }, typeof options == 'string' ? Ekstraskilt.parseOptions(options) : options);
        }

        FloatSVG.prototype.getDeltaY = function (dx) {
            return Math.sin(2 * Math.PI * dx / this.width * this.options.size) * this.options.delta;
        }

        FloatSVG.prototype.start = function () {
            this.update = this.update.bind(this);
            this.timeStart = Date.now() - parseInt(Math.random() * 100);
            this.$el.find('path').each(function () {
                $(this).data('original', this.getAttribute('d').replace(/([\d])\s*\-/g, '$1,-'));
            });

            window.addEventListener('resize', this.update, { passive: true });
            window.addEventListener('scroll', this.update, { passive: true });
            Ekstraskilt.$window.on('check_float_svg', this.update);
            this.update();
        }

        FloatSVG.prototype.update = function () {
            var self = this;

            if (this.$el.length && Ekstraskilt.isOnScreen(this.$el[0])) { // && $.contains(this.$el, document.body)) {
                Ekstraskilt.requestTimeout(function () {
                    self.draw();
                }, 16);
            }
        }

        FloatSVG.prototype.draw = function () {
            var self = this,
                _dx = (Date.now() - this.timeStart) * this.options.speed / 200;
            this.width = this.$el.width();
            if (!this.width) {
                return;
            }
            this.$el.find('path').each(function () {
                var dx = _dx, dy = 0;
                this.setAttribute('d', $(this).data('original')
                    .replace(/M([\d|\.]*),([\d|\.]*)/, function (match, p1, p2) {
                        if (p1 && p2) {
                            return 'M' + p1 + ',' + (parseFloat(p2) + (dy = self.getDeltaY(dx += parseFloat(p1)))).toFixed(3);
                        }
                        return match;
                    })
                    .replace(/([c|C])[^A-Za-z]*/g, function (match, p1) {
                        if (p1) {
                            var v = match.slice(1).split(',').map(parseFloat);
                            if (v.length == 6) {
                                if ('C' == p1) {
                                    v[1] += self.getDeltaY(_dx + v[0]);
                                    v[3] += self.getDeltaY(_dx + v[2]);
                                    v[5] += self.getDeltaY(dx = _dx + v[4]);
                                } else {
                                    v[1] += self.getDeltaY(dx + v[0]) - dy;
                                    v[3] += self.getDeltaY(dx + v[2]) - dy;
                                    v[5] += self.getDeltaY(dx += v[4]) - dy;
                                }
                                dy = self.getDeltaY(dx);

                                return p1 + v.map(function (v) {
                                    return v.toFixed(3);
                                }).join(',');
                            }
                        }
                        return match;
                    })
                );
            });

            this.update();
        }

        return function (selector) {
            Ekstraskilt.$(selector).each(function () {
                var $this = $(this), float;
                if (this.tagName == 'svg') {
                    float = $this.data('float-svg');
                    if (float) {
                        float.set($this.attr('data-float-options'));
                    } else {
                        $this.data('float-svg', new FloatSVG(this, $this.attr('data-float-options')));
                    }
                }
            })
        };
    })();

    /**
     * @class Shop
     *
     * @requires Minipopup
     * @requires noUiSlider
     * @instance single
     */
    Ekstraskilt.Shop = {
        init: function () {
            // Functions for products
            this.initProductsQuickview();
            this.initProductsCartAction();
            this.initProductsCompareAction();
            this.initProductsWishlistAction();
            this.initProductsLoginAction();
            this.initProductsLoad();
            this.initProductsScrollLoad('.scroll-load');
            this.initProductType('slideup');
            this.initVariation();
            this.initWishlistButton('.product:not(.product-single) .btn-wishlist');
            Ekstraskilt.call(Ekstraskilt.ratingTooltip, 500);

            // Functions for shop page
            this.initSelectMenu('.select-menu');
            Ekstraskilt.priceSlider('.filter-price-slider');
            this.topCategoryOpener();
        },

        topCategoryOpener: function () {
            Ekstraskilt.$body.find('.toolbox-horizontal .widget-title').on('click', function (e) {
                $(this).parent().siblings().removeClass('opened');
                $(this).parent().toggleClass('opened');
                e.stopPropagation();
            });
        },

        initVariation: function (type) {
            $('.product:not(.product-single) .product-variations > a').on('click', function (e) {
                var $this = $(this),
                    $image = $this.closest('.product').find('.product-media img');

                if (!$image.data('image-src'))
                    $image.data('image-src', $image.attr('src'));

                $this.toggleClass('active').siblings().removeClass('active');
                if ($this.hasClass('active')) {
                    $image.attr('src', $this.data('src'))
                } else {
                    $image.attr('src', $image.data('image-src'));
                    $this.blur();
                }
                e.preventDefault();
            })
        },

        initProductType: function (type) {

            // "slideup" type
            if (type === 'slideup') {
                $('.product-slideup-content .product-details').each(function (e) {
                    var $this = $(this),
                        hidden_height = $this.find('.product-hide-details').outerHeight(true);

                    $this.height($this.height() - hidden_height);
                });

                $(Ekstraskilt.byClass('product-slideup-content'))
                    .on('mouseenter touchstart', function (e) {
                        var $this = $(this),
                            hidden_height = $this.find('.product-hide-details').outerHeight(true);

                        $this.find('.product-details').css('transform', 'translateY(' + (-hidden_height) + 'px)');
                        $this.find('.product-hide-details').css('transform', 'translateY(' + (-hidden_height) + 'px)');
                    })
                    .on('mouseleave touchleave', function (e) {
                        var $this = $(this),
                            hidden_height = $this.find('.product-hide-details').outerHeight(true);

                        $this.find('.product-details').css('transform', 'translateY(0)');
                        $this.find('.product-hide-details').css('transform', 'translateY(0)');
                    });
            }
        },

        initSelectMenu: function () {
            Ekstraskilt.$body
                // open select menu
                .on('click', '.select-menu', function (e) {
                    var $this = $(this);
                    if (!$this.hasClass('toolbox-sort')) {
                        var $selectMenu = $(e.currentTarget),
                            $target = $(e.target),
                            isOpened = $selectMenu.hasClass('opened');

                        if ($selectMenu.hasClass('fixed')) {
                            e.stopPropagation()
                        } else {
                            // close all select menu
                            if ($this.closest('.sidebar-content').length != 0) {
                                $('.select-menu').removeClass('opened');
                            }
                        }
                        if ($selectMenu.is($target.parent())) {
                            // if toggle is clicked
                            isOpened || $selectMenu.addClass('opened');
                            e.stopPropagation();
                        } else {
                            // if item is clicked
                            $target.parent().toggleClass('active');
                            if ($target.parent().hasClass('active')) { // add select-item, and show
                                $('.select-items').show();
                                $('<a href="#" class="select-item">' + $target.text() + '<i class="d-icon-times"></i></a>')
                                    .insertBefore('.select-items .filter-clean')
                                    .hide().fadeIn()
                                    .data('link', $target.parent()); // link to anchor's parent - li tag
                            } else { // remove select-item
                                $('.select-items > .select-item').filter(function (i, el) {
                                    return el.innerText == $target.text();
                                }).fadeOut(function () {
                                    $(this).remove();
                                    // if only clean all button remains, // then hide select-items
                                    if ($('.select-items').children().length < 2) {
                                        $('.select-items').hide();
                                    }
                                });
                            }
                        }
                    }
                    e.preventDefault();
                })
                // Close select menu
                .on('click', function (e) {
                    if ($(e.target).closest('.filter-items').length == 0 || $(e.target).hasClass('select-menu')) {
                        $('.select-menu').removeClass('opened');
                    }
                })

                // Remove all filters in navigation
                .on('click', '.select-items .filter-clean', function (e) {
                    var $clean = $(this);
                    $clean.siblings().each(function () {
                        var $link = $(this).data('link');
                        $link && $link.removeClass('active');
                    });
                    $clean.parent().fadeOut(function () {
                        $clean.siblings().remove();
                    });
                    e.preventDefault();
                })
                // Remove one filter in navigation
                .on('click', '.select-item i', function (e) {
                    $(e.currentTarget).parent().fadeOut(function () {
                        var $this = $(this),
                            $link = $this.data('link');
                        $link && $link.toggleClass('active');
                        $this.remove();

                        // if only clean all button remains, then hide select-items
                        if ($('.select-items').children().length < 2) {
                            $('.select-items').hide();
                        }
                    });
                    e.preventDefault();
                })
                // Remove all filters
                .on('click', '.filter-clean', function (e) {
                    $('.shop-sidebar .filter-items .active').removeClass('active');
                    e.preventDefault();
                })
                // Toggle filter
                .on('click', '.filter-items a', function (e) {
                    var $ul = $(this).closest('.filter-items');
                    if (!$ul.hasClass('search-ul') && !$ul.parent().hasClass('select-menu')) {
                        if ($ul.hasClass('filter-price')) {
                            $(this).parent().siblings().removeClass('active');
                            $(this).parent().toggleClass('active');
                            e.preventDefault();
                        } else {
                            $(this).parent().toggleClass('active');
                            e.preventDefault();
                        }
                    }
                })
        },
        initProductsQuickview: function () {
            Ekstraskilt.$body.on('click', '.btn-quickview', function (e) {
                e.preventDefault();
                if ($(this).closest('.dark-theme').length > 0) {
                    //dark theme
                    Ekstraskilt.popup({
                        items: {
                            src: "ajax/quickview-dark.html"
                        },
                        callbacks: {
                            ajaxContentAdded: function () {
                                this.wrap.imagesLoaded(function () {
                                    Ekstraskilt.initProductSingle($('.mfp-product .product-single'));
                                });
                            }
                        }
                    }, 'quickview');
                } else {
                    //light theme
                    Ekstraskilt.popup({
                        items: {
                            src: "ajax/quickview.html"
                        },
                        callbacks: {
                            ajaxContentAdded: function () {
                                this.wrap.imagesLoaded(function () {
                                    Ekstraskilt.initProductSingle($('.mfp-product .product-single'));
                                });
                            }
                        }
                    }, 'quickview');
                }
            });
        },
        initProductsCartAction: function () {
            Ekstraskilt.$body
                // Cart dropdown is offcanvas type
                .on('click', '.off-canvas .cart-toggle', function (e) {
                    e.preventDefault();
                    $('.cart-dropdown').addClass('opened');
                })
                .on('click', '.off-canvas .canvas-header .btn-close', function (e) {
                    $('.cart-dropdown').removeClass('opened');
                    e.preventDefault();
                })
                .on('click', '.off-canvas .canvas-overlay', function (e) {
                    $('.cart-dropdown').removeClass('opened');
                    e.preventDefault();
                })

                // Add to cart in products
                .on('click', '.product:not(.product-variable) .btn-product-icon.btn-cart, .product:not(.product-variable) .btn-product.btn-cart', function (e) {
                    e.preventDefault();

                    var $product = $(this).closest('.product'),
                        $compareCol = $(this).closest('.compare-col'),
                        $compareRow = $(this).closest('.compare-row'),
                        productPrice,
                        $productName;
                    if ($compareCol.length > 0) {
                        productPrice = $('.Ekstraskilt-compare-table > .compare-row').eq(2).children().eq($compareCol.index()).find('.product-price .new-price, .product-price .price').html();
                        $productName = $('.Ekstraskilt-compare-table > .compare-row').eq(1).children().eq($compareCol.index());
                        // if not product single, then open minipopup
                        $product.hasClass('product-single') ||
                            Ekstraskilt.Minipopup.open({
                                message: 'Successfully Added',
                                productClass: 'product-cart',
                                name: $productName.find('a').text(),
                                nameLink: $productName.find(' a ').attr('href'),
                                imageSrc: $product.find('.product-media img').attr('src'),
                                imageLink: $productName.find(' a ').attr('href'),
                                price: productPrice,
                                count: $product.find('.quantity').length > 0 ? $product.find('.quantity').val() : 1,
                                actionTemplate: '<div class="action-group d-flex"><a href="cart.html" class="btn btn-sm btn-outline btn-primary btn-rounded">View Cart</a><a href="checkout.html" class="btn btn-sm btn-primary btn-rounded">Check Out</a></div>'
                            });
                    } else {
                        // if not product single, then open minipopup
                        $product.hasClass('product-single') ||
                            Ekstraskilt.Minipopup.open({
                                message: 'Successfully Added',
                                productClass: 'product-cart',
                                name: $product.find('.product-name').text(),
                                nameLink: $product.find('.product-name > a').attr('href'),
                                imageSrc: $product.find('.product-media img').attr('src'),
                                imageLink: $product.find('.product-name > a').attr('href'),
                                price: $product.find('.product-price .new-price, .product-price .price').html(),
                                count: $product.find('.quantity').length > 0 ? $product.find('.quantity').val() : 1,
                                actionTemplate: '<div class="action-group d-flex"><a href="cart.html" class="btn btn-sm btn-outline btn-primary btn-rounded">View Cart</a><a href="checkout.html" class="btn btn-sm btn-primary btn-rounded">Check Out</a></div>'
                            });
                    }
                })

                // Add to cart in hotspot
                .on('click', '.hotspot .btn-cart', function (e) {
                    e.preventDefault();
                    var $tooltip = $(this).closest('.tooltip');
                    Ekstraskilt.Minipopup.open({
                        message: 'Successfully Added To Cart',
                        productClass: 'product-cart',
                        name: $tooltip.find('.tooltip-name').text(),
                        nameLink: $tooltip.find('.tooltip-name > a').attr('href'),
                        imageSrc: $tooltip.find('.tooltip-media img').attr('src'),
                        imageLink: $tooltip.find('.tooltip-name > a').attr('href'),
                        price: $tooltip.find('.tooltip-price .new-price, .tooltip-price .price').html(),
                        count: $tooltip.find('.quantity').length > 0 ? $tooltip.find('.quantity').val() : 1,
                        actionTemplate: '<div class="action-group d-flex"><a href="cart.html" class="btn btn-sm btn-outline btn-primary btn-rounded">View Cart</a><a href="checkout.html" class="btn btn-sm btn-primary btn-rounded">Check Out</a></div>'
                    });
                });
        },
        initProductsCompareAction: function () {
            Ekstraskilt.$body
                // Compare dropdown is offcanvas type
                .on('click', '.off-canvas .compare-toggle', function (e) {
                    e.preventDefault();
                    $('.compare-dropdown').addClass('opened');
                })
                .on('click', '.off-canvas .canvas-header .btn-close', function (e) {
                    $('.compare-dropdown').removeClass('opened');
                    e.preventDefault();
                })
                .on('click', '.off-canvas .canvas-overlay', function (e) {
                    $('.compare-dropdown').removeClass('opened');
                    e.preventDefault();
                })

                // Add to compare in products
                .on('click', '.product .btn-product-icon.btn-compare', function (e) {
                    e.preventDefault();
                    var $product = $(this).closest('.product');

                    // if not product single, then open minipopup
                    $product.hasClass('product-single') ||
                        Ekstraskilt.Minipopup.open({
                            message: 'Added To Compare List',
                            productClass: ' product-compare',
                            name: $product.find('.product-name').text(),
                            nameLink: $product.find('.product-name > a').attr('href'),
                            imageSrc: $product.find('.product-media img').attr('src'),
                            imageLink: $product.find('.product-name > a').attr('href'),
                            price: $product.find('.product-price .new-price, .product-price .price').html(),
                            count: $product.find('.quantity').length > 0 ? $product.find('.quantity').val() : 1,
                            actionTemplate: '<div class="action-group d-flex"><a href="compare.html" class="btn btn-sm btn-outline btn-primary btn-rounded">Compare</a><a href="checkout.html" class="btn btn-sm btn-primary btn-rounded">Check Out</a></div>'
                        });
                });
        },
        initProductsWishlistAction: function () {
            Ekstraskilt.$body
                // Compare dropdown is offcanvas type
                .on('click', '.off-canvas .wishlist-toggle', function (e) {
                    e.preventDefault();
                    $('.wishlist-dropdown').addClass('opened');
                })
                .on('click', '.off-canvas .canvas-header .btn-close', function (e) {
                    $('.wishlist-dropdown').removeClass('opened');
                    e.preventDefault();
                })
                .on('click', '.off-canvas .canvas-overlay', function (e) {
                    $('.wishlist-dropdown').removeClass('opened');
                    e.preventDefault();
                })
        },
        initProductsLoginAction: function () {
            Ekstraskilt.$body
                // Compare dropdown is offcanvas type
                .on('click', '.login-toggle, .register-toggle', function (e) {
                    e.preventDefault();
                    $('.login-dropdown').addClass('opened');
                })
                .on('click', '.off-canvas .canvas-header .btn-close', function (e) {
                    $('.login-dropdown').removeClass('opened');
                    e.preventDefault();
                })
                .on('click', '.off-canvas .canvas-overlay', function (e) {
                    $('.login-dropdown').removeClass('opened');
                    e.preventDefault();
                })
        },
        initProductsLoad: function () {
            $('.btn-load').on('click', function (e) {
                var $this = $(this),
                    $wrapper = $($this.data('load-to')),
                    loadText = $this.html();

                $this.text('Loading ...');
                $this.addClass('btn-loading');
                $('.d-loading').css('display', 'block');
                e.preventDefault();

                $.ajax({
                    url: $this.attr('href'),
                    success: function (result) {
                        var $newItems = $(result);

                        setTimeout(function () {
                            if ($.fn.isotope) {
                                $wrapper.isotope('insert', $newItems);
                            } else {
                                $wrapper.append($newItems);
                            }
                            $this.html(loadText);

                            var loadCount = parseInt($this.data('load-count') ? $this.data('load-count') : 0);
                            $this.data('load-count', ++loadCount);

                            //remove loading class
                            $this.removeClass('btn-loading');
                            $('.d-loading').css('display', 'none');

                            // do not load more than 2 times
                            loadCount >= 2 && $this.hide();
                        }, 350);
                    },
                    failure: function () {
                        $this.text("Sorry something went wrong.");
                    }
                });
            });
        },
        initProductsScrollLoad: function ($obj) {
            var $wrapper = Ekstraskilt.$($obj)
                , top;
            var url = $($obj).data('url');
            if (!url) {
                url = 'ajax/ajax-products.html';
            }
            var loadProducts = function (e) {
                if (window.pageYOffset > top + $wrapper.outerHeight() - window.innerHeight - 150 && 'loading' != $wrapper.data('load-state')) {
                    $.ajax({
                        url: url,
                        success: function (result) {
                            var $newItems = $(result);
                            $wrapper.data('load-state', 'loading');
                            if (!$wrapper.next().hasClass('load-more-overlay')) {
                                $('<div class="mt-4 mb-4 load-more-overlay loading"></div>').insertAfter($wrapper);
                            } else {
                                $wrapper.next().addClass('loading');
                            }
                            setTimeout(function () {
                                $wrapper.next().removeClass('loading');
                                $wrapper.append($newItems);
                                setTimeout(function () {
                                    $wrapper.find('.product-wrap.fade:not(.in)').addClass('in');
                                }, 200);
                                $wrapper.data('load-state', 'loaded');
                            }, 500);
                            var loadCount = parseInt($wrapper.data('load-count') ? $wrapper.data('load-count') : 0);
                            $wrapper.data('load-count', ++loadCount);
                            loadCount > 2 && window.removeEventListener('scroll', loadProducts, { passive: true });
                        },
                        failure: function () {
                            $this.text("Sorry something went wrong.");
                        }
                    });
                }
            }
            if ($wrapper.length > 0) {
                top = $wrapper.offset().top;
                window.addEventListener('scroll', loadProducts, { passive: true });
            }
        },
        initWishlistButton: function (selector) {
            Ekstraskilt.$body.on('click', selector, function (e) {
                var $this = $(this);
                $this.toggleClass('added').addClass('load-more-overlay loading');

                setTimeout(function () {
                    $this.removeClass('load-more-overlay loading').find('i').toggleClass('d-icon-heart')
                        .toggleClass('d-icon-heart-full');

                    if ($this.hasClass('added')) {
                        $this.attr('title', 'Remove from wishlist');
                    } else {
                        $this.attr('title', 'Add to wishlist');
                    }
                }, 500);

                e.preventDefault();
            })
        }
    }

    /**
     * Ekstraskilt Initializer
     */

    // Initialize Method while document is being loaded.
    Ekstraskilt.prepare = function () {
        if (Ekstraskilt.$body.hasClass('with-flex-container') && window.innerWidth >= 1200) {
            Ekstraskilt.$body.addClass('sidebar-active');
        }
    };

    // Initialize Method while document is interactive
    Ekstraskilt.initLayout = function () {
        Ekstraskilt.isotopes('.grid:not(.grid-float)');
        Ekstraskilt.stickySidebar('.sticky-sidebar');
    }

    // Initialize Method after document has been loaded
    Ekstraskilt.init = function () {
        Ekstraskilt.appearAnimate('.appear-animate');                               // Runs appear animations
        Ekstraskilt.Minipopup.init();                                                 // Initialize minipopup
        Ekstraskilt.Shop.init();                                                      // Initialize shop
        Ekstraskilt.initProductSinglePage();                                          // Initialize single product page
        Ekstraskilt.slider('.owl-carousel');                                        // Initialize slider
        Ekstraskilt.headerToggleSearch('.hs-toggle');                               // Initialize header toggle search
        Ekstraskilt.closeTopNotice('.btn-notice-close');                            // Initialize header toggle search
        Ekstraskilt.stickyContent('.product-sticky-content, .sticky-header', { top: false });       // Initialize sticky content
        Ekstraskilt.stickyContent('.sticky-footer', Ekstraskilt.defaults.stickyFooter);   // Initialize sticky footer
        Ekstraskilt.stickyContent('.sticky-toolbox', Ekstraskilt.defaults.stickyToolbox); // Initialize sticky toolbox
        Ekstraskilt.sidebar('sidebar');                                             // Initialize left sidebar
        Ekstraskilt.sidebar('right-sidebar');                                       // Initialize right sidebar
        Ekstraskilt.sidebar('top-sidebar');                                         // Initialize top sidebar
        Ekstraskilt.quantityInput('.quantity');                                     // Initialize quantity input
        Ekstraskilt.playableVideo('.inner-video');                                   // Initialize playable video
        Ekstraskilt.initAccordion('.card-header > a');                              // Initialize accordion
        Ekstraskilt.initTab('.nav-tabs');                                           // Initialize tab
        Ekstraskilt.initAlert('.alert');                                            // Initialize alert
        Ekstraskilt.parallax('.parallax');                                          // Initialize parallax
        Ekstraskilt.countTo('.count-to');                                           // Initialize countTo
        Ekstraskilt.countdown('.product-countdown, .countdown');                    // Initialize countdown
        Ekstraskilt.Menu.init();                                                      // Initialize menus
        Ekstraskilt.StickyLink.init();                                                // Initialize StickyLink
        Ekstraskilt.initZoom();                                                       // Initialize zoom
        Ekstraskilt.initNavFilter('.nav-filters .nav-filter');                      // Initialize navigation filters for blog, products
        Ekstraskilt.initPopups();                                                     // Initialize popups: login, register, play video, newsletter popup
        Ekstraskilt.initScrollTopButton();                                            // Initialize scroll top button.
        Ekstraskilt.floatSVG('.float-svg');                                         // Floating SVG
        Ekstraskilt.initShowVendorSearch('.toolbox .form-toggle-btn');              // Initialize show vendor search form
        Ekstraskilt.initFloatingElements('.floating');                              // Initialize floating widgets
        Ekstraskilt.initAdvancedMotions('.skrollr');                                // Initialize scrolling widgets
        Ekstraskilt.degree360('.product-gallery-degree');                           // Initialize 360 degree
        Ekstraskilt.scrollSet('.scroll-menu a');                                    // Initialize Scroll Menu
        Ekstraskilt.CommentWithMedia.init();                                          // Initialize Comment with Media

        Ekstraskilt.status = 'complete';
    }

    /**
     * Setup Ekstraskilt
     */

    // Prepare Ekstraskilt Theme
    Ekstraskilt.prepare();

    // Initialize Ekstraskilt Theme
    window.onload = function () {
        Ekstraskilt.status = 'loaded';
        Ekstraskilt.$body.addClass('loaded');
        Ekstraskilt.$window.trigger('Ekstraskilt_load');

        Ekstraskilt.call(Ekstraskilt.initLayout);
        Ekstraskilt.call(Ekstraskilt.init);
        Ekstraskilt.$window.trigger('Ekstraskilt_complete');
        Ekstraskilt.refreshSidebar();
    }
})();


$(function () {
    $("#how_keyword").on("click", function (a) {
        $("#how_to_datafetch").addClass("on");
        a.stopPropagation()
    });
    $(document).on("click", function (a) {
        if ($(a.target).is("#how_to_datafetch") === false) {
            $("#how_to_datafetch").removeClass("on");
        }
    });
});

// menu add
jQuery(document).ready(function () {
    var childMenu = jQuery('.menu-item-has-children');
    childMenu.append("<span class='fa fa-angle-down'></span>");
});

$(document).ready(function () {
    $('.popup-btn').on('click', function () {
        $('.video-popup').fadeIn('slow');
        return false;
    });

    $('.popup-bg').on('click', function () {
        $('.video-popup').slideUp('slow');
        return false;
    });

    $('.close-btn').on('click', function () {
        $('.video-popup').fadeOut('slow');
        return false;
    });
});