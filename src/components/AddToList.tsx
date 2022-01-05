import { ChangeEvent, FC, useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
  people: Props['people'];
  setPeople: (people: Props['people']) => void;
}

export const AddToList: FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    age: 0,
    url: '',
    note: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.url) {
      return;
    }

    setPeople([
      ...people,
      {
        name: input.name,
        url: input.url,
        age: input.age,
        note: input.note,
      },
    ]);

    setInput({
      name: '',
      age: 0,
      url: '',
      note: '',
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        name="name"
        id=""
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        id=""
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
      />

      <input
        type="text"
        name="url"
        id=""
        placeholder="Image URL"
        className="AddToList-input"
        value={input.url}
        onChange={handleChange}
      />

      <textarea
        name="note"
        id=""
        placeholder="Note"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
      ></textarea>

      <button type="submit" className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};
