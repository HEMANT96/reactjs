import React from 'react';

function Accinfo(){
    return(
        <div className="container-fluid body ">
        <div class="main_container" id="sticky" >
   <div class="right_col" role="main">
   <div class="row">
       <div class="col-md-12">
               <div class="title_new_at">  Account Info</div>
         </div>
    <div class="col-md-12">
    </div>

     <div class="col-md-12 col-sm-12 col-xs-12">
        
         <div id="divLoading"> </div>

         {/*<!--Loading class --> */}
         
           <div class="table-scroll">
               
               
             <table class="table table-striped jambo_table bulk_action" id = " ">
               <thead>
                 <tr class="headings">
                    
                   <th class="">Chips </th>
                
                   <th class="">Free Chips </th>
                   <th class="">Liability </th>
                   <th class="">Wallet </th>
                   <th class="">Up </th>
                   <th class="">Down </th>
                 </tr>
               </thead>
               <tbody>
                       <tr> 	
                       <td class="">0.00 </td>
                       <td class=" ">395,000.00 </td>
                       <td class=" ">0.00 </td>
                       <td class=" ">395,000.00 </td>
                       
                       <td class=" ">0.00 </td>
                       <td class=" ">0.00 </td>
                   </tr>
                </tbody>
             </table>      
           </div>      
          </div>
       </div>
      </div> 
       </div>
    </div>
    );
}
export default Accinfo;