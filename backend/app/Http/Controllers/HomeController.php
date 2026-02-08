<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Student\Students;
use App\Models\Teacher\Teachers;
use App\Models\Annoucement\Annoucements;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
       $this->middleware(['auth','verified']);
    }
    public function frontend()
    {
        return view('frontend.layout.header');
    }
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {

        $data['users'] =User::get();
        $data['students'] = Students::get();
        $data['teacher'] = Teachers::get();
        $data['annoucement'] = Annoucements::get();
        return view('dashboard.index',compact('data'));
    }
}
