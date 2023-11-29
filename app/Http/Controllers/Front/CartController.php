<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserDetail;
use App\Models\Booking;
use App\Models\Cart;
use App\Models\Payment;
use App\Interfaces\HotelRepositoryInterface;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Stripe\StripeClient;
use Stripe\Exception\CardException;
use Exception;
use Artisan;
use PDF;
use File;
use Mail;
use Stripe;

class CartController extends Controller
{

    public function addToCart(Request $request)
    {
        $cart = new Cart();
        $cart->user_id = Auth::user()->id;
        $cart->product_id = $request->product_id;
        $cart->category_id = $request->category_id;
        $cart->quantity = 1;
        $cart->price = $request->price;
        $cart->is_renewal = $request->is_renewal;
        $cart->save();
        return redirect('cart')->with('msg', 'product added on cart.');
    }


    public function cart(Request $request)
    {
     $data['carts'] = Cart::where('user_id',1)->orderBy('id','desc')->get();
     $data['cartSubTotal'] = Cart::where('user_id',1)->sum('price');
     $data['cartTax'] = 0;
     $data['cartTotal'] =  $data['cartSubTotal'] + $data['cartTax'];
     return view('front.cart')->with($data);
    }

    public function deleteCart(Request $request)
    {
     $delete = Cart::where('id',$request->id)->delete();
     return redirect('cart')->with('msg', 'product deleted from cart.');
    }
 
}
