import './CardObjectShop.css'

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

const CardObjectShop = ({ name, alt, src, prix }) => {

  return (
    <div className="CardObject">
      <h2>{name}</h2>
      <img src={src} alt={alt} />
      <p>{prix}</p>
    </div>
  )
}

export default CardObjectShop