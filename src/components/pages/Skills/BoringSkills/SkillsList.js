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
          <h1 className = "subheadings">I.T. Skills</h1>
          <ul>
              <li className = "skillsList">Following basic <b>UX</b> principles (most notably by expert on UX design <b>Steve Krug</b>)</li>
              <li className = "skillsList">Good knowledge on the fundamental design principles (helpful with UI design)</li>
              <li className = "skillsList">Good working knowledge with <b>HTML5</b></li>
              <li className = "skillsList"><b>CSS3 (SASS (SCSS), REM, Flexbox, CSS Grid)</b> (experience with <b>Bootstrap</b>)</li>
              <li className = "skillsList">Intermediate <b>JavaScript (ES6)</b> (including basic <b>jQuery</b>)</li>
              <li className = "skillsList">Fundamental knowledge of <b>React.js</b> (including <b>Redux</b>)</li>
              <li className = "skillsList">In the process of learning <b>Node.js</b></li>
              <li className = "skillsList">Intermediate <b>Adobe Photoshop CS6/CC</b> skills</li>
              <li className = "skillsList"><b>Wordpress</b> (website creation and website and portal monitoring) (experience with various WordPress plugins including “<b>Elementor</b>”)</li>
              <li className = "skillsList"><b>Java</b> coding</li>
              <li className = "skillsList">Basic <b>PHP</b>, <b>Pearl</b> and <b>MySQL</b></li>
              <li className = "skillsList">Computer Literate <b>(MS Word, MS Excel, MS PowerPoint, Prezi, XAMPP)</b></li>
              <li className = "skillsList">Setting up websites from scratch</li>
          </ul>
          <h1 className = "subheadings">Online Marketing Skills</h1>
          <ul>
              <li className = "skillsList">Basic knowledge on <b>email marketing</b> (setting up email sequences, grouping subscribers into “buckets”) (experience with <b>MailChimp</b>)</li>
              <li className = "skillsList">Basic knowledge on setting up <b>Messenger Bots</b> (using <b>ChatFuel</b>)</li>
              <li className = "skillsList">Basic knowledge on setting up <b>Facebook ads</b> (setting up sequences with higher conversion rates, creating audiences, setting up rules)</li>
              <li className = "skillsList">Basic <b>SEO</b> knowledge</li>
              <li className = "skillsList"><b>Keyword research</b></li>
          </ul>
          <h1 className = "subheadings">Communication Skills</h1>
          <ul>
              <li className = "skillsList">Fluent English - <b>IELTS score 7.0</b> (obtained in 2014 <b>before moving to the U.K.</b>)</li>
              <li className = "skillsList">Effective <b>listening skills</b></li>
              <li className = "skillsList">Working well in a team</li>
              <li className = "skillsList">Following <b>leadership principles</b> (most notably by expert on leadership <b>Jocko Willink</b>)</li>
              <li className = "skillsList">Reading non-verbal cues</li>
              <li className = "skillsList">Basic <b>Copywriting</b> skills</li>
              <li className = "skillsList">Clear writing style</li>
          </ul>
          <h1 className = "subheadings">Other Skills</h1>
          <ul>
              <li className = "skillsList">Remarkable <b>time-management skills</b> (developed a system for increasing productivity by planning the next day and week in advance, tracking work efficiency throughout the day to schedule the day more effectively, tracking mood, sleep etc. to schedule the days based on more than a dozen different factors)</li>
              <li className = "skillsList">Excellent <b>problem-solving abilities</b></li>
              <li className = "skillsList">Completes all assigned responsibilities</li>
              <li className = "skillsList">Offers constructive suggestions for improvements</li>
              <li className = "skillsList">Clean Driving Licence</li>
              <li className = "skillsList"><b>Growth Mindset</b></li>
          </ul>
        </div>
        <SideCV/>
      </div>
    </div>
  )
}

export default SkillsList
