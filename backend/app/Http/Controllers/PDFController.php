<?php
  
// namespace App\Http\Controllers;
  
// use PDF;
// use Mail;
  
// class PDFController extends Controller
// {
//     /**
//      * Write code on Method
//      *
//      * @return response()
//      */
//     public function index()
//     {
//         $data["email"] = "moazambaig2001@gmail.com";
//         $data["title"] = " T.H.E NEST ACADEMY";
//         $data["body"] = "This is Demo";
 
//         $files = [
//             public_path('files/1234.pdf'),
//             public_path('files/5678.pdf'),
//         ];
  
//         Mail::send('mail.myTestMail', $data, function($message)use($data, $files) {
//             $message->to($data["email"], $data["email"])
//                     ->subject($data["title"]);
 
//             foreach ($files as $file){
//                 $message->attach($file);
//             }
            
//         });
 
//         dd('Mail sent successfully');
//     }
// }