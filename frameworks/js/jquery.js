 //The page element that will be animated on page load.
            var yourElement = "#btn-start";
            //The effect that will be applied to your page element. See https://daneden.github.io/animate.css/ for full list.
            var yourEffect = "slideInUp";
            var effectClass = "animated " + yourEffect;
            $( document ).ready(function() {
              $(yourElement).show().addClass(effectClass).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass();
              });
            }); 

             var yourElement1 = "#btn-next";
            //The effect that will be applied to your page element. See https://daneden.github.io/animate.css/ for full list.
            var yourEffect1 = "slideInUp";
            var effectClass1 = "animated " + yourEffect1;
            $( document ).ready(function() {
              $(yourElement1).show().addClass(effectClass1).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass();
              });
            });
/**
    * Do not remove this section; it allows our team to troubleshoot and track feature adoption. 
    * TS:0002-03-028
*/




        /**** TO RESIZE HEIGHT OF INTRODUCTION IMAGE TO HEIGHT OF WINDOW ****/
        $(document).ready(function(){
            
     
         


            
                 /*** Switch between calender and workout plan in home page ***/
            $('.row').click(function(){
           
                
            });
        
            var height = $(window).height() -70;
            var intPadding = height - 390;
            var strPadding = intPadding.toString() + 'px';
        $('#jintro-resize').css('height', height);
          $('#intro').css('padding-bottom',strPadding);
                          
        })
        
        
        
 

        $(document).on("mouseover", ".hover-btn-delete", function(){
            
       
               $(this).parent().parent().attr("data-toggle","");
               $(this).parent().parent().attr("onmouseover","");
              
            
            
        });

        $(document).on("mouseleave", ".hover-btn-delete", function(){
            
       
               $(this).parent().parent().attr("data-toggle","modal");
                $(this).parent().parent().attr("onmouseover","this.style.background ='darkgrey'");
            
            
        });


        $(document).on("click", "#switch-calender", function(){
            
       
           
            $("#switch-border").animate({ 
                marginLeft: "59%",
                borderWidth: "49%"
              
            })
            
            
            
            
        });


        $(document).on("click", ".switch-workout", function(){
            
       
           
            $("#switch-border").animate({ 
                marginLeft: "0%",
                borderWidth: "49%"
              
            })
            
            
            
            
        });

            
      /*       var px = $(window).width()-1200;
             var pxx = px/93;
         
             var str= px.toString()+"px";

             alert(str);
             
             $(".underline1-1").css('margin-left',str);
*/


        $(window).resize(function(){
         var height = $(window).height() -70;
            var intPadding = height - 390;
            var strPadding = intPadding.toString() + 'px';
        $('#jintro-resize').css('height', height);
          $('#intro').css('padding-bottom',strPadding);

           
        });

    
        

       
        /**** TO RESIZE HEIGHT OF INTRODUCTION TEXT TO HEIGHT OF SIBLINGS (FOR HOVER) ****/
        $(document).ready(function() {
          $(window).resize(function() {
              var featureheight = $(".intro-features").siblings().height();
              $(".intro-features").height(featureheight);
            }).resize();
        });

       

        
        $(document).on("mouseenter", "div.top-border-hover", function(){
                //alert($(window).width())
                if($(window).width() > 768)
                {
                    
              
                    var pix = $(this).children().find('p.weights').width() *4 -2 ;

                    var percent = (pix/ $(window).width())*100;
                    var str = percent.toString()+"%";



                    $(this).children().find('p.underline-1').animate({
                        'width' : str//moves right
                    },250);


                    var pix = $(this).children().find('p.setreps').width() * 4 -1 ;
                    var percent = (pix/ $(window).width())*100;
                    var str = percent.toString()+"%";



                    $(this).children().find('p.underline1-1').animate({
                    'width' : str//moves right
                    },250);
                    
                }
        });

        $(document).on("mouseleave", "div.top-border-hover", function(){
            
            if($(window).width() > 768)
                   {

                        var pix = $(this).children().find('p.weights').width() *4 -2 ;

                        var percent = (pix/ $(window).width())*100;
                        var str = percent.toString()+"%";



                        $(this).children().find('p.underline-1').animate({
                            'width' : "0%"//moves right
                        });


                        var pix = $(this).children().find('p.setreps').width() * 4 -1 ;
                        var percent = (pix/ $(window).width())*100;
                        var str = percent.toString()+"%";



                        $(this).children().find('p.underline1-1').animate({
                        'width' : "0%"//moves right
                        });

                   }
        });
      

        $(document).ready(function(){
        
      
            
            

            
            var height = $(window).height() -70;
            var intPadding = height - 400;
            var strPadding = intPadding.toString() + 'px';
            $('#jintro-resize').css('height', height);
               $('#underline-1').css('width', "15%");
          $('#intro').css('padding-bottom',strPadding);
            
            $('#underline-2').animate({
                    'width' : "15%"//moves right
                });
               
        
            
         
            
            $("div.row").children().children().mouseenter(function(){
                
             /*   
                var pix = $(this).children().find('p.weights').width() *4 -2 ;
                
                var percent = (pix/ $(window).width())*100;
                var str = percent.toString()+"%";
            
          
           
                $(this).children().find('p.underline-1').animate({
                    'width' : str//moves right
                });
                
                
                var pix = $(this).children().find('p.setreps').width() * 4 -1 ;
                var percent = (pix/ $(window).width())*100;
                var str = percent.toString()+"%";
            
          
               
                $(this).children().find('p.underline1-1').animate({
                'width' : str//moves right
                });*/
                
            });  
            
            $(".top-border-hover").mouseleave(function(){

           
                $(this).children().find('p.underline-1').animate({
                    'width' : "0%"//moves right
                });
   
                $(this).children().find('p.underline1-1').animate({
                'width' : "0%"//moves right
                });
                
            }); 
            

            
            
            
         /*   $('.todaysWorkout').hover(function(){
                
                $('#todaysWorkoutLabel').removeClass("global-color");
                $('#todaysWorkoutLabel').addClass("color-white");
                
                $('.td-middle').css('border-right','1px solid white');
                $('.td-middle').css('border-left','1px solid white');
            });
            
            
            $('.todaysWorkout').mouseleave(function(){
                
                $('#todaysWorkoutLabel').removeClass("color-white");
                $('#todaysWorkoutLabel').addClass("global-color");
                
                $('.td-middle').css('border-right','1px solid #347AB6');
                $('.td-middle').css('border-left','1px solid #347AB6');
                
            });*/
                          
        })
        
        $(window).resize(function(){
         var height = $(window).height() -70;
            var intPadding = height - 400;
            var strPadding = intPadding.toString() + 'px';
        $('#jintro-resize').css('height', height);
          $('#intro').css('padding-bottom',strPadding);
            
            
            
            
       
        });
            

            var enteronce = false;


             $(document).on("mouseenter", "div.tabletoday", function(){
                    var appendStr = '<div class="row align-center" style="display:table"><div class="col-xs-12"><div class="align-center" style="margin:0 auto;"><button class="btn-2 align-center"   data-ng-click="totracker();"  type="button" style="padding:7%;margin-bottom:22%" >Track Today\'s Workout</button></div></div></div>';
                    
                    if(!enteronce)
                    {
                       // $(".home-append").append(appendStr);
                        //$('.append-home-button').appendTo('.append-home').show('slow');
                        enteronce = true;
                        var $new = $('#append-home-button');
                        $('#appendhome').append($new);
                        $new.show('slow');  
                    }
          
             });
          
             

        /*** Bool Values to check the position of the label (animated or unanimated) ***/
        var emailbool = 0;
        
      

        
           var temp = [0,0,0,0,0,0,0,0,0,0,0,0,0];


         $(document).ready(function() {
             
             $("div.tabletoday").hover(function(){
                 //alert('yo');
             });
             $(window).resize(function(){
                 
            /*** Placeholder for fields in XS viewport ***/
             if($(window).width() < 768)
             {
                 $('#username').attr("placeholder","Username");
                 $('#email').attr("placeholder","Email");
                 $('#pass').attr("placeholder","Password");
                 $('#repass').attr("placeholder","Retype Password");
                 $('#lgusername').attr("placeholder","Username");
                 $('#lgpass').attr("placeholder","Password");
                 
              
             }
             else
             {
                 $('#username').attr("placeholder","");
                 $('#email').attr("placeholder","");
                 $('#pass').attr("placeholder","");
                 $('#repass').attr("placeholder","");    
                   $('#lgusername').attr("placeholder","");
           
                 $('#lgpass').attr("placeholder","");
                 
                   
             }
                 
                 
             });
        
             
             
             
             /*** Placeholder for fields in XS viewport ***/
             if($(window).width() < 768)
             {
                 $('#username').attr("placeholder","Username");
                 $('#email').attr("placeholder","Email");
                 $('#pass').attr("placeholder","Password");
                 $('#repass').attr("placeholder","Retype Password");
                $('#lgusername').attr("placeholder","Username");
           
                 $('#lgpass').attr("placeholder","Password");
                 
                 
             }
             else
             {
                 $('#username').attr("placeholder","");
                 $('#email').attr("placeholder","");
                 $('#pass').attr("placeholder","");
                 $('#repass').attr("placeholder","");   
                  
                   $('#lgusername').attr("placeholder","");
           
                 $('#lgpass').attr("placeholder","");
             }
             
             /*** focus() for input fields in XS ***/
             
                $('#username').focus(function(){
                    
                   if($(window).width() < 768)
                   {
                    
                   $(this).attr("placeholder","");
                //    $("#m-username-label").css("visibility", "visible"); 
                   $(".m-label-username").slideDown();
         
                   }

                });
                 
                   $('#email').focus(function(){
                    
                   if($(window).width() < 768)
                   {
                       
                   $(this).attr("placeholder","");
                //    $("#m-username-label").css("visibility", "visible"); 
                   $(".m-label-email").slideDown();
                       
                   }

                });
                 
                 $('#pass').focus(function(){
                   if($(window).width() < 768)
                   {
                       
                   $(this).attr("placeholder","");
                //    $("#m-username-label").css("visibility", "visible"); 
                   $(".m-label-password").slideDown();
                       
                   }

                });
                 
                 $('#repass').focus(function(){
                   if($(window).width() < 768)
                   {
                   $(this).attr("placeholder","");
                //    $("#m-username-label").css("visibility", "visible"); 
                   $(".m-label-repassword").slideDown();
                   }

                });
             
               $('#lgusername').focus(function(){
                    
                   if($(window).width() < 768)
                   {
                    
                   $(this).attr("placeholder","");
                //    $("#m-username-label").css("visibility", "visible"); 
                   $(".m-label-username").slideDown();
         
                   }

                });
             
              $('#lgpass').focus(function(){
                   if($(window).width() < 768)
                   {
                   $(this).attr("placeholder","");
                //    $("#m-username-label").css("visibility", "visible"); 
                   $(".m-label-password").slideDown();
                   }

                });
             
             

             
     
             
             $.each([ 2,3,4,5,6,7,8,9,10 ], function( index, value ) {
                 var lTempInt = index+1;
                 
                 var appendStr='<div data-ng-show="usertrackerplan[0].frequency >'+lTempInt.toString()+'" class="row box-shadow"  style="margin:2% 2%;"> <div class="col-md-12" ><div class="row top-border-hover tracker-hover"style="margin:1% 2%;margin-top:4%;margin-bottom:2%;" data-ng-init="showinput1=[0,0]"  > <div class="col-xs-7 inline-block col-md-4 m-tracker-right-border " style="border-right: 1px solid lightgrey;" > <p class="m-tracker-exercise tracker-weights" style="padding-top:0%;padding-bottom: 0;padding-left:5%;font-size:24px">{{usertrackerplan['+lTempInt.toString()+'].exercise}}</p> <p data-ng-click="showinput1[0]=1" class=" weights m-tracker-details" data-ng-show="showinput1[0]==0" style="display:inline-block;margin-top:-7%;margin-bottom:5%;margin-left:5%;color: #347AB6;border-bottom:1px solid; border-width:0px;position: relative;font-size:18px;z-index: 1;">{{usertrackerplan['+lTempInt.toString()+'].weights}}kg</p> <input type="text" class="from-control-1" data-ng-blur="showinput1[0]=0" data-ng-show= "showinput1[0]==1" > <p class=" setreps m-tracker-details" style="display:inline-block;margin-top:-7%;padding-left:20%;color: #347AB6;position: relative;font-size:18px;z-index: 1;">{{usertrackerplan['+lTempInt.toString()+'].set}} x {{usertrackerplan['+lTempInt.toString()+'].rep}}</p> <div style="margin-top:-2%;"> <p class=" underline-1" style="display:inline-block;margin-top:-4%;margin-bottom:6%;margin-left:5%;border-top:2px solid #347AB6;width:0%;font-size:12px"></p> <p class=" underline1-1" style="display:inline-block;margin-left:19%;display:inline-block;margin-top:-4%;margin-bottom:6%;border-top:2px solid #347AB6;width:0%;font-size:12px"></div></div><div class="m-display col-xs-5 col-md-0" ><div  style=" margin-left:0%;margin-top:0%; " data-ng-show="bool'+value.toString()+'<4"><button class="btn-next-set-' +value.toString()+ '  btn-2"  data-ng-click="bool'+value.toString()+'=bool'+value.toString()+'+1"  type="button" style="padding-left:2%;padding-right:2%;font-size:12px; padding:3% "  >Next Set</button></div> <div data-ng-show="bool'+value.toString()+'<5 && bool'+value.toString()+' >3" style="margin-left:0%;margin-top:0%;padding-left:2%;padding-right:2%; " ><button   data-ng-click="bool'+value.toString()+'=bool'+value.toString()+'+1" class=" btn-next-set-' +value.toString()+ '  btn-2" type="button" style="font-size:12px; padding:3%"   >Finish</button></div><div style="margin-top:-8%"><div style="font-size:30px; "  class="inline-block  circle-button "><p style="margin-top:-53%;margin-left:10%" data-ng-click="repcount'+value.toString()+'[bool'+value.toString()+']=repcount'+value.toString()+'[bool'+value.toString()+']--1;" >+</p></div> <div style="font-size:30px;margin-left:14%; "  class="inline-block  circle-button "><p style="margin-top:-53%;margin-left:28%" data-ng-click="repcount[bool'+value.toString()+']'+value.toString()+'=repcount[bool'+value.toString()+']'+value.toString()+'-1;">-</p></div> </div></div><div class="col-xs-12 col-md-8  text-center" data-ng-init="showinput=[0,0,0,0,0];clickenable=[false,false,false,false,false];bool'+value.toString()+'True=true;" id="tracker-content" style="margin-top:-1%"><hr class="m-display" style="margin-top:-5%"><div  style="margin-left:-70%;margin-top:0%; " data-ng-show="bool'+value.toString()+'<4"><button class="d-view btn-next-set-' +value.toString()+ '  btn-2"  data-ng-click="bool'+value.toString()+'=bool'+value.toString()+'+1"  type="button" style="padding-left:2%;padding-right:2%; "  >Next Set</button></div> <div data-ng-show="bool'+value.toString()+'<5 && bool'+value.toString()+' >3" style="margin-left:-70%;margin-top:0%;padding-left:2%;padding-right:2%; " ><button   data-ng-click="bool'+value.toString()+'=bool'+value.toString()+'+1" class="d-view btn-next-set-' +value.toString()+ '  btn-2" type="button"   >Finish</button></div> <!-- Text to be displayed after exercise is complete. --><div class="animated1 fadeIn" data-ng-show="bool'+value.toString()+'>4 " style="left:11%;top:45%;position:absolute;padding-left:2%;padding-right:2%; " >Congrats.</div> <!-- Dummy Block of code to keep next() absolute elements in place. --><div data-ng-show="bool'+value.toString()+'>4 "  style="margin-left:-70%;margin-top:0%;padding-left:2%;padding-right:2%;visibility:hidden " ><button   data-ng-click="bool'+value.toString()+'=bool'+value.toString()+'+1;clickenable[0] = true" class="btn-next-set-' +value.toString()+ '  btn-2" type="button"   >Finish</button></div> <span data-ng-show="bool'+value.toString()+'<5" data-ng-click="repcount'+value.toString()+'[bool'+value.toString()+']=repcount'+value.toString()+'[bool'+value.toString()+']--1;" class="d-view hvr-float fa fa-angle-up glyphicon-absolute tracker-glyphicon-up m-tracker-glyphicon-up global-color" style="font-size:30px"></span><span data-ng-show="bool'+value.toString()+'<5" data-ng-click="repcount'+value.toString()+'[bool'+value.toString()+']=repcount'+value.toString()+'[bool'+value.toString()+']-1;" class="d-view hvr-sink fa fa-angle-down glyphicon-absolute tracker-glyphicon-down m-tracker-glyphicon-down global-color" style="font-size:30px"></span><div  data-ng-hide="showinput[0]==1"class="circle-empty tracker-circle m-tracker-circle " id="'+value.toString()+'-set-tracker-1" data-ng-click="check(bool'+value.toString()+',0,1)" style="font-size:18px;margin-top:-11%;margin-left:-14.5%;position:absolute"  >{{repcount'+value.toString()+'[0]}}</div><input data-ng-blur="showinput[0] =0 " data-ng-show="showinput[0]==1" data-ng-model="repcount'+value.toString()+'[0]"  class="circle-default tracker-circle m-tracker-circle m-tracker-input-1" id="'+value.toString()+'-set-tracker-1" style="margin-left:40%;text-align:center;" ><div class="circle-empty tracker-circle m-tracker-circle" data-ng-show="bool'+value.toString()+'>0 && showinput[1]==0" id="'+value.toString()+'-set-tracker-2" data-ng-click="check(bool'+value.toString()+',1,2)">{{repcount'+value.toString()+'[1]}}</div><input data-ng-blur="showinput[1] =0" data-ng-show="showinput[1]==1" data-ng-model="repcount'+value.toString()+'[1]"  class="circle-default m-tracker-input-2 tracker-circle m-tracker-circle" id="'+value.toString()+'-set-tracker-2" style="margin-left:30%;text-align:center;" ><div class="circle-empty tracker-circle m-tracker-circle" data-ng-show="bool'+value.toString()+'>1 && showinput[2]==0" data-ng-click="check(bool'+value.toString()+',2,3)" id="'+value.toString()+'-set-tracker-3" >{{repcount'+value.toString()+'[2]}}</div><input data-ng-blur="showinput[2] =0" data-ng-show="showinput[2]==1" data-ng-model="repcount'+value.toString()+'[2]"  class="circle-default m-tracker-input-3 tracker-circle m-tracker-circle" id="'+value.toString()+'-set-tracker-2" style="margin-left:20%;text-align:center;" ><div class="circle-empty tracker-circle m-tracker-circle" data-ng-show="bool'+value.toString()+'>2 && showinput[3] ==0" id="'+value.toString()+'-set-tracker-4" data-ng-click="check(bool'+value.toString()+',3,4)">{{repcount'+value.toString()+'[3]}}</div><input data-ng-blur="showinput[3]=0" data-ng-show="showinput[3]==1" data-ng-model="repcount'+value.toString()+'[3]"  class="circle-default tracker-circle m-tracker-input-4 m-tracker-circle" id="'+value.toString()+'-set-tracker-2" style="margin-left:10%;text-align:center;" ><div class="circle-empty tracker-circle m-tracker-circle" data-ng-show="bool'+value.toString()+'>3 && showinput[4] ==0" id="'+value.toString()+'-set-tracker-5" data-ng-click="check(bool'+value.toString()+',4,5)">{{repcount'+value.toString()+'[4]}}</div><input data-ng-blur="showinput[4]=0" data-ng-show="showinput[4]==1" data-ng-model="repcount'+value.toString()+'[4]"  class="circle-default tracker-circle m-tracker-input-5 m-tracker-circle" id="'+value.toString()+'-set-tracker-2" style="margin-left:0%;text-align:center;" ></div></div></div></div>';
                 
                 
                 var appendStr1= '<div data-ng-show="usertrackerplan[0].frequency >'+lTempInt.toString()+'" class="row box-shadow"  style="margin:2% 2%;"> <div class="col-md-12"><div class="row top-border-hover"style="margin:1% 2%;" ><div class="col-xs-7 inline-block col-md-4 m-tracker-right-border" style="border-right: 1px solid lightgrey;padding-top:.5%;padding-bottom:.5%;"><p class="h3 tracker-weights" style="padding-top:0%;padding-bottom: 0;padding-left:5%">{{usertrackerplan['+lTempInt.toString()+'].exercise}}</p><p class="h4 weights"  style="display:inline-block;margin-top:-7%;margin-bottom:5%;margin-left:5%;color: #347AB6;border-bottom:1px solid; border-width:0px;">{{usertrackerplan['+lTempInt.toString()+'].weights}}</p><p class="h4 setreps" style="display:inline-block;margin-top:-7%;padding-left:20%;color: #347AB6">{{usertrackerplan['+lTempInt.toString()+'].set}} x {{usertrackerplan['+lTempInt.toString()+'].rep}}</p><div style="margin-top:-2%;"> <p class="h4 underline-1" style="margin-top:-4%;margin-bottom:5%;margin-left:5%;border-top:2px solid #347AB6;width:0%;display:inline-block;"></p><p class="h4 underline1-1" style="margin-top:-6%;margin-bottom:5%;margin-left:19%;display:inline-block;border-top:2px solid #347AB6;width:0%;"></p> </div></div> <div class="m-display col-xs-5 col-md-0" ><div  style=" margin-left:0%;margin-top:0%; " data-ng-show="bool'+value.toString()+'<4"><button class="btn-next-set-' +value.toString()+ ' btn-2"  data-ng-click="bool'+value.toString()+'=bool'+value.toString()+'+1"  type="button" style="padding-left:2%;padding-right:2%;font-size:12px; padding:3% "  >Next Set</button></div> <div data-ng-show="bool'+value.toString()+'<5 && bool'+value.toString()+' >3" style="margin-left:0%;margin-top:0%;padding-left:2%;padding-right:2%; " ><button   data-ng-click="bool'+value.toString()+'=bool'+value.toString()+'+1" class=" btn-next-set-' +value.toString()+ '  btn-2" type="button" style="font-size:12px; padding:2%"   >Finish</button></div> <div style="margin-top:-4%"><p style="font-size:30px; margin-top:0%" class="inline-block">+</p> <p style="font-size:30px; margin-left:20%" class="inline-block">-</p></div></div><div class="col-xs-8  text-center" id="tracker-content"> <div  style="margin-left:-70%;margin-top:0%; " data-ng-show="bool'+value.toString()+'<4"><button class="btn-next-set-' +value.toString()+ ' btn-2"  data-ng-click="bool'+value.toString()+'=bool'+value.toString()+'+1"  type="button" style="padding-left:2%;padding-right:2%; "  >Next Set</button></div><span data-ng-click="repcount'+value.toString()+'[bool'+value.toString()+']=repcount'+value.toString()+'[bool'+value.toString()+']--1;" class="hvr-float fa fa-angle-up glyphicon-absolute tracker-glyphicon-up global-color" style="font-size:30px"></span><span data-ng-click="repcount'+value.toString()+'[bool'+value.toString()+']=repcofunt'+value.toString()+'[bool'+value.toString()+']-1;"class="hvr-sink fa fa-angle-down glyphicon-absolute tracker-glyphicon-down global-color" style="font-size:30px"></span><div  style="margin-left:-70%;margin-top:0%;padding-left:2%;padding-right:2%; " data-ng-show="bool'+value.toString()+'>3"><button   data-ng-click="bool'+value.toString()+'=bool'+value.toString()+'+1" class="btn-next-set-' +value.toString()+ ' btn-2" type="button"   >Finish</button></div><div class="circle-empty tracker-circle m-tracker-circle" id="'+value.toString()+'-set-tracker-1" data-ng-click="repcount'+value.toString()+'[0]=repcount'+value.toString()+'[0]-1;" style="font-size:18px;margin-top:-11%;margin-left:-14.5%;position:absolute">{{repcount'+value.toString()+'[0]}}</div><div class="circle-empty tracker-circle m-tracker-circle" data-ng-show="bool'+value.toString()+'>0" id="'+value.toString()+'-set-tracker-2" data-ng-click="repcount'+value.toString()+'[1]=repcount'+value.toString()+'[1]-1;" style=>{{repcount'+value.toString()+'[1]}}</div><div class="circle-empty tracker-circle m-tracker-circle" data-ng-show="bool'+value.toString()+'>1"id="'+value.toString()+'-set-tracker-3" data-ng-click="repcount'+value.toString()+'[2]=repcount'+value.toString()+'[2]-1;" style=>{{repcount'+value.toString()+'[2]}}</div> <div class="circle-empty tracker-circle m-tracker-circle" data-ng-show="bool'+value.toString()+'>2"id="'+value.toString()+'-set-tracker-4" data-ng-click="repcount'+value.toString()+'[3]=repcount'+value.toString()+'[3]-1;" style=>{{repcount'+value.toString()+'[3]}}</div><div class="circle-empty tracker-circle m-tracker-circle" data-ng-show="bool'+value.toString()+'>3"id="'+value.toString()+'-set-tracker-5" data-ng-click="repcount'+value.toString()+'[4]=repcount'+value.toString()+'[4]-1;" style=>{{repcount'+value.toString()+'[4]}}</div></div></div></div></div>';
                 
   
                    $("#Append-Container").append(appendStr);
             
              });
             
             
             
   /*          
            $(document).on("click", ".weights", function(){
                
 
               $(this).next().focus();
                
             
            });
         
           
              $(document).on("click", ".circle-clickable", function(){
                
               $(this).next().focus();
 
                
            });
             
        $.each([ 2,3,4,5,6,7,8,9,10 ], function( index, value ) {
            
            
            var str = ".circle-clickable-" + value.toString();

             
            $(document).on("click", str, function(){
                
               $(this).next().focus();
 
                
            });
            
        
         });
              */
   
         $.each([ 1,2,3,4,5,6,7,8,9,10 ], function( index, value ) {
        
            var btnStr = ".btn-next-set-" + value.toString();
            
              $(btnStr).click(function() {
       
            temp[value]+=1;

            var setStr = "#" + value.toString() + "-set-tracker-" ;
            
            
   
            if(temp[value]==1)
            {
                var strDOM = setStr+temp[value].toString();
                var pix = 620;
                var percent = (pix/ $(window).width())*100;
                var str = "+="+percent.toString()+"%";
                $(strDOM).removeClass("circle-done");
                $(strDOM).addClass("circle-default");
                
                 // below XS settings
                if($(window).width() < 768)  
                {
                    
                     $(strDOM).animate({
                     'marginLeft' : "+=80%" //moves right
                     });
                    
                }
                // above XS settings
                else
                {
                     $(strDOM).animate({
                     'marginLeft' : "+=55%" //moves right
                     });
                    
                }
      
                $(strDOM).addClass("circle-clickable-"+value.toString());
      
                
            
            }else if(temp[value]==2)   
            {
                var strDOM = setStr+temp[value].toString();
                var pix = 500;
                var percent = (pix/ $(window).width())*100;
                var str = "+="+percent.toString()+"%";
                $(strDOM).removeClass("circle-done");
                $(strDOM).addClass("circle-default");
                
                // below XS settings
                if($(window).width() < 768)  
                {
                        $(strDOM).animate({
                        'marginLeft' : "+=60%"//moves right
                        });
                    
                }
                // above XS settings
                else
                {
                        $(strDOM).animate({
                        'marginLeft' : "+=45%"//moves right
                        });
                    
                }
           
                
                 $(strDOM).addClass("circle-clickable-"+value.toString());
                
            }else if(temp[value]==3)   
            {
                var strDOM = setStr+temp[value].toString();
                var pix = 380;
                var percent = (pix/ $(window).width())*100;
                var str = "+="+percent.toString()+"%";
                $(strDOM).removeClass("circle-done");
                $(strDOM).addClass("circle-default");
                
                 
                // below XS settings
                if($(window).width() < 768)  
                {
                        $(strDOM).animate({
                        'marginLeft' : "+=40%"//moves right
                        });
                    
                }
                // above XS settings
                else
                {
                        $(strDOM).animate({
                        'marginLeft' : "+=35%"//moves right
                        });
                    
                }
            
                
                 $(strDOM).addClass("circle-clickable-"+value.toString());
                
            }else if(temp[value]==4)   
            {
                var strDOM = setStr+temp[value].toString();
                var pix = 260;
                var percent = (pix/ $(window).width())*100;
                var str = "+="+percent.toString()+"%";
                $(strDOM).removeClass("circle-done");
                $(strDOM).addClass("circle-default");
                
                 
                // below XS settings
                if($(window).width() < 768)  
                {
                        $(strDOM).animate({
                        'marginLeft' : "+=20%"//moves right
                        });
                    
                }
                // above XS settings
                else
                {
                        $(strDOM).animate({
                        'marginLeft' : "+=25%"//moves right
                        });
                    
                }
            
                
                 $(strDOM).addClass("circle-clickable-"+value.toString());
                
            }else if(temp[value]==5)   
            {
                var strDOM = setStr+temp[value].toString();
                var pix = 140;
                var percent = (pix/ $(window).width())*100;
                var str = "+="+percent.toString()+"%";
                $(strDOM).removeClass("circle-done");
                $(strDOM).addClass("circle-default");
                
                 
                // below XS settings
                if($(window).width() < 768)  
                {
                        $(strDOM).animate({
                        'marginLeft' : "+=0%"//moves right
                        });
                    
                }
                // above XS settings
                else
                {
                        $(strDOM).animate({
                        'marginLeft' : "+=15%"//moves right
                        });
                    
                }
             
                
                 $(strDOM).addClass("circle-clickable-"+value.toString());
                
            }
            
         });
  
         });


        });



    

        
     
     
      /*** Animate input field to the left ***/
       $(document).ready(function() {
        
           var i = 1;
           

        /*8   alert( value);

         
            
         $(btnStr).click(function() {
            temp+=1;
             
             $.each([ 1,2,3,4,5 ], function( index, value ) {
     
            var btnStr = ".btn-next-set-" + value.toString();
            
            alert(btnStr);
 

   
            if(temp==1)
            {
                var pix = 620;
                var percent = (pix/ $(window).width())*100;
                var str = "+="+percent.toString()+"%";
                $('#set-tracker-1').removeClass("circle-done");
                $('#set-tracker-1').addClass("circle-default");
                $('#set-tracker-1').animate({
                'marginLeft' : "+=55%" //moves right
                });
            }else if(temp==2)   
            {
                var pix = 500;
                var percent = (pix/ $(window).width())*100;
                var str = "+="+percent.toString()+"%";
                $('#set-tracker-2').removeClass("circle-done");
                $('#set-tracker-2').addClass("circle-default");
                $('#set-tracker-2').animate({
                'marginLeft' : "+=45%"//moves right
                });
                
            }else if(temp==3)   
            {
                var pix = 380;
                var percent = (pix/ $(window).width())*100;
                var str = "+="+percent.toString()+"%";
                $('#set-tracker-3').removeClass("circle-done");
                $('#set-tracker-3').addClass("circle-default");
                $('#set-tracker-3').animate({
                'marginLeft' : "+=35%" //moves right
                });
                
            }else if(temp==4)   
            {
                var pix = 260;
                var percent = (pix/ $(window).width())*100;
                var str = "+="+percent.toString()+"%";
                $('#set-tracker-4').removeClass("circle-done");
                $('#set-tracker-4').addClass("circle-default");
                $('#set-tracker-4').animate({
                'marginLeft' : "+=25%" //moves right
                });
                
            }else if(temp==5)   
            {
                var pix = 140;
                var percent = (pix/ $(window).width())*100;
                var str = "+="+percent.toString()+"%";
                $('#set-tracker-5').removeClass("circle-done");
                $('#set-tracker-5').addClass("circle-default");
                $('#set-tracker-5').animate({
                'marginLeft' : "+=15%" //moves right
                });
                
            }
            
         });
        });*/
            

        
           var percentemail = 0;
  
        
        $('#email').focus(function() {
            var pix = 80;
            var percentemail = (pix/ $(window).width())*100;
            var str = "-="+percentemail.toString()+"%";
          
            $('.animate-left').animate({
            'marginLeft' : str //moves right
            });
            
            var marginleft = 35-percentemail;
            var str1 = marginleft.toString()+"%";
            $('.label-su-dirty-1').css('margin-left',str1 );
            
          
            
  
        });
            

        
            //35%
            
        /** Too make sure that the labels scale accordingly when window is resized **/
        $(window).resize(function(){
            
            /*** For Username ***/
            var percent = (112/ $(window).width())*100;

            var marginleft = 35-percent;
            var str1 = marginleft.toString()+"%";
            $('.label-su-dirty-4').css('margin-left',str1 );
            
            
            /*** For Email ***/
            var percentemail = (80/ $(window).width())*100;
            var str = "-="+percentemail.toString()+"%";
          
            
            var marginleft = 35-percentemail;
            var str1 = marginleft.toString()+"%";
            $('.label-su-dirty-1').css('margin-left',str1 );
            
            
            /*** For Password ***/
            var percent = (111/ $(window).width())*100;
            var str1 = "-="+percent.toString()+"%";
            
            var marginleft = 35-percent;
            var str11 = marginleft.toString()+"%";
            $('.label-su-dirty-2').css('margin-left',str11 );
            
            /*** For Retype Password ***/
            var percent = (164/ $(window).width())*100;
            var str2 = "-="+percent.toString()+"%";
            
            var marginleft = 35-percent;
            var str12 = marginleft.toString()+"%";
            $('.label-su-dirty-3').css('margin-left',str12 );
            
        
        });

        
        $('#pass').focus(function() {
            var pix = 111;
            var percent = (pix/ $(window).width())*100;
            var str = "-="+percent.toString()+"%";
            
            
            $('.animate-left-1').animate({
            'marginLeft' : str //moves right
            });
            
            var marginleft = 35-percent;
            var str1 = marginleft.toString()+"%";
            $('.label-su-dirty-2').css('margin-left',str1 );

            

        });


        $('#repass').focus(function() {
            var pix = 164;
            var percent = (pix/ $(window).width())*100;
            var str = "-="+percent.toString()+"%";
            
            
            $('.animate-left-2').animate({
            'marginLeft' : str //moves right
            });
            
            var marginleft = 35-percent;
            var str1 = marginleft.toString()+"%";
            $('.label-su-dirty-3').css('margin-left',str1 );
        });
        
        $('#username').focus(function() {
            var pix = 112;
            var percent = (pix/ $(window).width())*100;
            var str = "-="+percent.toString()+"%";
            
            console.log(percent.toString());
            
            
            $('.animate-left-3').animate({
            'marginLeft' : str //moves right
            });
            
            var marginleft = 35-percent;
            var str1 = marginleft.toString()+"%";
            $('.label-su-dirty-4').css('margin-left',str1 );
        });
            
        $('#lgusername').focus(function() {
            var pix = 112;
            var percent = (pix/ $(window).width())*100;
            var str = "-="+percent.toString()+"%";
            
            console.log(percent.toString());
            
            
            $('.animate-left-3').animate({
            'marginLeft' : str //moves right
            });
            
            var marginleft = 35-percent;
            var str1 = marginleft.toString()+"%";
            $('.label-su-dirty-4').css('margin-left',str1 );
        });
            
        $('#lgpass').focus(function() {
            var pix = 111;
            var percent = (pix/ $(window).width())*100;
            var str = "-="+percent.toString()+"%";
            
            
            $('.animate-left-1').animate({
            'marginLeft' : str //moves right
            });
            
            var marginleft = 35-percent;
            var str1 = marginleft.toString()+"%";
            $('.label-su-dirty-2').css('margin-left',str1 );
        });
        
        });

        /*** Animate input field to the left ***/
        $(document).ready(function() {
        $('#email').blur(function() {
            var pix = 80;
            var percent = (pix/ $(window).width())*100;
            var str = "+="+percent.toString()+"%";
            
            console.log(percent.toString());
            
            
            $('.animate-left').animate({
            'marginLeft' : str //moves right
            });
        });
            
        $('#pass').blur(function() {
         var pix = 111;
            var percent = (pix/ $(window).width())*100;
            var str = "+="+percent.toString()+"%";
            
            console.log(percent.toString());
            
            
            $('.animate-left-1').animate({
            'marginLeft' : str //moves right
            });
        });
            
        $('#repass').blur(function() {
            var pix = 164;
            var percent = (pix/ $(window).width())*100;
            var str = "+="+percent.toString()+"%";
            
            console.log(percent.toString());
            
            
            $('.animate-left-2').animate({
            'marginLeft' : str //moves right
            });
        
        });
            
        
        $('#username').blur(function() {
            
            var pix = 112;
            var percent = (pix/ $(window).width())*100;
            var str = "+="+percent.toString()+"%";
            
            
            $('.animate-left-3').animate({
            'marginLeft' : str //moves right
            });
        });
            
        $('#lgusername').blur(function() {
   
            var pix = 112;
            var percent = (pix/ $(window).width())*100;
            var str = "+="+percent.toString()+"%";
            
            
            $('.animate-left-3').animate({
            'marginLeft' : str //moves right
            });

        });

            
         $('#lgpass').blur(function() {

            var pix = 111;
            var percent = (pix/ $(window).width())*100;
            var str = "+="+percent.toString()+"%";
            
            
            $('.animate-left-1').animate({
            'marginLeft' : str //moves right
            });
            

        });
        });



       
        $(document).ready(function() {
        $('.ques-btn').click(function() {
            $(this).parent().next('.ques-group-hide').children("p").css({"font-size":"20px","color":"black"});
            
            $(this).parent().next('.ques-group-hide').children("div").css({"font-size":"15px"});
         
            
            $(this).parent().next('.ques-group-hide').css( {"background-color": "transparent", "width":"auto", "height":"auto", "border-radius":"50%", "-moz-border-radius":"50%", "-webkit-border-radius":"50%"});
              
        });
            
         $('.ques-btn').click(function() {
            $(this).siblings(".ques-btn").removeClass("ques-btn-selected").addClass("ques-btn");
            $(this).addClass("ques-btn-selected");
             
            window.scrollTo(0, 200);
            
        });

        });
        




        



        
        
