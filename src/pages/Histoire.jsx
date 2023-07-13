import Prehistoire from '../components/Prehistoire';
import RandomTableIndex from '../components/RandomTableIndex';
import './Histoire.css'

function Histoire() {
    return (
        <div className='contenair'>
            <img className="fondgrotte" src="src\images\Fgrotte.jpg" alt="fond" />
            <div className='zoneperso'>
            <div className='hCro'>
                <div className='bulleHC'>
                    <img className='tailleimg' src="src\images\bulle2.png" alt="bulle" />
                <div className='zonereponse'>
                    <RandomTableIndex />
                </div>
                </div>
                <img src="src\images\Hcro.png" alt="homme cromagnon" />
            </div>
            <div className='jcquest'>
                <div className='bulleJC'>
                    <img className='imgbulle' src="src\images\bulle3.png" alt="bulle" />
                    <div className='zonetext'>
                        <Prehistoire />
                    </div>
                </div>
                <img src="src\images\jcquest.png" alt="JC quest" />
            </div>
            </div>
        </div>
    )

}

export default Histoire;