import { Card, CardGroup, Col, Row } from "react-bootstrap";
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import '../Components/Application.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Application = () => {
    return (
        <div  >
          
          <CardGroup >
      
            {/* first potion */}
          <Card style={{ width: '490px', height:'1120px',backgroundColor:'#E8E8E8',}}>
          <div style={{ overflowY: 'auto', height: '1100px',   overflowX: 'hidden',scrollbarColor: 'blue', }}>

          <div style={{height:'50px',paddingTop:'20px'}} className="d-flex">
          <div className="d-flex">
  <div style={{ width: '30px', height: '30px', backgroundColor: 'red', borderTopLeftRadius: '50%', borderBottomLeftRadius: '50%' }}>
  
  </div>
</div>


    <h4 className="ms-2">Incomplete</h4>
    <div>
    <div style={{ width: '30px',height:'30px', backgroundColor: '#D3D3D3',paddingLeft:'10px',marginLeft: '240px' }}>
    <p className="pt-1">
   
    0
  </p>
    </div>

    </div>

</div>
      <Card.Body>
     
      <Row style={{width:'469px',backgroundColor:'white', height:'150px'}}>
              <Row>
              <Col >
                  <div className="d-flex">
                      <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/></div>
             <div><p className="pt-3 ps-3">Client Name</p></div>
             
             </div>
              </Col>
              <Col >
                  <div className="d-flex">
                  <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/images.jpg"/></div>
                  <div><p className="pt-3 ps-3">Sadik Istiak</p></div>
                   
           
             
             </div>
              </Col>
              </Row>
              <Row>
                  <Col className="col-md-8">
              <p className="ms-1">
  <FontAwesomeIcon icon={faLayerGroup} />
  Lorem ipsum dolor sit amet curr.....
</p>
</Col>
<Col >
    <div style={{ width: '60px',height:'30px', backgroundColor: '#E8E8E8',paddingLeft:'10px',marginRight: '6px' ,borderRadius:'8%'}}>
    <p className="pt-1">
    <FontAwesomeIcon icon={faCalendarDays} />
    1/2
  </p>
    </div>
 
</Col>
              </Row>
              <Row>
                  <div className="d-flex">
                  <div>
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/Screenshot 2024-01-11 195746.png"/>
                  </div>
                  <div className="ms-3">
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/>
                  </div>
                  <div className="mt-2" style={{borderRadius:'50%',backgroundColor: '#DCDCDC',width:'43px',height:'40px',marginLeft:'12px'}}>
                      <p className="pt-2 ps-2">12+</p>

                  </div>
                  <div >
                  <p className="ms-1 pt-3 ps-3">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faComments} />
  15
  </p>
</div>
<div >
<p className="ms-1 pt-3 ps-3">
  <FontAwesomeIcon style={{ color: 'grey', height: '20px', marginRight: '6px' }} icon={faLink} />
  15
</p>
</div>
<div >
                  <p className="ms-1 pt-3 ps-4">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faCalendarDays} />
  30-12-2022
  </p>
</div>
       
                  </div>
              
              </Row>
          </Row>


          <Row style={{width:'469px',backgroundColor:'white', height:'150px',marginTop:'30px'}}>
              <Row>
              <Col >
                  <div className="d-flex">
                      <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/></div>
             <div><p className="pt-3 ps-3">Client Name</p></div>
             
             </div>
              </Col>
              <Col >
                  <div className="d-flex">
                  <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/images.jpg"/></div>
                  <div><p className="pt-3 ps-3">Sadik Istiak</p></div>
                   
           
             
             </div>
              </Col>
              </Row>
              <Row>
                  <Col className="col-md-8">
              <p className="ms-1">
  <FontAwesomeIcon icon={faLayerGroup} />
  Lorem ipsum dolor sit amet curr.....
</p>
</Col>
<Col >
    <div style={{ width: '60px',height:'30px', backgroundColor: '#E8E8E8',paddingLeft:'10px',marginRight: '6px' }}>
    <p className="pt-1">
    <FontAwesomeIcon icon={faCalendarDays} />
    1/2
  </p>
    </div>
 
</Col>
              </Row>
              <Row >
                  <div className="d-flex">
                  <div>
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/Screenshot 2024-01-11 195746.png"/>
                  </div>
                  <div className="ms-3">
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/>
                  </div>
                  <div className="mt-2" style={{borderRadius:'50%',backgroundColor: '#DCDCDC',width:'43px',height:'40px',marginLeft:'12px'}}>
                      <p className="pt-2 ps-2">12+</p>

                  </div>
                  <div >
                  <p className="ms-1 pt-3 ps-3">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faComments} />
  15
  </p>
</div>
<div >
<p className="ms-1 pt-3 ps-3">
  <FontAwesomeIcon style={{ color: 'grey', height: '20px', marginRight: '6px' }} icon={faLink} />
  15
</p>
</div>
<div >
                  <p className="ms-1 pt-3 ps-4">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faCalendarDays} />
  30-12-2022
  </p>
</div>
       
                  </div>
              
              </Row>
          </Row>

          <Row style={{width:'469px',backgroundColor:'white', height:'150px',marginTop:'30px'}}>
              <Row>
              <Col >
                  <div className="d-flex">
                      <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/></div>
             <div><p className="pt-3 ps-3">Client Name</p></div>
             
             </div>
              </Col>
              <Col >
                  <div className="d-flex">
                  <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/images.jpg"/></div>
                  <div><p className="pt-3 ps-3">Sadik Istiak</p></div>
                   
           
             
             </div>
              </Col>
              </Row>
              <Row>
                  <Col className="col-md-8">
              <p className="ms-1">
  <FontAwesomeIcon icon={faLayerGroup} />
  Lorem ipsum dolor sit amet curr.....
</p>
</Col>
<Col >
    <div style={{ width: '60px',height:'30px', backgroundColor: '#E8E8E8',paddingLeft:'10px',marginRight: '6px' }}>
    <p className="pt-1">
    <FontAwesomeIcon icon={faCalendarDays} />
    1/2
  </p>
    </div>
 
</Col>
              </Row>
              <Row >
                  <div className="d-flex">
                  <div>
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/Screenshot 2024-01-11 195746.png"/>
                  </div>
                  <div className="ms-3">
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/>
                  </div>
                  <div className="mt-2" style={{borderRadius:'50%',backgroundColor: '#DCDCDC',width:'43px',height:'40px',marginLeft:'12px'}}>
                      <p className="pt-2 ps-2">12+</p>

                  </div>
                  <div >
                  <p className="ms-1 pt-3 ps-3">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faComments} />
  15
  </p>
</div>
<div >
<p className="ms-1 pt-3 ps-3">
  <FontAwesomeIcon style={{ color: 'grey', height: '20px', marginRight: '6px' }} icon={faLink} />
  15
</p>
</div>
<div >
                  <p className="ms-1 pt-3 ps-4">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faCalendarDays} />
  30-12-2022
  </p>
</div>
       
                  </div>
              
              </Row>
          </Row>
          <Row style={{width:'469px',backgroundColor:'white', height:'150px',marginTop:'30px'}}>
              <Row>
              <Col >
                  <div className="d-flex">
                      <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/></div>
             <div><p className="pt-3 ps-3">Client Name</p></div>
             
             </div>
              </Col>
              <Col className >
                  <div className="d-flex">
                  <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/images.jpg"/></div>
                  <div><p className="pt-3 ps-3">Sadik Istiak</p></div>
                   
           
             
             </div>
              </Col>
              </Row>
              <Row>
                  <Col className="col-md-8">
              <p className="ms-1">
  <FontAwesomeIcon icon={faLayerGroup} />
  Lorem ipsum dolor sit amet curr.....
</p>
</Col>
<Col >
    <div style={{ width: '60px',height:'30px', backgroundColor: '#E8E8E8',paddingLeft:'10px',marginRight: '6px' }}>
    <p className="pt-1">
    <FontAwesomeIcon icon={faCalendarDays} />
    1/2
  </p>
    </div>
 
</Col>
              </Row>
              <Row >
                  <div className="d-flex">
                  <div>
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/Screenshot 2024-01-11 195746.png"/>
                  </div>
                  <div className="ms-3">
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/>
                  </div>
                  <div className="mt-2" style={{borderRadius:'50%',backgroundColor: '#DCDCDC',width:'43px',height:'40px',marginLeft:'12px'}}>
                      <p className="pt-2 ps-2">12+</p>

                  </div>
                  <div >
                  <p className="ms-1 pt-3 ps-3">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faComments} />
  15
  </p>
</div>
<div >
<p className="ms-1 pt-3 ps-3">
  <FontAwesomeIcon style={{ color: 'grey', height: '20px', marginRight: '6px' }} icon={faLink} />
  15
</p>
</div>
<div >
                  <p className="ms-1 pt-3 ps-4">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faCalendarDays} />
  30-12-2022
  </p>
</div>
       
                  </div>
              
              </Row>
          </Row>


          <Row style={{width:'469px',backgroundColor:'white', height:'150px',marginTop:'30px'}}>
              <Row>
              <Col >
                  <div className="d-flex">
                      <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/></div>
             <div><p className="pt-3 ps-3">Client Name</p></div>
             
             </div>
              </Col>
              <Col >
                  <div className="d-flex">
                  <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/images.jpg"/></div>
                  <div><p className="pt-3 ps-3">Sadik Istiak</p></div>
                   
           
             
             </div>
              </Col>
              </Row>
              <Row>
                  <Col className="col-md-8">
              <p className="ms-1">
  <FontAwesomeIcon icon={faLayerGroup} />
  Lorem ipsum dolor sit amet curr.....
</p>
</Col>
<Col >
    <div style={{ width: '60px',height:'30px', backgroundColor: '#E8E8E8',paddingLeft:'10px',marginRight: '6px' }}>
    <p className="pt-1">
    <FontAwesomeIcon icon={faCalendarDays} />
    1/2
  </p>
    </div>
 
</Col>
              </Row>
              <Row >
                  <div className="d-flex">
                  <div>
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/Screenshot 2024-01-11 195746.png"/>
                  </div>
                  <div className="ms-3">
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/>
                  </div>
                  <div className="mt-2" style={{borderRadius:'50%',backgroundColor: '#DCDCDC',width:'43px',height:'40px',marginLeft:'12px'}}>
                      <p className="pt-2 ps-2">12+</p>

                  </div>
                  <div >
                  <p className="ms-1 pt-3 ps-3">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faComments} />
  15
  </p>
</div>
<div >
<p className="ms-1 pt-3 ps-3">
  <FontAwesomeIcon style={{ color: 'grey', height: '20px', marginRight: '6px' }} icon={faLink} />
  15
</p>
</div>
<div >
                  <p className="ms-1 pt-3 ps-4">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faCalendarDays} />
  30-12-2022
  </p>
</div>
       
                  </div>
              
              </Row>
          </Row>
          <Row style={{width:'469px',backgroundColor:'white', height:'150px',marginTop:'30px'}}>
              <Row>
              <Col >
                  <div className="d-flex">
                      <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/></div>
             <div><p className="pt-3 ps-3">Client Name</p></div>
             
             </div>
              </Col>
              <Col >
                  <div className="d-flex">
                  <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/images.jpg"/></div>
                  <div><p className="pt-3 ps-3">Sadik Istiak</p></div>
                   
           
             
             </div>
              </Col>
              </Row>
              <Row>
                  <Col className="col-md-8">
              <p className="ms-1">
  <FontAwesomeIcon icon={faLayerGroup} />
  Lorem ipsum dolor sit amet curr.....
</p>
</Col>
<Col >
    <div style={{ width: '60px',height:'30px', backgroundColor: '#E8E8E8',paddingLeft:'10px',marginRight: '6px' }}>
    <p className="pt-1">
    <FontAwesomeIcon icon={faCalendarDays} />
    1/2
  </p>
    </div>
 
</Col>
              </Row>
              <Row >
                  <div className="d-flex">
                  <div>
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/Screenshot 2024-01-11 195746.png"/>
                  </div>
                  <div className="ms-3">
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/>
                  </div>
                  <div className="mt-2" style={{borderRadius:'50%',backgroundColor: '#DCDCDC',width:'43px',height:'40px',marginLeft:'12px'}}>
                      <p className="pt-2 ps-2">12+</p>

                  </div>
                  <div >
                  <p className="ms-1 pt-3 ps-3">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faComments} />
  15
  </p>
</div>
<div >
<p className="ms-1 pt-3 ps-3">
  <FontAwesomeIcon style={{ color: 'grey', height: '20px', marginRight: '6px' }} icon={faLink} />
  15
</p>
</div>
<div >
                  <p className="ms-1 pt-3 ps-4">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faCalendarDays} />
  30-12-2022
  </p>
</div>
       
                  </div>
              
              </Row>
          </Row>
      </Card.Body>
      </div>
    </Card>
    {/* second potion */}
    <Card style={{ width: '490px', height:'1120px',backgroundColor:'#E8E8E8',marginRight:'1000px'}}>
    <div style={{ overflowY: 'auto', height: '1100px', overflowX: 'hidden', backgroundColor: 'blue'}}>
          <div style={{height:'50px',paddingTop:'20px'}} className="d-flex">
          <div className="d-flex">
  <div style={{ width: '30px', height: '30px', backgroundColor: '#00BFFF', borderTopLeftRadius: '50%', borderBottomLeftRadius: '50%' }}>
  
  </div>
</div>


    <h4 className="ms-2">To do</h4>
    <div>
    <div style={{ width: '30px',height:'30px', backgroundColor: '#D3D3D3',paddingLeft:'10px',marginLeft: '290px' }}>
    <p className="pt-1">
   
    0
  </p>
    </div>
    </div>

</div>
      <Card.Body>
     
      <Row style={{width:'469px',backgroundColor:'white', height:'150px'}}>
              <Row>
              <Col >
                  <div className="d-flex">
                      <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/></div>
             <div><p className="pt-3 ps-3">Client Name</p></div>
             
             </div>
              </Col>
              <Col >
                  <div className="d-flex">
                  <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/images.jpg"/></div>
                  <div><p className="pt-3 ps-3">Sadik Istiak</p></div>
                   
           
             
             </div>
              </Col>
              </Row>
              <Row>
                  <Col className="col-md-8">
              <p className="ms-1">
  <FontAwesomeIcon icon={faLayerGroup} />
  Lorem ipsum dolor sit amet curr.....
</p>
</Col>
<Col >
    <div style={{ width: '60px',height:'30px', backgroundColor: '#E8E8E8',paddingLeft:'10px',marginRight: '6px' ,borderRadius:'8%'}}>
    <p className="pt-1">
    <FontAwesomeIcon icon={faCalendarDays} />
    1/2
  </p>
    </div>
 
</Col>
              </Row>
              <Row>
                  <div className="d-flex">
                  <div>
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/Screenshot 2024-01-11 195746.png"/>
                  </div>
                  <div className="ms-3">
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/>
                  </div>
                  <div className="mt-2" style={{borderRadius:'50%',backgroundColor: '#DCDCDC',width:'43px',height:'40px',marginLeft:'12px'}}>
                      <p className="pt-2 ps-2">12+</p>

                  </div>
                  <div >
                  <p className="ms-1 pt-3 ps-3">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faComments} />
  15
  </p>
</div>
<div >
<p className="ms-1 pt-3 ps-3">
  <FontAwesomeIcon style={{ color: 'grey', height: '20px', marginRight: '6px' }} icon={faLink} />
  15
</p>
</div>
<div >
                  <p className="ms-1 pt-3 ps-4">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faCalendarDays} />
  30-12-2022
  </p>
</div>
       
                  </div>
              
              </Row>
          </Row>


          <Row style={{width:'469px',backgroundColor:'white', height:'150px',marginTop:'30px'}}>
              <Row>
              <Col >
                  <div className="d-flex">
                      <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/></div>
             <div><p className="pt-3 ps-3">Client Name</p></div>
             
             </div>
              </Col>
              <Col >
                  <div className="d-flex">
                  <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/images.jpg"/></div>
                  <div><p className="pt-3 ps-3">Sadik Istiak</p></div>
                   
           
             
             </div>
              </Col>
              </Row>
              <Row>
                  <Col className="col-md-8">
              <p className="ms-1">
  <FontAwesomeIcon icon={faLayerGroup} />
  Lorem ipsum dolor sit amet curr.....
</p>
</Col>
<Col >
    <div style={{ width: '60px',height:'30px', backgroundColor: '#E8E8E8',paddingLeft:'10px',marginRight: '6px' }}>
    <p className="pt-1">
    <FontAwesomeIcon icon={faCalendarDays} />
    1/2
  </p>
    </div>
 
</Col>
              </Row>
              <Row >
                  <div className="d-flex">
                  <div>
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/Screenshot 2024-01-11 195746.png"/>
                  </div>
                  <div className="ms-3">
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/>
                  </div>
                  <div className="mt-2" style={{borderRadius:'50%',backgroundColor: '#DCDCDC',width:'43px',height:'40px',marginLeft:'12px'}}>
                      <p className="pt-2 ps-2">12+</p>

                  </div>
                  <div >
                  <p className="ms-1 pt-3 ps-3">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faComments} />
  15
  </p>
</div>
<div >
<p className="ms-1 pt-3 ps-3">
  <FontAwesomeIcon style={{ color: 'grey', height: '20px', marginRight: '6px' }} icon={faLink} />
  15
</p>
</div>
<div >
                  <p className="ms-1 pt-3 ps-4">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faCalendarDays} />
  30-12-2022
  </p>
</div>
       
                  </div>
              
              </Row>
          </Row>

          <Row style={{width:'469px',backgroundColor:'white', height:'150px',marginTop:'30px'}}>
              <Row>
              <Col >
                  <div className="d-flex">
                      <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/></div>
             <div><p className="pt-3 ps-3">Client Name</p></div>
             
             </div>
              </Col>
              <Col >
                  <div className="d-flex">
                  <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/images.jpg"/></div>
                  <div><p className="pt-3 ps-3">Sadik Istiak</p></div>
                   
           
             
             </div>
              </Col>
              </Row>
              <Row>
                  <Col className="col-md-8">
              <p className="ms-1">
  <FontAwesomeIcon icon={faLayerGroup} />
  Lorem ipsum dolor sit amet curr.....
</p>
</Col>
<Col >
    <div style={{ width: '60px',height:'30px', backgroundColor: '#E8E8E8',paddingLeft:'10px',marginRight: '6px' }}>
    <p className="pt-1">
    <FontAwesomeIcon icon={faCalendarDays} />
    1/2
  </p>
    </div>
 
</Col>
              </Row>
              <Row >
                  <div className="d-flex">
                  <div>
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/Screenshot 2024-01-11 195746.png"/>
                  </div>
                  <div className="ms-3">
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/>
                  </div>
                  <div className="mt-2" style={{borderRadius:'50%',backgroundColor: '#DCDCDC',width:'43px',height:'40px',marginLeft:'12px'}}>
                      <p className="pt-2 ps-2">12+</p>

                  </div>
                  <div >
                  <p className="ms-1 pt-3 ps-3">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faComments} />
  15
  </p>
</div>
<div >
<p className="ms-1 pt-3 ps-3">
  <FontAwesomeIcon style={{ color: 'grey', height: '20px', marginRight: '6px' }} icon={faLink} />
  15
</p>
</div>
<div >
                  <p className="ms-1 pt-3 ps-4">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faCalendarDays} />
  30-12-2022
  </p>
</div>
       
                  </div>
              
              </Row>
          </Row>
          <Row style={{width:'469px',backgroundColor:'white', height:'150px',marginTop:'30px'}}>
              <Row>
              <Col >
                  <div className="d-flex">
                      <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/></div>
             <div><p className="pt-3 ps-3">Client Name</p></div>
             
             </div>
              </Col>
              <Col className >
                  <div className="d-flex">
                  <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/images.jpg"/></div>
                  <div><p className="pt-3 ps-3">Sadik Istiak</p></div>
                   
           
             
             </div>
              </Col>
              </Row>
              <Row>
                  <Col className="col-md-8">
              <p className="ms-1">
  <FontAwesomeIcon icon={faLayerGroup} />
  Lorem ipsum dolor sit amet curr.....
</p>
</Col>
<Col >
    <div style={{ width: '60px',height:'30px', backgroundColor: '#E8E8E8',paddingLeft:'10px',marginRight: '6px' }}>
    <p className="pt-1">
    <FontAwesomeIcon icon={faCalendarDays} />
    1/2
  </p>
    </div>
 
</Col>
              </Row>
              <Row >
                  <div className="d-flex">
                  <div>
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/Screenshot 2024-01-11 195746.png"/>
                  </div>
                  <div className="ms-3">
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/>
                  </div>
                  <div className="mt-2" style={{borderRadius:'50%',backgroundColor: '#DCDCDC',width:'43px',height:'40px',marginLeft:'12px'}}>
                      <p className="pt-2 ps-2">12+</p>

                  </div>
                  <div >
                  <p className="ms-1 pt-3 ps-3">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faComments} />
  15
  </p>
</div>
<div >
<p className="ms-1 pt-3 ps-3">
  <FontAwesomeIcon style={{ color: 'grey', height: '20px', marginRight: '6px' }} icon={faLink} />
  15
</p>
</div>
<div >
                  <p className="ms-1 pt-3 ps-4">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faCalendarDays} />
  30-12-2022
  </p>
</div>
       
                  </div>
              
              </Row>
          </Row>


          <Row style={{width:'469px',backgroundColor:'white', height:'150px',marginTop:'30px'}}>
              <Row>
              <Col >
                  <div className="d-flex">
                      <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/></div>
             <div><p className="pt-3 ps-3">Client Name</p></div>
             
             </div>
              </Col>
              <Col >
                  <div className="d-flex">
                  <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/images.jpg"/></div>
                  <div><p className="pt-3 ps-3">Sadik Istiak</p></div>
                   
           
             
             </div>
              </Col>
              </Row>
              <Row>
                  <Col className="col-md-8">
              <p className="ms-1">
  <FontAwesomeIcon icon={faLayerGroup} />
  Lorem ipsum dolor sit amet curr.....
</p>
</Col>
<Col >
    <div style={{ width: '60px',height:'30px', backgroundColor: '#E8E8E8',paddingLeft:'10px',marginRight: '6px' }}>
    <p className="pt-1">
    <FontAwesomeIcon icon={faCalendarDays} />
    1/2
  </p>
    </div>
 
</Col>
              </Row>
              <Row >
                  <div className="d-flex">
                  <div>
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/Screenshot 2024-01-11 195746.png"/>
                  </div>
                  <div className="ms-3">
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/>
                  </div>
                  <div className="mt-2" style={{borderRadius:'50%',backgroundColor: '#DCDCDC',width:'43px',height:'40px',marginLeft:'12px'}}>
                      <p className="pt-2 ps-2">12+</p>

                  </div>
                  <div >
                  <p className="ms-1 pt-3 ps-3">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faComments} />
  15
  </p>
</div>
<div >
<p className="ms-1 pt-3 ps-3">
  <FontAwesomeIcon style={{ color: 'grey', height: '20px', marginRight: '6px' }} icon={faLink} />
  15
</p>
</div>
<div >
                  <p className="ms-1 pt-3 ps-4">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faCalendarDays} />
  30-12-2022
  </p>
</div>
       
                  </div>
              
              </Row>
          </Row>
          <Row style={{width:'469px',backgroundColor:'white', height:'150px',marginTop:'30px'}}>
              <Row>
              <Col >
                  <div className="d-flex">
                      <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/></div>
             <div><p className="pt-3 ps-3">Client Name</p></div>
             
             </div>
              </Col>
              <Col >
                  <div className="d-flex">
                  <div><img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/images.jpg"/></div>
                  <div><p className="pt-3 ps-3">Sadik Istiak</p></div>
                   
           
             
             </div>
              </Col>
              </Row>
              <Row>
                  <Col className="col-md-8">
              <p className="ms-1">
  <FontAwesomeIcon icon={faLayerGroup} />
  Lorem ipsum dolor sit amet curr.....
</p>
</Col>
<Col >
    <div style={{ width: '60px',height:'30px', backgroundColor: '#E8E8E8',paddingLeft:'10px',marginRight: '6px' }}>
    <p className="pt-1">
    <FontAwesomeIcon icon={faCalendarDays} />
    1/2
  </p>
    </div>
 
</Col>
              </Row>
              <Row >
                  <div className="d-flex">
                  <div>
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/Screenshot 2024-01-11 195746.png"/>
                  </div>
                  <div className="ms-3">
                  <img className="mt-2"  style={{height:'40px',borderRadius:'50%',width:'40px'}}src="../../images/download.jpg"/>
                  </div>
                  <div className="mt-2" style={{borderRadius:'50%',backgroundColor: '#DCDCDC',width:'43px',height:'40px',marginLeft:'12px'}}>
                      <p className="pt-2 ps-2">12+</p>

                  </div>
                  <div >
                  <p className="ms-1 pt-3 ps-3">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faComments} />
  15
  </p>
</div>
<div >
<p className="ms-1 pt-3 ps-3">
  <FontAwesomeIcon style={{ color: 'grey', height: '20px', marginRight: '6px' }} icon={faLink} />
  15
</p>
</div>
<div >
                  <p className="ms-1 pt-3 ps-4">
    <FontAwesomeIcon style={{color:'grey',height:'20px',marginRight: '6px'}} icon={faCalendarDays} />
  30-12-2022
  </p>
</div>
       
                  </div>
              
              </Row>
          </Row>
      </Card.Body>
      </div>
    </Card>
    </CardGroup>
    
        </div>
    );
};

export default Application;