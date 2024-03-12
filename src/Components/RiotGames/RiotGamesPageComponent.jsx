import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import './RiotGamesPageComponent.css'
import RiotGames from '../Assets/riotgamessign.jpeg'

const RiotGamesPageComponent = () => {
    return (
        <div className='bodyBg'>
            <Container>
                <p className='titleText'>Riot Games</p>
                <img className='homeImages' src={RiotGames} alt='Riot Games Sign' />
                <img />
                <Row className='mt-4 pb-5'>
                    <Col>
                        <div>
                            <p className='riotTextHeader'>Why do I want to work here?</p>
                            <p className='riotTextBody riotPadding'>It has been my dream to work at this company. I really enjoy the way they engineer either applications, which is why I want to learn as much as I can from their company and expand my knowledge. They are based in Los Angeles, but I am willing to move to pursue this career choice.</p>
                            <p className='riotTextBody riotPadding'>Riot has a focus on work/life balance, shown by our open paid time off policy, in addition to other perks such as flexible work schedules. We offer medical, dental, and life insurance, parental leave for you, your spouse/domestic partner and children, and a 401k with company match. and also has other benefits such as:</p>
                            <ul className='riotTextBody'>
                                <li>Total compensation includes your base pay + incentive compensation</li>
                                <li>Health Care</li>
                                <li>Family Care</li>
                                <li>Retirement</li>
                                <li>Open Paid Time Off</li>
                                <li>Company-Wide Breaks</li>
                                <li>Play Fund</li>
                                <li>Wellness Fund</li>
                                <li>Donation Matching</li>
                            </ul>
                            <p className='riotTextHeader'>What required stack?</p>
                            <ul className='riotTextBody'>
                                <li>C++</li>
                                <li>Unity</li>
                                <li>Unreal Engine</li>
                            </ul>
                            <p className='riotTextHeader'>What goals would I like to achieve?</p>
                            <p>Goals I would like to achieve are: </p>
                            <ul className='riotTextBody'>
                                <li>Gain experience working with Environment, Character and VFX artists</li>
                                <li>Be proficient in Unity or Unreal Engine</li>
                                <li>Work in a team environment with UI/UX designers</li>
                                <li>Learn new skills</li>
                            </ul>
                            <p className='riotTextHeader'>Do I have the current skill sets?</p>
                            <p className='riotTextBody riotPadding'>I have the required stack learned except for C++, but I will still need to expand on my knowledge of Unity and Unreal Engine since, I haven't worked on it in awhile. I am willing to always learn new skills</p>
                        </div>
                        <Button variant="success" target='_blank' as='a' href='https://www.riotgames.com/en/work-with-us/job/5652130/staff-software-engineer-rendering-league-of-legends-los-angeles-usa' className=''>Link to Job Application</Button>{' '}
                    </Col>
                    <Col>
                        <div>
                            <p className='riotTextHeader'>Job Description</p>
                            <p className='riotTextBody riotPadding'>At Riot Games, innovation in gaming is at the heart of what we do. As a Software Engineer for League of Legends on PC, focusing on graphics, you will have a vital role in bringing our games to life. Your work will directly influence the player experience, making every frame count. Projects will vary, combining both individual expertise and team collaboration.</p>
                            <p className='riotTextBody riotPadding'>As a Staff Software Engineer in the Gameplay team, you will be at the forefront bringing modern rendering techniques to the rich universe of League of Legends. This role is not just about coding; it's about pioneering innovative solutions that resonate with millions of players worldwide. In this role, you will report directly to an engineering manager in the Gameplay team.</p>
                            <p className='riotTextHeader'>Job Requirements</p>
                            <ul className='riotTextBody'>
                                <li>6+ years of professional programming experience.</li>
                                <li>A degree in a relevant field or comparable professional experience.</li>
                                <li>Expert knowledge of modern rendering techniques, workflows and asset pipelines.</li>
                                <li>Ability to collaborate and build trust with artists.</li>
                                <li>Experience writing and optimizing shaders with HLSL or GLSL.</li>
                                <li>Strong understanding of 3D math and graphics pipelines.</li>
                                <li>Expertise in low-level optimization with C++.</li>
                                <li>Background in the gaming industry and familiarity with different game engines.</li>
                            </ul>
                            <p className='riotTextHeader'>Desirable Skills</p>
                            <ul className='riotTextBody'>
                                <li>Interest in Stylized Rendering.</li>
                                <li>Experience working with Environment, Character and VFX artists.</li>
                                <li>Proficiency with Unreal Engine or Unity.</li>
                                <li>Proficiency with Substance, Maya, Houdini or other art content creation tools.</li>
                            </ul>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RiotGamesPageComponent
