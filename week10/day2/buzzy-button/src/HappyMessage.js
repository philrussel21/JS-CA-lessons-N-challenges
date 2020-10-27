import React from 'react';

const msgs = ['Happy', 'Sad', 'Angry', 'Okay', 'Disappointed'];
function randomMsg(arr) {
  const randNum = Math.floor(Math.random() * arr.length);
  return arr[randNum];
}
export const HappyMessage = () => {
  return (
    <div>
      <h1>I am {randomMsg(msgs)}</h1>
    </div>
  );
};
