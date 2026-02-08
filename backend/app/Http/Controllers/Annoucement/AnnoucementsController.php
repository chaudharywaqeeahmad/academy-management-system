<?php

namespace App\Http\Controllers\Annoucement;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Annoucement\Annoucements;
use Illuminate\Support\Facades\Session;

class AnnoucementsController extends Controller
{

    public function annoucements()
    {
        $data['page_title'] = "View Annoucements";
        $data['results'] = Annoucements::get();
        return view('annoucement.index',compact('data'));
    }

    public function annoucement($id = -1)
    {
        $data['page_title'] = "Add Annoucements";
        if ($id != -1) {
            $data['page_title'] = "Update Annoucements";
            $data['results'] = Annoucements::where('id', $id)->first();
        }
        return view('annoucement.save', compact('data'));
    }

    public function saveannoucements(Request $request)
    {
        $id = $request->id;
        $data = $request->all();
        $action = "Added";
        if ($id) {
            $action = "Updated";
            $modal = Annoucements::find($id);
            $affected_rows = $modal->update($data);
        } else {
            $affected_rows =  Annoucements::create($data);
        }
        $message=   set_message($affected_rows,'Annoucements',$action);
        Session::put('message', $message);
        return Redirect('/admin/annoucements');                                                                                                                                                                                                                                                 
    }
    public function deleteannoucements($id)
    {
        $affected_rows = Annoucements::find($id)->delete();
        $message=   set_message($affected_rows,'','Deleted');
        Session::put('message', $message);
        return redirect()->back();
    }
}

?>