import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import './TeslaPageComponent.css'
import Tesla from '../Assets/teslasign.jpeg'
const TeslaPageComponent = () => {
  return (
    <div className='bodyBg'>
            <Container>
                <p className='titleText'>Tesla</p>
                <img className='teslaImage' src={Tesla} alt='Riot Games Sign' />
                <img />
                <Row className='mt-4 pb-5'>
                    <Col>
                        <div>
                            <p className='teslaTextHeader'>Why do I want to work here?</p>
                            <p className='teslaTextBody teslaPadding'>I would like to work here because of the reliability of the work force in the future. I'm also interested in how they make their mobile application communicate with their vehicles and their ability to automatically drive.</p>
                            <p className='teslaTextBody'>Tesla also has amazing benefits such as:</p>
                            <ul className='teslaTextBody'>
                                <li>Total compensation includes your base pay + incentive compensation</li>
                                <li>Family-building, fertility, adoption and surrogacy benefits</li>
                                <li>Dental and Vision plans</li>
                                <li>Company Paid HSA Contribution</li>
                                <li>401(k)</li>
                                <li>Compensation</li>
                            </ul>
                            <p className='teslaTextHeader'>What required stack?</p>
                            <ul className='teslaTextBody'>
                                <li>Swift</li>
                                <li>Kotlin</li>
                                <li>Objective-C</li>
                                <li>Java</li>
                                <li>JavaScript/TypeScript</li>
                                <li>React/React Native</li>
                            </ul>
                            <p className='teslaTextHeader'>What goals would I like to achieve?</p>
                            <p>Goals I would like to achieve are: </p>
                            <ul className='teslaTextBody'>
                                <li>Ability to design, code and maintain mobile user experiences</li>
                                <li>Have more optimizable code for performance</li>
                                <li>Work in a team environment with hardware engineers, and UI software engineers</li>
                                <li>Learn new skills</li>
                            </ul>
                            <p className='teslaTextHeader'>Do I have the current skill sets?</p>
                            <p className='teslaTextBody teslaPadding'>I only know JavaScript/TypeScript, and React for my stacks. I would need to learn the other languages to be more of an asset for the company.</p>
                        </div>
                        <Button variant="success" target='_blank' as='a' href='https://www.tesla.com/careers/search/job/software-engineer-mobile-46420' className=''>Link to Job Application</Button>{' '}
                    </Col>
                    <Col>
                        <div>
                            <p className='teslaTextHeader'>Job Description</p>
                            <p className='teslaTextBody teslaPadding'>We are looking for a highly motivated mobile engineer specializing in creating exceptional user experiences for our users. You will need to demonstrate strong software engineering skills, excellent interpersonal communication, tenacity, extreme ownership, and the ability to accept and give meaningful technical feedback. You will be responsible for designing architecture, writing correct, robust code, maintaining and improving existing functionality, and shipping new features. You will collaborate with our design team as well as vehicle UI and back-end developers. Our team strives to set the bar for vehicle mobile user experience. We want to work with people who are excited by this goal and have the talent to deliver on it.</p>
                            <p className='teslaTextHeader'>Job Requirements</p>
                            <ul className='teslaTextBody'>
                                <li>Bachelor's Degree in Computer Science, Software Engineering, or equivalent.</li>
                                <li>Minimum 2 years' experience in Mobile (iOS/Android) development.</li>
                                <li>Proficient in at least one of: Swift, Kotlin, Objective-C, or Java.</li>
                                <li>Familiar with JavaScript/TypeScript. Experience with React/React Native is preferred.</li>
                                <li>Excellent grasp of fundamental computer science concepts, good at solving complex technical problem.</li>
                                <li>Experience using common design patterns. High standards for code quality, maintainability, and performance.</li>
                                <li>Experience creating, maintaining, and shipping top-ranking mobile apps is preferred.</li>
                            </ul>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default TeslaPageComponent
