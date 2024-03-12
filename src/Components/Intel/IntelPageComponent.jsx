import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Intel from '../Assets/intelsign.jpg';
import './IntelPageComponent.css'

const IntelPageComponent = () => {
  return (
    <div className='bodyBg'>
      <Container>
      <p className='titleText'>Intel</p>
      <img className='homeImages' src={Intel} alt='Riot Games Sign'/>
      <img/>
        <Row className='mt-4 pb-5'>
            <Col>
            <div>
                <p className='intelTextHeader'>Why do I want to work here?</p>
                <p className='intelTextBody intelPadding'>I would like to work here because, I want to be involved in the future of Artificial Intelligence and being at Intel will allow me to pursue that dream. Intel is also the leading data center for CPU, GPU and AI accelerator products. The location of this job is in Santa Clara, which provides a hybrid work force. I really like the idea of a hybrid work style, because of how flexible it is. </p>
                <p>Intel also has amazing benefits such as:</p>
                <ul className='intelTextBody'>
                    <li>Annual & Quarterly Bonuses</li>
                    <li>Stock Programs</li>
                    <li>Retirement Programs</li>
                    <li>Vacation Time, Holidays, and More</li>
                    <li>Flexible Work Options</li>
                    <li>Health and Wellness</li>
                    <li>Health Plans and Physical Wellness Programs</li>
                    <li>Family Building Benefits</li>
                </ul>
                <p className='intelTextHeader'>What required stack?</p>
                <ul className='intelTextBody'>
                    <li>C++</li>
                    <li>Python</li>
                </ul>
                <p className='intelTextHeader'>What goals would I like to achieve?</p>
                <p>Goals I would like to achieve are: </p>
                <ul className='intelTextBody'>
                    <li>Expand knowledge about Artificial Intelligence</li>
                    <li>Work in a team environment</li>
                    <li>Work with new frameworks</li>
                    <li>Learn new skills</li>
                </ul>
                <p className='intelTextHeader'>Do I have the current skill sets?</p>
                <p className='intelTextBody intelPadding'>I do not have the current skill sets that they would like to have as an employ there. I would need to learn both C++ and Python. Also, know more about Deep Learning, experience in the field of Artificial Intelligence, frameworks such as PyTorch, and the understanding of Deep Learning algorithms.</p>
            </div>
            <Button variant="success" target='_blank' as='a' href='https://jobs.intel.com/en/job/santa-clara/ai-frameworks-engineer/41147/62337732208' className=''>Link to Job Application</Button>{' '}
            </Col>
            <Col>
            <div>
                <p className='intelTextHeader'>Job Description</p>
                <p className='intelTextBody intelPadding'>The Intel Data Center and AI (DCAI) group creates Intel's leading data center CPU, GPU, and AI accelerator products.  The AI SW Engineering (AISE) division is at the leading edge of the AI revolution at Intel, covering the AI stack from frameworks like PyTorch and TensorFlow, to higher level and domain SW like Hugging Face, DeepSpeed, and application reference kits.  It is an organization with a strong technical atmosphere, innovation, friendly team-work spirit, and engineers with diverse technical backgrounds.</p>
                <p className='intelTextHeader'>Job Requirements</p>
                <p className='intelTextBody intelPadding'>The candidate must have a Bachelor's degree in Electrical/Computer Engineering or Computer Science or related technical field and 3+ years of experience -OR- a Master's degree in Electrical/Computer Engineering or Computer Science or related technical field and 1+ years of experience -OR- a PhD in Electrical/Computer Engineering or Computer Science or related technical field and 1+ year of experience in:</p>
                <ul className='intelTextBody'>
                    <li>1+ year in C++/Python either through coursework or prior experience.</li>
                </ul>
                <p className='intelTextHeader'>Preferred Qualifications</p>
                <ul className='intelTextBody'>
                    <li>Research or publications or coursework related to Deep Learning</li>
                    <li>Previous internship experience in the field of AI</li>
                    <li>Experience with Deep Learning frameworks such as PyTorch</li>
                    <li>Understanding of Deep Learning algorithms</li>
                    <li>Developing or optimizing Deep Learning models, especially low precision models</li>
                    <li>MLPerf benchmarks</li>
                </ul>
            </div>
            
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default IntelPageComponent
