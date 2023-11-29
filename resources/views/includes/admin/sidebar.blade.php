<div class="app-menu navbar-menu">
    <!-- LOGO -->
    <div class="navbar-brand-box">
        <!-- Dark Logo-->
        <a href="{{url('admin/dashboard')}}" class="logo logo-dark">
            <span class="logo-sm">
                <img src="{{URL::asset('admin/images/logo.jpg')}}" alt="" height="56">
            </span>
            <span class="logo-lg">
                <img src="{{URL::asset('admin/images/logo.jpg')}}" alt="" height="50">
            </span>
        </a>
        <!-- Light Logo-->
        <a href="{{url('admin/dashboard')}}" class="logo logo-light">
            <span class="logo-sm">
                <img src="{{URL::asset('admin/images/logo.jpg')}}" alt="" height="56">
            </span>
            <span class="logo-lg">
                <img src="{{URL::asset('admin/images/logo.jpg')}}" alt="" height="50">
            </span>
        </a>
        <button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
            <i class="ri-record-circle-line"></i>
        </button>
    </div>

    <div id="scrollbar">
        <div class="container-fluid">

            <div id="two-column-menu">
            </div>
            <ul class="navbar-nav" id="navbar-nav">
                <li class="menu-title"><span data-key="t-menu">Menu</span></li>
                <li class="nav-item">
                    <a class="nav-link menu-link" href="{{url('admin/dashboard')}}">
                        <i class="mdi mdi-speedometer"></i> <span data-key="t-dashboards">Dashboards</span>
                    </a>
                </li> 


                <li class="nav-item">
                    <a class="nav-link menu-link" href="#bannerData" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="bannerData">
                        <i class="mdi mdi-sticker-text-outline"></i> <span data-key="t-authentication">Manage Banner</span>
                    </a>
                    <div class="collapse menu-dropdown" id="bannerData">
                        <ul class="nav nav-sm flex-column">

                            <li class="nav-item">
                                <a href="{{url('admin/banner/create')}}" class="nav-link"> Create Banner </a>
                            </li>


                            <li class="nav-item">
                                <a href="{{url('admin/banner')}}" class="nav-link"> Banner List </a>
                            </li>
                        </ul>
                    </div>
                </li>


                <li class="nav-item">
                    <a class="nav-link menu-link" href="#categoryData" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="categoryData">
                        <i class="mdi mdi-sticker-text-outline"></i> <span data-key="t-authentication">Manage Category</span>
                    </a>
                    <div class="collapse menu-dropdown" id="categoryData">
                        <ul class="nav nav-sm flex-column">

                            <li class="nav-item">
                                <a href="{{url('admin/category/create')}}" class="nav-link"> Create Category </a>
                            </li>


                            <li class="nav-item">
                                <a href="{{url('admin/category')}}" class="nav-link"> Category List </a>
                            </li>

                        </ul>
                    </div>
                </li>


                <li class="nav-item">
                    <a class="nav-link menu-link" href="#productData" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="productData">
                        <i class="mdi mdi-sticker-text-outline"></i> <span data-key="t-authentication">Manage Product</span>
                    </a>
                    <div class="collapse menu-dropdown" id="productData">
                        <ul class="nav nav-sm flex-column">

                            <li class="nav-item">
                                <a href="{{url('admin/product/create')}}" class="nav-link"> Create Product </a>
                            </li>

                            <li class="nav-item">
                                <a href="{{url('admin/product')}}" class="nav-link"> Product List </a>
                            </li>

                        </ul>
                    </div>
                </li>



                <li class="nav-item">
                    <a class="nav-link menu-link" href="#userData" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="userData">
                        <i class="mdi mdi-account-circle-outline"></i> <span data-key="t-authentication">Manage Users</span>
                    </a>
                    <div class="collapse menu-dropdown" id="userData">
                        <ul class="nav nav-sm flex-column">

                            <li class="nav-item">
                                <a href="{{url('admin/user')}}" class="nav-link"> User List </a>
                            </li>
                        </ul>
                    </div>
                </li>




                <li class="nav-item">
                    <a class="nav-link menu-link" href="#bookingData" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="bookingData">
                        <i class="mdi mdi-sticker-text-outline"></i> <span data-key="t-authentication">Manage Orders</span>
                    </a>
                    <div class="collapse menu-dropdown" id="bookingData">
                        <ul class="nav nav-sm flex-column">


                            <li class="nav-item">
                                <a href="{{url('admin/order')}}" class="nav-link"> Orders List </a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <a class="nav-link menu-link" href="#payData" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="payData">
                        <i class="mdi mdi-sticker-text-outline"></i> <span data-key="t-authentication">Manage Payment</span>
                    </a>
                    <div class="collapse menu-dropdown" id="payData">
                        <ul class="nav nav-sm flex-column">


                            <li class="nav-item">
                                <a href="{{url('admin/payment')}}" class="nav-link"> Payment List </a>
                            </li>
                        </ul>
                    </div>
                </li>




         <li class="nav-item">
                    <a class="nav-link menu-link" href="#cmsData" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="cmsData">
                        <i class="mdi mdi-sticker-text-outline"></i> <span data-key="t-authentication">Manage CMS</span>
                    </a>
                    <div class="collapse menu-dropdown" id="cmsData">
                        <ul class="nav nav-sm flex-column">

                            <li class="nav-item">
                                <a href="{{url('admin/page')}}" class="nav-link"> Page List </a>
                            </li>

                          

                            <li class="nav-item">
                                <a href="{{url('admin/menu')}}" class="nav-link"> Menu List </a>
                            </li>

                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <a class="nav-link menu-link" href="#blogData" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="blogData">
                        <i class="mdi mdi-sticker-text-outline"></i> <span data-key="t-authentication">Manage Blog</span>
                    </a>
                    <div class="collapse menu-dropdown" id="blogData">
                        <ul class="nav nav-sm flex-column">

                            <li class="nav-item">
                                <a href="{{url('admin/blog/create')}}" class="nav-link"> Create Blog </a>
                            </li>


                            <li class="nav-item">
                                <a href="{{url('admin/blog')}}" class="nav-link"> Blog List </a>
                            </li>

                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <a class="nav-link menu-link" href="#faqData" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="faqData">
                        <i class="mdi mdi-sticker-text-outline"></i> <span data-key="t-authentication">Manage Faq</span>
                    </a>
                    <div class="collapse menu-dropdown" id="faqData">
                        <ul class="nav nav-sm flex-column">

                            <li class="nav-item">
                                <a href="{{url('admin/faq/create')}}" class="nav-link"> Create Faq </a>
                            </li>


                            <li class="nav-item">
                                <a href="{{url('admin/faq')}}" class="nav-link"> Faq List </a>
                            </li>

                        </ul>
                    </div>
                </li>



                <li class="nav-item">
                    <a class="nav-link menu-link" href="#partnerData" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="partnerData">
                        <i class="mdi mdi-sticker-text-outline"></i> <span data-key="t-authentication">Manage Partner</span>
                    </a>
                    <div class="collapse menu-dropdown" id="partnerData">
                        <ul class="nav nav-sm flex-column">

                            <li class="nav-item">
                                <a href="{{url('admin/partner/create')}}" class="nav-link"> Create Partner </a>
                            </li>


                            <li class="nav-item">
                                <a href="{{url('admin/partner')}}" class="nav-link"> Partner List </a>
                            </li>

                        </ul>
                    </div>
                </li>


                <li class="nav-item">
                    <a class="nav-link menu-link" href="{{url('admin/enquiry')}}">
                        <i class="mdi mdi-account-circle-outline"></i> <span data-key="t-widgets">Manage Enquiries</span>
                    </a>
                </li>


                <li class="nav-item">
                    <a class="nav-link menu-link" href="{{url('admin/subscriber')}}">
                        <i class="mdi mdi-account-circle-outline"></i> <span data-key="t-widgets">Manage Subscribers</span>
                    </a>
                </li>



                <li class="nav-item">
                    <a class="nav-link menu-link" href="#settingData" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="settingData">
                        <i class="mdi mdi-puzzle-outline"></i> <span data-key="t-authentication">Setting</span>
                    </a>
                    <div class="collapse menu-dropdown" id="settingData">
                        <ul class="nav nav-sm flex-column">

                            <li class="nav-item">
                                <a href="{{url('admin/setting')}}" class="nav-link"> My Profile </a>
                            </li>

                            <li class="nav-item">
                                <a href="{{url('admin/admin-logout')}}" class="nav-link"> Logout </a>
                            </li>

                        </ul>
                    </div>
                </li>





            </ul>
        </div>
        <!-- Sidebar -->
    </div>

    <div class="sidebar-background"></div>
</div>
