import React from 'react';

function Mymarket(){
 return(
    <div>
     <div class="container-fluid body">
        {/*    <div class="left-side-menu">
	<div class="panel-group" id="accordion">
		     </div>		
  </div> */}
	  
         <div class="main_container" id="sticky">
  
<div class="right_col" role="main">
   <div class="row">
      <div class="col-md-12">
         <div class="title_new_at"> My Market</div>
      </div>
      <div class="col-md-12 col-sm-12 col-xs-12">
         <div id="divLoading"> </div>
        {/* <!--Loading class --> */} 
		 <div class="table-scroll" id="filterdata">
         <table class="table table-striped jambo_table bulk_action">
            <thead>
               <tr class="headings">
                  <th>S.No. </th>
                  <th>Match Name </th>
                  <th>Date</th>
                  <th>Sport Name</th>
                  <th>Match Status </th>
                  <th>Team A </th>
                  <th>Team B </th>
                  <th>Draw </th>                        
               </tr>
            </thead>
            <tbody>
                
               <tr><th colspan = '6'>No record found</th></tr>	
            </tbody>
         </table>
            </div>
           </div>
         </div>
       </div>         
      <div>
    </div>    
   </div>
    </div>
    </div>
    );
  }
 export default Mymarket;