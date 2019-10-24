import React, { useState } from 'react'

import { Container, Row, Col } from 'react-bootstrap'


export default function Categories() {
    const [mexican, setMexican] = useState(0);
    const [venezuelan, setVenezuelan] = useState(0); 
    const [peruvian, setPeruvian] = useState(0); 
    const [pakistani, setPakistani] = useState(0); 
	const [chilean, setChilean] = useState(0); 
	const [japanese, setJapanese] = useState(0); 
	const [spanish, setSpanish] = useState(0); 
		
    return (
        <div id="categories">
            <Container className="mt-4 mb-4">
                <h2 className="text-center mb-4">👍 tell us which international food you like</h2>
                <Row className="justify-content-md-center text-center">
                    <Col className="mr-5">
                        <h2>
                            <span role='img' aria-label='Flag of Mexico emoji' className='menu-item'>🇲🇽</span>    
                        </h2>
                        <h6>
                            Mexican 
                        </h6>
                        <div className="justify-content-md-center text-center">
                            <button className="btn btn-light" onClick={() => setMexican(mexican + 1)} aria-label="Like">👍 {mexican}</button>
                        </div>
                    </Col>
                    <Col className="mr-5">
                        <h2><span role='img' aria-label='Flag of Venezuela emoji' className='menu-item'>🇻🇪</span></h2>
                        <h6>
                           Venezuelan   
                        </h6>
                        <div className="justify-content-md-center text-center">
                            <button className="btn btn-light" onClick={() => setVenezuelan(venezuelan + 1)} aria-label="Like">👍 {venezuelan}</button>
                        </div>
                    </Col>
                    <Col>
                        <h2><span role='img' aria-label='Flag of Peru emoji' className='menu-item'>🇵🇪</span></h2>
                        <h6>
                            Peruvian 
                        </h6>
                        <div className="justify-content-md-center text-center">
                            <button className="btn btn-light" onClick={() => setPeruvian(peruvian + 1)} aria-label="Like">👍 {peruvian}</button>
                        </div>
                    </Col>
                    <Col>
                        <h2><span role='img' aria-label='Flag of Pakistan emoji' className='menu-item'>🇵🇰</span></h2>
                        <h6>
                        Pakistani 
                        </h6>
                        <div className="justify-content-md-center text-center">
                            <button className="btn btn-light" onClick={() => setPakistani(pakistani + 1)} aria-label="Like">👍 {pakistani}</button>
                        </div>
                    </Col>
					<Col>
                        <h2><span role='img' aria-label='Flag of Chile emoji' className='menu-item'>🇨🇱</span></h2>
                        <h6>
                            Chilean 
                        </h6>
                        <div className="justify-content-md-center text-center">
                            <button className="btn btn-light" onClick={() => setChilean(chilean + 1)} aria-label="Like">👍 {chilean}</button>
                        </div>
                    </Col>
					<Col>
                        <h2><span role='img' aria-label='Flag of Japan emoji' className='menu-item'>🇯🇵</span></h2>
                        <h6>
                            Japanese 
                        </h6>
                        <div className="justify-content-md-center text-center">
                            <button className="btn btn-light" onClick={() => setJapanese(japanese + 1)} aria-label="Like">👍 {japanese}</button>
                        </div>
                    </Col>
                    <Col>
                        <h2><span role='img' aria-label='Flag of Spain emoji' className='menu-item'>🇪🇸</span></h2>
                        <h6>
                            Spanish 
                        </h6>
                        <div className="justify-content-md-center text-center">
                            <button className="btn btn-light" onClick={() => setSpanish(spanish + 1)} aria-label="Like">👍 {spanish}</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
