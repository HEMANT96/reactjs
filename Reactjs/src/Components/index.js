//import "../js/admin-master.js";
//import "../js/aes-json.js";
//import "../js/aes.js";
//import "../js/cookie.js";
//import "../js/datatable.js";
//import "../js/daterangepicker.js";
//import "../js/main.js"; 
//import "../admin-master.js"
//import './js/moment.js';
//import "../js/serialize_json.js";
//import "../js/server-request.js";
//import "../js/socket.js";	  


import React from 'react';
import { NavLink } from 'react-router-dom';

function Index(){
    return(
 
        <div class="container-fluid body">
            <div class="left-side-menu">
	         <div class="panel-group" id="accordion">
			            <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
							<NavLink to="/">In-Play</NavLink>
                        </h4>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <NavLink data-toggle="collapse" data-parent="#accordion" to="javascript:void(0) #collapseOne">Cricket <span class="extender"></span></NavLink>
                        </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse">
                        <div class="panel-body">
						<ul id="cricket_child_menu">
														<li>
							   <NavLink to="javascript:;" title="Match OODS" onclick="MarketSelection('1.170914310', '29858932');">
							   <i class="fa fa-angle-double-right"></i> Zurich Crickets CC v St Gallen CC 
							   </NavLink>
							   <ul id="list_of29858932"></ul>
							</li>
														<li>
							   <NavLink to="javascript:;" title="Match OODS" onclick="MarketSelection('1.170914314', '29858938');">
							   <i class="fa fa-angle-double-right"></i> Winterthur CC v Zurich Crickets CC 
							   </NavLink>
							   <ul id="list_of29858938"></ul>
							</li>
													 </ul>
                        </div>
                    </div>
                </div>
				{/* <!--- Tennis -->*/}
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <NavLink data-toggle="collapse" data-parent="#accordion" to="javascript:void(0) #collapseTwo">Tennis <span class="extender"></span></NavLink>
                        </h4>
                    </div>
                    <div id="collapseTwo" class="panel-collapse collapse">
                        <div class="panel-body">
							<ul id="tennis_child_menu">
															 </ul>
                        </div>
                    </div>
                </div>
                {/* <!--- Soccer -->*/}
				<div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <NavLink data-toggle="collapse" data-parent="#accordion" to="javascript:void(0) #collapsethree">Soccer <span class="extender"></span></NavLink>
                        </h4>
                    </div>
                    <div id="collapsethree" class="panel-collapse collapse">
                        <div class="panel-body">
						 <ul id="soccer_child_menu">
							                                
							<li>
							   <NavLink class="test" to="javascript:;" title="Match OODS" onclick="MarketSelection('1.170841744', '29854274');">
							  <i class="fa fa-angle-double-right"></i>  Pardubice v Hradec Kralove 
							   </NavLink>
							   <ul id="list_of29854274"></ul>
							</li>
							                                
							<li>
							   <NavLink class="test" to="javascript:;" title="Match OODS" onclick="MarketSelection('1.170894307', '29859849');">
							  <i class="fa fa-angle-double-right"></i>  Exeter v Colchester 
							   </NavLink>
							   <ul id="list_of29859849"></ul>
							</li>
							                                
							<li>
							   <NavLink class="test" to="javascript:;" title="Match OODS" onclick="MarketSelection('1.170849434', '29854617');">
							  <i class="fa fa-angle-double-right"></i>  Helsingborgs v Elfsborg 
							   </NavLink>
							   <ul id="list_of29854617"></ul>
							</li>
							                                
							<li>
							   <NavLink class="test" to="javascript:;" title="Match OODS" onclick="MarketSelection('1.170623739', '29829853');">
							  <i class="fa fa-angle-double-right"></i>  Fiorentina v Brescia 
							   </NavLink>
							   <ul id="list_of29829853"></ul>
							</li>
							                                
							<li>
							   <NavLink class="test" to="javascript:;" title="Match OODS" onclick="MarketSelection('1.170670622', '29835218');">
							  <i class="fa fa-angle-double-right"></i>  Man City v Burnley 
							   </NavLink>
							   <ul id="list_of29835218"></ul>
							</li>
							                                
							<li>
							   <NavLink class="test" to="/" title="Match OODS" onclick="MarketSelection('1.170632504', '29830080');">
							  <i class="fa fa-angle-double-right"></i>  Bologna v Juventus 
							   </NavLink>
							   <ul id="list_of29830080"></ul>
							</li>
								</ul>
                        </div>
                    </div>
                </div>
              </div>		
    </div>  

	    
 <div class="main_container " id="sticky">


<div class="right_col" role="main">
   <div class="fullrow tile_count" >
      <div class="col-md-8">
		<div id="UpCommingData">
         <div class="sport-highlight-content tabs" id="accountView" role="main" >
  
   {/* <!--<h2 class="header"><div class="sport-highlight-icon"></div>  <span>Sport Highlights</span> <button class="btn btn-back tbback hidden-lg"> Back</button></h2>-->  */}
   	<div class="casinobg"><span><NavLink to="http://park9.bet/livegames" class="blinking"> Live games</NavLink></span></div>
   <div class="sports_box hidden-lg">
			 <div class="tittle_sports">
				 <span class="item_sport"> <img src="http://park9.bet/assets/images/trophy-ico.png" alt="test"/></span>
				 Live Casino Games
			 </div>
    </div>

	
   <ul class="match-buttons">
     	  <li class="hidden-lg"> 
		<NavLink to="http://park9.bet/livegames"><span class="item_mob-sport"> <img src="http://park9.bet/assets/images/games-img/live-games.png" class="anim-shrink-effect" alt="test"/></span></NavLink>
	  </li>
	  <li class="hidden-lg">
		<NavLink onclick="lobbylink()" to=" /"><span class="item_mob-sport"> <img src="http://park9.bet/assets/images/games-img/live-teenpatti.png" alt="test"/></span>  </NavLink>
	  </li>
	  <li class="hidden-lg">
		<NavLink onclick="lobbylink()" to="/"><span class="item_mob-sport"><img src="http://park9.bet/assets/images/games-img/livebaccarat.png" alt="test"/></span> </NavLink>
	  </li>
	  <li class="hidden-lg">
		<NavLink onclick="lobbylink()" to="/"><span class="item_mob-sport"> <img src="http://park9.bet/assets/images/games-img/dragon-tiger.png" alt="test"/ ></span></NavLink>
	  </li>
	  <li class="hidden-lg">
		<NavLink onclick="lobbylink()" to="/"><span class="item_mob-sport"><img src="http://park9.bet/assets/images/games-img/ander-baher.png" alt="test"/></span> </NavLink>
	  </li>
	  <li class="hidden-lg">
		<NavLink onclick="lobbylink()" to="/"><span class="item_mob-sport">   <img src="http://park9.bet/assets/images/games-img/poker.png" alt="test"/></span></NavLink>
	  </li>
	  <li class="hidden-lg">
		<NavLink onclick="lobbylink()" to="/"><span class="item_mob-sport"><img src="http://park9.bet/assets/images/games-img/7updown.png" alt="test" /></span></NavLink>
	  </li>
	  
	  <li class="hidden-lg">
		<NavLink onclick="lobbylink()" to="/"><span class="item_mob-sport"><img src="http://park9.bet/assets/images/games-img/warli-matka.png" alt="test"/></span> </NavLink>
	  </li>
     	 
	 <li class="hidden-lg"> 
		<NavLink onclick="lobbylink(2)" to="/"><span class="item_mob-sport"> <img src="http://park9.bet/assets/images/games-img/ezugi.png" alt="test"/></span></NavLink>
	  </li>
	 
         </ul>

   							
   <div class="matches-all">
      <span id="msg_error"></span><span id="errmsg"></span>
         <div class="sports_box">
			 <div class="tittle_sports">
				 <span class="item_sport"> <img src="http://park9.bet/assets/images/cricket-ico.png" alt="test"/></span>
				 Cricket
			 </div>
            
                        <div id="user_row_" class="sport_row sportrow-4  matchrow-29858932"  onclick="MarketSelection('1.170914310','29858932');" title="Match OODS">
               <div class="sport_name"> 
			     <NavLink to="/" >
                  Zurich Crickets CC v St Gallen CC  </NavLink>
			      <time><i class="fa fa-clock-o"></i> 22 Jun 2020 18:30:00</time>
                  <span id='fav29858932'><i  class='fa fa-star-o' aria-hidden='true'></i></span>
               </div>
               <div class="match_status">
                  <span class="inplay_txt">In-play </span>               </div>
               <div class="match_odds_front">
                  																 
                   
                  <span  class="back-cell">6.4</span>														  
                  <span class="lay-cell">7.4</span>
                    
                  																		 
                  <span  class="back-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span  class="lay-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                   
                                    <span  class="back-cell">1.17</span>														  
                  <span class="lay-cell">1.18</span>
                                 </div>
            </div>
                        <div id="user_row_" class="sport_row sportrow-4  matchrow-29858938"  onclick="MarketSelection('1.170914314','29858938');" title="Match OODS">
               <div class="sport_name"> 
			     <NavLink to="javascript:;" >
                  Winterthur CC v Zurich Crickets CC    </NavLink>
			      <time><i class="fa fa-clock-o"></i> 22 Jun 2020 20:30:00</time>
                  <span id='fav29858938'><i  class='fa fa-star-o' aria-hidden='true'></i></span>
               </div>
               <div class="match_status">
                  <span class="going_inplay">Going In-play</span>               </div>
               <div class="match_odds_front">
                  																 
                   
                  <span  class="back-cell">1.66</span>														  
                  <span class="lay-cell">1.7</span>
                    
                  																		 
                  <span  class="back-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span  class="lay-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                   
                                    <span  class="back-cell">2.42</span>														  
                  <span class="lay-cell">2.52</span>
                                 </div>
            </div>
                     </div>
		 
		 {/*          <!-- Tennis -->	*/}
         <div class="sports_box">
			 <div class="tittle_sports">
				<span class="item_sport"><img src="http://park9.bet/assets/images/tennis-ico.png" alt="test"/></span> Tennis
			 </div>
                     </div>
         {/*          <!-- Soccer -->	*/}	
         <div class="sports_box">
			 <div class="tittle_sports">
					<span class="item_sport"><img src="http://park9.bet/assets/images/soccer-ico.png" alt="test"/></span> Soccer
			 </div>
            
            	 
            <div id ="user_row_ " class="sport_row sportrow-1  matchrow-29854274" onclick="MarketSelection('1.170841744','29854274');"  title="Match OODS">
               <div class="sport_name"> 
			     <NavLink to="/">
                  Pardubice v Hradec Kralove                  </NavLink>
			      <time><i class="fa fa-clock-o"></i> 22 Jun 2020 21:30:00</time>
                  <span id='fav29854274'><i  class='fa fa-star-o' aria-hidden='true'></i></span>
               </div>
               <div class="match_status">
                  <span class="going_inplay">Going In-play</span>               </div>
               <div class="match_odds_front">
                  																 
                   
                  <span  class="back-cell">1.88</span>														  
                  <span class="lay-cell">1.9</span>
                    
                   
                  <span  class="back-cell">3.7</span>														  
                  <span class="lay-cell">3.8</span>
                   
                                    <span  class="back-cell">4.8</span>														  
                  <span class="lay-cell">5.1</span>
                                 </div>
            </div>
            	 
            <div id ="user_row_ " class="sport_row sportrow-1  matchrow-29859849" onclick="MarketSelection('1.170894307','29859849');"  title="Match OODS">
               <div class="sport_name"> 
			     <NavLink to="/">
                  Exeter v Colchester    </NavLink>
			      <time><i class="fa fa-clock-o"></i> 22 Jun 2020 21:45:00</time>
                  <span id='fav29859849'><i  class='fa fa-star-o' aria-hidden='true'></i></span>
               </div>
               <div class="match_status">
                  <span class="going_inplay">Going In-play</span>               </div>
               <div class="match_odds_front">
                  																 
                   
                  <span  class="back-cell">2.3</span>														  
                  <span class="lay-cell">2.32</span>
                    
                   
                  <span  class="back-cell">3.25</span>														  
                  <span class="lay-cell">3.3</span>
                   
                                    <span  class="back-cell">3.85</span>														  
                  <span class="lay-cell">3.9</span>
                                 </div>
            </div>
            	 
            <div id ="user_row_ " class="sport_row sportrow-1  matchrow-29854617" onclick="MarketSelection('1.170849434','29854617');"  title="Match OODS">
               <div class="sport_name"> 
			     <NavLink to="/">
                  Helsingborgs v Elfsborg           </NavLink>
			      <time><i class="fa fa-clock-o"></i> 22 Jun 2020 22:30:00</time>
                  <span id='fav29854617'><i class='fa fa-star-o' aria-hidden='true'></i></span>
               </div>
               <div class="match_status">
                  <span class="going_inplay">Going In-play</span>               </div>
               <div class="match_odds_front">
                  																 
                   
                  <span  class="back-cell">5.3</span>														  
                  <span class="lay-cell">5.4</span>
                    
                   
                  <span  class="back-cell">4.1</span>														  
                  <span class="lay-cell">4.2</span>
                   
                                    <span  class="back-cell">1.74</span>														  
                  <span class="lay-cell">1.75</span>
                                 </div>
            </div>
            	 
            <div id ="user_row_ " class="sport_row sportrow-1  matchrow-29829853" onclick="MarketSelection('1.170623739','29829853');"  title="Match OODS">
               <div class="sport_name"> 
			     <NavLink to="/">
                  Fiorentina v Brescia                  </NavLink>
			      <time><i class="fa fa-clock-o"></i> 22 Jun 2020 23:00:00</time>
                  <span id='fav29829853'><i  class='fa fa-star-o' aria-hidden='true'></i></span>
               </div>
               <div class="match_status">
                  <span class="going_inplay">Going In-play</span>               </div>
               <div class="match_odds_front">
                  																 
                   
                  <span  class="back-cell">1.47</span>														  
                  <span class="lay-cell">1.48</span>
                    
                   
                  <span  class="back-cell">4.9</span>														  
                  <span class="lay-cell">5</span>
                   
                                    <span  class="back-cell">8.4</span>														  
                  <span class="lay-cell">8.6</span>
                                 </div>
            </div>
            	 
            <div id ="user_row_ " class="sport_row sportrow-1  matchrow-29835218" onclick="MarketSelection('1.170670622','29835218');"  title="Match OODS">
               <div class="sport_name"> 
			     <NavLink to="">
                  Man City v Burnley   </NavLink>
			      <time><i class="fa fa-clock-o"></i> 23 Jun 2020 00:30:00</time>
                  <span id='fav29835218'><i  class='fa fa-star-o' aria-hidden='true'></i></span>
               </div>
               <div class="match_status">
                  <span class="going_inplay">Going In-play</span>               </div>
               <div class="match_odds_front">
                  																 
                   
                  <span  class="back-cell">1.15</span>														  
                  <span class="lay-cell">1.16</span>
                    
                   
                  <span  class="back-cell">10</span>														  
                  <span class="lay-cell">10.5</span>
                   
                                    <span  class="back-cell">26</span>														  
                  <span class="lay-cell">27</span>
                                 </div>
            </div>
            	 
            <div id ="user_row_ " class="sport_row sportrow-1  matchrow-29830080" onclick="MarketSelection('1.170632504','29830080');"  title="Match OODS">
               <div class="sport_name"> 
			     <NavLink to="/">
                  Bologna v Juventus                  </NavLink>
			      <time><i class="fa fa-clock-o"></i> 23 Jun 2020 01:15:00</time>
                  <span id='fav29830080'><i  class='fa fa-star-o' aria-hidden='true'></i></span>
               </div>
               <div class="match_status">
                  <span class="going_inplay">Going In-play</span>               </div>
               <div class="match_odds_front">
                  																 
                   
                  <span  class="back-cell">6</span>														  
                  <span class="lay-cell">6.2</span>
                    
                   
                  <span  class="back-cell">4</span>														  
                  <span class="lay-cell">4.1</span>
                   
                                    <span  class="back-cell">1.69</span>														  
                  <span class="lay-cell">1.7</span>
                                 </div>
            </div>
                     </div>
   </div>
</div>

		</div>	 
		<div id="MatchOddInfo"></div>
      </div>
      <div class="col-md-4 col-xs-12 matchBox">
	  <div class="other-items">
	   <div class="balance-box">
		 <div class="panel-heading">
			<h3 class="bal-tittle">Top Casino Games </h3>
			<span class="pull-right clickable"><i class="fa fa-chevron-down"></i></span>
		 </div>
		 <div class="balance-panel-body">
         			<div class="game_wrapper">
				<NavLink onclick="lobbylink()" to="" class="item-games">
					<img src="http://park9.bet/assets/images/games-img/live-teenpatti.png?v=1.5646" alt="test"/>
					 <span class="swing"><img src="http://park9.bet/assets/images/games-img/play-now.png" alt="test"/></span>
					 <div id="play-video" class="video-play-button">  <span></span></div>
				</NavLink>
				<NavLink onclick="lobbylink()" to="/" class="item-games">
						  <img src="http://park9.bet/assets/images/games-img/livebaccarat.png" alt="test"/>
						  <span class="swing"><img src="http://park9.bet/assets/images/games-img/play-now.png" alt="test"/></span>
						  <div id="play-video" class="video-play-button">  <span></span></div>
				</NavLink>
				<div onclick="lobbylink()" img="javascript:void(0)" class="item-games">
						  <img src="http://park9.bet/assets/images/games-img/dragon-tiger.png" alt="test" />
						  <span class="swing"><img src="http://park9.bet/assets/images/games-img/play-now.png" alt="test"/></span>
						   <div id="play-video" class="video-play-button">  <span></span></div>
				</div>
			</div>
			<div class="game_wrapper">
				<NavLink onclick="lobbylink()" to="/" class="item-games">
						  <img src="http://park9.bet/assets/images/games-img/poker.png" alt="test"/>
						 <span class="swing"><img src="http://park9.bet/assets/images/games-img/play-now.png" alt="test" /></span>
						  <div id="play-video" class="video-play-button">  <span></span></div>
				</NavLink>
				<NavLink onclick="lobbylink()" to="/" class="item-games">
						  <img src="http://park9.bet/assets/images/games-img/ander-baher.png" alt="test"/>
						 <span class="swing"><img src="http://park9.bet/assets/images/games-img/play-now.png" alt="test"/></span>
						 <div id="play-video" class="video-play-button">  <span></span></div>
				</NavLink>
				<NavLink onclick="lobbylink()" to="/" class="item-games">
						  <img src="http://park9.bet/assets/images/games-img/7updown.png" alt="test"/>
						 <span class="swing"><img src="http://park9.bet/assets/images/games-img/play-now.png" alt="test"/></span>
						  <div id="play-video" class="video-play-button">  <span></span></div>
				</NavLink>
			</div>
			<div class="game_wrapper">
				
				<NavLink onclick="lobbylink()" to="/" class="item-games">
						  <img src="http://park9.bet/assets/images/games-img/warli-matka.png" alt="test"/>
						  <span class="swing"><img src="http://park9.bet/assets/images/games-img/comming-soon.png" alt="test" /></span>
						 <div id="play-video" class="video-play-button">  <span></span></div>
				</NavLink>
				<NavLink onclick="lobbylink()" to="/" class="item-games">
						  <img src="http://park9.bet/assets/images/games-img/open-teen.png" alt="test"/>
						  <span class="swing"><img src="http://park9.bet/assets/images/games-img/comming-soon.png" alt="test"/></span>
						   <div id="play-video" class="video-play-button">  <span></span></div>
				</NavLink>	
				<NavLink onclick="lobbylink(2)" to="/" class="item-games">
						  <img src="http://park9.bet/assets/images/games-img/ezugi.png" alt="test"/>
						  <span class="swing"><img src="http://park9.bet/assets/images/games-img/comming-soon.png" alt="test"/></span>
						  <div id="play-video" class="video-play-button">  <span></span></div>
				</NavLink>				
			</div>
         
		 
         		    </div>
      </div>
      </div>

	  
         <div class="betSlipBox" >  
		   <div class="betslip-head"> 
               <span id="tital_change" class="item">Bet Slip</span>
               <NavLink to="/" class="UserChipData" data-toggle="modal" data-target="#addUser" data-backdrop="static" data-keyboard="false">
				Edit Stake
			   </NavLink>									
            </div>
         <div >
            <div  class="betBox border-box"  >
               <div class="block_box">
                  <span id="msg_error"></span><span id="errmsg"></span>
                  <div class="loader" >
                     <div class="spinner">
                        <div class="loader-inner box1"></div>
                        <div class="loader-inner box2"></div>
                        <div class="loader-inner box3"></div>
                     </div>
                  </div>
                  <form method="POST" id="placeBetSilp"><input type="hidden" name="compute" value="a79a511cf475608cd6f034b2a1d815d4"/>
                        <label class="control-label m-t-xs BetFor" > Yet (Bet For)</label>
                        <div class="liabilityprofit" id=" ">
                           <span class="stake_label">Profit</span>
                           <div class="stack_input_field">
                              <span  id="profitData" > 0.00</span>
                           </div>
                        </div>
                        <div class="liabilityprofit" id=" ">
                           <span class="stake_label">Loss</span>
                           <div class="stack_input_field">
                              <span id="LossData" > 0.00</span>
                           </div>
                        </div>
                        <div id="ShowRunnderName" class="match_runner_name">
                        </div>
                     <div class="odds-stake">
                        <div class="item form-group full_rowOdd">
                           <span class="stake_label">Odd</span>
                           <div class="stack_input_field numbers-row">
                              <input type="number" step={0.01} id="ShowBetPrice" class="calProfitLoss odds-input form-control  CommanBtn"/>
                           </div>
                        </div>
                        <div class="item form-group" id=" ">
                           <span class="stake_label">Stake</span>
                           <div class="stack_input_field numbers-row">
                              <input type="number" pattern="[0-9]*"  step={1} id="stakeValue" class="calProfitLoss stake-input form-control  CommanBtn"/>
                              <input type="hidden" name="selectionId" id="selectionId" value="" class="form-control"/>
                              <input type="hidden" name="matchId" id="matchId" value="" class="form-control"/>
                              <input type="hidden" name="isback" id="isback" value="" class="form-control"/>
                              <input type="hidden" name="MarketId" id="MarketId" value="" class="form-control"/>
                              <input type="hidden" name="placeName" id="placeName" value="" class="form-control"/>     
							  <input type="hidden" name="text" id="stackcount" value="0" class="form-control"/>	
                              <input type="hidden" name="text" id="isfancy" value="0" class="form-control"/>	
                           </div>
                        </div>
                     </div>
                     <div class="betPriceBox">
                        <button class="btn  btn-success CommanBtn  chipName1" type="button"  value="500" onclick ="StaKeAmount(this);">500</button><button class="btn  btn-success CommanBtn  chipName2" type="button"  value="2000" onclick ="StaKeAmount(this);">2000</button><button class="btn  btn-success CommanBtn  chipName3" type="button"  value="5000" onclick ="StaKeAmount(this);">5000</button><button class="btn  btn-success CommanBtn  chipName4" type="button"  value="25000" onclick ="StaKeAmount(this);">25000</button><button class="btn  btn-success CommanBtn  chipName5" type="button"  value="50000" onclick ="StaKeAmount(this);">50000</button><button class="btn  btn-success CommanBtn  chipName6" type="button"  value="100000" onclick ="StaKeAmount(this);">100000</button>                        <button class="btn  btn-success CommanBtn " type="button" onclick = "ClearStack( );">Clear</button>
                     </div>
                     <div class="betFooter">
                        <button class="btn btn-danger CommanBtn" type="button" onclick = "ClearAllSelection();">Clear All</button>				
                        <button class="btn btn-success  CommanBtn placebet" type="button" onclick = "PlaceBet();">Place Bet</button>
                        <button class="btn btn-success CommanBtn placefancy" type="button" onclick = "PlaceFancy();" >Place Bet</button>
                     </div>
                  </form>
               </div>
            </div>

			<div class="tab_bets">
               <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item betdata active-all active">
                     <NavLink class="allbet" to="/" onclick="getDataByType(this,'4');"><span class="bet-label">All Bet</span> <span id="cnt_row">(  )</span></NavLink>
                  </li>
                  <li class="nav-item betdata active-unmatch">
                     <NavLink class="unmatchbet" to="/" onclick="getDataByType(this,'2');"><span class="bet-label">UnMatch Bet</span> <span id="cnt_row1">(  ) </span></NavLink>
                  </li>
                  <li class="nav-item betdata">
                     <NavLink class="unmatchbet" to="/" onclick="getDataByType(this,'3');"><span class="bet-label">Fancy Bet</span> <span id="cnt_row3">(  ) </span> </NavLink>
                  </li>
                                    <li class="nav-item active-position"><NavLink class="currentposition" to="/" onclick="getDataByType(this,'5');">Current Position</NavLink></li>
                                    		
                  <NavLink class="btn full-btn" onclick="viewAllMatch()" to="/"><img src="http://park9.bet/assets/images/full-size-btn.png" alt="..."/></NavLink>
                                 </ul>
            </div>
         </div>
       </div>
       {/*          <!--- Match UnMatch data --->*/}
         <div class="" id="MatchUnMatchBetaData">									
         </div>
         {/*  <!--- User Current Position  --->*/}									
         <div class="" id="getUserPosition">	
         </div>
      </div>
   </div>
</div>
{/*  <!-- /page content -->*/}
<div id="fancyposition" class="modal fade" role="dialog">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="popup_form">
            <div class="title_popup">
               <span> Fancy Position</span> 
               <button type="button" class="close" data-dismiss="modal"  >
                  <div class="close_new"><i class="fa fa-times-circle"></i> </div>
               </button>
            </div>
            <div class="content_popup">
               <div class="popup_form_row">
                  <div class="modal-body"></div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
 </div>
   </div>
    
    )
        }
        export default Index;