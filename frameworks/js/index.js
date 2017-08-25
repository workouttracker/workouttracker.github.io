

var app = angular.module('myApp', ["ngRoute"]);





app.controller("myCtrl", function($scope,$http,$interval,$window){

    
    
    
     /*** Initialize bool scope variables for Tracker ***/
     /*** bool: Bool tracks the number of set completed ****/
     $scope.bool = 0;
    
    
     
     /*** Initialize bool2 to bool10 ***/
     for(var i = 2 ; i<11; i++)
     {
         eval("$scope.bool"+i.toString()+"=0;");
     }
    
    
     $scope.intensity = null;
    
    
    
    
    
    
       $scope.week = ["mon","tue","wed","thu","fri","sat","sun"];
        $scope.fullweek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

    $scope.customworkout=new Array(100);
    $scope.boolcustomworkout =new Array(100);
    $scope.customworkoutcounter=0;

        
    
        var d = new Date();
        var weekday = new Array(7);
        weekday[0] =  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        $scope.currentday = weekday[d.getDay()];
        $scope.currentdate = d.getDate();
        $scope.currentmonth = d.getMonth() + 1;
        $scope.currentyear = d.getFullYear();
        
  
    $window.time = $scope.currentyear.toString() + '-' + $scope.currentmonth.toString();
    
    


    /*** Methods to handle plan altering ***/

    $scope.currentplanchange = 'nil';
    $scope.currentplanchanger = 0;
    $scope.currentplanchangeindex = 0;

    $scope.changeismade = false;

    $scope.modalexercise = function(value)
    {
        $scope.currentplanchange = 'Exercise';
        $scope.currentplanchanger = 1;
        $scope.currentplanchangeindex = value;

    }



    $scope.modalsetrep = function(value)
    {
        $scope.currentplanchange = 'Set and Rep';
        $scope.currentplanchanger = 2;
        $scope.currentplanchangeindex = value;
    }



    $scope.modalweight = function(value)
    {
        $scope.currentplanchange = 'Weight';
        $scope.currentplanchanger = 3;
        $scope.currentplanchangeindex = value;
    }



    /*** Methods to handle custom workout pages ***/

    $scope.onetohundred=new Array(50);
    
    for(var i=0; i<50; i++)
    {
        
        $scope.onetohundred[i] = i;
        
    }
    
    $scope.weightlist = new Array(50);
    $scope.weight=0;
    
    for(var i=0; i<50; i++)
    {
        var lTemp= $scope.weight + 2.5; 
         $scope.weightlist[i] = parseFloat(lTemp);
        $scope.weight+=2.5;
    }
    
    /* To filter out empty tables while displaying with `ng-repeat` */
    $scope.usertrainingdays = [false,false,false,false,false,false,false];
    $scope.usertrainingdaysplan = [false,false,false,false,false,false,false];

$scope.weekfrequencycount = new Array(7);




 var checkfrequencyofcustom = function()
 {
            $scope.weekfrequencycount = [0,0,0,0,0,0,0];

            for(var x =0; x<$scope.customworkout.length; x++)
            {
          
                for(var y=0; y<7 ; y++)
                {

                    if($scope.fullweek[y] == $scope.customworkout[x].day )
                    {
              
                        $scope.weekfrequencycount[y] = $scope.weekfrequencycount[y] + 1;
                    }
                }

            }

}

$interval(checkfrequencyofcustom,50);


var lTempInt =0;

$scope.addcustomworkout = function()
{
     
         
         for(var i =0; i<$scope.customworkout.length; i++)
         {
             if($scope.customworkout[i] != null)
             {

            for(var y=0; y<7;y++)
            {
           

                    if($scope.customworkout[i].day == $scope.fullweek[y])
                    {
                            lTempInt = y;
                  
                    }
            }


         
             var url = "api/apiphp1.php/";
                                        var data = JSON.stringify({user_id: $scope.userid.toString(), set:$scope.customworkout[i].set.toString(),rep:$scope.customworkout[i].rep.toString(),exercise:$scope.customworkout[i].exercise,weights:$scope.customworkout[i].weights,day:$scope.customworkout[i].day,frequency:  $scope.weekfrequencycount[lTempInt]});
                                        //Call the services
                                        $http.post(url, data)
                                        .then(
                                            function (response) {
                                                if (response.data)
                                                    $scope.msg = "Post successfully";
                                                 
                                        }, function (response) {
                                                $scope.msg = "Service not Exists";
                                                $scope.statusval = response.status;
                                                $scope.statustext = response.statusText;
                                                $scope.headers = response.headers();
                                        });
             
       
             }
             
         }
}


$scope.decrementfrequency = function()
{
    
     for(var i =0; i<$scope.posts.length; i++)
         {
            
                
            if($scope.posts[i]!=null)
                {
            if($scope.posts[i].user_id == $scope.userid )
            {
                
                if($scope.posts[i].day == $scope.tempday)
                    $scope.posts[i].frequency = $scope.posts[i].frequency - 1;
            }
                    
                    
                }
             
         } 
}


$scope.incrementfrequency = function()
{
    
     for(var i =0; i<$scope.posts.length; i++)
         {
            
                
            if($scope.posts[i]!=null)
                {
            if($scope.posts[i].user_id == $scope.userid )
            {
                
                if($scope.posts[i].day == $scope.tempday)
                   { $scope.posts[i].frequency = $scope.posts[i].frequency + 1;}
            }
                    
                    
            }
             
         } 
}


$scope.addchangedworkout = function()
{
    
         for(var i =0; i<$scope.posts.length; i++)
         {
            
                
            if($scope.posts[i]!=null)
                {
            if($scope.posts[i].user_id == $scope.userid )
            {
             var url = "api/apiphp1.php/";
                                        var data = JSON.stringify({user_id: $scope.userid.toString(), set:$scope.posts[i].set.toString(),rep:$scope.posts[i].rep.toString(),exercise:$scope.posts[i].exercise,weights:$scope.posts[i].weights,day:$scope.posts[i].day,frequency: $scope.posts[i].frequency});
                                        //Call the services
                                        $http.post(url, data)
                                        .then(
                                            function (response) {
                                                if (response.data)
                                                    $scope.msg = "Post successfully";
                                            
                                                 
                                        }, function (response) {
                                                $scope.msg = "Service not Exists";
                                                $scope.statusval = response.status;
                                                $scope.statustext = response.statusText;
                                                $scope.headers = response.headers();
                                                //alert("Posted failure!");
                                        });
             
       
            }
          
             
         } else
            {
                 
            }
         
         
         }
       

         $scope.tohome();
}


$scope.tempfrequency = null;
    
$scope.settempfrequency = function(value)
{
    
    $scope.tempfrequency = value;
    
    
}

$scope.addcustomexerciseatplan = function()
{

        var pushelement = {"exercise":$scope.exercisepicked,"weights":$scope.weightpicked,"set":$scope.setpicked,"rep":$scope.reppicked,"day":$scope.tempday};
    
 
    
   // alert(pushelement);
    
    for (var i=0; i<$scope.posts.length; i++)
    {
        if($scope.posts[i].day == $scope.tempday && $scope.posts[i].user_id == $scope.userid)
        {
            $scope.tempfrequency = $scope.posts[i].frequency;
        }
    }

    $scope.posts.push({"user_id":$scope.userid,"exercise_id":1,"set":$scope.setpicked,"rep":$scope.reppicked,"exercise":$scope.exercisepicked,"weights":$scope.weightpicked,"day":$scope.tempday,"frequency": $scope.tempfrequency});
    $scope.customworkout.push({"exercise":$scope.exercisepicked,"weights":$scope.weightpicked,"set":$scope.setpicked,"rep":$scope.reppicked,"day":$scope.tempday});

    
}

    
$scope.addcustomexercise = function()
{
    if(!$scope.customkey)
    {
        
    $scope.customworkout[$scope.customworkoutcounter] = {"exercise":$scope.exercisepicked,"weights":$scope.weightpicked,"set":$scope.setpicked,"rep":$scope.reppicked,"day":$scope.daypicked};
    $scope.boolcustomworkout[$scope.customworkoutcounter] = true;
    $scope.customworkoutcounter = $scope.customworkoutcounter+1;
    
      for(var i =0; i<$scope.customworkout.length; i++)
         {
               for(var x=0; x<7; x++)
            {
                if($scope.fullweek[x] == $scope.customworkout[i].day)
                {
                      $scope.usertrainingdays[x] = true;
                }
            }
             
         }
    
    }
}

$scope.daypicked = 'Day';
$scope.reppicked = 'Rep';
$scope.setpicked = 'Set';
$scope.weightpicked = 'Weight';
$scope.exercisepicked = 'Exercise';
$scope.custommsg='';
$scope.customkey = false;
$scope.customaux = false;
$scope.changesetorrep =function(value)
{

        $scope.posts[value].set = setpicked;
        
  
    if(reppicked!='Rep')
    {
        $scope.posts[value].rep = reppicked;
         
    }
}

$scope.reinit = function()
{
    $scope.daypicked = 'Day';
    $scope.reppicked = 'Rep';
    $scope.setpicked = 'Set';
    $scope.weightpicked = 'Weight';
    $scope.exercisepicked = 'Exercise';


}

$scope.checkcustom = function()
{
   
        if( $scope.daypicked != 'Day' && $scope.reppicked != 'Rep' &&  $scope.setpicked != 'Set' && $scope.weightpicked != 'Weight' && $scope.exercisepicked != 'Exercise'   )
        {
             $scope.customkey = false;

        }
        else
        {
           $scope.custommsg = "Please select all options";
            $scope.customkey = true;
            $scope.customaux = true;



        }
    
    
}

var alwaysCheckCustom = function(){
    
 if($scope.customaux)
 {
        if( $scope.daypicked != 'Day' && $scope.reppicked != 'Rep' &&  $scope.setpicked != 'Set' && $scope.weightpicked != 'Weight' && $scope.exercisepicked != 'Exercise'   )
        {
             $scope.customkey = false;
             $scope.custommsg = '';

        }
        else
        {

            $scope.customkey = true;
        }
        
        
 }
    
    
    
}

$interval(alwaysCheckCustom,100);
 var alwaysCheckPlan = function(){
    

        if( $scope.daypicked != 'Day' && $scope.reppicked != 'Rep' &&  $scope.setpicked != 'Set' && $scope.weightpicked != 'Weight' && $scope.exercisepicked != 'Exercise'   )
        {
             $scope.plankey = false;
        
        }
        else
        {

            $scope.plankey = true;
        }
        
        
 
    
    
    
}

$interval(alwaysCheckPlan,100);   


$scope.tempday = null

$scope.settempday  =function(pass)
{
    
    $scope.tempday = pass;
    $scope.daypicked = pass;
}

$scope.tempindex = 0;
    
$scope.settempindex  =function(pass)
{
    $scope.tempindex = pass;
}

$scope.changeismadetotrue = function()
{
     $scope.changeismade = true;
  
}
    
$scope.saveday = function(value)
 {
     $scope.daypicked=value;

    $scope.changeismade = true;
 }
    
        
$scope.saverep = function(value)
 {
     $scope.reppicked=value;
    $scope.changeismade = true;
 }

$scope.saveset = function(value)
 {
     $scope.setpicked=value;

    $scope.changeismade = true;
 }

  $scope.saveweight = function(value)
 {
    $scope.weightpicked=value;

    $scope.changeismade = true;
 }
  
 $scope.saveexercise = function(value)
 {
     $scope.exercisepicked=value;

     $scope.changeismade = true;
 }
        
 $scope.check = function(value,value1,value2) {
    
     if (value>value1) {
        
            var lTemp = value2-1;
           $scope.showinput[lTemp] = 1;
            
    }
   
}
        
   //    $scope.indexShow = $routeParams.index;
      $scope.register2=false;
      $scope.lgusername=null;
      $scope.loggedid=0;
      $scope.userid =0;

    
      $scope.questionwarning = '';
    
    
    
    
       // property initialisation
    $scope.name = null;
    $scope.age = null;
    // define methods
    $scope.delData = function() {
        // Prepare the data
        var url = "api/apiphp2.php/";
        var data = "DATA";
        //Call the services
        $http.delete(url, data)
        .then(function (response) {
            // depends on the data value
            // there may be instances of put failure
            if (response.data)
                $scope.msg = "Delete successfully";
        }, function (response) {
            $scope.msg = "Service not Exists";
            $scope.statusval = response.status;
            $scope.statustext = response.statusText;
            $scope.headers = response.headers();
        });
    };


    $scope.resetplanchanged = function()
    {


        $http.get('api/apiphp.php/')
        .then (
        function(response) {
            $scope.posts = response.data;
        

            
        },
        function(response) {
        // error handling routine
        });
    }
    
    
      $http.get('api/apiphp.php/')
        .then (
        function(response) {
            $scope.posts = response.data;

            

        var checkPlanDays = function()
        {
       
            
         for(var i =0; i<$scope.posts.length; i++)
         {
             
             
            if($scope.posts[i].user_id == $scope.userid)
            {
                for(var x=0; x<7; x++)
                {
                    if($scope.fullweek[x] == $scope.posts[i].day)
                    {

                          $scope.usertrainingdaysplan[x] = true;
                    }
                }
            }
             
         }
        }

        /** Check Plan Table at 10ms to ensure successful display */
        $interval(checkPlanDays,10);
            
        },
        function(response) {
        // error handling routine
        });
    

        /** Get the value of posts again to reset changes made. **/
        $scope.resetplanchanged = function()
        {
            $http.get('api/apiphp.php/')
            .then (
            function(response) {
                $scope.posts = response.data;
                
                
            },
            function(response) {
            // error handling routine
            });

        }

    
    
        $http.get('api/apiphp1.php/')
        .then (
        function(response) {
            $scope.id = response.data;
            $scope.userid = $scope.id[0].user_id;
            
           
        },
        function(response) {
    
        });
    

    
    
        
    
             $http.get('api/workoutplan-api.php/')
        .then (
        function(response) {
            $scope.usertrackerplan = response.data;
            
            $scope.repcount=[$scope.usertrackerplan[0].rep,$scope.usertrackerplan[0].rep,$scope.usertrackerplan[0].rep,$scope.usertrackerplan[0].rep,$scope.usertrackerplan[0].rep,$scope.usertrackerplan[0].rep];
            
            $scope.repcount2=[0,0,0,0,0];
            for(var i = 0; i<5;i++)
            {
                $scope.repcount2[i] = $scope.usertrackerplan[1].rep
            }
            
            $scope.repcount3=[0,0,0,0,0];
            for(var i = 0; i<5;i++)
            {
                $scope.repcount3[i] = $scope.usertrackerplan[2].rep
            }
            
            $scope.repcount4=[0,0,0,0,0];
            for(var i = 0; i<5;i++)
            {
                $scope.repcount4[i] = $scope.usertrackerplan[3].rep
            }
            
            $scope.repcount5=[0,0,0,0,0];
            for(var i = 0; i<5;i++)
            {
                $scope.repcount5[i] = $scope.usertrackerplan[4].rep
            }
            
             $scope.repcount6=[0,0,0,0,0];
            for(var i = 0; i<5;i++)
            {
                $scope.repcount6[i] = $scope.usertrackerplan[5].rep
            }
             $scope.repcount7=[0,0,0,0,0];
            for(var i = 0; i<5;i++)
            {
                $scope.repcount7[i] = $scope.usertrackerplan[6].rep
            }
             $scope.repcount8=[0,0,0,0,0];
            for(var i = 0; i<5;i++)
            {
                $scope.repcount8[i] = $scope.usertrackerplan[7].rep
            }
             $scope.repcount9=[0,0,0,0,0];
            for(var i = 0; i<5;i++)
            {
                $scope.repcount9[i] = $scope.usertrackerplan[8].rep
            }
             $scope.repcount10=[0,0,0,0,0];
            for(var i = 0; i<5;i++)
            {
                $scope.repcount10[i] = $scope.usertrackerplan[9].rep
            }
            
            
        },
        function(response) {
        // error handling routine 
          //  alert("error with workout api");
        });
        
        
    
    $scope.graphselector=null;
    $scope.graphdata='[{name:"exercise",data:[]}]';
    $window.graphdata = $scope.graphdata;
    
        /*** Get user's past workouts ***/
        $http.get('api/apiphp3.php/')
        .then (
        function(response) {
            $scope.pastworkouts = response.data;
           
            
        $scope.saveselector = function(data){
            $scope.graphselector = data;
        }
            
            $scope.graphcounter = 0;
            
        $scope.addgraphexercise = function(){
            
            if(  $scope.graphcounter== 0)
            {
                $scope.graphdata = '[{name:"'+$scope.graphselector  +'",data:';

                $scope.graphdata = $scope.graphdata + '[';
                
                
                $scope.graphcounter = 1;
            
            
            }
            else
            {
   
                 // Remove last ]
                 $scope.graphdata = $scope.graphdata.slice(0, -1);
                 
                 $scope.graphdata = $scope.graphdata + ',{name:"'+ $scope.graphselector +'",data:['
                
                
                
            }
            
                var bool=false;
                
                for(var i = 0; i < $scope.pastworkouts.length; i++)
                {
                    var str ='';
                   
                    if($scope.pastworkouts[i].exercise == $scope.graphselector)
                    {
                        str = '[Date.UTC('+$scope.pastworkouts[i].year.toString()+','+$scope.pastworkouts[i].month.toString()+','+$scope.pastworkouts[i].day.toString()+'),'+$scope.pastworkouts[i].volume.toString()+'],';

                        $scope.graphdata = $scope.graphdata + str;

                        bool=true;
                    }


                }
                if(bool)
                {
                 $scope.graphdata = $scope.graphdata.slice(0, -1);
                }

                $scope.graphdata = $scope.graphdata + ']}]';
            
          $window.graphdata = $scope.graphdata;
            
            //alert(  $window.graphdata);

        }
            
        },
        function(response) {
        // error handling routine
        });
    
     $scope.graphselector=null;
    $scope.graphdata1='[{name:"exercise",data:[]}]';
    $window.graphdata1 = $scope.graphdata1;

    
        /*** Get user's past workouts ***/
        $http.get('api/apiphp3.php/')
        .then (
        function(response) {
            $scope.pastworkouts1 = response.data;
           
     /*       
        $scope.saveselector = function(data){
            $scope.graphselector = data;
        }*/
            
            $scope.graphcounter1 = 0;
            
        $scope.addgraphexercise1 = function(){
            
            if(  $scope.graphcounter1== 0)
            {
                $scope.graphdata1 = '[{name:"'+$scope.graphselector  +'",data:';

                $scope.graphdata1 = $scope.graphdata1 + '[';
                
                
                $scope.graphcounter1 = 1;
            
            
            }
            else
            {
   
                 // Remove last ]
                 $scope.graphdata1 = $scope.graphdata1.slice(0, -1);
                 
                 $scope.graphdata1 = $scope.graphdata1 + ',{name:"'+ $scope.graphselector +'",data:['
                
                
                
            }
            
                var bool=false;
                
                for(var i = 0; i < $scope.pastworkouts1.length; i++)
                {
                    var str ='';
                   
                    if($scope.pastworkouts1[i].exercise == $scope.graphselector)
                    {
                        str = '[Date.UTC('+$scope.pastworkouts1[i].year.toString()+','+$scope.pastworkouts1[i].month.toString()+','+$scope.pastworkouts1[i].day.toString()+'),'+$scope.pastworkouts1[i].weights.toString()+'],';

                        $scope.graphdata1 = $scope.graphdata1 + str;

                        bool=true;
                    }


                }
                if(bool)
                {
                 $scope.graphdata1 = $scope.graphdata1.slice(0, -1);
                }

                $scope.graphdata1 = $scope.graphdata1 + ']}]';
            
          $window.graphdata1 = $scope.graphdata1;
            
            //alert(  $window.graphdata1);

        }
            
        },
        function(response) {
        // error handling routine
        });
    
    
        /*** Get Calender Events ***/
        $http.get('api/apiphp4.php/')
        .then (
        function(response) {
            $scope.calenderevents = response.data;
           
           // Open Brackets
    $scope.StrCalenderEvents = "{";
  
    for(var i = 0; i<$scope.calenderevents.length; i++)
    {
        
        var string;
        
        if($scope.calenderevents[i].user_id == $scope.userid)
        {
        if($scope.calenderevents[i].month>9)
        {
            
           
            if($scope.calenderevents[i].day>9)
            {
            // no zeros
                
                // HARD CODED HERE
            string='"'+$scope.calenderevents[i].year+'-'+$scope.calenderevents[i].month+'-'+$scope.calenderevents[i].day+'":{"number":'+$scope.calenderevents[i].number+'}';
         
            }
            else
            {
            // 0 in front of day
            string='"'+$scope.calenderevents[i].year+'-'+$scope.calenderevents[i].month+'-0'+$scope.calenderevents[i].day+'":{"number":'+$scope.calenderevents[i].number+'}';  
            }
        }
        else
        {
            
              if($scope.calenderevents[i].day>9)
            {
            // 0 in front of month
        string='"'+$scope.calenderevents[i].year+'-0'+$scope.calenderevents[i].month+'-'+$scope.calenderevents[i].day+'":{"number":'+$scope.calenderevents[i].number+'}';
            }
            else
            {
              // 0 in front of month and day
            string='"'+$scope.calenderevents[i].year+'-0'+$scope.calenderevents[i].month+'-0'+$scope.calenderevents[i].day+'":{"number":'+$scope.calenderevents[i].number+'}';
            }
            
        }
        
        
      
         
        
        $scope.StrCalenderEvents =  $scope.StrCalenderEvents + string;
     
        
        if(i !=$scope.calenderevents.length-1 )
        {
             $scope.StrCalenderEvents =  $scope.StrCalenderEvents + ",";
        }
        
    }
        
    }
    // Close Brackets
     $scope.StrCalenderEvents =  $scope.StrCalenderEvents + "}";    

            $window.events = $scope.StrCalenderEvents;
            
        
            
        },
        function(response) {
        // error handling routine
        });
      

    
    

    
    
    
    
    
        $scope.login = function()
        {
            
              $http.get('api/apiphp.php/')
        .then (
        function(response) {f
            $scope.dataa = response.data;
            
            for(i=0;i<5;i++)
            {
                if($scope.dataa[i].user_name == $scope.lgusername)
                {
                    $scope.loggedid = $scope.dataa[i].user_id;
                }
            
    
            }
        },
        function(response) {
        // error handling routine
        });
            
            
        }
              
        
    
    
       // property initialisation
        $scope.name = null;
        $scope.age = null;
        $scope.username = null;
    // define methods
        $scope.postData = function(username,name, age) {
        // Prepare the data
        var url = "api/apiphp.php/";
        var data = JSON.stringify({user_name:username,user_mail: name, password: age});
        //Call the services
        $http.post(url, data)
        .then(
            function (response) {
                if (response.data)
                    $scope.msg = "Post successfully";
        }, function (response) {

            
                $scope.msg = "Service not Exists";
                $scope.statusval = response.status;
                $scope.statustext = response.statusText;
                $scope.headers = response.headers();
        });
    
    
  
        };
    
        $scope.homeStatus = 'wo';
    
    
    
    
    
        $http.get('data/Workouts.json')
        .then (
        function (response) {
            $scope.workoutdatabase = response.data;
        },
        
        function(response) {  
        }
        );
    
    
    
    
        
    

    
    
    
    
    
    
    
        var str= $scope.username;
    
          $scope.towelcome= function()
        {
             window.location.href = "#welcome";
        }

        $scope.tologin = function()
        {
             window.location.href = "?table=app_user#login";

        }
        
        $scope.toregister1 = function()
        {
             window.location.href = "?table=app_user#register1";
        }
            
        $scope.toregister2 = function()
        {
             window.location.href = "?key2="+$scope.username+"#register2";
        }
        
        $scope.toregister3 = function()
        {
             window.location.href = window.location.search+"#register3";
        }
        
        $scope.tohome = function()
        {
             window.location.href = "?table=user_data&"+window.location.search+"#home";
        }
        
        $scope.tohomefromlogin = function()
        {
             window.location.href = "?table=user_data&key2="+$scope.lgusername+"#home";
        }
        
        $scope.tohomefromtracker = function()
        {
             window.location.href = window.location.search+"#home";
        }
        
        $scope.tologinfail = function()
        {
             window.location.href = "?table=user_data&key2="+$scope.lgusername+"#loginfail";
        }
        
        $scope.totracker = function()
        {
            window.location.href = "?table=user_data&key2="+$scope.id[0].user_name+"&key3="+$scope.userid+"&key4="+$scope.currentday+"#tracker";
        }
        
         $scope.tograph = function()
        {
            window.location.href = "?table=user_data&key2="+$scope.id[0].user_name+"&key3="+$scope.userid+"&key4="+$scope.currentday+"#graph";
        }
        
         $scope.toplanfromhome = function()
        {
            window.location.href = window.location.search +"&key3="+ $scope.userid.toString() +  "#plan";
        }
         
          $scope.tocustomfromhome = function()
        {
            window.location.href = window.location.search +"&key3="+ $scope.userid.toString() + "#custom";
        }
       
    
        
        
  
        
        

        
    
    
        var checkValidity = function()
       {   
            
            $scope.boolUsernameTemp=0;
             $scope.boolEmailTemp=0;

            for(var i=0; i < $scope.posts.length; i++)
            {
                                  
                if($scope.posts[i].user_name == $scope.username)
                {
                    $scope.boolUsernameTemp = $scope.boolUsernameTemp +1;
                }

                
                if($scope.posts[i].user_mail == $scope.name)
                {
                    $scope.boolEmailTemp = $scope.boolEmailTemp +1;
           
                }

            }
           

           
       }
        
        $interval(checkValidity, 1000);
       

    
    
        var checkValidityLogin = function()
       {
        
           
             $scope.loginUsernameTemp=0;
             $scope.loginEmailTemp=0;
            
         

            for(var i=0; i < $scope.posts.length; i++)
            {
                
                if($scope.posts[i].user_name == null)
                {
                    $scope.hello = 'lel';
                }
                    
                
                if($scope.lgusername == $scope.posts[i].user_name)
                {
                    $scope.loginUsernameTemp = $scope.loginUsernameTemp +1;
                }

                
                if($scope.posts[i].user_mail == $scope.name)
                {
                    $scope.loginEmailTemp = $scope.loginEmailTemp +1;
           
                }

            }
           
         
            
                
            
       }
       
       $interval(checkValidityLogin, 1000);
    

    
        $scope.checkLogin = function()
        {
            
            
            $scope.lTemp = 0;
            
            if($scope.loginUsernameTemp == 1)
            {
                for(var i=0; i < $scope.posts.length; i++)
                {
                    if($scope.lgusername == $scope.posts[i].user_name)
                    {
                        $scope.lTemp = $scope.lTemp + 1;
                        
                        if($scope.lgpass == $scope.posts[i].password)
                        {
                            $scope.tohomefromlogin();
                        }
                        else
                        {
                            $scope.tologinfail();
                        }
                        
                    }

                }
                
               
                
            }
            
             if($scope.lTemp == 0)
             {
                $scope.tologinfail();
             }

        }
    
    
    
    
            
        
        
        $scope.warningEmailShow = false;
        $scope.warningUsernameShow = false;
        
        $scope.disableUsernameWarning = function()
        {
            
            $scope.warningUsernameShow = false;

        }
        
        $scope.enableUsernameWarning= function()
        {
            $scope.warningUsernameShow = true;

        }
        
        $scope.disableEmailWarning = function()
        {
            

            $scope.warningEmailShow = false;
        }
        
        $scope.enableEmailWarning= function()
        {

            $scope.warningEmailShow = true;
        }
    
        

    
        

        
    
        
    

       
        
    
    
        
        $scope.passover = function()
        {
            $scope.pass=$scope.username;
            
        }
        
        
        $scope.type = null;
        $scope.days = [false,false,false,false,false,false,false];
        $scope.frequency = 0;
        $scope.dayfrequency = 0;
        $scope.freqmatch = false;
        
        $scope.numOfDays = 0;
    
 
        $scope.checkquestion = function()
        {
           var no = 0;
      
                for(i=0;i<7;i++)
                {
                    if($scope.days[i] == true)
                    {
                        no=  no + 1;
                    }
                }
            
            
         
        
          if ($scope.freqmatch == false && $scope.type != null && $scope.dayfrequency!=0 &&  $scope.frequency!=0  )
          {
                    $scope.questionwarning = "The number of days you train does not match the days picked.";
                    $scope.register2=true;
          }
          else if ($scope.type == null || no==0 || $scope.frequency==0 || $scope.dayfrequency==0)
          {
              $scope.questionwarning = "Must answer all questions.";
              $scope.register2=true;
            
          }
          else
          {
                $scope.questionwarning = "";
                $scope.register2=false;
                //$scope.toregister3();
                $scope.generate();
                $scope.tohome();
          }
            
            
        }
        

        
        
       
        
        
                   var no1 = 0;
      
                for(i=0;i<7;i++)
                {
                    if($scope.days[i] == true)
                    {
                        no1=  no1 + 1;
                    }
                }
            
            
         
        
          if ($scope.freqmatch == false && $scope.type != null && $scope.dayfrequency!=0 &&  $scope.frequency!=0  )
          {
            
                    $scope.register2=true;
          }
          else if ($scope.type == null || no==0 || $scope.frequency==0 || $scope.dayfrequency==0)
          {
              $scope.register2=true;
            
          }
          else
          {
                $scope.register2=false;
          }
    
    
    
    
    
        $scope.match=function()
        {
            var no = 0;
      
                for(i=0;i<7;i++)
                {
                    if($scope.days[i] == true)
                    {
                        no=  no + 1;
                    }
                }

            $scope.numOfDays = no;
            
            
                if($scope.numOfDays!=$scope.dayfrequency)
                {
                    $scope.freqmatch = false;
                }
                else
                {
                    $scope.freqmatch = true;
                }

        }
        
        
        

        
        
        
        
        
        $scope.num = [0,1,2,3,4,5,6];
        
     
        var rep = ["8","10","12","15"];
    
        
        $scope.program = [[],[],[],[],[],[],[],[],[],[]];
        
    
        $scope.generate = function() {

            $http.get('Workouts.json')
            .then (
            function (response) {
                
                
                $scope.used = [];
                
               
                if($scope.type=="full")
                {
                for(j=0;j<7;j++)
                    {

                            var day = $scope.fullweek[j];

                            if($scope.days[j] == true)
                            {    

                                var ranNum2 = Math.floor((Math.random() * 3) + 0);
                                var arr = []
                                
                                
                                 while(arr.length < 10){
                                        var randomnumber = Math.ceil((Math.random()*10)-1);
                                        if(arr.indexOf(randomnumber) > -1) continue;
                                        arr[arr.length] = randomnumber;
                                    }
                                    
                                //alert(arr);

                                for (i = 0; i < $scope.frequency  ; i++) { 

                                    var ranNum = Math.floor((Math.random() * 6) + 0);
                                    var ranNum2 = Math.floor((Math.random() * 4) + 0);
                                    var ranNum1 = Math.floor((Math.random() * 6) + 0);
                                    
                                    
                                    //$scope.used.push(ranNum1);
                                    
                                    
                                   
                                    
                                 
                                 /*   while($.inArray(ranNum1, $scope.used) != -1)
                                    {
                                        ranNum1 = Math.floor((Math.random() * 6) + 0);
                                    }*/


                                  $scope.program[i][0] = response.data.body[ranNum].exercise[arr[i]].name;
                                    var repp;
                                   if(response.data.body[ranNum].exercise[arr[i]].type == 'com')
                                   {
                                       repp  = 5;
                                   }
                                   else
                                   {
                                       repp = rep[ranNum2];
                                   }

                                   $scope.program[i][2] = day;
                                    
                                    var url = "api/apiphp1.php/";
                                    var data = JSON.stringify({user_id: $scope.userid, set: $scope.intensity,rep:repp,exercise:$scope.program[i][0].toString(),weights:20,day:$scope.program[i][2].toString(),frequency: $scope.frequency});
                                    //Call the services
                                    $http.post(url, data)
                                    .then(
                                        function (response) {
                                            if (response.data)
                                                $scope.msg = "Post successfully";
                                    }, function (response) {
                                            $scope.msg = "Service not Exists";
                                            $scope.statusval = response.status;
                                            $scope.statustext = response.statusText;
                                            $scope.headers = response.headers();
                                    });

                                   
                                }

                            }
                    }
                    
                }
                else if ($scope.type=="single")
                {
                        var arr1 = []
                                
                                
                                 while(arr1.length < 7){
                                        var randomnumber = Math.ceil((Math.random()*7)-1);
                                        if(arr1.indexOf(randomnumber) > -1) continue;
                                        arr1[arr1.length] = randomnumber;
                                    }
                    
                               // alert(arr1)
                    
                    for(j=0;j<7;j++)
                    {

                            var day = $scope.fullweek[j];

                            if($scope.days[j] == true)
                            {    

                                var ranNum2 = Math.floor((Math.random() * 3) + 0);
                                var arr = []
                                
                                
                                 while(arr.length < 10){
                                        var randomnumber = Math.ceil((Math.random()*10)-1);
                                        if(arr.indexOf(randomnumber) > -1) continue;
                                        arr[arr.length] = randomnumber;
                                    }
                                    
                              //  alert(arr);
                                
                           

                                for (i = 0; i < $scope.frequency  ; i++) { 

                                    var ranNum = Math.floor((Math.random() * 4) + 0);
                                    var ranNum1 = Math.floor((Math.random() * 6) + 0);
                                    
                                    
                                   // $scope.used.push(ranNum1);
                                    
                                    
                                   
                                    
                                 
                                 /*   while($.inArray(ranNum1, $scope.used) != -1)
                                    {
                                        ranNum1 = Math.floor((Math.random() * 6) + 0);
                                    }*/


                                  $scope.program[i][0] = response.data.body[arr1[j]].exercise[arr[i]].name;
                                    var repp;
                                   if(response.data.body[arr1[j]].exercise[arr[i]].type == 'com')
                                   {
                                       repp = 5;
                                   }
                                   else
                                   {
                                       repp = rep[ranNum];
                                   }

                                   $scope.program[i][2] = day;
                                    
                                    var url = "api/apiphp1.php/";
                                    var data = JSON.stringify({user_id: $scope.userid, set: $scope.intensity,rep:repp,exercise:$scope.program[i][0].toString(),weights:20,day:$scope.program[i][2].toString(),frequency: $scope.frequency});
                                    
                                    //alert(data);
                                    //Call the services
                                    $http.post(url, data)
                                    .then(
                                        function (response) {
                                            if (response.data)
                                                $scope.msg = "Post successfully";
                                    }, function (response) {
                                            $scope.msg = "Service not Exists";
                                            $scope.statusval = response.status;
                                            $scope.statustext = response.statusText;
                                            $scope.headers = response.headers();
                                    });

                                   
                                }

                            }
                    }
                    
                }
                

            },

            function(response) {  
            }
            );

    
        }


        
        /*** To handle calender selections by the user ***/
        
        $window.currentdate = $scope.currentdate;
        $window.currentmonth = $scope.currentmonth;
        $window.currentyear = $scope.currentyear;
    
        $scope.boolShowCurrent = true;
        $scope.dateSelectedConcat = null;
    
        /*** Interval to update Date all the time at 50ms (to be safe) ***/
        var alwaysDo = function(){
       
        $scope.daySelected = $window.daySelected;
        $scope.monthSelected = $window.monthSelected;
        $scope.yearSelected = $window.yearSelected;
        $scope.dateSelectedConcat= $scope.daySelected.toString() + '-' + $scope.monthSelected.toString()+'-'+$scope.yearSelected.toString();
        
     
      
    
        if($window.sethomestatus=='wo')
        {
            $scope.homeStatus = $window.sethomestatus;
            
            
        }

        $window.sethomestatus = '';
        
        
             
         }
        
        $interval(alwaysDo,50);
         
        var alwaysDoDo = function(){
               
                   
           
        }
        
         $interval(alwaysDoDo,2000);
            
        $scope.postworkout = function() {

     
     
            
         for(var i =0; i<$scope.usertrackerplan[0].frequency; i++)
         {
             var setStr = '';
             var volumeInt= 0; 
             
             if (i==0)
             {
                 
                 for(var x=0; x<$scope.bool; x++)
                 {
               
                    var appendStr="";
                     
                    if(x!=$scope.bool-1)
                    {
                         appendStr = $scope.repcount[x].toString() + " / ";
                    }
                    else
                    {
                         appendStr = $scope.repcount[x].toString();
                    }
                    
                    
                    setStr = setStr + appendStr;
                    
                    volumeInt = parseFloat(volumeInt) + parseFloat($scope.repcount[x]);
            
                 }
                 
             }
             else
             {
                 var ii = i+1;
                 
                 eval("  for(var x=0; x<$scope.bool"+ii.toString()+"; x++){var appendStr='';if(x!=$scope.bool"+ii.toString()+"-1){appendStr = $scope.repcount"+ii.toString()+"[x].toString() + ' / ';}else{appendStr = $scope.repcount"+ii.toString()+"[x].toString();}setStr = setStr + appendStr;volumeInt = parseFloat(volumeInt) + parseFloat($scope.repcount"+ii.toString()+"[x]);}");
                 
             }
             
             
             
             
             //alert($scope.usertrackerplan[i].exercise);
             var url = "api/apiphp3.php/";
             var data = JSON.stringify({user_id: $scope.userid.toString(), set: setStr,exercise:$scope.usertrackerplan[i].exercise,weights:$scope.usertrackerplan[i].weights,volume:volumeInt,day:$scope.currentdate,month:$scope.currentmonth,year:$scope.currentyear,order: i});
             
                                        //Call the services
                                        $http.post(url, data)
                                        .then(
                                            function (response) {
                                                if (response.data)
                                                    $scope.msg = "Post successfully";

                                                 
                                        }, function (response) {
                                                $scope.msg = "Service not Exists";
                                                $scope.statusval = response.status;
                                                $scope.statustext = response.statusText;
                                                $scope.headers = response.headers();
                                                //alert("Posted failure!");
                                        });
             
       
            
            
         }
            
          var url = "api/apiphp4.php/";
             var data = JSON.stringify({user_id: $scope.userid.toString(), number:$scope.usertrackerplan[0].frequency,day:$scope.currentdate,month:$scope.currentmonth,year:$scope.currentyear});
             
                                        //Call the services
                                        $http.post(url, data)
                                        .then(
                                            function (response) {
                                                if (response.data)
                                                    $scope.msg = "Post successfully";
                                     
                                            
                                                 
                                        }, function (response) {
                                                $scope.msg = "Service not Exists";
                                                $scope.statusval = response.status;
                                                $scope.statustext = response.statusText;
                                                $scope.headers = response.headers();
                                                //alert("Posted failure!");
                                        });
            
        

        
        }
      
      
    
    

});


app.controller("getCtrl", function($scope, $http) {
    $http.get('api/apiphp.php')
    .then (
        function(response) {
            $scope.posts = response.data;
        },
        function(response) {
        // error handling routine
        });
    
    
});

app.controller("postCtrl", function ($scope, $http) {
      
    // property initialisation
    $scope.strName = null;
    $scope.strEmail = null;
    $scope.strPass = null;
    // define methods
    $scope.postData = function(strName, strMail,strPass) {
        // Prepare the data
        var url = "api/apiphp.php/";
        var data = JSON.stringify({user_name: strName, user_mail: strEmail,password:strPass});
        //Call the services
        $http.post(url, data)
        .then(
            function (response) {
                if (response.data)
                    $scope.msg = "Post successfully";
        }, function (response) {
                $scope.msg = "Service not Exists";
                $scope.statusval = response.status;
                $scope.statustext = response.statusText;
                $scope.headers = response.headers();
        });
    };
   
});


app.controller("putCtrl", function ($scope, $http) {
    // property initialisation
    $scope.name = null;
    $scope.age = null;
    // define methods
    $scope.putData = function(name, age) {
        // Prepare the data
        var url = "api/lec08apiphp.php/person/name/" + name;
        var data = JSON.stringify({name: name, age: age});
        //Call the services
        $http.put(url, data)
        .then(
            function (response) {
                // depends on the data value
                // there may be instances of put failure
                if (response.data)
                    $scope.msg = "Put successfully";
            }, function (response) {
                $scope.msg = "Service not Exists";
                $scope.statusval = response.status;
                $scope.statustext = response.statusText;
                $scope.headers = response.headers();
            });
        };
});

app.controller("delCtrl", function ($scope, $http) {
    // property initialisation
    $scope.name = null;
    $scope.age = null;
    // define methods
    $scope.delData = function(name, age) {
        // Prepare the data
        var url = "api/lec08apiphp.php/person/name/" + name;
        var data = JSON.stringify({name: name, age: age});
        //Call the services
        $http.delete(url, data)
        .then(function (response) {
            // depends on the data value
            // there may be instances of put failure
            if (response.data)
                $scope.msg = "Delete successfully";
                
        }, function (response) {
            $scope.msg = "Service not Exists";
            $scope.statusval = response.status;
            $scope.statustext = response.statusText;
            $scope.headers = response.headers();
        });
    };
});


app.controller("getCtrl", function($scope, $http) {
    $http.get('../api/app-api.php')
    .then (
        function(response) {
            $scope.posts = response.data;

        },
        function(response) {
            // error handling routine
            console.log("error");
        });
});

app.config(function($routeProvider){
    $routeProvider
    .when("/welcome",{
        templateUrl: "templates/welcome.html",
        controller: "myCtrl"
    })
    .when("/register1",{
        templateUrl: "templates/register1.html",
        controller: "myCtrl"
    })
    .when("/register2",{
        templateUrl: "templates/register2.html",
        controller: "myCtrl"
    })
    .when("/register3",{
        templateUrl: "templates/register3.html",
        controller: "myCtrl"
    })
    .when("/home",{
        templateUrl: "templates/home.html",
        controller: "myCtrl"
    })
    .when("/plan",{
        templateUrl: "templates/plan.html",
        controller: "myCtrl"
    })
    .when("/login",{
        templateUrl: "templates/login.html",
        controller: "myCtrl"
    })
    .when("/loginfail",{
        templateUrl: "templates/loginfail.html",
        controller: "myCtrl"
    })
    .when("/tracker",{
        templateUrl: "templates/tracker.html",
        controller: "myCtrl"
    })
    .when("/custom",{
        templateUrl: "templates/custom.html",
        controller: "myCtrl"
    })
     .when("/graph",{
        templateUrl: "templates/graph.html",
        controller: "myCtrl"
    })
    .otherwise({
        redirectTo: "/welcome"
    });
});



    


      


