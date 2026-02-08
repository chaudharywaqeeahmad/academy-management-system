<?php

namespace App\Http\Controllers\Students;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student\Students;
use Illuminate\Support\Facades\Session;

class StudentsController extends Controller
{

    public function students()
    {
        $data['page_title'] = "View Student";
        $data['results'] = Students::get();
        return view('students.index',compact('data'));
    }

    public function student($id = -1)
    {
        $data['page_title'] = "Add Student";
        if ($id != -1) {
            $data['page_title'] = "Update Student";
            $data['results'] = Students::where('id', $id)->first();
        }
        return view('students.save', compact('data'));
    }

    public function savestudent(Request $request)
    {
        $id = $request->id;
        $data = $request->all();
        $action = "Added";
        if ($id) {
            $action = "Updated";
            $modal = Students::find($id);
            $affected_rows = $modal->update($data);
        } else {
            $affected_rows =  Students::create($data);
        }
        $message=   set_message($affected_rows,'Students',$action);
        Session::put('message', $message);
        return Redirect('/admin/students');                                                                                                                                                                                                                                                 
    }
    public function deletestudent($id)
    {
        $affected_rows = Students::find($id)->delete();
        $message=   set_message($affected_rows,'','Deleted');
        Session::put('message', $message);
        return redirect()->back();
    }
}

?>