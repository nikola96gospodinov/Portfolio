import React from 'react'

import SideCV from '../SideCV'

import './SkillsList.css'

const SkillsList = () => {
  return (
    <div 
        style = {{
            background: '#ccc'
        }}
    >
      <div 
        className = "container boringDiv"
      >
        <div>
          <h1 className = "subheadings">Hard Skills</h1>
          <ul>
              <li className = "skillsList">Fundamental knowledge of <b>React.js</b> (including <b>Redux</b>)</li>
              <li className = "skillsList">Intermediate <b>JavaScript (ES6)</b></li>
              <li className = "skillsList">Good understanding of the basics of <b>PHP</b></li>
              <li className = "skillsList"><b>Node.js</b> (including <b>Express</b>)</li>
              <li className = "skillsList">Good understanding of both non-relational databases - <b>MongoDB (Mongoose)</b> and relational databases - <b>SQL (MySQL)</b></li>
              <li className = "skillsList"><b>CSS3 (SASS (SCSS), REM, Flexbox, CSS Grid)</b> (experience with <b>Bootstrap</b>)</li>
              <li className = "skillsList"><b>HTML5</b></li>
              <li className = "skillsList"><b>RESTful API</b> design</li>
              <li className = "skillsList"><b>JSON</b></li>
              <li className = "skillsList">Basic <b>Git</b> knowledge (uploading apps to <b>GitHub Pages</b> using Git)</li>
              <li className = "skillsList">Following basic <b>UX</b> principles (most notably by expert on UX design <b>Steve Krug</b>)</li>
              <li className = "skillsList">Good knowledge on the fundamental design principles (helpful with UI design)</li>
              <li className = "skillsList">Intermediate <b>Adobe Photoshop CS6/CC</b> skills</li>
              <li className = "skillsList">Exposure to <b>online marketing</b> (<b>email marketing, Messenger bots, Facebook ads, SEO, keyword research, copywriting)</b></li>
          </ul>
          <h1 className = "subheadings">Soft Skills</h1>
          <ul>
              <li className = "skillsList">Fluent English - <b>IELTS score of 7.0</b> (obtained in 2014 <b>before moving to the U.K.</b>)</li>
              <li className = "skillsList">Very good <b>listening skills</b></li>
              <li className = "skillsList">Proven effectiveness in team collaboration (experience working in a team, both in University and in the working environment)</li>
              <li className = "skillsList">Following <b>leadership principles</b> (most notably by expert on leadership <b>Jocko Willink</b>)</li>
              <li className = "skillsList">Good emotional intelligence, including recognizing non-verbal cues</li>
              <li className = "skillsList">Clear and precise writing skills</li>
              <li className = "skillsList"><b>Time-management</b> skills</li>
              <li className = "skillsList">Excellent <b>problem-solving abilities</b> and resourcefulness</li>
              <li className = "skillsList">Thoroughly completion of all assigned tasks and responsibilities</li>
              <li className = "skillsList">Offers constructive suggestions for improvements</li>
              <li className = "skillsList"><b>Growth Mindset</b></li>
          </ul>
        </div>
        <SideCV/>
      </div>
    </div>
  )
}

export default SkillsList
