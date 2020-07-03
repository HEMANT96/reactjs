import React from 'react';
import { Card, Accordion, Image, CardGroup} from 'react-bootstrap';
function Cardgroup(){
    return(
     <div className="container-fluid body "> 

<Accordion className="mt-2 ">
                    
                    <Card className="mt-1  border  rounded">
                                <Accordion.Toggle className="color1 d-flex ml-0 pr-0 color" eventKey="1">
                                
                                    <p className="ml-0 col-sm-6 mb-0  mr-auto pl-0 text-white p-2 cont1"  >Top Casino Games</p>
                                    <span className="fa fa-sort-desc fa-sm ml-0 col-sm-6 mb-0 pt-2 mr-0 pl-0 text-white cont1"></span>
                            
                                </Accordion.Toggle>    
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>  
                                    {/* //////////////////////////// */}
                                    <CardGroup className="mb-2 col-sm-12 ml-3 d-flex ">
     <Card border="primary "  className="mr-2 border cont rounded shadow"  height="50px" >
        <Image className="m-1" src="http://park9.bet/assets/images/games-img/live-games.png" alt="test" height="100px"/>
            <Card.Body>
            </Card.Body>
        </Card>

        <Card border="secondary" varient="top"   className="mr-2 border cont  shadow rounded">
          <Image className="m-1" src="http://park9.bet/assets/images/games-img/live-teenpatti.png" alt="hel" height="100px"/>
            <Card.Body>
                                                  
            </Card.Body>
        </Card>
        
        <Card border="success"  className="border cont shadow rounded">              
          <Image className="m-1" src="http://park9.bet/assets/images/games-img/livebaccarat.png" alt="hel" height="100px"/>
            <Card.Body>

            
            </Card.Body>
        </Card>
  </CardGroup>        
     <CardGroup className="mb-2 col-sm-12 ml-3 d-flex">
     <Card border="danger"  className="mr-2 border cont shadow rounded" >            
        <Image className="m-1" src="http://park9.bet/assets/images/games-img/dragon-tiger.png" alt="hel" height="100px"/>
            <Card.Body>
               
            </Card.Body>
        </Card>
        
     <Card border="warning"  className="mr-2 border cont shadow rounded">
        <Image className="m-1" src="http://park9.bet/assets/images/games-img/ander-baher.png" alt="hel" height="100px"/>        
            <Card.Body>

            
            </Card.Body>
        </Card>
        

     <Card border="info"  className=" border cont shadow rounded">
        <Image className="m-1" src="http://park9.bet/assets/images/games-img/poker.png" alt="hel" height="100px"/>
            <Card.Body>

           
            </Card.Body>
        </Card>
    </CardGroup>

 <CardGroup className="mb-2 col-sm-12 ml-3 d-flex">
     <Card border="dark" varient="top" className="mr-2 cont shadow border rounded">
        <Image className="m-1 p-0" src="http://park9.bet/assets/images/games-img/7updown.png" alt="hel" height="100px"/>
            <Card.Body>
            
            </Card.Body>
        </Card>
        

    <Card border="dark"  className=" mr-2  d-flex border shadow rounded" height="100px" >
        <Image className="m-1" src="http://park9.bet/assets/images/games-img/warli-matka.png" alt="hel" height="100px"/>
            
        </Card>
    <Card border="dark"  className=" border d-flex shadow rounded">
        <Image className="m-1" src="http://park9.bet/assets/images/games-img/ezugi.png" alt="hel" height="100px"/>
            <Card.Body>
            </Card.Body>
        </Card>
        
      </CardGroup>
                                
                                {/* ////////////////////////// */}
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                                      
                        </Accordion>  




  
 </div>
    );
} 
export default Cardgroup;