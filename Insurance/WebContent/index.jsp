<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
    <head>
      <meta charset="UTF-8">
      <meta name="google-site-verification" content="sJ5_Sr9P30c4bf61RucTot6PDqAePEzYmCWrA5cTHho" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Insurance Deals</title>
      <meta name="description" content="Review In 5 Easy Steps">
      <meta property="og:title" content="Insurance - Compare Insurance Quotes in UAE - Car Insurance, Health Insurance, Travel Insurance, Group Medical, Home Insurance" />
      <meta name="keywords" content="compare, insurance,car Insurance, health Insurance, travel Insurance,Group Medical,Professional Indemnity, home Insurance, corporate, quotes, online, plans, policy, best, UAE, companies, buy">
      <meta property="og:url" content="http://insurancedeals.online/" />
      <meta property="og:description" content="Compare insurance policies offered by various Insurance Companies in UAE & buy insurance policy online. Get the best quotes & save money.">
      <meta property="og:image" content="images/insurance-deals-favicon.png">
      <meta property="og:type" content="article" />
      <link rel="stylesheet" href="css/bootstrap.css">
      <link rel="stylesheet" href="css/style.css">
      <link rel="stylesheet" href="css/style-new.css">
      <link href="css/font-awesome.min.css" rel="stylesheet">
      <link rel="icon" href="images/insurance-deals-favicon.png" type="image/x-icon">
      
      <!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1947556555564322');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=1947556555564322&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->

    </head>
    <body>
     <nav class="navbar navbar-inverse id-home">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
             </button>
            <a href="index" class="navbar-brand"><img src="images/insurance-deals-logo.png"></a>
          
        </div>
        <!-- Collection of nav links, forms, and other content for toggling -->
        <div id="navbarCollapse" class="collapse navbar-collapse">
            <ul class="nav navbar-nav pull-right"> 
                <li><a href="http://insurancedeals.online/">Home</a></li>
                <li><a href="about">About</a></li>
                 <li><a href="http://www.gatewayinsurance.ae/payonline.php">Make Payment</a></li>
              </ul>
        </div>
    </nav>
       <div class="main id-home-page">
        <div class="head-section">
         
      <div class="container">
        <p class="page-title main-page">Best Portal To Compare Insurance in UAE Simple! Fast! Unbiased! </p>
          <div class="my-wrapper home">
            <form id="msform" name="myform"  action="property-action.php"  method="post" onsubmit="return validateForm()"  enctype="multipart/form-data">
                 <!-- Health Step 1 -->
                  <fieldset id="insurance-deals-main" class="year">
                    <div class="insurance-deals-icons view-block">
                        <div class="col-md-12 col-xs-12">
                          <p class="wrapper-title business-insurance-type">Choose Your Insurance Option</p>
                        </div>
                         <div class=" row-1  col-md-12 col-sm-12 col-xs-12">
                            <div class="col-md-4 col-sm-4  col-xs-6">
                                <a href="vehicle" class="business-step1-button" value="AED 50000-75000" onclick="changeRent(this)"><img src="icons/vehicle-insurance.png"> Vehicle<br> Insurance</a>
                           </div>
                           <div class="col-md-4 col-sm-4 col-xs-6">
                               <a  href="health" class="business-step1-button" value="AED 75000-100000" onclick="changeRent(this)"><img src="icons/health-insurance.png">Health<br> Insurance</a>
                           </div>
                          <div class="col-md-4 col-sm-4 col-xs-6">
                              <a  href="travel" class="business-step1-button" value="AED 100000-150000" onclick="changeRent(this)"><img src="icons/single-travel.png">Travel<br>  Insurance</a>
                          </div>

                        </div>
                        <div class=" insurance-deals-icons row-2 view-block">
                          <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="col-md-4 col-sm-4 col-xs-6">
                                <a  href="property" class="business-step1-button" value="AED 100000-150000" onclick="changeRent(this)"><img src="icons/property-insurance.png"> Property<br> Insurance</a>
                           </div>
                           <div class="col-md-4 col-sm-4 col-xs-6">
                               <a  href="business" class="business-step1-button" value="AED 200000-250000" onclick="changeRent(this)"><img src="icons/business-insurance.png"> Business<br>  Insurance </a>
                           </div>
                           <div class="col-md-4 col-sm-4 col-xs-6">
                               <a  href="life" class="business-step1-button" value="AED 200000-250000" onclick="changeRent(this)"><img src="icons/life-insurance.png">Life<br>  Insurance</a>
                           </div>
                        </div>
                      </div>
                      </div>
                      <!-- Business Step 1 Mobile-->
                      <div class="view-mobile">
                        <div class="insurance-deals-icons ">
                          <div class="col-xs-12">
                            <p class="wrapper-title business-insurance-type">Choose Your Insurance Option</p>
                          </div>
                        <div class="col-xs-12">
                           <div class="col-xs-6">
                               <a href="vehicle"class="business-step1-button" value="Aed 50000-75000" onclick="changeRent(this)"><img src="icons/vehicle-insurance.png">Vehicle<br> Insurance</a>
                           </div>
                           <div class="col-xs-6">
                               <a href="health" class="business-step1-button" value="Aed 75000-100000" onclick="changeRent(this)"><img src="icons/health-insurance.png">Health<br> Insurance</a>
                          </div>
                        </div>
                        <div class="col-xs-12">
                         <div class="col-xs-6 ">
                             <a href="travel" class="business-step1-button" value="Aed 100000-150000" onclick="changeRent(this)"><img src="icons/travel-insurance.png">Travel<br> Insurance</a>
                          </div>
                          <div class="col-xs-6">
                              <a href="property" class="business-step1-button" value="Aed 150000-200000" onclick="changeRent(this)"><img src="icons/property-insurance.png">Property<br> Insurance</a>
                          </div>
                        </div>
                        <div class="col-xs-12">
                          <div class="col-xs-6">
                              <a href="business" class="business-step1-button" value="Aed 200000-250000" onclick="changeRent(this)"> <img src="icons/business-insurance.png">Business<br> Insurance</a>
                          </div>
                          <div class="col-xs-6">
                              <a href="life" class="business-step1-button" value="Aed 200000-250000" onclick="changeRent(this)"><img src="icons/life-insurance.png"> Life<br> Insurance</a>
                          </div>
                        </div>

                        </div>
                      </div>                    
                      <input type="hidden" id="rent" name="rent"/>
                     </fieldset>

                  
              </form>
            </div>
          </div>
        </div>
        <div class="body-section">
        </div>
       </div>
       <div class="id-what-we-do-container ">
        <div class="container">
       	<h2>What We Offer</h2>
       	
       	<div class="what-we-offer row">
       	  <div class="what-we-offer-box vehicle col-xs-12 col-sm-6 col-md-4  ">
       	  	<div class="offer-image">
       	  		<img src="images/vehicle-offer.png" alt="Vehicle Insurance">
       	  	</div>
       	  	<div class="offer-content">
       	  	 <h3>Vehicle Insurance</h3>
       	  	 <p>Get Quick and Easy Insurance Quotes In UAE.</p>
       	  	 <ul>
       	  	    <li>Its 100 % Free.</li>
       	  	    <li>Get up to 5 quotes from the insurance provider you choose.</li>
       	  	    <li>Independent and unbiased.</li>
       	  	    
       	  	 </ul>
       	  	 <div class="offer-button">
       	  	 	<a href="vehicle">Apply Now</a>
       	  	 </div>

       	  	</div>
       	  </div>
       	  
       	   <div class="what-we-offer-box health col-xs-12 col-sm-6 col-md-4  ">
       	   <div class="offer-image">
       	  		<img src="images/health-offer.png" alt="Health Insurance">
       	  	</div>
       	  	<div class="offer-content">
       	  	 <h3>Health Insurance</h3>
       	  	 <p>We provide the best deals on Health Insurance in UAE.</p>
       	  	 <ul>
       	  	    <li>Compare the right Plan according to your affordability, Hospital selection and Required medical coverage.</li>
       	  	    <li>Our Insurance expert will give you the custom made  quotes from different insurance companies.</li>

       	  	 </ul>
       	  	 <div class="offer-button">
       	  	 	<a href="health">Apply Now</a>
       	  	 </div>

       	  	</div>
       	  </div>
       	   <div class="what-we-offer-box travel col-xs-12 col-sm-6 col-md-4  ">
       	   <div class="offer-image">
       	  		<img src="images/travel-offer.png" alt="Travel Insurance">
       	  	</div>
       	  	<div class="offer-content">
       	  	 <h3>Travel Insurance</h3>
       	  	 <p>Protect your Trip with,</p>
       	  	 <ul>
       	  	    <li>Medical Emergency</li>
       	  	    <li>Stolen  Passport</li>
       	  	    <li>Lost Baggage</li>
       	  	    <li>Cancelled Flight</li>
       	  	 </ul>
       	  	 <div class="offer-button">
       	  	 	<a href="travel">Apply Now</a>
       	  	 </div>

       	  	</div>
       	  </div>
       	  
       	   <div class="what-we-offer-box life col-xs-12 col-sm-6 col-md-4  ">
       	   <div class="offer-image">
       	  		<img src="images/life-offer.png" alt="Life Insurance">
       	  	</div>
       	  	<div class="offer-content">
       	  	 <h3>Life Insurance</h3>
       	  	 <p>Life Can Change Quickly !</p>
       	  	 <ul>
       	  	    <li>Adequately Protect You and Your Family from Unforeseen Events like Critical Illness, Disability.</li>
       	  	    <li>Compare Different Protection Plans.</li>
       	  	    <li>Get FREE Reports.</li>
       	  	    
       	  	 </ul>
       	  	 <div class="offer-button">
       	  	 	<a href="life">Apply Now</a>
       	  	 </div>

       	  	</div>
       	  </div>
       	   <div class="what-we-offer-box property col-xs-12 col-sm-6 col-md-4  ">
       	   <div class="offer-image">
       	  		<img src="images/property-offer.png" alt="Property Insurance">
       	  	</div>
       	  	<div class="offer-content">
       	  	 <h3>Property Insurance</h3>
       	  	 <p>Safe Guard your property and belongings</p>
       	  	 <ul>
       	  	    <li>Get Free Quotes.</li>
       	  	    <li>Compare quotes & Choose the best.</li>
       	  	    
       	  	 </ul>
       	  	 <div class="offer-button">
       	  	 	<a href="property">Apply Now</a>
       	  	 </div>

       	  	</div>
       	  </div>
       	   <div class="what-we-offer-box business col-xs-12 col-sm-6 col-md-4  ">
       	   <div class="offer-image">
       	  		<img src="images/business-offer.png" alt="Business Insurance">
       	  	</div>
       	  	<div class="offer-content">
       	  	 <h3>Business Insurance</h3>
       	  	 <p>Protect your Commercial Assets, property Fleets, equipment, Employees and Conduct</p>
       	  	 <ul>
       	  	    <li>Get Comparison quotes</li>
       	  	    <li>Choose the Right one</li>
       	  	    
       	  	 </ul>
       	  	 <div class="offer-button">
       	  	 	<a href="business">Apply Now</a>
       	  	 </div>

       	  	</div>
       	  </div>
       	   
       	  
       	</div>
        </div>
       </div>
       <div class="id-benefits">
       	<div class="container ">
       	 <div class="benefit save-money col-md-4 col-xs-12">
       	   <div class="benefit-icon">
       	     <img src="images/save-money.png">
       	   </div>
       	   <div class="benefit-content">
       	    <h4>Saves Money</h4>
       	    <p>By comparing plans with us you can save a large amount of money every year.</p>
       	    <p>Money Saver</p>
       	   </div>
       	</div>
       	
       	<div class="benefit fast col-md-4 col-xs-12">
       	   <div class="benefit-icon">
       	     <img src="images/benefits-fast.png">
       	   </div>
       	   <div class="benefit-content">
       	    <h4>Fast</h4>
       	    <p>In just a few hours, , we will send you competitive quotes from different insurance companies.</p>
       	    <p>Quick Comparison</p>
       	   </div>
       	</div>
       	
       	<div class="benefit unbiased col-md-4 col-xs-12">
       	   <div class="benefit-icon">
       	     <img src="images/benefits-unbiased.png">
       	   </div>
       	   <div class="benefit-content">
       	    <h4>Un-biased</h4>
       	    <p>We will send you quotes from all insurance companies partnered with us. No one is left out!</p>
       	    <p>Fair Comparison</p>
       	   </div>
       	</div>
       	</div>
       
       </div>
       <div class="compare-section">
        <div class="container">
         <h3>Compare the appropriate insurance options that suits your requirements</h3>
         <div class="compare-step about-your-self col-md-4 col-xs-12">
         <div class="compare-icon">
          <img src="images/tell-us-about-yourself.jpg">
          </div>
          <div class="compare-content">
          <h4>Tell Us About Yourself</h4>
          <p>Our insurance experts pairs your profile with insurance plans that match you.</p>
          </div>
         
         </div>
         <div class="compare-step about-your-self col-md-4 col-xs-12">
         <div class="compare-icon">
          <img src="images/find-your-best-plan.jpg">
          </div>
          <div class="compare-content">
          <h4>Find Your Best Plan</h4>
          <p>Compare plans side-by-side. Make the best decision about which plan is right for you.</p>
          </div>
         
         </div>
         <div class="compare-step about-your-self col-md-4 col-xs-12">
         <div class="compare-icon">
          <img src="images/enroll-onyour-terms.jpg">
          </div>
          <div class="compare-content">
          <h4>Enroll on Your Terms</h4>
          <p>Choose how to buy. Online, or through the phone with a licensed agent.</p>
          </div>
         
         </div>
        <div>
       </div>
       </div>
       </div>
       
       <div class="id-footer">
       <div class="container">
        <div class="footer-col column-1  col-md-4 col-xs-12">
         <div class="footer-logo">
         
          </div>
                 
         </div>
            <div class="footer-col  column-2 col-md-4 col-xs-12">
          <div class="footer-icon">
          <a href="https://www.facebook.com/insurancedeals.online"><img src="/images/facebook-icon.png"></a><img src="/images/instagram-icon.png"><img src="/images/linkedin-icon.png"><img src="/images/twitter-icon.png">
          </div>
          
         
         </div>
            <div class="footer-col  column-2 col-md-4 col-xs-12">
        
        
         
         </div>
         </div>
         <div>
       <p class="id-about-company"><a href="http://insurancedeals.online/" style="color: #76b947 !important; border-bottom: 1px solid #76b947;">www.insurancedeals.online</a> is affiliated to Gateway Insurance Brokers LLC and the insurance quotes are provided by gateway, regulated by the UAE Insurance Autority (Registration Number: 226 )
       </div>
         
       <hr>
       <div class="container">
       <div class="col-xs-12 col-md-6">
       <p class="copy-right"> &copy; 2018 Copyright Protected. All rights reserved.</p>
       </div>
       <div class="col-xs-12 col-md-6">
       <p class="privacy-policy"><a href="privacy-and-policy">Privacy & Policy</a></p>
       </div>
      </div>
       </div>
     

    </body>
    <script src="https://use.fontawesome.com/3ec33b1a7c.js"></script>
      <script type="text/javascript" src="js/datepicker/jquery-1.11.1.min.js"></script>
     <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/jquery.easing.min.js"></script>
  <script src="js/insurance.js"></script>

<!--  <script type="text/javascript" src="js/bootstrap-datetimepicker.js" charset="UTF-8"></script>-->
    <script type="text/javascript">
    function changeRent(o){
       var x=(o.getAttribute("value"));
       console.log(x);
     document.getElementById('rent').value=x;
    }
    function changeIncome(o){
       var x=(o.getAttribute("value"));
       console.log(x);
     document.getElementById('income').value=x;
    }
    function changePropType(o){
       var x=(o.getAttribute("value"));
       console.log(x);
     document.getElementById('prop_type').value=x;
    }
    function changeLoan(o){
       var x=(o.getAttribute("value"));
       console.log(x);
     document.getElementById('loan').value=x;
    }
     function changeDownPayment(o){
       var x=(o.getAttribute("value"));
       console.log(x);
     document.getElementById('down_payment').value=x;
    }
    
 
    </script>
</html>

      