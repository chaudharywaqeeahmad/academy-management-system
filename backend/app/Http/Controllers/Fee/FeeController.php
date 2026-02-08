<?php

namespace App\Http\Controllers\Fee;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Fee\Fees;
use Illuminate\Support\Facades\Session;

class FeeController extends Controller
{

    public function fees()
    {
        $data['page_title'] = "View Fees";
        $data['results'] = Fees::get();
        return view('fee.index',compact('data'));
    }

    public function fee($id = -1)
    {
        $data['page_title'] = "Add Fee";
        if ($id != -1) {
            $data['page_title'] = "Update Fee";
            $data['results'] = Fees::where('id', $id)->first();
        }
        return view('fee.save', compact('data'));
    }

    public function savefee(Request $request)
    {
        $id = $request->id;
        $data = $request->all();
        $action = "Added";
        if ($id) {
            $action = "Updated";
            $modal = Fees::find($id);
            $affected_rows = $modal->update($data);
        } else {
            $affected_rows =  Fees::create($data);
        }
        $message=   set_message($affected_rows,'Fees',$action);
        Session::put('message', $message);
        return Redirect('/admin/fees');                                                                                                                                                                                                                                                 
    }
    public function deletefee($id)
    {
        $affected_rows = Fees::find($id)->delete();
        $message=   set_message($affected_rows,'','Deleted');
        Session::put('message', $message);
        return redirect()->back();
    }
}

?>