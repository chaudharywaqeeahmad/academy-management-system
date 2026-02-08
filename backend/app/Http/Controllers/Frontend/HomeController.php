<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use App\Models\User;

use App\Models\Role\Role;


use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Session;

use Carbon\Carbon;

use Goutte\Client;



class HomeController extends Controller

{

    public function home()
    {
       
        return view('welcome');
    }


    public function userlogout()

    {

        $user = Auth::user();

            Auth::logout();

            Session::flush();

            return Redirect('/');

    }

    public function view_products()
    {
        $data['page_title'] = "View Products";
        $userid =  Auth::id();
        $data['results'] = Products::where('user_id',$userid)->get();
        $data['bids'] = Bid::where('status','Approved')->get();

        return view('frontend.addproduct.index',compact('data'));
    }

    public function add_product($id = -1)
    {
        $data['page_title'] = "Add Products";
        $data['bids'] = Bid::where('status','Approved')->get();

        $data['categories'] = Categories::get();
        if ($id != -1) {
            $data['page_title'] = "Update Products";
            $data['results'] = Products::where('id', $id)->first();
        }
        return view('frontend.addproduct.save', compact('data'));
    }

    public function saveuser_product(Request $request)
    {
        $id = $request->id;
        $data = $request->all();
        $action = "Added";


        if ($id) {
            $action = "Updated";
            $modal = Products::find($id);
            $affected_rows = $modal->update($data);
            return Redirect('/view_products')->with('status','Products Updated Successfully');
        } else {
            $affected_rows =  Products::create($data);
            return Redirect('/view_products')->with('status','Products Saved Successfully');
        }
       
    }
    public function deleteproduct($id)
    {
        $affected_rows = Products::find($id)->delete();
        return redirect()->back()->with('status','Products Deleted Successfully');
    }

    public function userprofile(Request $request)
    {
        $data['page_title'] = "Profile";
        $userid =  Auth::id();
        $data['roles'] = Role::get();
        $data['results'] = User::where('id',$userid)->first();

        $data['bids'] = Bid::where('status','Approved')->get();

        return view('frontend.profile.index' ,compact('data'));
    }

     public function userprofile_buyer(Request $request)
    {
        $data['page_title'] = "Profile";
        $userid =  Auth::id();
        $data['roles'] = Role::get();
        $data['results'] = User::where('id',$userid)->first();

        $data['bids'] = Bid::where('status','Approved')->get();

        return view('frontend.profile.user_buyerprofile' ,compact('data'));
    }

    public function updateuser(Request $request)
    {
        $id = $request->id;
        $data = $request->all();
         //dd($data);
        unset($data['cpassword']);

        $action = "Added";
        if(!empty($data['password'])){
            $data['password'] = Hash::make($data['password']);
        }else{
            unset($data['password']);
        }

       

        if($request->hasfile('dp'))

        {

          $file = $request->file('dp');

          $extension = $file->getClientOriginalExtension();

          $filename =time().".".$extension;

            $file->move(public_path().'/uploads/users/dp',$filename);
          $data['dp'] ='/public/uploads/users/dp/'.$filename;
           
          $request->dp = $data['dp'];
 

        }
       
        $data['name'] = $data['first_name'] . ' ' . $data['last_name'];
        if ($id) {
            $action = "Updated";
            $affected_rows = User::find($id)->update($data);
        } else {
            $affected_rows =  User::create($data);
        }
       
        return Redirect('/userprofile')->with('status','User Updated Successfully');
    }

    public function view_bidding()
    {
        $data['page_title'] = "View Bidding";
        $userid = Auth::id();
        $data['products'] = Products::where('user_id',$userid)->get();
        foreach($data['products'] as $key=>$value)
        {
        $data['results'] = Bid::where('product_id',$value->id)->get();
        }


        $data['bids'] = Bid::where('status','Approved')->get();
        

        return view('frontend.bidding.index',compact('data'));
    }

    public function product_detail($id)
    {
        $data['page_title'] = "Product Detail";
        $data['results'] = Products::where('id',$id)->first();
        $data['bids'] = Bid::where('status','Approved')->get();

        return view('frontend.home.product_detail',compact('data'));
    }
     public function buyer_product_detail($id)
    {
        $data['page_title'] = "Product Detail";
        $data['results'] = Products::where('id',$id)->first();
        $data['bids'] = Bid::where('status','Approved')->get();

        return view('frontend.home.buyer_product_detail',compact('data'));
    }
     public function bid_detail($id)
    {
        $data['page_title'] = "Bid Detail";
        $data['results'] = Bid::where('id',$id)->where('status','Approved')->first();
        $data['bids'] = Bid::where('status','Approved')->get();

        return view('frontend.home.bids_detail',compact('data'));
    }
      public function buyer_bid_detail($id)
    {
        $data['page_title'] = "Bid Detail";
        $data['results'] = Bid::where('id',$id)->where('status','Approved')->first();
        $data['bids'] = Bid::where('status','Approved')->get();

        return view('frontend.home.buyer_bids_detail',compact('data'));
    }
    public function place_bid(Request $request)
    {
        $id = $request->id;
        $data = $request->all();
        $action = "Added";
      
        $affected_rows =  Bid::create($data);
        return Redirect()->back()->with('status','Bids Placed Successfully');
    }

    public function Approved()

    {

        $data['page_title'] = "Approved Bids";

        $data['results'] =  Bid::where('status','Approved')->get();
        $data['bids'] = Bid::where('status','Approved')->get();
        
        return view('frontend.bidding.approved_bid',compact('data'));

    }
    
    public function change_status($status,$id)
    {
        $data = array('status'=>$status);

        $update = Bid::where('id',$id)->update($data);



        if($status=='Approved')

        {

            return redirect('Approved')->with('status','Bids Approved Successfully');

        }

        
    }
    public function deletebid($id)
    {
        $affected_rows = Bid::find($id)->delete();
       return Redirect('/view_bidding')->with('status','Bids Updated Successfully');
    }

    

}

?>

