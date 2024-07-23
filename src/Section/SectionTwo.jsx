import React from 'react'
import './SectionTwo.css'

export default function SectionTwo() {
  return (
    <div className="container_SectionTow">
        <div className='uphead'>
            <h6>Nezuware UPS</h6>
            <h3>Enhancing Organizational Efficiency with Comprehensive HR Solutions</h3>
            <h5>Derived from its vision, Placement Plaza focuses on delivering strategic HR solutions to support organizational success:</h5>
        </div>
        <div className='sec'>
            <div className='s1'>
                <p><i class="fa-solid fa-circle-check"></i>Optimize Management Focus to concentrate on achieving strategic organizational goals.</p>
                <p><i class="fa-solid fa-circle-check"></i>Tailored Workforce Solutions to meet specific organizational needs efficiently.</p>
                <p><i class="fa-solid fa-circle-check"></i>Customized Training Programs to align with the organization's requirements and enhance workforce capabilities.</p>
                <p><i class="fa-solid fa-circle-check"></i>Ensured Timely Payments to ensure satisfaction and reliability.</p>
                <p><i class="fa-solid fa-circle-check"></i>Compliance and Benefits Management with legal standards and safeguarding employee benefits.</p>
                <button>Get Started</button>
            </div>
            <div className='s2'>
                <img src="./image/logo2.jpg"  />
            </div>
        </div>
    </div>
  )
}
