import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import './HomePageComponent.css'
import RiotGames from '../Assets/riotgamessign.jpeg'
import Nvidia from '../Assets/nvidiasign.jpeg'
import Button from 'react-bootstrap/Button';
import Unity from '../Assets/unitysign.jpg';
import Intel from '../Assets/intelsign.jpg';
import Tesla from '../Assets/teslasign.jpeg';
import Wave from '../Assets/wave.svg';
import { useNavigate } from 'react-router-dom'

const HomePageComponent = () => {

    const navigate = useNavigate();
    const navigateRiot = ()=>{
        navigate('/riotgames')
    }
    const navigateNvidia = ()=>{
        navigate('/nvidia')
    }
    const navigateUnity = ()=>{
        navigate('/unity')
    }
    const navigateIntel = ()=>{
        navigate('/intel')
    }
    const navigateTesla = ()=>{
        navigate('/tesla')
    }


    return (
        <div className='bodyBg'>
            <img src={Wave}/>
            <Container>
            <Row>
                <Col>
                    <p className='titleText'>Top 5 Dream Jobs!</p>
                    <div>
                    {/* https://www.riotgames.com/en/work-with-us/job/5652130/staff-software-engineer-rendering-league-of-legends-los-angeles-usa */}
                       <p className='headerText'>1. Riot Games</p> 
                       <img className='homeImages' src={RiotGames} alt='Riot Games Sign'/>
                       <div className='bodyText'>
                        <p className='bodyTextTitle'>Life at Riot</p>
                        <p>We strive to create a supportive, creative workplace where Rioters can focus on what matters most: players. From champion-themed meeting rooms to PC cafes and arcades, Riot's campuses immerse them in the player experience and enable them to team up and solve monumental challenges.</p>
                       </div>
                       <Button variant="success" onClick={navigateRiot} className='buttonStyle'>Go to Riot Games</Button>{' '}
                    </div>

                    <div>
                    {/* https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternalCareerSite/job/Senior-Software-Engineer---Data-Engineer_JR1979673-1 */}
                       <p className='headerText'>2. Nvidia</p> 
                       <img className='homeImages' src={Nvidia} alt='Riot Games Sign'/>
                       <div className='bodyText'>
                        <p className='bodyTextTitle'>Life at Nvidia</p>
                        <p>You'll solve some of the world's hardest problems and discover never-before-seen ways to improve the quality of life for people everywhere. From healthcare to robots. Self-driving cars to blockbuster movies. And a growing list of new opportunities every single day.</p>
                        </div>
                       <Button variant="success" onClick={navigateNvidia} className='buttonStyle'>Go to Nvidia</Button>{' '}
                    </div>

                    <div>
                    {/* https://careers.unity.com/position/5129680 */}
                       <p className='headerText'>3. Unity</p> 
                       <img className='homeImages' src={Unity} alt='Riot Games Sign'/>
                       <div className='bodyText'>
                        <p className='bodyTextTitle'>Life at Unity</p>
                        <p>Unity is growing quickly and we want our employees to grow with us. One way we promote this is by offering an Internal Mobility program.</p>
                       </div>
                       <Button variant="success" onClick={navigateUnity} className='buttonStyle'>Go to Unity</Button>{' '}
                    </div>

                    <div>
                    {/* https://jobs.intel.com/en/job/santa-clara/ai-frameworks-engineer/41147/62337732208 */}
                       <p className='headerText'>4. Intel</p> 
                       <img className='homeImages' src={Intel} alt='Riot Games Sign'/>
                       <div className='bodyText'>
                        <p className='bodyTextTitle'>Life and Culture at Intel</p>
                        <p>When you join Intel, you become part of a global organization with big ambitions. Our people have had a profound influence on the world by creating radical innovations that revolutionize the way we live.</p>
                        </div>
                       <Button variant="success" onClick={navigateIntel} className='buttonStyle'>Go to Intel</Button>{' '}
                    </div>

                    <div>
                    {/* https://www.tesla.com/careers/search/job/staff-frontend-engineer-vehicle-ui-218001 */}
                       <p className='headerText'>5. Tesla</p> 
                       <img className='teslaImage' src={Tesla} alt='Riot Games Sign'/>
                       <div className='bodyText'>
                        <p className='bodyTextTitle'>Life at Tesla</p>
                        <p>We invite exceptional people from any background to join us in our mission to accelerate the world's transition to sustainable energy. Tesla employees enjoy comprehensive medical coverage, 401(k) and generous PTO from day one. With equity grants, stock discounts and more perks, we invest in our team to help them do their best work.</p>
                        </div>
                       <Button variant="success" onClick={navigateTesla} className='buttonStyle'>Go to Tesla</Button>{' '}
                    </div>
                    
                    
                </Col>
            </Row>
        </Container>
        </div>
        
    )
}

export default HomePageComponent
