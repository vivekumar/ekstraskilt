@extends('layouts.admin_layout')
@section('content')
@section('title', 'Add Banner')


<!-- ========== App Menu ========== -->

<!-- Left Sidebar End -->
<!-- Vertical Overlay-->
<div class="vertical-overlay"></div>

<!-- ============================================================== -->
<!-- Start right Content here -->
<!-- ============================================================== -->
<div class="main-content">

    <div class="page-content">
        <div class="container-fluid">

            <!-- start page title -->

            <!-- end page title -->

            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header align-items-center d-flex">
                            <h4 class="card-title mb-0 flex-grow-1">@if(isset($banner)) Edit @else Add @endif Banner</h4>

                        </div><!-- end card header -->
                        <div class="card-body">
                            <div class="live-preview">

                                @if (session('msg'))
                                <div class="alert alert-{{ session('msg_type') }}" role="alert">
                                    {{ session('msg') }}
                                </div>
                                @endif


                                <form method="post" action="{{url('admin/banner/save')}}" enctype="multipart/form-data">
                                    @csrf
                                    <div class="row gy-4">


                                    <div class="col-xxl-4 col-md-4">
                                            <div>
                                                <label for="name" class="form-label">Type</label>
                                                <select name="type" class="form-control">
                                                    <option value="" @if(isset($banner) && $banner->type == '') {{"selected"}} @endif>--Select--</option>
                                                    <option value="home" @if(isset($banner) && $banner->type == 'home') {{"selected"}} @endif >Home</option>
                                                    <option value="affiliate" @if(isset($banner) && $banner->type == 'affiliate') {{"selected"}} @endif> Affiliates</option>
                                                    <option value="about" @if(isset($banner) && $banner->type == 'about') {{"selected"}} @endif> About Us</option>
                                                    <option value="distributors" @if(isset($banner) && $banner->type == 'distributors') {{"selected"}} @endif> Distributors</option>
                                                    <option value="chat" @if(isset($banner) && $banner->type == 'chat') {{"selected"}} @endif>Chat</option>
                                                    <option value="help" @if(isset($banner) && $banner->type == 'help') {{"selected"}} @endif>Help File</option>
                                                    <option value="uploads" @if(isset($banner) && $banner->type == 'uploads') {{"selected"}} @endif>   Uploads </option>
                                                    <option value="services" @if(isset($banner) && $banner->type == 'services') {{"selected"}} @endif>Services</option>
                                                    <option value="online_store" @if(isset($banner) && $banner->type == 'online_store') {{"selected"}} @endif>Online Store</option>
                                                    <option value="download" @if(isset($banner) && $banner->type == 'download') {{"selected"}} @endif>Download</option>
                                                    <option value="blog" @if(isset($banner) && $banner->type == 'blog') {{"selected"}} @endif>Blog</option>
                                                    <option value="login" @if(isset($banner) && $banner->type == 'login') {{"selected"}} @endif>Login</option>
                                                    <option value="register" @if(isset($banner) && $banner->type == 'register') {{"selected"}} @endif>Register</option>
                                                    <option value="cart" @if(isset($banner) && $banner->type == 'cart') {{"selected"}} @endif>Cart</option>
                                                    <option value="checkout" @if(isset($banner) && $banner->type == 'checkout') {{"selected"}} @endif>Checkout</option>
                                                    <option value="contact" @if(isset($banner) && $banner->type == 'contact') {{"selected"}} @endif>Contact Us</option>
                                                </select>

                                                @error('type')
                                                <span class="text-danger">{{$message}}</span>
                                                @enderror

                                            </div>
                                        </div>


                                        <div class="col-xxl-4 col-md-4">
                                            <div>
                                                <label for="title" class="form-label">Title1</label>
                                                <input type="text" class="form-control" name="title" value="{{ isset($banner)?$banner->title:old('title') }}">
                                            </div>
                                            @error('title')
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>

                                        <div class="col-xxl-4 col-md-4">
                                            <div>
                                                <label for="title2" class="form-label">Title2</label>
                                                <input type="text" class="form-control" name="title2" value="{{ isset($banner)?$banner->title2:old('title2') }}">
                                            </div>
                                            @error('title2')
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>


                                        <div class="col-xxl-4 col-md-4">
                                            <div>
                                                <label for="title3" class="form-label">Title3</label>
                                                <input type="text" class="form-control" name="title3" value="{{ isset($banner)?$banner->title3:old('title3') }}">
                                            </div>
                                            @error('title3')
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>

                                        <div class="col-xxl-4 col-md-4">
                                            <div>
                                                <label for="desc1" class="form-label">Description1</label>
                                                <input type="text" class="form-control" name="desc1" value="{{ isset($banner)?$banner->desc1:old('desc1') }}">
                                            </div>
                                            @error('desc1')
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>


                                        <div class="col-xxl-4 col-md-4">
                                            <div>
                                                <label for="desc2" class="form-label">Description2</label>
                                                <input type="text" class="form-control" name="desc2" value="{{ isset($banner)?$banner->desc2:old('desc2') }}">
                                            </div>
                                            @error('desc2')
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>

                                        <div class="col-xxl-4 col-md-4">
                                            <div>
                                                <label for="image" class="form-label">Image</label>
                                                <input type="file" class="form-control" name="image">
                                            </div>
                                            @error('image')
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>

                                        <div class="col-xxl-4 col-md-4">
                                            <div>
                                                <label for="name" class="form-label">Status</label>
                                                <select name="status" class="form-control">
                                                    <option value="" @if(isset($banner) && $banner->status == '') {{"selected"}} @endif>--Select--</option>
                                                    <option value="1" @if(isset($banner) && $banner->status == 1) {{"selected"}} @endif selected="">Active</option>
                                                    <option value="0" @if(isset($banner) && $banner->status == 0) {{"selected"}} @endif>Inactive</option>
                                                </select>

                                                @error('status')
                                                <span class="text-danger">{{$message}}</span>
                                                @enderror

                                            </div>
                                        </div>

                                        @if(isset($banner))
                                        <div class="col-xxl-4 col-md-4">
                                            <div>
                                                <label for="image" class="form-label">Old Image</label>
                                                <img src="{{URL::asset($banner->image)}}" style="height: 120px; width: 120px;">
                                            </div>

                                        </div>
                                        @endif


                                        <!--end col-->

                                        <!--end col-->
                                    </div>

                                    <br><br>
                                    <div class="row gy-4">

                                        <div class="col-xxl-3 col-md-6">
                                            <div>
                                                <input type="hidden" name="old_image" value="{{ isset($banner)?$banner->image:old('old_image') }}">
                                                <input type="hidden" name="banner_id" value="{{ isset($banner)?$banner->id:old('banner_id') }}">
                                                <input type="submit" class="btn btn-success" value="Submit">
                                            </div>
                                        </div>
                                    </div>
                                    <!--end row-->
                                </form>



                            </div>

                        </div>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->




        </div> <!-- container-fluid -->
    </div><!-- End Page-content -->

    @include('includes.admin.footer')
</div>
<!-- end main content-->

</div>
<!-- END layout-wrapper -->



@stop