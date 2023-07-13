import './Store.css'

const dataList = [
  {
      id:1,
      etat: "jumelles",
      imgsrc: "/src/assets/images/lunettes.jpg",
      prix:"50$"
  },
  {
      id:2,
      etat: "lampe torche",
      imgsrc: "/src/assets/images/flashlight.jpg",
      prix: "30$"
  },
  {
      id:3,
      etat: "briquet",
      imgsrc: "/src/assets/images/briquet.jpg",
      prix: "10$"
  },
  {
      id:4,
      etat: "montre",
      imgsrc: "/src/assets/images/montre.jpg",
      prix: "100$"
  },
  {
      id:5,
      etat: "peigne",
      imgsrc: "/src/assets/images/peigne.jpg",
      prix:"3$"
  },
  {
      id:6,
      etat: "telephone",
      imgsrc: "/src/assets/images/smartphone.jpg",
      prix: "1000$"
  }
];

function Store() {
  
  return (
    <>
      <div className="listStore">
        {dataList.map((data) => {
          return <div className='maletteStore'>
            <h2>{data.etat}</h2>
            <img className='cardImg' src={data.imgsrc}/>
            <p>{data.prix}</p>
            </div>
        })}
      </div>
    </>
  )
}

export default Store