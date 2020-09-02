// Working
// function StationIndexError(message) {
//   this.name = 'StationIndexError';
// //  Your code here to assign the message of the error
//   this.message = message;
// }

// function getStationAtIndex(index) {
//   const trainLines = [
//     'Alamein',
//     'Belgrave',
//     'Craigieburn',
//     'Cranbourne',
//     'Flemington',
//     'Frankston',
//     'Glen Waverley',
//     'Hurstbridge',
//     'Lilydale',
//     'Mernda',
//     'Pakenham',
//     'Sandringham',
//     'Stony Point',
//     'Sunbury',
//     'Upfield',
//     'Werribee',
//     'Williamstow',
//   ];
//   // Your code here
//   try{
//     if (isNaN(index) || (index < 0 || index >= trainLines.length)) {
//       throw new StationIndexError('That index not found.');
//     }
//     return trainLines[index]
//   }
//   catch(err) {
//     console.error(err.name);
//     console.error(err.message);
//     return err
//   }
// }; 


//Working on TESTS

function StationIndexError(message) {
  this.name = 'StationIndexError';
  this.message = message;
}

function getStationAtIndex(index) {

  const trainLines = [
    'Alamein',
    'Belgrave',
    'Craigieburn',
    'Cranbourne',
    'Flemington',
    'Frankston',
    'Glen Waverley',
    'Hurstbridge',
    'Lilydale',
    'Mernda',
    'Pakenham',
    'Sandringham',
    'Stony Point',
    'Sunbury',
    'Upfield',
    'Werribee',
    'Williamstow',
  ];

  if (index > trainLines.length) throw new StationIndexError("That index not found");
  return trainLines[index];
}; 