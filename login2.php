<!doctype html>
<html lang="en">

<head>
  <title>Go Test</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500" rel="stylesheet">

  <link rel="stylesheet" href="css/bootstrap.css">
  <link rel="stylesheet" href="css/animate.css">
  <link rel="stylesheet" href="css/owl.carousel.min.css">

  <link rel="stylesheet" href="fonts/ionicons/css/ionicons.min.css">
  <link rel="stylesheet" href="fonts/fontawesome/css/font-awesome.min.css">
  <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css">
  <link rel="stylesheet" href="css/magnific-popup.css">

     <!-- Theme Style -->
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    
    <header role="banner">
     
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a style="font-size: 30px" class="navbar-brand absolute" href="login2.php">Go Test</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="collapse navbar-collapse navbar-light" id="navbarsExample05">
          
             
            <ul class="navbar-nav absolute-right">
              <li>
                <a style="font-size: 25px" href="login2.php">Login</a> / <a style="font-size: 25px" href="register.html">Register</a>
              </li>
            </ul>
  
          </div>
        </div>
      </nav>
    </header>
    <!-- END header -->

    <section class="site-hero site-sm-hero overlay" data-stellar-background-ratio="0.5" style="background-image: url(images/login.jpg);">
      <div class="container">
        <div class="row align-items-center justify-content-center site-hero-sm-inner">
          <div class="col-md-7 text-center">
  
            <div class="mb-5 element-animate">
              <h1 class="mb-2">Log in</h1>
              <p class="bcrumb"><a href="login2.php">Home</a> <span class="sep ion-android-arrow-dropright px-2"></span>  <span class="current">Log in</span></p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    <!-- END section -->

    <?php
   ob_start();
   session_start();
?>

<?
   // error_reporting(E_ALL);
   // ini_set("display_errors", 1);
?>

<html lang = "en">
   
      
      <style>
         body {
            padding-top: 40px;
            padding-bottom: 40px;
            background-color: #ADABAB;
         }
         
         .form-signin {
            max-width: 330px;
            padding: 15px;
            margin: 0 auto;
            color: #017572;
         }
         
         .form-signin .form-signin-heading,
         .form-signin .checkbox {
            margin-bottom: 10px;
         }
         
         .form-signin .checkbox {
            font-weight: normal;
         }
         
         .form-signin .form-control {
            position: relative;
            height: auto;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            padding: 10px;
            font-size: 16px;
         }
         
         .form-signin .form-control:focus {
            z-index: 2;
         }
         
         .form-signin input[type="email"] {
            margin-bottom: -1px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            border-color:#017572;
         }
         
         .form-signin input[type="password"] {
            margin-bottom: 10px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-color:#017572;
         }
         
         h2{
            text-align: center;
            color: #017572;
         }
      </style>
      
   </head>
   
   <body>
      
      <h2>Enter Username and Password</h2> 
      <div class = "container form-signin">
         
         <?php
            $msg = '';
            
            if (isset($_POST['login']) && !empty($_POST['username']) 
               && !empty($_POST['password'])) {
            
               if ($_POST['username'] == 'guest' && 
                  $_POST['password'] == '123') {
                  $_SESSION['valid'] = true;
                  $_SESSION['timeout'] = time();
                  $_SESSION['username'] = 'guest';
                  
                  header('location: assessments.html');
               }else {
                  $msg = 'Wrong username or password';
               }
            }
         ?>
      </div> <!-- /container -->
      
      <div class = "container">
      
         <form class = "form-signin" role = "form" 
            action = "<?php echo htmlspecialchars($_SERVER['PHP_SELF']); 
            ?>" method = "post">
            <h4 class = "form-signin-heading"><?php echo $msg; ?></h4>
            <input type = "text" class = "form-control" 
               name = "username" placeholder = "ENTER LOGIN USERNAME" 
               required autofocus></br>
            <input type = "password" class = "form-control"
               name = "password" placeholder = "ENTER LOGIN PASSWORD" 
               required autofocus required>
            <button class = "btn btn-lg btn-primary btn-block" type = "submit" 
               name = "login">Login</button>
         </form>
        
         
      </div> 
      
   </body>
</html>
    
   <body style="background-color:white;">
         <?php
            $msg = '';
            
            if (isset($_POST['login']) && !empty($_POST['username']) 
               && !empty($_POST['password'])) {
            
               if ($_POST['username'] == 'guest' && 
                  $_POST['password'] == '123') {
                  $_SESSION['valid'] = true;
                  $_SESSION['timeout'] = time();
                  $_SESSION['username'] = 'guest';
                  
                  header('location: assessments.html');
               }else {
                  $msg = 'Wrong username or password';
               }
            }
         ?>
      </div> <!-- /container -->
          

  
  <footer class="site-footer">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <h3>Go Test</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <h3 class="heading">Quick Link</h3>
          <div class="row">
            <div class="col-md-6">
              <ul class="list-unstyled">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Pages</a></li>
              </ul>
            </div>
  
          </div>
        </div>
  
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <h3 class="heading">Contact Information</h3>
          <div class="block-23">
            <ul>
              <li><span class="icon ion-android-pin"></span><span class="text">addressA</span></li>
              <li><a href="#"><span class="icon ion-ios-telephone"></span><span class="text">phone number</span></a>
              </li>
              <li><a href="#"><span class="icon ion-android-mail"></span><span
                    class="text">testststest@gmail.com</span></a></li>
              <li><span class="icon ion-android-time"></span><span class="text">Monday &mdash; Friday 8:00am -
                  5:30pm</span></li>
            </ul>
          </div>
        </div>
      </div>
  
  
        
          </p>
        </div>
      </div>
    </div>
  </footer>
  <!-- END footer -->
  
  <!-- loader -->
  <div id="loader" class="show fullscreen"><svg class="circular" width="48px" height="48px">
      <circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
      <circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#f4b214" />
      </svg></div>
  
  <script src="js/jquery-3.2.1.min.js"></script>
  <script src="js/jquery-migrate-3.0.0.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/owl.carousel.min.js"></script>
  <script src="js/jquery.waypoints.min.js"></script>
  <script src="js/jquery.stellar.min.js"></script>
  <script src="js/jquery.animateNumber.min.js"></script>
  
  <script src="js/jquery.magnific-popup.min.js"></script>
  
  <script src="js/main.js"></script>
  </body>
  
  </html>