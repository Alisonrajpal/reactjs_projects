//{items:[], heading:string} typeScript
interface Props {
  lists: string[];
  heading: string;
  onSelectItem: (item: string) => void;//void beacuse not going to to do anything
}

import { useState } from "react";

function ListGroup({ lists, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
//useState starts at 0 or selected no elements from the list

  //update when clicked on list class Active

  return (
    <>
      <h1>{heading}</h1>
      {lists.length === 0 && <p>No item found</p>}
      //mapping elements in a rray list
      <ul className="list-group">
        
        {lists.map((list, listIndex) => {
          return (
            <li
              key={listIndex}
              className={
                selectedIndex === listIndex
                  ? "list-group-item active"
                  : "list-group-item"
              }
              //arrow function triggers an event
              onClick={() => {
                setSelectedIndex(listIndex);
                onSelectItem(list);
              }}>
              {list}
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default ListGroup;
