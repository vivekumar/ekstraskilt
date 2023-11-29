<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Banner;
use App\Models\Enquiry;
use App\Models\Wishlist;
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

class WishlistController extends Controller
{

   public function wishlist(Request $request)
   {
    $data['wishlists'] = Wishlist::where(['user_id' => 1])->get();
    return view('front.wishlist')->with($data);
   }

}
