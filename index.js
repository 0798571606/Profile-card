import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const skills = [
  {
    skill: 'HTML + CSS',
    level: 'advance',
    color: '#2662ea',
  },
  {
    skill: 'JavaScript',
    level: 'intermediate',
    color: '#efd81d',
  },
  {
    skill: 'Web design',
    level: 'advance',
    color: '#c3dcaf',
  },
  {
    skill: 'git and github',
    level: 'beginner',
    color: '#e84f33',
  },
  {
    skill: 'React',
    level: 'advance',
    color: '#60dafb',
  },
  {
    skill: 'Java',
    level: 'intermediate',
    color: '#ff3b00',
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="01.jpg" alt="hamid" />
    </div>
  );
}

function Intro() {
  return (
    <div className="intro">
      <h1>Hamidullah hamidi</h1>
      <p>
        I am a front-end web developer, software engineer and IT project manager. I like
        to coordinate with other developer to solve there problems
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <h3>{skill}</h3>
      <span>
        {level === 'advance' && '💪'}
        {level === 'intermediate' && '👌'}
        {level === 'beginner' && '👍'}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
