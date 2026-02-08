<?php

namespace App\Http\Controllers\Timetable;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Timetable\Timetables;
use Illuminate\Support\Facades\Session;

class TimeTableController extends Controller
{

    public function timetables()
    {
        $data['page_title'] = "View Timetable";
        $data['results'] = Timetables::get();
        return view('timetable.index',compact('data'));
    }

    public function timetable($id = -1)
    {
        $data['page_title'] = "Add Timetable";
        if ($id != -1) {
            $data['page_title'] = "Update Timetable";
            $data['results'] = Timetables::where('id', $id)->first();
        }
        return view('timetable.save', compact('data'));
    }

    public function savetimetable(Request $request)
    {
        $id = $request->id;
        $data = $request->all();
        $action = "Added";
        if ($id) {
            $action = "Updated";
            $modal = Timetables::find($id);
            $affected_rows = $modal->update($data);
        } else {
            $affected_rows =  Timetables::create($data);
        }
        $message=   set_message($affected_rows,'Timetables',$action);
        Session::put('message', $message);
        return Redirect('/admin/timetables');                                                                                                                                                                                                                                                 
    }
    public function deletetimetable($id)
    {
        $affected_rows = Timetables::find($id)->delete();
        $message=   set_message($affected_rows,'','Deleted');
        Session::put('message', $message);
        return redirect()->back();
    }
}

?>