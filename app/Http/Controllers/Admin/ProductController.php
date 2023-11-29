<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductGallery;
use App\Models\Category;
use App\Helpers\Helper;
use Exception;
use File;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $data['products'] = Product::orderBy('id', 'desc')->paginate(15);
        return view('admin.product.index')->with($data);
    }

    public function create(Request $request)
    {
        $data['categories'] = Category::orderBy('id', 'desc')->get();
        return view('admin.product.product-form')->with($data);
    }


    public function save(Request $request)
    {
        $validated = $request->validate([
            'category_id' => 'required|max:255',
            'title' => 'required|max:255',
            'price' => 'required|max:255',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            'status' => 'required'
        ]);

        if (!$request->product_id) {
            $product = new Product();
            $msg = "Product Added Successfully.";
        } else {
            $product = Product::findOrFail($request->product_id);
            $msg = "Product updated Successfully.";
        }
        try {
            $product->category_id = $request->category_id;
            $product->title = $request->title;
            $product->price = $request->price;
            $product->status = $request->status;
            $product->save();


            //     $file_path = public_path('storage/products/');
            //   (!file_exists($file_path)) && mkdir($file_path, 0777, true);
            //     if ($request->hasFile('image')) {
            //         $name = $request->image->getClientOriginalName();
            //         $filename =  date('ymdgis') .  Helper::cleanString($name);
            //         $request->image->move($file_path , $filename);
            //     }




            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $image) {
                    $file_path = public_path('storage/products/');
                    (!file_exists($file_path)) && mkdir($file_path, 0777, true);

                    $name = $image->getClientOriginalName();
                    $filename =  date('ymdgis') .  Helper::cleanString($name);
                    $image->move($file_path, $filename);

                    $gallery = new ProductGallery();
                    $gallery->product_id = $product->id;
                    $gallery->image = '/storage/products/' . $filename;
                    $gallery->save();
                }
            }



            return redirect()->back()->with(["msg" => $msg, 'msg_type' => 'success']);
        } catch (Exception $e) {
            return redirect()->back()->with(["msg" => $e->getMessage(), 'msg_type' => 'danger']);
        }
    }

    public function action($type, $id)
    {
        if (!in_array($type, ['edit', 'delete', 'status']))
            return redirect()->back()->with(['message' => 'Invalid Action']);

        $product = Product::findOrFail($id);
        $categories = Category::orderBy('id', 'desc')->get();

        if ($type == "edit") {
            return view('admin.product.product-form', compact('product', 'categories'));
        }
        if ($type == "delete") {
            $delData = Product::where('id', $id)->delete();
            return response()->json(['msg' => 'deleted']);
        }
        if ($type == "status") {
            $product->status = $product->status == 1 ? 0 : 1;
            $product->save();
            return redirect()->back()->with(['message' => 'Status changed successfully.']);
        }
        return abort(404);
    }
}
