import CardObjectShop from '../components/CardObjectShop'; 

import './Store.css'

function Store() {
  
  return (
    <>
      <div className='CardObjectShop-container'>
        <div className='CardObjectShop-container-one'>
          <CardObjectShop
            name="jumelles"
            alt="de jumelles de vue"
            src="/src/assets/images/lunettes.jpg"
           prix="50$" 
          />
          <CardObjectShop
            name="lampe torche"
            alt="de lampe torche"
            src="/src/assets/images/flashlight.jpg"
            prix="30$"/>
          <CardObjectShop 
            name="briquet"
            alt="d'un briquet'"
            src="/src/assets/images/briquet.jpg"
            prix="10$"/>
        </div>

        <div className='CardObjectShop-container-two'>
          <CardObjectShop 
            name="montre"
            alt="d'une montre"
            src="/src/assets/images/montre.jpg"
            prix="100$"/>
          <CardObjectShop 
            name="peigne"
            alt="d'un peigne"
            src="/src/assets/images/peigne.jpg"
            prix="3$"/>
          <CardObjectShop 
            name="telephone"
            alt="d'un telephone"
            src="/src/assets/images/smartphone.jpg"
            prix="1000$"/>
        </div>
      </div>
    </>
  )
}

export default Store