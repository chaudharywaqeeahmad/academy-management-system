<?php

namespace App\Http\Controllers;

ini_set('memory_limit', '-1');
ini_set('max_execution_time', '0');

use App\Models\Classes;
use App\Models\Program;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

use function PHPUnit\Framework\returnValue;

class NotificationController extends Controller
{
    public function general_sms()
    {
        $allclasses = Program::where('added_from', session()->get('user_added'))->get();
        $allstudents = User::where('added_from', session()->get('user_added'))->where('enter_type', 1)->get();
        return view('Notification.general', compact("allclasses", "allstudents"));
    }
    public function reminder()
    {
        return view('Notification.reminder');
    }
    public function holidays()
    {
        return view('Notification.holidays');
    }
    public function add_general_sms(Request $request)
    {
        if ($request->type == 'single_student') {
            $student = User::where('id', $request->student)->first();
            $mailBody = "
            <p><strong>General SMS</strong></p>
            <p><strong>Hi ! " . $student->name . "</strong></p>
            <p>" . $request->message . "</p>";
            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
            mail($student->email, "General SMS", $mailBody, $headers);
            // whatsapp message senting procedure here//
            $cleanedNumber = preg_replace('/[^0-9]/', '', $student->contact_no);
            if (substr($cleanedNumber, 0, 1) !== '+') {
                $cleanedNumber = '+' . $cleanedNumber;
            }
            $recipient = $cleanedNumber;
            $message = "This is the message from the TheNestAcademy : " . $request->message;
            $apiKey = "Tj3JPQ8jTjDJ";
            $encodedRecipient = urlencode($recipient);
            $encodedMessage = urlencode($message);
            $url = "http://api.textmebot.com/send.php?recipient={$encodedRecipient}&apikey={$apiKey}&text={$encodedMessage}&json=yes";
            sleep(8);
            $newCurl = curl_init();
            curl_setopt($newCurl, CURLOPT_URL, $url);
            curl_setopt($newCurl, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($newCurl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
            curl_setopt($newCurl, CURLOPT_SSL_VERIFYPEER, false);
            $output = curl_exec($newCurl);
            if (curl_errno($newCurl)) {
                echo 'Curl error: ' . curl_error($newCurl);
            }
            curl_close($newCurl);
            // whatsapp message senting procedure here//
            $msg = 200;
            if ($msg == 200) {
                return response()->json(["message" => 200]);
            }
        } elseif ($request->type == "all_students") {
            $allstudent = User::where('enter_type', 1)->get();
            if (!$allstudent->isEmpty()) {
                foreach ($allstudent as $student) {
                    $mailBody = "
                    <p><strong>General SMS</strong></p>
                    <p><strong>Hi ! " . $student->name . "</strong></p>
                    <p>" . $request->message . "</p>";
                    $headers = "MIME-Version: 1.0" . "\r\n";
                    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
                    mail($student->email, "General SMS", $mailBody, $headers);
                    // whatsapp message senting procedure here//
                    $cleanedNumber = preg_replace('/[^0-9]/', '', $student->contact_no);
                    if (substr($cleanedNumber, 0, 1) !== '+') {
                        $cleanedNumber = '+' . $cleanedNumber;
                    }
                    $recipient = $cleanedNumber;
                    $message = "This is the message from the TheNestAcademy : " . $request->message;
                    $apiKey = "Tj3JPQ8jTjDJ";
                    $encodedRecipient = urlencode($recipient);
                    $encodedMessage = urlencode($message);
                    $url = "http://api.textmebot.com/send.php?recipient={$encodedRecipient}&apikey={$apiKey}&text={$encodedMessage}&json=yes";
                    sleep(8);
                    $newCurl = curl_init();
                    curl_setopt($newCurl, CURLOPT_URL, $url);
                    curl_setopt($newCurl, CURLOPT_RETURNTRANSFER, true);
                    curl_setopt($newCurl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
                    curl_setopt($newCurl, CURLOPT_SSL_VERIFYPEER, false);
                    $output = curl_exec($newCurl);
                    if (curl_errno($newCurl)) {
                        echo 'Curl error: ' . curl_error($newCurl);
                    }
                    curl_close($newCurl);
                    // whatsapp message senting procedure here//
                    $msg = 200;
                }
            }
            if ($msg == 200) {
                return response()->json(["message" => 200]);
            }
        } elseif ($request->type == "staff") {
            $allstaff = User::where('enter_type', 3)->get();
            if (!$allstaff->isEmpty()) {
                foreach ($allstaff as $staff) {
                    $mailBody = "
                    <p><strong>General SMS</strong></p>
                    <p><strong>Hi ! " . $staff->name . "</strong></p>
                    <p>" . $request->message . "</p>";
                    $headers = "MIME-Version: 1.0" . "\r\n";
                    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
                    mail($staff->email, "General SMS", $mailBody, $headers);
                    // whatsapp message senting procedure here//
                    $cleanedNumber = preg_replace('/[^0-9]/', '', $staff->contact_no);
                    if (substr($cleanedNumber, 0, 1) !== '+') {
                        $cleanedNumber = '+' . $cleanedNumber;
                    }
                    $recipient = $cleanedNumber;
                    $message = "This is the message from the TheNestAcademy : " . $request->message;
                    $apiKey = "Tj3JPQ8jTjDJ";
                    $encodedRecipient = urlencode($recipient);
                    $encodedMessage = urlencode($message);
                    $url = "http://api.textmebot.com/send.php?recipient={$encodedRecipient}&apikey={$apiKey}&text={$encodedMessage}&json=yes";
                    sleep(8);
                    $newCurl = curl_init();
                    curl_setopt($newCurl, CURLOPT_URL, $url);
                    curl_setopt($newCurl, CURLOPT_RETURNTRANSFER, true);
                    curl_setopt($newCurl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
                    curl_setopt($newCurl, CURLOPT_SSL_VERIFYPEER, false);
                    $output = curl_exec($newCurl);
                    if (curl_errno($newCurl)) {
                        echo 'Curl error: ' . curl_error($newCurl);
                    }
                    curl_close($newCurl);
                    // whatsapp message senting procedure here//
                    $msg = 200;
                }
                if ($msg == 200) {
                    return response()->json(["message" => 200]);
                }
            }
        } else {
            $allclasses = User::where('program', $request->class)->where('enter_type', 1)->get();
            if (!$allclasses->isEmpty()) {
                foreach ($allclasses as $classes) {
                    $mailBody = "
                    <p><strong>General SMS</strong></p>
                    <p><strong>Hi ! " . $classes->name . "</strong></p>
                    <p>" . $request->message . "</p>";
                    $headers = "MIME-Version: 1.0" . "\r\n";
                    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
                    mail($classes->email, "General SMS", $mailBody, $headers);
                    // whatsapp message senting procedure here//
                    $cleanedNumber = preg_replace('/[^0-9]/', '', $classes->contact_no);
                    if (substr($cleanedNumber, 0, 1) !== '+') {
                        $cleanedNumber = '+' . $cleanedNumber;
                    }
                    $recipient = $cleanedNumber;
                    $message = "This is the message from the TheNestAcademy : " . $request->message;
                    $apiKey = "Tj3JPQ8jTjDJ";
                    $encodedRecipient = urlencode($recipient);
                    $encodedMessage = urlencode($message);
                    $url = "http://api.textmebot.com/send.php?recipient={$encodedRecipient}&apikey={$apiKey}&text={$encodedMessage}&json=yes";
                    sleep(8);
                    $newCurl = curl_init();
                    curl_setopt($newCurl, CURLOPT_URL, $url);
                    curl_setopt($newCurl, CURLOPT_RETURNTRANSFER, true);
                    curl_setopt($newCurl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
                    curl_setopt($newCurl, CURLOPT_SSL_VERIFYPEER, false);
                    $output = curl_exec($newCurl);
                    if (curl_errno($newCurl)) {
                        echo 'Curl error: ' . curl_error($newCurl);
                    }
                    curl_close($newCurl);
                    // whatsapp message senting procedure here//
                    $msg = 200;
                }
                if ($msg == 200) {
                    return response()->json(["message" => 200]);
                }
            }
        }
    }
}
