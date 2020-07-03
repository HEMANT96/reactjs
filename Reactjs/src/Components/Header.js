import React from 'react';
import {NavLink} from 'react-router-dom';
import {Nav} from 'reactstrap';

function Header() {
    return(
    <div className="header-section" expand="ls">
   <div className="top_nav mb-0 p-0 mr-0 d-flex ">
   <div class="righttogal righttogalhide">
         <span class="cu" onclick="openNav()">&#9776; </span>
      </div>
      <div className="nav_menu">
         <Nav className="d-flex p-0" role="navigation">
         <div class="nav_title mr-auto  mt-4 ml-2 pr-2 pl-2">
            <NavLink to="http://park9.bet/dashboard" class="site_title endcooki"> 
            <img src="http://park9.bet/assets/uploads/park9bet.png?version=8885542525214758147741885" alt=""/> 
            </NavLink>
         </div>
         {/*   <!--top navigation --> */}
       
      <div id="lefttSidenav"  className="left_col mr-auto d-flex sidenav mr-5 ml-5  px-4  d-flex">
         <NavLink to="javascript:void(0)" class="closebtn righttogalhide" onclick="closeNav()">&times;</NavLink> 
            <div class="left_col mr-auto mt-4 ml-5 p-2 scroll-view">
               <div className="clearfix"> </div>
             <div className=" pl-2 size">
               <Nav id='cssmenu' className="ml-5 pb-1">
                   {/* <!--<div class="button"></div>-->  */}
                 
                  <ul className="nav col mb-2">
                        <li className="hidden-xs m-0 p-0 "><NavLink className="endcooki text-white" to="/Tests"><i class="fa fa-home hidden-xs"></i></NavLink></li>
                        <li className="dropdown ml-1 mr-1 p-0 ">
                        <li className="dropbtn ml-1 mr-1 p-2"><i class="fa fa-users "></i> <small> User </small> </li>
                        <ul class="dropdown-content">
                           <li><NavLink to="/Master"><small> Master </small></NavLink> </li>
                           <li><NavLink to="/User"> <small>Users</small></NavLink></li>
                           <li><NavLink to="/Closeuser"> <small>Close Users </small></NavLink></li>
                        </ul>
                     </li>
                  <li className="mr-2 ml-1 p-0 "><NavLink  to="Blockmarket" className="text-white t"><small>BlockMarket</small></NavLink></li>
                     <li className="mr-2 ml-1 p-0"><NavLink className="endcooki text-white t" to="/Master"> <small>Favorite</small></NavLink></li>
                     <li className="mr-2 ml-1 p-0"><NavLink to="/Mymarketpl" className="text-white"><small> MyMarket</small> </NavLink></li>
                     <li className="dropdown ml-1 mr-1 p-0">
                        <li className="dropbtn mr-2 ml-1 p-0"> <small>Report</small> </li>
                        <ul class="dropdown-content">
                           <li style={{border:1}}><NavLink to="/Accinfo"> <small>Account Info </small> </NavLink> </li>
                           <li><NavLink to="/Cacstatement"> <small>Account Statement </small> </NavLink> </li>
                           <li><NavLink to="/NewSummery"> <small>Chip Summary </small> </NavLink> </li>      
                           <li><NavLink to="/ClientPl"> <small>Client P L </small></NavLink> </li>
                           <li><NavLink to="/Marketpl"><small> Market P L </small> </NavLink> </li>
                           <li><NavLink to="/Sportpl"><small> Sport P L</small> </NavLink> </li>
                           <li><NavLink to="/Userpl1"> <small>User P L</small> </NavLink> </li>
                           <li><NavLink to="/Profitloss"> <small> Profit & Loss</small> </NavLink> </li>
                           <li><NavLink to="/Bethistory"><small> Bet History</small> </NavLink> </li>
						         <li><NavLink to="/Livegame"> <small>Livegame </small> </NavLink> </li>
                           <li><NavLink to="/Fancystack"> <small>Fancy Stack </small></NavLink> </li>                            
                         </ul>
                      </li> 
                   <li className="mr-4 ml-1 p-0"><NavLink className="endcooki text-white" to="/Master"><small>New TeenPatti</small></NavLink></li>                                                          
                   </ul>
              </Nav>
            </div>
            {/* <!--sidebar menu --> */}
            
         </div>
         <div class="nav navbar-nav ml-5   navbar-right">
         <ul className="ml-5">
         <li class="belance-top  ml-4 p-0 mt-3">
         <div id="Wallet" className="bg-dark color  p-0">Main: <span class="mWallet">395,000.00</span></div>
         <div id="UserLiability" className="bg-dark  color pr-2  pl-2 m-1" >Exposure: <span class="liability">0.00</span></div>
         <NavLink to="/ChangePassword" className="user-profile dropdown-toggle  bg-dark color p-0 m-1" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-user-circle-o"></i>
         Demo<span class="fa fa-angle-down"></span></NavLink>
         <ul class="dropdown-menu dropdown-usermenu">
            <li class="dropdwon"><NavLink to="/ChangePassword">Change Password</NavLink> </li>
         </ul>
         </li>
         </ul>
         </div>
       </div>  
         </Nav>
      </div>
   </div>
   <div className="marquee color m-0  bg-dark">
        <marquee> <i class="fa fa-bell-o"></i> welcome <i class="fa fa-bell-o"></i> </marquee>
         </div>
          </div>             
    );
}
export default Header;