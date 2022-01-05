import { FC } from 'react';
import { IState as IProps } from '../App';

export const List: FC<IProps> = ({ people }) => {
  const renderList = () => {
    return people.map((person, index) => {
      return (
        <li key={index} className="List">
          <div className="List-header">
            <img className="List-img" src={person.url} alt="" />
            <h2>{person.name}</h2>
          </div>

          <p>{person.age} years old</p>

          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};
