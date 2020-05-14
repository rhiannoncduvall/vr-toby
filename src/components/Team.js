import React from 'react';
import harold_photo from '../assets/images/team/hgottschalk.jpg';
import peter_photo from '../assets/images/team/phorton.jpg';
import michael_photo from '../assets/images/team/mmartin.jpg';
import steve_photo from '../assets/images/team/sbiafore.jpg';

export default function Team() {
  const team = [
    {
      name: 'Harold Gottschalk',
      title: 'CEO & Founder',
      imgUrl: harold_photo,
    },
    {
      name: 'Peter Horton',
      title: 'Program Director',
      imgUrl: peter_photo,
    },
    {
      name: 'Steve Biafore',
      title: 'Analytics Advisor, Co-Founder',
      imgUrl: steve_photo,     
    },
    {
      name: 'Michael Martin',
      title: 'Problem Solver, HR',
      imgUrl: michael_photo,
    },
  ]
  return (
    <div>
      <ul className="team-list">
        {team.map(teamMember => {
          const { name, title, imgUrl } = teamMember;
          return (
            <li>
              <img src={imgUrl}></img>
              <h6>{name}</h6>
              <span>{title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
