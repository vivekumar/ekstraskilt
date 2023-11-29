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
                        <h1>My Profile</h1>
                        <nav aria-label="breadcrumb" class="page-breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="{{url('/')}}"><i class="las la-home me-1"></i>Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">My Profile</li>
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
                                    <form method="post" action="{{url('user/update-profile')}}">
                                        @csrf
                                        <div class="row">
                                            <div class="col-md-6 mb-3">
                                                <label for="firstName">First name</label>
                                                <input type="text" class="form-control" name="first_name" value="{{Auth::user()->first_name}}">
                                                @error('first_name')
                                                <span class="text-danger">{{$message}}</span>
                                                @enderror
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label for="lastName">Last name</label>
                                                <input type="text" class="form-control" name="last_name" value="{{Auth::user()->last_name}}">
                                                @error('last_name')
                                                <span class="text-danger">{{$message}}</span>
                                                @enderror
                                            </div>
                                        </div>



                                        <div class="mb-3">
                                            <label for="email">Email </label>
                                            <input type="email" class="form-control" name="email" value="{{Auth::user()->email}}">
                                            @error('email')
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>

                                        <div class="mb-3">
                                            <label for="phone">Phone No </label>
                                            <input type="phone" class="form-control" name="phone" value="{{Auth::user()->phone}}">
                                            @error('phone')
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>

                                        <div class="mb-3">
                                            <label for="address">Address</label>
                                            <input type="text" class="form-control" name="address" value="{{$details->address ?? ''}}">
                                            @error('address')
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>


                                        <div class="row">
                                            <div class="col-md-5 mb-3">
                                                <label for="country">Country</label>
                                                <select class="form-control" name="country">
                                                    <option value="">Choose...</option>
                                                    @foreach($countries as $country)
                                                    <option value="{{$country->name}}" @isset($details->country) {{ $country->name == $details->country ? 'selected':'' }} @endisset>{{$country->name}}</option>
                                                    @endforeach
                                                </select>

                                                @error('country')
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror

                                            </div>

                                            <div class="col-md-3 mb-3">
                                                <label for="state">State</label>
                                                <input type="text" class="form-control" name="state" value="{{$details->state ?? ''}}">
                                                @error('state')
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                            </div>

                                            <div class="col-md-3 mb-3">
                                                <label for="state">City</label>
                                                <input type="text" class="form-control" name="city" value="{{$details->city ?? ''}}">
                                                @error('city')
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                            </div>

                                            <div class="col-md-3 mb-3">
                                                <label for="zip">Zip</label>
                                                <input type="text" class="form-control" name="zipcode" value="{{$details->zipcode ?? ''}}">
                                                @error('zipcode')
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                            </div>

                                        </div>

                                        <hr class="mb-4">
                                        <button class="btn btn-theme" type="submit">Update</button>
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