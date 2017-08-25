  
        <?php
            session_start();
        ?>

<!DOCTYPE html> 
<html data-ng-app ="myApp" > 
    <head> 
        <title>Workout Tracker</title> 
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
        
        <!-- Bootstrap --> 
        <link href="frameworks/css/bootstrap.min.css" rel="stylesheet" />  
        
        <!-- JQuery --> 
        <script src="frameworks/js/jquery.js"></script>
        
        <link href="https://www.fontify.me/wf/bcc2940fdec41ea604f09b09c4f650df" rel="stylesheet" type="text/css">


        <link href="frameworks/css/responsive-calendar.css" rel="stylesheet" media="screen">
  
 
        <!-- CSS --> 
        <link href="frameworks/css/index-css.css" rel="stylesheet"/>
        
        <!-- Animation: CSS ANIMATIONS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.1/animate.min.css">
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        
        <!--- High Charts -->
        <script src="https://code.highcharts.com/highcharts.js"></script>
        <script src="https://code.highcharts.com/modules/exporting.js"></script>

            
   
    </head> 
    
 
    <body onLoad="script">
        
    
        <div data-ng-view></div>
      
        
        
        <?php 
            if(isset($_GET['table']))
                $_SESSION['table'] = $_GET['table'];
            if(isset($_GET['field']))
                $_SESSION['field'] = $_GET['field'];
            if(isset($_GET['key']))
                $_SESSION['key'] = $_GET['key'];
            if(isset($_GET['key2']))
                $_SESSION['key2'] = $_GET['key2'];
            if(isset($_GET['key3']))
                $_SESSION['key3'] = $_GET['key3'];
             if(isset($_GET['key4']))
                $_SESSION['key4'] = $_GET['key4'];
        
            

        ?>
        
        
        
        
       
     

        
       

        <!-- jQuery – required for Bootstrap's JavaScript plugins) --> 
        <script src="frameworks/js/jquery.min.js"></script> 
        <!-- All Bootstrap  plug-ins  file --> 
        <script src="frameworks/js/bootstrap.min.js"></script> 
        <!-- Extra Bootstrap Social  plug-ins  file --> 
        <script src="frameworks/boostrap-social/bootstrap-social.css"></script> 
        <!-- Basic AngularJS --> 
        <script src="frameworks/js/angular.min.js"></script> 
        <!-- AngularJS - Routing --> 
        <script src="frameworks/js/angular-route.min.js"></script>
        <!-- App Script --> 
        <script src="frameworks/js/index.js"></script>
        
        
        <script src="frameworks/js/jquery-calender.js"></script>
        <script src="frameworks/js/responsive-calendar.js"></script>

        <script src="frameworks/register.js"></script>
        <script src="frameworks/js/jquery.js"></script>
        <script src="moment.js"></script>

        
        
    </body> 
</html>
