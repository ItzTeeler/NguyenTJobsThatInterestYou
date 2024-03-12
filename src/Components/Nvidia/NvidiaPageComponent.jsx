import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import './NvidiaPageComponent.css'
import Nvidia from '../Assets/nvidiasign.jpeg'
const NvidiaPageComponent = () => {
  return (
    <div className='bodyBg'>
    <Container>
    <p className='titleText'>Nvidia</p>
    <img className='homeImages' src={Nvidia} alt='Riot Games Sign'/>
    <img/>
      <Row className='mt-4 pb-5'>
          <Col>
          <div>
              <p className='nvidiaTextHeader'>Why do I want to work here?</p>
              <p className='nvidiaTextBody nvidiaPadding'>I would like to work here because, I have a interest in Nvidia's graphics cards and the way they tackle challenges as a team environment. Nvidia is also, the main Engine of Artificial Intelligence, because of how advanced their chips are. The location of this job is in Santa Clara, which I like since it's not that long of a commute. And the flexible ability of work force </p>
              <p>Nvidia also has amazing benefits such as:</p>
              <ul className='nvidiaTextBody'>
                  <li>Health Care Benefits</li>
                  <li>Time Off and Holidays</li>
                  <li>GuidanceResources EAP (Dental)</li>
                  <li>Disability Insurance (Vision Care)</li>
                  <li>Financial Resources</li>
                  <li>Preventive Care</li>
                 
              </ul>
              <p className='nvidiaTextHeader'>What required stack?</p>
              <ul className='nvidiaTextBody'>
                  <li>C</li>
                  <li>C++</li>
                  <li>Python</li>
                  <li>Scripting Languages</li>
                  <li>SQL</li>
                  <li>DirectX, OpenGL, Vulkan</li>
              </ul>
              <p className='nvidiaTextHeader'>What goals would I like to achieve?</p>
              <p>Goals I would like to achieve are: </p>
              <ul className='nvidiaTextBody'>
                  <li>Expand my communication skills with peer reviews</li>
                  <li>Produce high quality code with good design and architecture.</li>
                  <li>Be proficient in Scala</li>
                  <li>Learn new skills</li>
              </ul>
              <p className='nvidiaTextHeader'>Do I have the current skill sets?</p>
              <p className='nvidiaTextBody nvidiaPadding'>I do not have the current skill sets that they would like to have as an employ there. I would need to learn multiple languages and expand my knowledge about SQL. Also, learning how to batch data pipelines using Kafka and related technologies.</p>
          </div>
          <Button variant="success" target='_blank' as='a' href='https://www.linkedin.com/jobs/view/gpu-system-software-engineer-at-nvidia-3847978098/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic' className=''>Link to Job Application</Button>{' '}
          </Col>
          <Col>
          <div>
              <p className='nvidiaTextHeader'>Job Description</p>
              <p className='nvidiaTextBody nvidiaPadding'>At NVIDIA, we build groundbreaking products for the following sectors: Automotive, VR, Gaming, Deep Learning, and High Performance Computing. See your efforts in action as developers use your tools to debug, profile and analyze the performance of their systems/applications using the low-level library that you helped to craft as a member of the GPU Foundations Developer Tools team! Innovate as you develop the performance analysis capabilities of NVIDIA hardware along with the NSight Perf SDK to support current and future generations of GPUs.</p>
              <ul className='nvidiaTextBody'>
                <li>Design, build, and maintain high-performance streaming and batch data pipelines using Kafka and related technologies</li>
                <li>Design and build components of PB sized scalable data lake and structured/unstructured data query interfaces and microservices to ingest, index, mine, transform, and compose large datasets</li>
                <li>Hands-on writing of high quality code, good design & architecture, fully tested and peer reviewed</li>
                <li>Partner with our other engineering and product teams to solve data modeling, data heterogeneity and data quality issues at scale</li>
              </ul>
              <p className='nvidiaTextHeader'>Job Requirements</p>
              <p className='nvidiaTextBody nvidiaPadding'>What they need to see:</p>
              <ul className='nvidiaTextBody'>
                  <li>B.S. EE/CS or equivalent experience with 4+ years of experience or MS with 2+ years' experience, or Ph.D.</li>
                  <li>Strong programming ability in C, C++, and scripting languages.</li>
                  <li>Solid understanding of hardware pipeline concepts, with a willingness to work at a detailed implementation level.</li>
                  <li>Demonstrated working knowledge of computer graphics (DirectX, OpenGL, Vulkan) and/or compute (CUDA).</li>
              </ul>
          </div>
          
          </Col>
      </Row>
    </Container>
  </div>
  )
}

export default NvidiaPageComponent
