import './Store.css'

const dataList = [
  {
      id:1,
      etat: "des jumelles",
      imgsrc: "/src/assets/images/lunettes.jpg",
  },
  {
      id:2,
      etat: "un lampe torche",
      imgsrc: "/src/assets/images/flashlight.jpg",
  },
  {
      id:3,
      etat: "un briquet",
      imgsrc: "/src/assets/images/briquet.jpg",
  },
  {
      id:4,
      etat: "une montre",
      imgsrc: "/src/assets/images/montre.jpg",
  },
  {
      id:5,
      etat: "un peigne",
      imgsrc: "/src/assets/images/peigne.jpg",
  },
  {
      id:6,
      etat: "un telephone",
      imgsrc: "/src/assets/images/smartphone.jpg",
  }
];

function Store() {
  
  return (
    <>
      <div className="listStore">
        {dataList.map((data) => {
          return <img src={data.imgsrc}/>
        })}
      </div>
    </>
  )
}

export default Store