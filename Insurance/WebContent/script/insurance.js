var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

var current_fs1, next_fs1, previous_fs1; //fieldsets
var left1, opacity1, scale1; //fieldset properties which we will animate
var animating1; //flag to prevent quick multi-click glitches

 $("img").on("taphold", function(event) {
   event.preventDefault();
   event.stopImmediatePropagation();
}) 


$(".vehicle-new-progress-bar").hide();

$("#pran_doc_submit").click(function(){
    $(".vehicle-new-progress-bar").show();
});

/* Vehicle*/
$(".vehicle-insurance-step1-button-new").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#vehicle-insurance-step1");;   
    next_fs = $("#vehicle-insurance-step2");   
    insurance_deals_next() ;
});

$(".vehicle-insurance-step1-button-renew").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#vehicle-insurance-step1");;   
    next_fs = $("#vehicle-insurance-step3");   
    insurance_deals_next() ;
});

$(".vehicle-insurance-step2-button").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#vehicle-insurance-step2");;   
    next_fs = $("#vehicle-insurance-step4");   
    insurance_deals_next() ;
});

$(".vehicle-insurance-step2-renew-button").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#vehicle-insurance-step2-renew");;   
    next_fs = $("#vehicle-insurance-step4-renew");   
    insurance_deals_next() ;
});

$(".vehicle-insurance-step3-button").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#vehicle-insurance-step3");;   
    next_fs = $("#vehicle-insurance-step2-renew");   
    insurance_deals_next() ;
});

$(".vehicle-insurance-step3-button-other").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#vehicle-insurance-step3");;   
    next_fs = $("#vehicle-insurance-step2-renew");   
    insurance_deals_next() ;
});


$(".vehicle_new_step4_next").click(function(){
    var brand = document.forms["myform"]["vehicle_new_brand"].value;
    if (brand == 'SELECT VEHICLE BRAND') {
        $(".flabel_vehicle_brand_new").css('color','red');
        $('.flabel_vehicle_brand_new').html('Vehicle Brand Must Select').show();
        return false;
    }
    if(animating) return false;
    animating = true;
    current_fs =$("#vehicle-insurance-step4");;   
    next_fs = $("#vehicle-insurance-step5");   
    insurance_deals_next() ;
});

$(".vehicle_renew_step4_next").click(function(){
	var brand = document.forms["myform"]["vehicle_renew_brand"].value;
    	if (brand == 'SELECT VEHICLE BRAND') {
        $(".flabel_vehicle_brand_renew").css('color','red');
        $('.flabel_vehicle_brand_renew').html('Vehicle Brand Must Select').show();
        return false;
    }
    if(animating) return false;
    animating = true;
    current_fs =$("#vehicle-insurance-step4-renew");;   
    next_fs = $("#vehicle-insurance-step5-renew");   
    insurance_deals_next() ;
});
  
  $(".vehicle-step2-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#vehicle-insurance-step2");

  previous_fs = $("#vehicle-insurance-step1");
  insurance_deals_prev() ;
  });

$(".vehicle-insurance-step4-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#vehicle-insurance-step4");

  previous_fs = $("#vehicle-insurance-step2");
  insurance_deals_prev() ;
  });
  
  $(".vehicle-insurance-step5-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#vehicle-insurance-step5");

  previous_fs = $("#vehicle-insurance-step4");
  insurance_deals_prev() ;
  });
  
  $(".vehicle-insurance-step4-renew-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#vehicle-insurance-step4-renew");

  previous_fs = $("#vehicle-insurance-step2-renew");
  insurance_deals_prev() ;
  });
  
  $(".vehicle-insurance-step3-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#vehicle-insurance-step3");

  previous_fs = $("#vehicle-insurance-step1");
  insurance_deals_prev() ;
  });

$(".vehicle-step2-renew-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#vehicle-insurance-step2-renew");

  previous_fs = $("#vehicle-insurance-step3");
  insurance_deals_prev() ;
  });
  
  $(".vehicle-insurance-step5-renew-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#vehicle-insurance-step5-renew");

  previous_fs = $("#vehicle-insurance-step4-renew");
  insurance_deals_prev() ;
  });
   /* Vehicle End*/
  
  
/* Health*/

$(".health-step1-button").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#health-step1");;   
    next_fs = $("#health-step2");   
    insurance_deals_next() ;
});

$(".health-step2-button").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#health-step2");;   
    next_fs = $("#health-step3");   
    insurance_deals_next() ;
});


$(".health-step2-button-other").click(function(){

	var cov_other = document.forms["myform"]["cover_for_other"].value;
    	if (cov_other == 'Opt Health Insurance For') {
        	$(".health-step2-other-label").css('color','red');
        	$('.health-step2-other-label').html('Please Select Any Option').show();
        	return false;
    	}
    if(animating) return false;
  current_fs =$("#health-step2");
   
  next_fs = $("#health-step3");
   
  insurance_deals_next() ;
  });
  
$(".health-step3-button").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#health-step3");;   
    next_fs = $("#health-step4");   
    insurance_deals_next() ;
});

$(".health-step4-button").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#health-step4");;   
    next_fs = $("#health-step5");   
    insurance_deals_next() ;
});

$(".health-step1-button-other").click(function(){
      
      var p = document.forms["myform"]["coverage-other"].value;
    if (p == "") {
        alert("year must be filled out");
        return false;
    }
      
  if(animating) return false;
  animating = true;
   $(".modal-backdrop.in").css("opacity", 0);
  current_fs =$("#health-step1");
   
  next_fs = $("#health-step2");
   
  insurance_deals_next() ;
  });
  
  $(".health-step4-button-other").click(function(){
  
   var cov_amnt_other = document.forms["myform"]["coverage-other"].value;
    if (cov_amnt_other == '') {
        $(".health-step4-other-label").css('color','red');
        $('.health-step4-other-label').html('Please Fill The Amount').show();
        return false;
    }
       
  if(animating) return false;
  animating = true;
   $(".modal-backdrop.in").css("opacity", 0);
  current_fs =$("#health-step4");
   
  next_fs = $("#health-step5");
   
  insurance_deals_next() ;
  });

$(".health-step2-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#health-step2");

  previous_fs = $("#health-step1");
  insurance_deals_prev() ;
  });
  
  $(".health-step3-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#health-step3");

  previous_fs = $("#health-step2");
  insurance_deals_prev() ;
  });
  
  $(".health-step4-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#health-step4");

  previous_fs = $("#health-step3");
  insurance_deals_prev() ;
  });
  
  $(".health-step5-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#health-step5");

  previous_fs = $("#health-step4");
  insurance_deals_prev() ;
  });

/*Health End*/



/*Property*/

$(".property-step1-button").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#property-step1");;   
    next_fs = $("#property-step2");   
    insurance_deals_next() ;
});

$(".property-step2-button").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#property-step2");;   
    next_fs = $("#property-step3");   
    insurance_deals_next() ;
});

$(".property-step3-button").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#property-step3");;   
    next_fs = $("#property-step4");   
    insurance_deals_next() ;
});

$(".property-step3-button-other").click(function(){

var property_exist_insure_other = document.forms["myform"]["exist_insure_other"].value;
    if (property_exist_insure_other == 'Select Existing Insurance') {
        $(".property-step3-otther-label").css('color','red');
        $('.property-step3-otther-label').html('Please Select the Existing Insurance').show();
        return false;
    }
       
  if(animating) return false;
  animating = true;
   $(".modal-backdrop.in").css("opacity", 0);
  current_fs =$("#property-step3");
   
  next_fs = $("#property-step4");
   
  insurance_deals_next() ;
  });

 $(".property-step2-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#property-step2");

  previous_fs = $("#property-step1");
  insurance_deals_prev() ;
  });
  
  $(".property-step3-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#property-step3");

  previous_fs = $("#property-step2");
  insurance_deals_prev() ;
  });
  
  $(".property-step4-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#property-step4");

  previous_fs = $("#property-step3");
  insurance_deals_prev() ;
  });
  

/*Property End*/
  
  
  /*Business*/


$(".business-step1-button").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#business-step1");;   
    next_fs = $("#business-step2");   
    insurance_deals_next() ;
});

$(".business-step1-button-other").click(function(){

 var business_type_insure_other = document.forms["myform"]["insure_type_other"].value;
    if (business_type_insure_other == 'Select Insurance Type') {
        $(".business-step1-other-label").css('color','red');
        $('.business-step1-other-label').html('Please Select the Existing Insurance').show();
        return false;
    }

    if(animating) return false;
    animating = true;
    $(".modal-backdrop.in").css("opacity", 0);
    current_fs =$("#business-step1");;   
    next_fs = $("#business-step2");   
    insurance_deals_next() ;
});

$(".business-step2-button").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#business-step2");;   
    next_fs = $("#business-step3");   
    insurance_deals_next() ;
});


$(".business-step2-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#business-step2");

  previous_fs = $("#business-step1");
  insurance_deals_prev() ;
  });
  
  $(".business-step3-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#business-step3");

  previous_fs = $("#business-step2");
  insurance_deals_prev() ;
  });

/*Business End*/


/*Life*/

$(".life-step1-button").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#life-step1");;   
    next_fs = $("#life-step2");   
    insurance_deals_next() ;
});

$(".life-step2-button").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#life-step2");;   
    next_fs = $("#life-step3");   
    insurance_deals_next() ;
});

$(".life-step2-button-other").click(function(){

var life_family_income_other = document.forms["myform"]["income-other"].value;
    if (life_family_income_other == '') {
        $(".life-step2-other-label").css('color','red');
        $('.life-step2-other-label').html('Please Enter the Family Income').show();
        return false;
    }
       
  if(animating) return false;
  animating = true;
   $(".modal-backdrop.in").css("opacity", 0);
  current_fs =$("#life-step2");
   
  next_fs = $("#life-step3");
   
  insurance_deals_next() ;
  });

$(".life-step3-button").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#life-step3");;   
    next_fs = $("#life-step4");   
    insurance_deals_next() ;
});
$(".life-step4-button").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#life-step4");;   
    next_fs = $("#life-step5");   
    insurance_deals_next() ;
});

$(".life-step4-button-other").click(function(){

var life_amount_coverage_other = document.forms["myform"]["coverage-other"].value;
    if (life_amount_coverage_other == '') {
        $(".life-step4-other-label").css('color','red');
        $('.life-step4-other-label').html('Please Enter the Amount of Coverage').show();
        return false;
    }
       
  if(animating) return false;
  animating = true;
   $(".modal-backdrop.in").css("opacity", 0);
  current_fs =$("#life-step4");
   
  next_fs = $("#life-step5");
   
  insurance_deals_next() ;
  });


$(".life-step2-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#life-step2");

  previous_fs = $("#life-step1");
  insurance_deals_prev() ;
  });
  
  $(".life-step3-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#life-step3");

  previous_fs = $("#life-step2");
  insurance_deals_prev() ;
  });
  
   $(".life-step4-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#life-step4");

  previous_fs = $("#life-step3");
  insurance_deals_prev() ;
  });
  
  $(".life-step5-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#life-step5");

  previous_fs = $("#life-step4");
  insurance_deals_prev() ;
  });

/*life End*/

/*Travel*/

$(".travel-step1-button").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#travel-step1");;   
    next_fs = $("#travel-step2");   
    insurance_deals_next() ;
});

$(".travel-step2-button").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#travel-step2");;   
    next_fs = $("#travel-step3");   
    insurance_deals_next() ;
});

$(".travel-step2-button-other").click(function(){

	var travel_dest_other = document.forms["myform"]["destination_other"].value;
    	if (travel_dest_other == 'Select Destination') {
	        $(".travel-step2-other-label").css('color','red');
	        $('.travel-step2-other-label').html('Please Select the Travel Destination').show();
        	return false;
    	}
       
  if(animating) return false;
  animating = true;
   $(".modal-backdrop.in").css("opacity", 0);
  current_fs =$("#travel-step2");
   
  next_fs = $("#travel-step3");
   
  insurance_deals_next() ;
  });

$(".travel-step3-button").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#travel-step3");;   
    next_fs = $("#travel-step4");   
    insurance_deals_next() ;
});

$(".travel-step4-button").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#travel-step4");;   
    next_fs = $("#travel-step5");   
    insurance_deals_next() ;
});

$(".travel-step5-button").click(function(){
    if(animating) return false;
    animating = true;
    current_fs =$("#travel-step5");;   
    next_fs = $("#travel-step6");   
    insurance_deals_next() ;
});


$(".travel-step4-button-other").click(function(){

var travel_cover_other = document.forms["myform"]["cover_for_other"].value;
    if (travel_cover_other == 'Opt Coverage For') {
        $(".travel-step4-other-label").css('color','red');
        $('.travel-step4-other-label').html('Please Select the Coverage Type').show();
        return false;
    }
       
  if(animating) return false;
  animating = true;
   $(".modal-backdrop.in").css("opacity", 0);
  current_fs =$("#travel-step4");
   
  next_fs = $("#travel-step5");
   
  insurance_deals_next() ;
  });

$(".travel-step2-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#travel-step2");

  previous_fs = $("#travel-step1");
  insurance_deals_prev() ;
  });
  
  $(".travel-step3-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#travel-step3");

  previous_fs = $("#travel-step2");
  insurance_deals_prev() ;
  });
  
  $(".travel-step4-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#travel-step4");

  previous_fs = $("#travel-step3");
  insurance_deals_prev() ;
  });
  
  $(".travel-step5-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#travel-step5");

  previous_fs = $("#travel-step4");
  insurance_deals_prev() ;
  });
  
  $(".travel-step6-previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs =$("#travel-step6");

  previous_fs = $("#travel-step5");
  insurance_deals_prev() ;
  });

/*Travel*/

 
function insurance_deals_next() {
    next_fs.show(); 
    current_fs.animate({opacity: 0}, {
    step: function(now, mx) {
      left = (now * 0)+"%";
      opacity = 1 - now;
      current_fs.css({
         'position': 'absolute'
      });
      next_fs.css({'left': left, 'opacity': opacity});
    }, 
    duration: 800, 
    complete: function(){
      current_fs.hide();
      animating = false;
    }, 
    easing: 'easeInOutBack'
  });
}

function insurance_deals_prev() {  
   previous_fs.show(); 
   current_fs.animate({opacity: 0}, {
    step: function(now, mx) {
      left = ((1-now) * 1)+"%";
      opacity = 1- now;
      current_fs.css({'left': left});
      previous_fs.css({ 'opacity': opacity});
    }, 
    duration: 800, 
    complete: function(){
      current_fs.hide();
      animating = false;
    }, 
    easing: 'easeInOutBack'
  });
}


function validateHealthForm() {
    var x = document.forms["myform"]["health_name"].value;
    var y = document.forms["myform"]["health_email"].value;
    var z = document.forms["myform"]["health_uae_no"].value;
    
    if (x == "") {
        $(".flabel_name").css('color','red');
        $('.flabel_name').html('Name Must be Filled Out').show();
        return false;
    }
    if (x.length < 3) {
        $(".flabel_name").css('color','red');
        $('.flabel_name').html('Enter a Valid Name').show();
        return false;
    }
    
    if (y == "") {
        $(".flabel_email").css('color','red');
        $('.flabel_email').html('Email Id Must be Filled Out').show();
        return false;
    }
    var atpos = y.indexOf("@");
    var dotpos = y.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=y.length) {
        $(".flabel_email").css('color','red');
        $('.flabel_email').html('Enter a Valid Email Id').show();
        return false;
    }
   
    if (z == "") {
        $(".flabel_phn").css('color','red');
        $('.flabel_phn').html('Phone Number Must be Filled Out').show();
        return false;
    }
    if (!(z.length == 10 || z.length == 9)) {
        $(".flabel_phn").css('color','red');
        $('.flabel_phn').html('Enter A 9/10 Digit Phone Number').show();
        return false;
    }
    if(isNaN(z)){
        $(".flabel_phn").css('color','red');
        $('.flabel_phn').html('Please Enter Numeric Digits Only').show();
        return false; 
    }
}

function validateTravelForm() {
    var x = document.forms["myform"]["travel_name"].value;
    var y = document.forms["myform"]["travel_email"].value;
    var z = document.forms["myform"]["travel_uae_no"].value;
    
    if (x == "") {
        $(".flabel_name").css('color','red');
        $('.flabel_name').html('Name Must be Filled Out').show();
        return false;
    }
    if (x.length < 3) {
        $(".flabel_name").css('color','red');
        $('.flabel_name').html('Enter a Valid Name').show();
        return false;
    }
    
    if (y == "") {
        $(".flabel_email").css('color','red');
        $('.flabel_email').html('Email Id Must be Filled Out').show();
        return false;
    }
    var atpos = y.indexOf("@");
    var dotpos = y.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=y.length) {
        $(".flabel_email").css('color','red');
        $('.flabel_email').html('Enter a Valid Email Id').show();
        return false;
    }
   
    if (z == "") {
        $(".flabel_phn").css('color','red');
        $('.flabel_phn').html('Phone Number Must be Filled Out').show();
        return false;
    }
    if (!(z.length == 10 || z.length == 9)) {
        $(".flabel_phn").css('color','red');
        $('.flabel_phn').html('Enter A 9/10 Digit Phone Number').show();
        return false;
    }
    if(isNaN(z)){
        $(".flabel_phn").css('color','red');
        $('.flabel_phn').html('Please Enter Numeric Digits Only').show();
        return false; 
    }
}

function validatePropertyForm() {
    var x = document.forms["myform"]["property_name"].value;
    var y = document.forms["myform"]["property_email"].value;
    var z = document.forms["myform"]["property_uae_no"].value;
    
    if (x == "") {
        $(".flabel_name").css('color','red');
        $('.flabel_name').html('Name Must be Filled Out').show();
        return false;
    }
    if (x.length < 3) {
        $(".flabel_name").css('color','red');
        $('.flabel_name').html('Enter a Valid Name').show();
        return false;
    }
    
    if (y == "") {
        $(".flabel_email").css('color','red');
        $('.flabel_email').html('Email Id Must be Filled Out').show();
        return false;
    }
    var atpos = y.indexOf("@");
    var dotpos = y.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=y.length) {
        $(".flabel_email").css('color','red');
        $('.flabel_email').html('Enter a Valid Email Id').show();
        return false;
    }
   
    if (z == "") {
        $(".flabel_phn").css('color','red');
        $('.flabel_phn').html('Phone Number Must be Filled Out').show();
        return false;
    }
    if (!(z.length == 10 || z.length == 9)) {
        $(".flabel_phn").css('color','red');
        $('.flabel_phn').html('Enter A 9/10 Digit Phone Number').show();
        return false;
    }
    if(isNaN(z)){
        $(".flabel_phn").css('color','red');
        $('.flabel_phn').html('Please Enter Numeric Digits Only').show();
        return false; 
    }
}

function validateBusinessForm() {
    var x = document.forms["myform"]["business_name"].value;
    var y = document.forms["myform"]["business_email"].value;
    var z = document.forms["myform"]["business_uae_no"].value;
    var p = document.forms["myform"]["business_ofc_no"].value;
    
    if (x == "") {
        $(".flabel_name").css('color','red');
        $('.flabel_name').html('Name Must be Filled Out').show();
        return false;
    }
    if (x.length < 3) {
        $(".flabel_name").css('color','red');
        $('.flabel_name').html('Enter a Valid Name').show();
        return false;
    }
    
    if (y == "") {
        $(".flabel_email").css('color','red');
        $('.flabel_email').html('Email Id Must be Filled Out').show();
        return false;
    }
    var atpos = y.indexOf("@");
    var dotpos = y.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=y.length) {
        $(".flabel_email").css('color','red');
        $('.flabel_email').html('Enter a Valid Email Id').show();
        return false;
    }
   
    if (z == "") {
        $(".flabel_phn").css('color','red');
        $('.flabel_phn').html('Phone Number Must be Filled Out').show();
        return false;
    }
    if (!(z.length == 10 || z.length == 9)) {
        $(".flabel_phn").css('color','red');
        $('.flabel_phn').html('Enter A 9/10 Digit Phone Number').show();
        return false;
    }
    if(isNaN(z)){
        $(".flabel_phn").css('color','red');
        $('.flabel_phn').html('Please Enter Numeric Digits Only').show();
        return false; 
    }
    
    if (p == "") {
        $(".flabel_phn_ofc").css('color','red');
        $('.flabel_phn_ofc').html('Phone Number Must be Filled Out').show();
        return false;
    }
    if (!(p.length == 10 || z.length == 9)) {
        $(".flabel_phn_ofc").css('color','red');
        $('.flabel_phn_ofc').html('Enter A 9/10 Digit Phone Number').show();
        return false;
    }
    if(isNaN(p)){
        $(".flabel_phn_ofc").css('color','red');
        $('.flabel_phn_ofc').html('Please Enter Numeric Digits Only').show();
        return false; 
    }
}

function validateLifeForm() {
    var x = document.forms["myform"]["life_name"].value;
    var y = document.forms["myform"]["life_email"].value;
    var z = document.forms["myform"]["life_uae_no"].value;
    var p = document.forms["myform"]["life_age"].value;
    
    if (x == "") {
        $(".flabel_name").css('color','red');
        $('.flabel_name').html('Name Must be Filled Out').show();
        return false;
    }
    if (x.length < 3) {
        $(".flabel_name").css('color','red');
        $('.flabel_name').html('Enter a Valid Name').show();
        return false;
    }
    
    if (y == "") {
        $(".flabel_email").css('color','red');
        $('.flabel_email').html('Email Id Must be Filled Out').show();
        return false;
    }
    var atpos = y.indexOf("@");
    var dotpos = y.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=y.length) {
        $(".flabel_email").css('color','red');
        $('.flabel_email').html('Enter a Valid Email Id').show();
        return false;
    }
   
    if (z == "") {
        $(".flabel_phn").css('color','red');
        $('.flabel_phn').html('Phone Number Must be Filled Out').show();
        return false;
    }
    if (!(z.length == 10 || z.length == 9)) {
        $(".flabel_phn").css('color','red');
        $('.flabel_phn').html('Enter A 9/10 Digit Phone Number').show();
        return false;
    }
    if(isNaN(z)){
        $(".flabel_phn").css('color','red');
        $('.flabel_phn').html('Please Enter Numeric Digits Only').show();
        return false; 
    }
    
    if (p == "") {
        $(".flabel_age").css('color','red');
        $('.flabel_age').html('Age Must be Filled Out').show();
        return false;
    }
    if (!(p.length <= 10)) {
        $(".flabel_age").css('color','red');
        $('.flabel_age').html('Enter A Valid Age').show();
        return false;
    }
    if(isNaN(p)){
        $(".flabel_age").css('color','red');
        $('.flabel_age').html('Please Enter Numeric Digits Only').show();
        return false; 
    }
}

$('#submit_new_vehicle_form').click(function(){
     var x = document.forms["myform"]["vehicle_new_name"].value;
    var y = document.forms["myform"]["vehicle_new_email"].value;
    var z = document.forms["myform"]["vehicle_new_uae_no"].value;
    
    if (x == "") {
        $(".flabel_name").css('color','red');
        $('.flabel_name').html('Name Must be Filled Out').show();
        return false;
    }
    if (x.length < 3) {
        $(".flabel_name").css('color','red');
        $('.flabel_name').html('Enter a Valid Name').show();
        return false;
    }
    
    if (y == "") {
        $(".flabel_email").css('color','red');
        $('.flabel_email').html('Email Id Must be Filled Out').show();
        return false;
    }
    var atpos = y.indexOf("@");
    var dotpos = y.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=y.length) {
        $(".flabel_email").css('color','red');
        $('.flabel_email').html('Enter a Valid Email Id').show();
        return false;
    }
   
    if (z == "") {
        $(".flabel_phn").css('color','red');
        $('.flabel_phn').html('Phone Number Must be Filled Out').show();
        return false;
    }
    if (!(z.length == 10 || z.length == 9)) {
        $(".flabel_phn").css('color','red');
        $('.flabel_phn').html('Enter A 9/10 Digit Phone Number').show();
        return false;
    }
    if(isNaN(z)){
        $(".flabel_phn").css('color','red');
        $('.flabel_phn').html('Please Enter Numeric Digits Only').show();
        return false; 
    }
    
});

$('#submit_renew_vehicle_form').click(function(){
     var x = document.forms["myform"]["vehicle_renew_name"].value;
    var y = document.forms["myform"]["vehicle_renew_email"].value;
    var z = document.forms["myform"]["vehicle_renew_uae_no"].value;
    
    if (x == "") {
        $(".flabel_name").css('color','red');
        $('.flabel_name').html('Name Must be Filled Out').show();
        return false;
    }
    if (x.length < 3) {
        $(".flabel_name").css('color','red');
        $('.flabel_name').html('Enter a Valid Name').show();
        return false;
    }
    
    if (y == "") {
        $(".flabel_email").css('color','red');
        $('.flabel_email').html('Email Id Must be Filled Out').show();
        return false;
    }
    var atpos = y.indexOf("@");
    var dotpos = y.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=y.length) {
        $(".flabel_email").css('color','red');
        $('.flabel_email').html('Enter a Valid Email Id').show();
        return false;
    }
   
    if (z == "") {
        $(".flabel_phn").css('color','red');
        $('.flabel_phn').html('Phone Number Must be Filled Out').show();
        return false;
    }
    if (!(z.length == 10 || z.length == 9)) {
        $(".flabel_phn").css('color','red');
        $('.flabel_phn').html('Enter A 9/10 Digit Phone Number').show();
        return false;
    }
    if(isNaN(z)){
        $(".flabel_phn").css('color','red');
        $('.flabel_phn').html('Please Enter Numeric Digits Only').show();
        return false; 
    }
    
});



//vehicle new file upload
$('#new_driving_lisence').change(function(){
  var name = document.getElementById('new_driving_lisence');
  var initial = name.files.item(0).name;
  var split = initial.split('.');
  var filename = split[0];
  var extension = split[1];
  if (filename.length > 10) {
    filename = filename.substring(0, 15);
  }
  var result = 'Licence_'+filename + '.' + extension; 
  $("#new_driving_lisence_label").css('color','white');
   $('#new_driving_lisence_label').html(result).show();

   if (extension!="png" && extension!="jpg" && extension!="gif" && extension!="jpeg" && extension!="pdf") {
    $("#new_driving_lisence_label").css('color','red');
    $('#new_driving_lisence_label').html('Select png, jpg, gif, jpeg, pdf file').show();
   }
});

$('#new_mulky_copy').change(function(){
  var name = document.getElementById('new_mulky_copy');
  var initial = name.files.item(0).name;
  var split = initial.split('.');
  var filename = split[0];
  var extension = split[1];
  if (filename.length > 10) {
    filename = filename.substring(0, 15);
  }
  var result = 'Mulkiya_'+filename + '.' + extension; 
  $("#new_mulky_copy_label").css('color','white');
   $('#new_mulky_copy_label').html(result).show();

   if (extension!="png" && extension!="jpg" && extension!="gif" && extension!="jpeg" && extension!="pdf") {
    $("#new_mulky_copy_label").css('color','red');
    $('#new_mulky_copy_label').html('Select png, jpg, gif, jpeg, pdf file').show();
   }
});

$('#new_emirates_id_front').change(function(){
  var name = document.getElementById('new_emirates_id_front');
  var initial = name.files.item(0).name;
  var split = initial.split('.');
  var filename = split[0];
  var extension = split[1];
  if (filename.length > 10) {
    filename = filename.substring(0, 15);
  }
  var result = 'IdFront_'+filename + '.' + extension; 
  $("#new_emirates_id_front_label").css('color','white');
   $('#new_emirates_id_front_label').html(result).show();

   if (extension!="png" && extension!="jpg" && extension!="gif" && extension!="jpeg" && extension!="pdf") {
    $("#new_emirates_id_front_label").css('color','red');
    $('#new_emirates_id_front_label').html('Select png, jpg, gif, jpeg, pdf file').show();
   }
});

$('#new_emirates_id_back').change(function(){
  var name = document.getElementById('new_emirates_id_back');
  var initial = name.files.item(0).name;
  var split = initial.split('.');
  var filename = split[0];
  var extension = split[1];
  if (filename.length > 10) {
    filename = filename.substring(0, 15);
  }
  var result = 'IdBack_'+filename + '.' + extension; 
  $("#new_emirates_id_back_label").css('color','white');
   $('#new_emirates_id_back_label').html(result).show();

   if (extension!="png" && extension!="jpg" && extension!="gif" && extension!="jpeg" && extension!="pdf") {
    $("#new_emirates_id_back_label").css('color','red');
    $('#new_emirates_id_back_label').html('Select png, jpg, gif, jpeg, pdf file').show();
   }
});

//validate personal data before submitting form
$('#vehicle_new_preview').click(function(){
  
    var x = document.getElementById("new_driving_lisence").files.length;
    var y = document.getElementById("new_mulky_copy").files.length;
    var z = document.getElementById("new_emirates_id_front").files.length;
    var a = document.getElementById("new_emirates_id_back").files.length;
    
    // validating fil extension
    var x_val = $("#new_driving_lisence").val();
    var x_ext = x_val.split('.').pop().toUpperCase();
    if (x_ext!="PNG" && x_ext!="JPG" && x_ext!="GIF" && x_ext!="JPEG" && x_ext!="PDF") {
        x_val = 0;
    }

    var y_val = $("#new_mulky_copy").val();
    var y_ext = y_val.split('.').pop().toUpperCase();
    if (y_ext!="PNG" && y_ext!="JPG" && y_ext!="GIF" && y_ext!="JPEG" && x_ext!="PDF") {
        y_val = 0;
    }

    var z_val = $("#new_emirates_id_front").val();
    var z_ext = z_val.split('.').pop().toUpperCase();
    if (z_ext!="PNG" && z_ext!="JPG" && z_ext!="GIF" && z_ext!="JPEG" && x_ext!="PDF") {
        z_val = 0;
    }

    var a_val = $("#new_emirates_id_back").val();
    var a_ext = a_val.split('.').pop().toUpperCase();
    if (a_ext!="PNG" && a_ext!="JPG" && a_ext!="GIF" && a_ext!="JPEG" && x_ext!="PDF") {
        a_val = 0;
    }
    
    
    //checking if field is empty    
    if(x == 0){
      $("#new_driving_lisence_label").css('color','red');
      $("#new_driving_lisence_label").html('Select driving licence').show();
    }
    if(y == 0){
      $("#new_mulky_copy_label").css('color','red');
      $("#new_mulky_copy_label").html('Select Mulkiya Copy').show();
    }
    if(z == 0){
      $("#new_emirates_id_front_label").css('color','red');
      $("#new_emirates_id_front_label").html('Select Emirates ID Front').show();
    }
    if(a == 0){
      $("#new_emirates_id_back_label").css('color','red');
      $("#new_emirates_id_back_label").html('Select Emirates ID Back').show();
    }
    
     //only submit form if file extension is correct and image is selected
      if(x != 0 && y != 0 && z != 0 && a != 0 && x_val != 0 && y_val != 0 && z_val != 0 && a_val != 0) {
        return true;
      }
      else {
        return false;
      }
 });
 
 
 //vehicle renew file upload
$('#renew_driving_lisence').change(function(){
  var name = document.getElementById('renew_driving_lisence');
  var initial = name.files.item(0).name;
  var split = initial.split('.');
  var filename = split[0];
  var extension = split[1];
  if (filename.length > 10) {
    filename = filename.substring(0, 15);
  }
  var result = 'Licence_'+filename + '.' + extension; 
  $("#renew_driving_lisence_label").css('color','black');
   $('#renew_driving_lisence_label').html(result).show();

   if (extension!="png" && extension!="jpg" && extension!="gif" && extension!="jpeg" && extension!="pdf") {
    $("#renew_driving_lisence_label").css('color','red');
    $('#renew_driving_lisence_label').html('Select png, jpg, gif, jpeg, pdf file').show();
   }
});

$('#renew_mulky_copy').change(function(){
  var name = document.getElementById('renew_mulky_copy');
  var initial = name.files.item(0).name;
  var split = initial.split('.');
  var filename = split[0];
  var extension = split[1];
  if (filename.length > 10) {
    filename = filename.substring(0, 15);
  }
  var result = 'Mulkiya_'+filename + '.' + extension; 
  $("#renew_mulky_copy_label").css('color','black');
   $('#renew_mulky_copy_label').html(result).show();

   if (extension!="png" && extension!="jpg" && extension!="gif" && extension!="jpeg" && extension!="pdf") {
    $("#renew_mulky_copy_label").css('color','red');
    $('#renew_mulky_copy_label').html('Select png, jpg, gif, jpeg, pdf file').show();
   }
});

$('#renew_emirates_id_front').change(function(){
  var name = document.getElementById('renew_emirates_id_front');
  var initial = name.files.item(0).name;
  var split = initial.split('.');
  var filename = split[0];
  var extension = split[1];
  if (filename.length > 10) {
    filename = filename.substring(0, 15);
  }
  var result = 'IdFront_'+filename + '.' + extension; 
  $("#renew_emirates_id_front_label").css('color','black');
   $('#renew_emirates_id_front_label').html(result).show();

   if (extension!="png" && extension!="jpg" && extension!="gif" && extension!="jpeg" && extension!="pdf") {
    $("#renew_emirates_id_front_label").css('color','red');
    $('#renew_emirates_id_front_label').html('Select png, jpg, gif, jpeg, pdf file').show();
   }
});

$('#renew_emirates_id_back').change(function(){
  var name = document.getElementById('renew_emirates_id_back');
  var initial = name.files.item(0).name;
  var split = initial.split('.');
  var filename = split[0];
  var extension = split[1];
  if (filename.length > 10) {
    filename = filename.substring(0, 15);
  }
  var result = 'IdBack_'+filename + '.' + extension; 
  $("#renew_emirates_id_back_label").css('color','black');
   $('#renew_emirates_id_back_label').html(result).show();

   if (extension!="png" && extension!="jpg" && extension!="gif" && extension!="jpeg" && extension!="pdf") {
    $("#renew_emirates_id_back_label").css('color','red');
    $('#renew_emirates_id_back_label').html('Select png, jpg, gif, jpeg, pdf file').show();
   }
});

//validate personal data before submitting form
$('#vehicle_renew_preview').click(function(){
  
    var x = document.getElementById("renew_driving_lisence").files.length;
    var y = document.getElementById("renew_mulky_copy").files.length;
    var z = document.getElementById("renew_emirates_id_front").files.length;
    var a = document.getElementById("renew_emirates_id_back").files.length;
    
    // validating fil extension
    var x_val = $("#renew_driving_lisence").val();
    var x_ext = x_val.split('.').pop().toUpperCase();
    if (x_ext!="PNG" && x_ext!="JPG" && x_ext!="GIF" && x_ext!="JPEG" && x_ext!="PDF") {
        x_val = 0;
    }

    var y_val = $("#renew_mulky_copy").val();
    var y_ext = y_val.split('.').pop().toUpperCase();
    if (y_ext!="PNG" && y_ext!="JPG" && y_ext!="GIF" && y_ext!="JPEG" && x_ext!="PDF") {
        y_val = 0;
    }

    var z_val = $("#renew_emirates_id_front").val();
    var z_ext = z_val.split('.').pop().toUpperCase();
    if (z_ext!="PNG" && z_ext!="JPG" && z_ext!="GIF" && z_ext!="JPEG" && x_ext!="PDF") {
        z_val = 0;
    }

    var a_val = $("#renew_emirates_id_back").val();
    var a_ext = a_val.split('.').pop().toUpperCase();
    if (a_ext!="PNG" && a_ext!="JPG" && a_ext!="GIF" && a_ext!="JPEG" && x_ext!="PDF") {
        a_val = 0;
    }
    
    
    //checking if field is empty    
    if(x == 0){
      $("#renew_driving_lisence_label").css('color','red');
      $("#renew_driving_lisence_label").html('Select driving licence').show();
    }
    if(y == 0){
      $("#renew_mulky_copy_label").css('color','red');
      $("#renew_mulky_copy_label").html('Select Mulkiya Copy').show();
    }
    if(z == 0){
      $("#renew_emirates_id_front_label").css('color','red');
      $("#renew_emirates_id_front_label").html('Select Emirates ID Front').show();
    }
    if(a == 0){
      $("#renew_emirates_id_back_label").css('color','red');
      $("#renew_emirates_id_back_label").html('Select Emirates ID Back').show();
    }
    
     //only submit form if file extension is correct and image is selected
      if(x != 0 && y != 0 && z != 0 && a != 0 && x_val != 0 && y_val != 0 && z_val != 0 && a_val != 0) {
        return true;
      }
      else {
        return false;
      }
 });

document.getElementById("previous-to-index").onclick = function () {
        location.href = "index";
    };

