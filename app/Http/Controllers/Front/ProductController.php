<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Banner;
use App\Models\Enquiry;
use App\Models\Blog;
use App\Models\Category;
use App\Models\Product;
use App\Models\Download;
use App\Models\Page;
use App\Models\Testimonial;
use App\Models\Partner;
use App\Models\Menu;
use App\Models\PageSection;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Session;
use Exception;
use Artisan;
use Mail;
use Captcha;


class ProductController extends Controller
{

   public function productList(Request $request)
   {
    $data['products'] = Product::where(['status' => 1])->get();
    return view('front.product-list')->with($data);
   }

   public function products(Request $request)
   {
    $data['products'] = Product::where(['status' => 1])->get();
    return view('front.products')->with($data);
   }

   public function productDetail(Request $request, $slug)
   {
    $data['product'] = Product::where(['status' => 1])->first();
    return view('front.product-detail')->with($data);
   }

   

}
