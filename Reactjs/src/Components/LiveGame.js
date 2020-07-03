import React from 'react';

function Livegame(){
    return(
        <div class="container-fluid body">
        <div class="main_container" id="sticky">

<div class="main-content">
<div class="main-inner">
<section class="match-content">
<div class="table_tittle"> CLIENT LIVE GAME BETS REPORT </div>
<div class="col-md-12 col-sm-12 col-xs-12">
<div class="clearfix data-background">
<input type="hidden" name="ajaxUrl" id="ajaxUrl" value="gameclientbet"/>
<form method="get" class="form-horizontal form-label-left input_mask" id="formSubmit">
  <div className="row m-0 p-0"> 
  <div class="col-sm-2 col-xs-6">
   <input type="text" name="from_date" value="" id="from-date" class="form-control col-md-7 col-xs-12 has-feedback-left datetimepicker" placeholder="From date" autocomplete="off"/>
   </div>
   <div class="col-sm-2 col-xs-6">
   <input type="text" name="to_date" value="" id="to-date" class="form-control col-md-7 col-xs-12 has-feedback-left datetimepicker" placeholder="To date" autocomplete="off"/>
   </div>
   <div class="col-sm-2 col-xs-6"><input type="text" name="searchUserName" value="" id="searchUserName" class="form-control" placeholder="Users"  />
</div>			 
    <div class="col-sm-2 col-xs-6">
       <select name="searchType" class="form-control">
           <option value="" selected >All Game</option> 
           <option value="56767"  >Live Teenpatti</option>
           <option value="87564"  >Andar bahar</option>
           <option value="67564" >Poker</option>
           <option value="98789"  >7 up & Down</option>
           <option value="56967"  >32 cards casino</option>
           <option value="56968"  >Hi low</option>
           <option value="67565"  >Six player poker</option>
           <option value="56768"  >Teenpatti 20</option>
           <option value="92037"  >MATKA</option>
       </select>
   </div>
   <div class="col-sm-2 col-xs-6">       
       <select name="betStatus" class="form-control">					
           <option value="O"  >OPEN</option>
           <option value="S" selected>Settle</option>
       </select>
   </div>
   <div class="col-sm-2 col-xs-12">
       <button type="button" id="submit_form_button" class="btn btn-success" data-attr="submit"><i class="fa fa-filter"></i> Filter</button>    
   </div>
  </div>
</form>
</div>  
<div class="">
<div id="divLoading"> </div>   {/*  <!--Loading class -->  */}
<div class="custom-scroll data-background appendAjaxTbl">
   <table class="table table-striped jambo_table bulk_action full-table-clint" >
       <thead>	
       <tr class="headings">	
       <th>Datetime	</th>	
       <th>Client</th>				
                       <th>Game</th>
       <th>Round id</th>
       <th>Bet details</th>
       <th>Result</th>
       <th>Type</th>
       </tr>				
       </thead>
       <tbody>
         <tr><td colspan="6">No record found.</td></tr>
           </tbody>
     </table>
       <p class="pull-left">Showing 1 to 0 of 0 entries </p>
       <p id="paginateClick" class="pull-right pagination-row dataTables_paginate paging_simple_numbers"></p>  
  </div>
  </div>
  </div>
</section>
</div>
</div>
</div>
</div>         
    );
}

export default Livegame;