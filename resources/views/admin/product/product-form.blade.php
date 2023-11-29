@extends('layouts.admin_layout')
@section('content')
@section('title', 'Add Product')


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
                            <h4 class="card-title mb-0 flex-grow-1">@if(isset($product)) Edit @else Add @endif Product</h4>

                        </div><!-- end card header -->
                        <div class="card-body">
                            <div class="live-preview">

                                @if (session('msg'))
                                <div class="alert alert-{{ session('msg_type') }}" role="alert">
                                    {{ session('msg') }}
                                </div>
                                @endif


                                <form method="post" action="{{url('admin/product/save')}}" enctype="multipart/form-data">
                                    @csrf
                                    <div class="row gy-4">

                                    <div class="col-xxl-4 col-md-4">
                                            <div>
                                                <label for="name" class="form-label">Category</label>
                                                <select name="category_id" class="form-control">
                                                    <option value="" @if(isset($product) && $product->category_id == '') {{"selected"}} @endif>--Select--</option>
                                                    @foreach($categories as $category)
                                                    <option value="{{$category->id}}" @if(isset($product) && $product->category_id == $category->id) {{"selected"}} @endif >{{$category->title}}</option>
                                                    @endforeach
                                                </select>

                                                @error('category_id')
                                                <span class="text-danger">{{$message}}</span>
                                                @enderror

                                            </div>
                                        </div>

                                        <div class="col-xxl-4 col-md-4">
                                            <div>
                                                <label for="title" class="form-label">Title</label>
                                                <input type="text" class="form-control" name="title" value="{{ isset($product)?$product->title:old('title') }}">
                                            </div>
                                            @error('title')
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>

                                        <div class="col-xxl-4 col-md-4">
                                            <div>
                                                <label for="price" class="form-label">Price</label>
                                                <input type="text" class="form-control" name="price" value="{{ isset($product)?$product->price:old('price') }}">
                                            </div>
                                            @error('price')
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>

                                        <div class="col-xxl-4 col-md-4">
                                            <div>
                                                <label for="gallery_image" class="form-label">Product Image</label>
                                                <input type="file" class="form-control" name="images[]" multiple>
                                            </div>
                                            @error('images')
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>



                                        <div class="col-xxl-4 col-md-4">
                                            <div>
                                                <label for="name" class="form-label">Status</label>
                                                <select name="status" class="form-control">
                                                    <option value="" @if(isset($product) && $product->status == '') {{"selected"}} @endif>--Select--</option>
                                                    <option value="1" @if(isset($product) && $product->status == 1) {{"selected"}} @endif selected="">Active</option>
                                                    <option value="0" @if(isset($product) && $product->status == 0) {{"selected"}} @endif>Inactive</option>
                                                </select>

                                                @error('status')
                                                <span class="text-danger">{{$message}}</span>
                                                @enderror

                                            </div>
                                        </div>


                                        <!--end col-->

                                        <!--end col-->
                                    </div>

                                    <br><br>
                                    <div class="row gy-4">

                                        <div class="col-xxl-3 col-md-6">
                                            <div>
                                                <input type="hidden" name="product_id" value="{{ isset($product)?$product->id:old('product_id') }}">
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