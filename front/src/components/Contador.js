import React, { useState } from 'react'

import { Container, Row, Col } from 'react-bootstrap'


export default function Categories() {
    const [addMexico, setCount] = useState(0);
    const [addPeru, setAdd] = useState(0); 
    const [addVenezuela, setAddV] = useState(0); 
    const [addPakistani, setAddP] = useState(0); 
	const [addChile, setAddCl] = useState(0); 
	const [addJapan, setAddJp] = useState(0); 
	
    const IncrementMexico = () =>
        setTimeout(
            () => setCount(currentCount => currentCount + 1),
            100
        );
    const IncrementVenezuela = () =>
        setTimeout(
            () => setAdd(currentCount => currentCount + 1),
            100
        );
    const IncrementPeru = () => 
        setTimeout(
            () => setAddV(currentCount => currentCount + 1),
            100
        );
    const IncrementPak = () => 
        setTimeout(
            () => setAddP(currentCount => currentCount + 1),
            100
        );
	const IncrementCl = () => 
        setTimeout(
            () => setAddCl(currentCount => currentCount + 1),
            100
        );
	const IncrementJp = () => 
        setTimeout(
            () => setAddJp(currentCount => currentCount + 1),
            100
        );
		
    return (
        <div id="categories">
            <div className="justify-content-md-center text-center pt-2 card">
                <div className="card-body"><h5>👍 your favorite food</h5></div>
            </div>
            <Container className="mt-4 mb-4">
                <Row className="justify-content-md-center text-center">
                    <Col className="mr-5">
                        <h2><span role='img' aria-label='Flag of Mexico emoji' className='menu-item'>🇲🇽</span></h2>
                        <h5>
                            Mexican    
                        </h5>
                        <div className="justify-content-md-center text-center">
                            <button className="btn btn-light" onClick={IncrementMexico} aria-label="Like">👍</button><h5>{addMexico}</h5>
                        </div>
                    </Col>
                    <Col className="mr-5">
                        <h2><span role='img' aria-label='Flag of Venezuela emoji' className='menu-item'>🇻🇪</span></h2>
                        <h5>
                           Venezuelan   
                        </h5>
                        <div className="justify-content-md-center text-center">
                            <button className="btn btn-light" onClick={IncrementVenezuela} aria-label="Like">👍</button><h5>{addVenezuela}</h5>
                        </div>
                    </Col>
                    <Col>
                        <h2><span role='img' aria-label='Flag of Peru emoji' className='menu-item'>🇵🇪</span></h2>
                        <h5>
                            Peruvian 
                        </h5>
                        <div className="justify-content-md-center text-center">
                            <button className="btn btn-light" onClick={IncrementPeru} aria-label="Like">👍</button><h5>{addPeru}</h5>
                        </div>
                    </Col>
                    <Col>
                        <h2><span role='img' aria-label='Flag of Pakistan emoji' className='menu-item'>🇵🇰</span></h2>
                        <h5>
                        Pakistani 
                        </h5>
                        <div className="justify-content-md-center text-center">
                            <button className="btn btn-light" onClick={IncrementPak} aria-label="Like">👍</button><h5>{addPakistani}</h5>
                        </div>
                    </Col>
					<Col>
                        <h2><span role='img' aria-label='Flag of Chile emoji' className='menu-item'>🇨🇱</span></h2>
                        <h5>
                            Chilean 
                        </h5>
                        <div className="justify-content-md-center text-center">
                            <button className="btn btn-light" onClick={IncrementCl} aria-label="Like">👍</button><h5>{addChile}</h5>
                        </div>
                    </Col>
					<Col>
                        <h2><span role='img' aria-label='Noodles With Chopsticks' className='menu-item'>🍜</span></h2>
                        <h5>
                            Japanese 
                        </h5>
                        <div className="justify-content-md-center text-center">
                            <button className="btn btn-light" onClick={IncrementJp} aria-label="Like">👍</button><h5>{addJapan}</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
