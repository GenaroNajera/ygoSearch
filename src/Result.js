import React from 'react';
import './App.css';

export default function Result(props) {
  const cardType = {
    'Normal': 'normal', 'Effect': 'effect', 'Flip': 'effect', 'Toon': 'effect', 'Spirit': 'effect', 'Union': 'effect', 'Gemini': 'effect', 'Tuner': 'effect',
    'Ritual': 'ritual', 'Fusion': 'fusion', 'Synchro': 'synchro', 'XYZ':'xyz', 'Pendulum': 'pendulum', 'Link': 'link', 'Spell': 'spell', 'Trap': 'trap'
  };

  if(!props.err) {
    if(!props.info.type.includes('Pendulum'))
      document.getElementsByTagName('body')[0].className = cardType[props.info.type.split(' ')[0]];
    else {
      if(props.info.type.includes('Ritual'))
        document.getElementsByTagName('body')[0].className = 'ritual pendulum';
      else if(props.info.type.includes('Fusion'))
        document.getElementsByTagName('body')[0].className = 'fusion pendulum';
      else
        document.getElementsByTagName('body')[0].className = `${cardType[props.info.type.split(' ')[0]]} ${cardType[props.info.type.split(' ')[1]]}`;
    }

    return (
      <>
        <div className='container'>
          <img src={props.image} title={props.info.name} alt={props.info.name}/>
          
          <table>
            <tr>
              <td><p id='name'>{props.info.name}</p></td>
            </tr>
            <tr className='container2'>
              <td>{props.info.type[0] === 'X' ? <p>Rank {props.info.level}</p>
                : props.info.level ? <p>Level {props.info.level}</p>
                : <p></p>}
              </td>
              <td><p>{props.info.attribute} {props.info.race}</p></td>
            </tr>
            <tr className='container2'>
              <td><p>{props.info.type}</p></td>
              <td>{props.info.linkval ? <p>ATK/{props.info.atk} LINK-{props.info.linkval}</p>
                : props.info.atk ? <p>ATK/{props.info.atk} DEF/{props.info.def}</p>
                : <p></p>}
              </td>
            </tr>
            <tr>
              <td><p id='effect'>{props.info.desc}</p></td>
            </tr>
          </table>
        </div>
        <br /><br />
      </>
    );
  } else {
    document.getElementsByTagName('body')[0].className = 'error';
    return (
      <div>
        <p>Invalid card name. Enter exact name.</p>
      </div>
    );
  }
}