import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import './UnityPageComponent.css'
import Unity from '../Assets/unitysign.jpg'
const UnityPageComponent = () => {
  return (
    <div className='bodyBg'>
            <Container>
                <p className='titleText'>Unity</p>
                <img className='homeImages' src={Unity} alt='Riot Games Sign' />
                <img />
                <Row className='mt-4 pb-5'>
                    <Col>
                        <div>
                            <p className='unityTextHeader'>Why do I want to work here?</p>
                            <p className='unityTextBody unityPadding'>I would like to work at Unity, because it's the main firmware that video game creators use. I find it important that they value their employees well-being and work-life balance. </p>
                            <p className='unityTextBody'>Unity also has benefits such as:</p>
                            <ul className='unityTextBody'>
                                <li>Comprehensive health, life and disability insurance</li>
                                <li>Commuting subsidy</li>
                                <li>Employee stock ownership</li>
                                <li>Competitive retirement/pension plans</li>
                                <li>Generous vacation and personal days</li>
                                <li>Paid leave for new parents</li>
                                <li>Office food and free snacks, including lots of healthy options!</li>
                                <li>Training and development programs</li>
                            </ul>
                            <p className='unityTextHeader'>What required stack?</p>
                            <ul className='unityTextBody'>
                                <li>C++</li>
                                <li>C#</li>
                                <li>Unity</li>
                            </ul>
                            <p className='unityTextHeader'>What goals would I like to achieve?</p>
                            <p>Goals I would like to achieve are: </p>
                            <ul className='unityTextBody'>
                                <li>Gain experience working with Environment, Character and VFX artists</li>
                                <li>Be proficient in Unity or Unreal Engine</li>
                                <li>Work in a team environment with UI/UX designers</li>
                                <li>Learn new skills</li>
                            </ul>
                            <p className='unityTextHeader'>Do I have the current skill sets?</p>
                            <p className='unityTextBody unityPadding'>I have the required stack learned except for C++, but I will still need to expand on my knowledge of Unity and C#. I know the fundamentals of both stacks.</p>
                        </div>
                        <Button variant="success" target='_blank' as='a' href='https://careers.unity.com/position/5129680' className=''>Link to Job Application</Button>{' '}
                    </Col>
                    <Col>
                        <div>
                            <p className='unityTextHeader'>Job Description</p>
                            <p className='unityTextBody unityPadding'>At Unity, we believe XR is going to be increasingly important. We are the platform of choice for XR developers today and intend to remain that way. As the XR ecosystem evolves and immersive computing becomes more prevalent, we want to be ready.</p>
                            <p className='unityTextBody unityPadding'>Your mission will be to add to and improve all things XR Input - primarily hands, body, and gestures - all the way down to the platform APIs that support them, as well as improving and crafting supporting intuitive workflows. If making all things XR related reach their full potential drives you, Unity should be the next stop in your career!</p>
                            <p className='unityTextHeader'>Job Requirements</p>
                            <ul className='unityTextBody'>
                                <li>Strong software engineering fundamentals</li>
                                <li>Expertise with C++, C#, and interop between the two</li>
                                <li>Working knowledge of Unity</li>
                                <li>Great teamwork and interpersonal skills, including strong communication skills and a proactive work ethic</li>
                                <li>Experience or interest in XR application development</li>
                            </ul>
                            <p className='unityTextHeader'>Desirable Skills</p>
                            <ul className='unityTextBody'>
                                <li>Proven understanding of geometry and linear algebra</li>
                                <li>Profiling and optimization experience</li>
                                <li>3D rendering</li>
                            </ul>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default UnityPageComponent
