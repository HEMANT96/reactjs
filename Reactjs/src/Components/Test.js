import React, {Component} from 'react';
import Cardgroup from './Cardgroup';
//import {Img} from 'reactstrap';
import Acordion from './Acordion';
import '../App.css';
import {Table, Image} from 'react-bootstrap';

class Deshboard extends Component {
   constructor(){
      super()
      this.state={

      }
   } 

getfromData = _ => {
   fetch(' ')
   .then()
   .then 
   .catch(err => console.error(err))
  }

   render(){
        return(

           <div className="container-fluid body">
           <div className="main_container " id="sticky">
         <div  className="container-fluid h-100 ml-0 p-0 bg-warning">
           <div className="row  m-0" style={{ height:601 }}>
              <div className="col-sm-2 m-0 bg-light color">                    
               <Acordion/>     
                </div>
      <div className="col-sm-6  bg-white"> 
     <div className="row p-0 w-100 m-0">            
        <div className="container-fluid color p-0 mb-0 text-white d-flex mt-2"><Image className="m-1" src="../Asserts/a1.jpeg" alt="hel" height="20px"/>Cricket</div>
             <Table className="mb-1"> 
                <tbody>
                    <tr className="d-flex">               
                    <div className="container-fluid border-top border-left border-bottom bg-white mr-0 cont2 p-2 col-sm-4">p</div>
                    <div className="container-fluid border-top border-right border-bottom bg-white mr-0 cont1 p-2 col-sm-2">R</div>
                    <div className="container-fluid border bg-info p-2 col-sm-1">1</div>
                    <div className="container-fluid border bg-danger p-2 col-sm-1">2</div>
                    <div className="container-fluid border bg-info p-2 mcol-sm-1">3</div>
                    <div className="container-fluid border bg-danger p-2 col-sm-1">4</div>
                    <div className="container-fluid border bg-info p-2 col-sm-1">5</div>
                    <div className="container-fluid border bg-danger m-0 p-2 col-sm-1">2</div>                   
                    </tr>
                    <tr className="d-flex">               
                    <div className="container-fluid border-top border-left border-bottom bg-white mr-0 cont2 p-2 col-sm-4">p</div>
                    <div className="container-fluid border-top border-right border-bottom bg-white mr-0 cont1 p-2 col-sm-2">R</div>
                    <div className="container-fluid border bg-info p-2 col-sm-1">1</div>
                    <div className="container-fluid border bg-danger p-2 col-sm-1">2</div>
                    <div className="container-fluid border bg-info p-2 mcol-sm-1">3</div>
                    <div className="container-fluid border bg-danger p-2 col-sm-1">4</div>
                    <div className="container-fluid border bg-info p-2 col-sm-1">5</div>
                    <div className="container-fluid border bg-danger m-0 p-2 col-sm-1">2</div>                   
                    </tr>
                    <tr className="d-flex">               
                    <div className="container-fluid border-top border-left border-bottom bg-white mr-0 cont2 p-2 col-sm-4">p</div>
                    <div className="container-fluid border-top border-right border-bottom bg-white mr-0 cont1 p-2 col-sm-2">R</div>
                    <div className="container-fluid border bg-info p-2 col-sm-1">1</div>
                    <div className="container-fluid border bg-danger p-2 col-sm-1">2</div>
                    <div className="container-fluid border bg-info p-2 mcol-sm-1">3</div>
                    <div className="container-fluid border bg-danger p-2 col-sm-1">4</div>
                    <div className="container-fluid border bg-info p-2 col-sm-1">5</div>
                    <div className="container-fluid border bg-danger m-0 p-2 col-sm-1">2</div>                   
                    </tr>
                   </tbody>
                </Table>
                <div className="container-fluid color p-0 mb-0 text-white d-flex mt-0"><Image className="m-1" src="../Asserts/2b.jpg" alt="hel" height="20px"/>Cricket</div>
             <Table className="mb-1">
                <tbody>
                    <tr className="d-flex">               
                    <div className="container-fluid border-top border-left border-bottom bg-white mr-0 cont2 p-2 col-sm-4">p</div>
                    <div className="container-fluid border-top border-right border-bottom bg-white mr-0 cont1 p-2 col-sm-2">R</div>
                    <div className="container-fluid border bg-info p-2 col-sm-1">1</div>
                    <div className="container-fluid border bg-danger p-2 col-sm-1">2</div>
                    <div className="container-fluid border bg-info p-2 mcol-sm-1">3</div>
                    <div className="container-fluid border bg-danger p-2 col-sm-1">4</div>
                    <div className="container-fluid border bg-info p-2 col-sm-1">5</div>
                    <div className="container-fluid border bg-danger m-0 p-2 col-sm-1">2</div>                   
                    </tr>
                   </tbody> 
                </Table>
             <div className="container-fluid color p-0 mb-0 text-white d-flex mt-0"><Image className="m-1" src="../Asserts/f1.png" alt="hel" height="20px"/>Cricket</div>
                <Table>
                <tbody>
                    <tr className="d-flex">               
                    <div className="container-fluid border-top border-left border-bottom bg-white mr-0 cont2 p-2 col-sm-4">p</div>
                    <div className="container-fluid border-top border-right border-bottom bg-white mr-0 cont1 p-2 col-sm-2">R</div>
                    <div className="container-fluid border bg-info p-2 col-sm-1">1</div>
                    <div className="container-fluid border bg-danger p-2 col-sm-1">2</div>
                    <div className="container-fluid border bg-info p-2 mcol-sm-1">3</div>
                    <div className="container-fluid border bg-danger p-2 col-sm-1">4</div>
                    <div className="container-fluid border bg-info p-2 col-sm-1">5</div>
                    <div className="container-fluid border bg-danger m-0 p-2 col-sm-1">2</div>                   
                    </tr>
                    <tr className="d-flex">               
                    <div className="container-fluid border-top border-left border-bottom bg-white mr-0 cont2 p-2 col-sm-4">p</div>
                    <div className="container-fluid border-top border-right border-bottom bg-white mr-0 cont1 p-2 col-sm-2">R</div>
                    <div className="container-fluid border bg-info p-2 col-sm-1">1</div>
                    <div className="container-fluid border bg-danger p-2 col-sm-1">2</div>
                    <div className="container-fluid border bg-info p-2 mcol-sm-1">3</div>
                    <div className="container-fluid border bg-danger p-2 col-sm-1">4</div>
                    <div className="container-fluid border bg-info p-2 col-sm-1">5</div>
                    <div className="container-fluid border bg-danger m-0 p-2 col-sm-1">2</div>                   
                    </tr>
                    <tr className="d-flex">               
                    <div className="container-fluid border-top border-left border-bottom bg-white mr-0 cont2 p-2 col-sm-4">p</div>
                    <div className="container-fluid border-top border-right border-bottom bg-white mr-0 cont1 p-2 col-sm-2">R</div>
                    <div className="container-fluid border bg-info p-2 col-sm-1">1</div>
                    <div className="container-fluid border bg-danger p-2 col-sm-1">2</div>
                    <div className="container-fluid border bg-info p-2 mcol-sm-1">3</div>
                    <div className="container-fluid border bg-danger p-2 col-sm-1">4</div>
                    <div className="container-fluid border bg-info p-2 col-sm-1">5</div>
                    <div className="container-fluid border  bg-danger m-0 p-2 col-sm-1">2</div>                   
                    </tr>
                    <tr className="d-flex">               
                    <div className="container-fluid border-top border-left border-bottom bg-white mr-0 cont2 p-2 col-sm-4">p</div>
                    <div className="container-fluid border-top border-right border-bottom bg-white mr-0 cont1 p-2 col-sm-2">R</div>
                    <div className="container-fluid border bg-info p-2 col-sm-1">1</div>
                    <div className="container-fluid border bg-danger p-2 col-sm-1">2</div>
                    <div className="container-fluid border bg-info p-2 mcol-sm-1">3</div>
                    <div className="container-fluid border bg-danger p-2 col-sm-1">4</div>
                    <div className="container-fluid border bg-info p-2 col-sm-1">5</div>
                    <div className="container-fluid border bg-danger m-0 p-2 col-sm-1">2</div>                   
                    </tr>
                    <tr className="d-flex">               
                    <div className="container-fluid border-top border-left border-bottom bg-white mr-0 cont2 p-2 col-sm-4">p</div>
                    <div className="container-fluid border-top border-right border-bottom bg-white mr-0 cont1 p-2 col-sm-2">R</div>
                    <div className="container-fluid border bg-info p-2 col-sm-1">1</div>
                    <div className="container-fluid border bg-danger p-2 col-sm-1">2</div>
                    <div className="container-fluid border bg-info p-2 mcol-sm-1">3</div>
                    <div className="container-fluid border bg-danger p-2 col-sm-1">4</div>
                    <div className="container-fluid border bg-info p-2 col-sm-1">5</div>
                    <div className="container-fluid border bg-danger m-0 p-2 col-sm-1">2</div>                   
                    </tr>
                    <tr className="d-flex">               
                    <div className="container-fluid border-top border-left border-bottom bg-white mr-0 cont2 p-2 col-sm-4">p</div>
                    <div className="container-fluid border-top border-right border-bottom bg-white mr-0 cont1 p-2 col-sm-2">R</div>
                    <div className="container-fluid border bg-info p-2 col-sm-1">1</div>
                    <div className="container-fluid border bg-danger p-2 col-sm-1">2</div>
                    <div className="container-fluid border bg-info p-2 mcol-sm-1">3</div>
                    <div className="container-fluid border bg-danger p-2 col-sm-1">4</div>
                    <div className="container-fluid border bg-info p-2 col-sm-1">5</div>
                    <div className="container-fluid border bg-danger m-0 p-2 col-sm-1">2</div>                   
                    </tr>
                    <tr className="d-flex">               
                    <div className="container-fluid border-top border-left border-bottom bg-white mr-0 cont2 p-2 col-sm-4">p</div>
                    <div className="container-fluid border-top border-right border-bottom bg-white mr-0 cont1 p-2 col-sm-2">R</div>
                    <div className="container-fluid border bg-info p-2 col-sm-1">1</div>
                    <div className="container-fluid border bg-danger p-2 col-sm-1">2</div>
                    <div className="container-fluid border bg-info p-2 mcol-sm-1">3</div>
                    <div className="container-fluid border bg-danger p-2 col-sm-1">4</div>
                    <div className="container-fluid border bg-info p-2 col-sm-1">5</div>
                    <div className="container-fluid border bg-danger m-0 p-2 col-sm-1">2</div>                   
                    </tr>
                   </tbody> 
                </Table>

                 </div>
              </div>
                   <div className="col-sm-4 bg-light color">    
                    <Cardgroup/>
                </div>  
            </div>      
                </div>
              </div>  
          </div>  
                );
            }
        }

export default Deshboard;