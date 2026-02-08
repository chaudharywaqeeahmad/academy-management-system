<?php

namespace App\Http\Controllers\Teacher;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Teacher\Teachers;
use Illuminate\Support\Facades\Session;

class TeacherController extends Controller
{

    public function teachers()
    {
        $data['page_title'] = "View Teacher";
        $data['results'] = Teachers::get();
        return view('teacher.index',compact('data'));
    }

    public function teacher($id = -1)
    {
        $data['page_title'] = "Add Teacher";
        if ($id != -1) {
            $data['page_title'] = "Update Teacher";
            $data['results'] = Teachers::where('id', $id)->first();
        }
        return view('teacher.save', compact('data'));
    }

    public function saveteacher(Request $request)
    {
        $id = $request->id;
        $data = $request->all();
        $action = "Added";
        if ($id) {
            $action = "Updated";
            $modal = Teachers::find($id);
            $affected_rows = $modal->update($data);
        } else {
            $affected_rows =  Teachers::create($data);
        }
        $message=   set_message($affected_rows,'Teacher',$action);
        Session::put('message', $message);
        return Redirect('/admin/teachers');                                                                                                                                                                                                                                                 
    }
    public function deleteteacher($id)
    {
        $affected_rows = Teachers::find($id)->delete();
        $message=   set_message($affected_rows,'','Deleted');
        Session::put('message', $message);
        return redirect()->back();
    }
}

?>