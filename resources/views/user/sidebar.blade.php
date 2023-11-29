<div class="profile-sidebar">
    <!-- SIDEBAR USERPIC -->

    <!-- END SIDEBAR USERPIC -->
    <!-- SIDEBAR USER TITLE -->
    {{--<div class="profile-usertitle">
        <div class="profile-usertitle-name">
            {{Auth::user()->first_name}} {{Auth::user()->last_name}}
        </div>

    </div> --}}

    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
        <div class="position-sticky">
            <div class="list-group list-group-flush mx-3 mt-4">
                <a href="{{url('user/myaccount')}}" class="list-group-item list-group-item-action py-2 ripple {{ Request::segment(2) === 'myaccount' ? 'active' : null }} " aria-current="true">
                    <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>My Account</span>
                </a>
                <a href="{{url('user/my-profile')}}" class="list-group-item list-group-item-action py-2 ripple {{ Request::segment(2) === 'my-profile' ? 'active' : null }}"><i class="fas fa-chart-bar fa-fw me-3"></i><span>My Profile</span></a>
                <a href="{{url('user/change-password')}}" class="list-group-item list-group-item-action py-2 ripple {{ Request::segment(2) === 'change-password' ? 'active' : null }}"><i class="fas fa-globe fa-fw me-3"></i><span>Change Password</span></a>
                <a href="{{url('user/logout')}}" class="list-group-item list-group-item-action py-2 ripple"><i class="fas fa-building fa-fw me-3"></i><span>Logout</span></a>
            </div>
        </div>
    </nav>
    <!-- Sidebar -->
    <!-- END MENU -->





</div>