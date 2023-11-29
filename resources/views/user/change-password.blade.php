@extends('layouts.front_layout')
@section('content')
@section('title', 'Login')


<div id="page" class="full-page">
    @include('includes/front/header')
    <main id="content" class="site-main">

        <!--page title start-->
        <section class="page-title parallaxie" data-bg-img="{{URL::asset('front/images/bg/03.jpg')}}" data-overlay="6">
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col">
                        <h1>Change Password</h1>
                        <nav aria-label="breadcrumb" class="page-breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="{{url('/')}}"><i class="las la-home me-1"></i>Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Change Password</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </section>
        <!--page title end-->

        <!-- Middle content -->
        <section class="section">
            <div class="login-signup">
                <div class="container">
                    <div class="row profile">
                        <div class="col-md-3">
                            @include('user.sidebar')
                        </div>
                        <div class="col-md-9">

                            <main>
                                <div class="container pt-4">
                                    @if (session('msg'))
                                    <div class="alert alert-success" role="alert">
                                        {{ session('msg') }}
                                    </div>
                                    @endif
                                    <form method="post" action="{{url('user/update-user-password')}}">
                                        @csrf
                                        <div class="row jumbotron box8">

                                            <div class="col-sm-12 form-group">
                                                <label for="pass">Current Password</label>
                                                <input type="Password" name="current_password" class="form-control" id="pass" placeholder="Enter your password.">
                                                @error('current_password')
                                                <span class="text-danger">{{$message}}</span>
                                                @enderror
                                            </div>

                                            <div class="col-sm-12 form-group">
                                                <label for="pass">New Password</label>
                                                <input type="Password" name="password" class="form-control" id="pass" placeholder="Enter your password.">
                                                @error('password')
                                                <span class="text-danger">{{$message}}</span>
                                                @enderror
                                            </div>

                                            <div class="col-sm-12 form-group">
                                                <label for="pass2">Confirm Password</label>
                                                <input type="Password" name="password_confirmation" class="form-control" id="pass2" placeholder="Re-enter your password.">
                                                @error('password_confirmation')
                                                <span class="text-danger">{{$message}}</span>
                                                @enderror
                                            </div>


                                            <div class="col-sm-12 form-group mb-0">
                                                <button type="submit" class="btn btn-theme">Submit</button>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </main>


                        </div>
                    </div>
                </div>

            </div>
        </section>
        <!-- Middle content -->



    </main>


    @stop