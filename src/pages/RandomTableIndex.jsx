import { useState, useEffect } from 'react';

const RandomTableIndex = () => {
  const [tableData, setTableData] = useState([{rep:'GRoaAAAHH', trad:'Pas mal!'}, {rep: 'YoLOOoo', trad: 'Super !'}, {rep: 'CocodEK', trad: 'A ne pas pondre!'}, {rep: 'POUaaa', trad: 'A chier!'}, {rep: 'EHUMmmm', trad: 'Interesant'}, {rep: 'WoUalala', trad: 'J achete!'} ])
  const [randomIndex, setRrandomIndex] = useState(null)

  const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * tableData.length);
    setRrandomIndex(randomIndex);
  }

  return (
      <div>
        <button onClick={getRandomIndex}>Get Random Index</button>
        {randomIndex !== null && (
          <>
            
            <div> Value: {
            tableData
              .filter((elem, index) => index === randomIndex )
              .map((elem) => {
              return <div key={elem.rep}><p>{elem.rep}</p> <p>{elem.trad}</p> </div>
            })}
          </div>
          </>
        )}
      </div>
    );
  
}

export default RandomTableIndex;

// import React from 'react';

// class RandomTableIndex extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tableData: [{rep:'GRoaAAAHH', trad:'Pas mal!'}, {rep: 'YoLOOoo', trad: 'Super !'}, {rep: 'CocodEK', trad: 'A ne pas pondre!'}, {rep: 'POUaaa', trad: 'A chier!'}, {rep: 'EHUMmmm', trad: 'Interesant'}, {rep: 'WoUalala', trad: 'J achete!'} ],
//       //traducTion: [, , , , , ],//
//       randomIndex: null
//     };
//   }

//   getRandomIndex = () => {
//     const { tableData } = this.state;
//     const randomIndex = Math.floor(Math.random() * tableData.length);
//     this.setState({ randomIndex });
//   }

//   render() {
//     const { tableData, randomIndex } = this.state;

//     return (
//       <div>
//         <button onClick={this.getRandomIndex}>Get Random Index</button>
//         {randomIndex !== null && (
//           <p>Random Index: {randomIndex}, Value: {tableData[randomIndex]}</p>
//         )}
//       </div>
//     );//, Value: {traducTion[randomIndex]//
//   }
// }

// export default RandomTableIndex;