<?php
 namespace App\Http\Controllers;

 use App\Mail\Form_mail;
 use Illuminate\Http\Request;
 use Illuminate\Support\Facades\Mail;


class mailcontroller extends Controller
{
    //// function to open form
public function open_form()
 {
 return view('Mail/Form');
 }
  // function to send mail when send mail button is pressed
    public function send_mail(Request $req){
     $emails = [
     'email' => $req->get('email'),
     'cc' => $req->get('cc'),
     'bcc' => $req->get('bcc')
     ];
     $details = [
     'subject' => $req->get('subject'),
     'body' => $req->get('details'),
     'document'=>$req->get('document'),
     ];
     if($emails["cc"] == '' && $emails["bcc"] == ''){

    Mail::to($emails['email'])->send(new Form_mail($details));
    return redirect('Form')->with('status', "Email Sent
   Successfully!");
    }
    elseif($emails["bcc"] == ''){
 Mail::to($emails['email'])->cc($emails['cc'])->send(new Form_mail($details));
 return redirect('Form')->with('status', "Email Sent
 Successfully!");
 }
 else{
 Mail::to($emails['email'])->cc($emails['cc'])->bcc($emails['bcc'])
 ->send(new Form_mail($details));
 return redirect('Form')->with('status', "Email Sent
 Successfully!");}
}

//      public function store(Request $request)
//      {
//           $request->validate([
//              'file' => 'required|mimes:pdf,xlx,csv|max:2048',
//          ]);
    
//        $fileName = time().'.'.$request->file->extension();  
     
//          $request->file->move(public_path('uploads'), $fileName);
//          $request->file->storeAs('mail', $fileName);
   
//     //     // Save File path in the Database
//          // ---------------------------------
//          $fileWriter = new Filing;
//        $fileWriter->file_name = $fileName;
//         $fileWriter->file_path = Storage::putFileAs($fileName);
//         $fileWriter->file_path = 'C:\xampp\htdocs\FA22_Student_MIS\storage\app\uploads\\'.$fileName;
//          $fileWriter->file_path = storage_path('app\uploads\\'.$fileName);
//          $fileWriter->file_path = 'C:\xampp\htdocs\project\resources\views\mail\Form.blade\\'.$fileName;
//          $fileWriter->save();
//          //---------------------------------

//         /*  
//             Write Code Here for
//             Store $fileName in DATABASE from HERE 
//         */
     
//          return back()
//              ->with('success','You have successfully upload file.')
//              ->with('file', $fileName);
   
//      }
//  } 

 
// if(isset($_POST['button']) && isset($_FILES['attachment']))
// {
//     $from_email         = 'sender@abc.com'; //from mail, sender email address
//     $recipient_email = 'recipient@xyz.com'; //recipient email address
     
//     //Load POST data from HTML form
//     $sender_name = $_POST["sender_name"]; //sender name
//     $reply_to_email = $_POST["sender_email"]; //sender email, it will be used in "reply-to" header
//     $subject     = $_POST["subject"]; //subject for the email
//     $message     = $_POST["message"]; //body of the email
 
//     /*Always remember to validate the form fields like this
//     if(strlen($sender_name)<1)
//     {
//         die('Name is too short or empty!');
//     }
//     */   
//     //Get uploaded file data using $_FILES array
//     $tmp_name = $_FILES['attachment']['tmp_name']; // get the temporary file name of the file on the server
//     $name     = $_FILES['attachment']['name']; // get the name of the file
//     $size     = $_FILES['attachment']['size']; // get size of the file for size validation
//     $type     = $_FILES['attachment']['type']; // get type of the file
//     $error     = $_FILES['attachment']['error']; // get the error (if any)
 
//     //validate form field for attaching the file
//     if($error > 0)
//     {
//         die('Upload error or No files uploaded');
//     }
 
//     //read from the uploaded file & base64_encode content
//     $handle = fopen($tmp_name, "r"); // set the file handle only for reading the file
//     $content = fread($handle, $size); // reading the file
//     fclose($handle);                 // close upon completion
 
//     $encoded_content = chunk_split(base64_encode($content));
//     $boundary = md5("random"); // define boundary with a md5 hashed value
 
//     //header
//     $headers = "MIME-Version: 1.0\r\n"; // Defining the MIME version
//     $headers .= "From:".$from_email."\r\n"; // Sender Email
//     $headers .= "Reply-To: ".$reply_to_email."\r\n"; // Email address to reach back
//     $headers .= "Content-Type: multipart/mixed;"; // Defining Content-Type
//     $headers .= "boundary = $boundary\r\n"; //Defining the Boundary
         
//     //plain text
//     $body = "--$boundary\r\n";
//     $body .= "Content-Type: text/plain; charset=ISO-8859-1\r\n";
//     $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
//     $body .= chunk_split(base64_encode($message));
         
//     //attachment
//     $body .= "--$boundary\r\n";
//     $body .="Content-Type: $type; name=".$name."\r\n";
//     $body .="Content-Disposition: attachment; filename=".$name."\r\n";
//     $body .="Content-Transfer-Encoding: base64\r\n";
//     $body .="X-Attachment-Id: ".rand(1000, 99999)."\r\n\r\n";
//     $body .= $encoded_content; // Attaching the encoded file with email
     
//     $sentMailResult = mail($recipient_email, $subject, $body, $headers);
 
//     if($sentMailResult )
//     {
//     echo "<h3>File Sent Successfully.<h3>";
//     // unlink($name); // delete the file after attachment sent.
//     }
//     else
//     {
//     die("Sorry but the email could not be sent.
//                     Please go back and try again!");
//     }
// }
}