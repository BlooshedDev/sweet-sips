import '../style/menu_bite.css'
import Bite_1 from '../assets/bite/bite-1.png';
import Bite_2 from '../assets/bite/bite-2.png';
import Bite_3 from '../assets/bite/bite-3.png';

function Menu_Bite() {
    return (
        <section className="menu-2">
            <h1 className='menu2-title'>Bite!</h1>
            <section className='menu2-grid'>
                <div>
                    <img className='bite-img' src={Bite_1}></img>
                    <h2 className='bite-title'>Pudding Jeruk</h2>
                </div>
                <div>
                    <img className='bite-img' src={Bite_2}></img>
                    <h2 className='bite-title'>Truffle Red Velvet</h2>
                </div>
                <div>
                    <img className='bite-img' src={Bite_3}></img>
                    <h2 className='bite-title'>Matcha Oreo Softcake</h2>
                </div>
            </section>
        </section>
    );
}

export default Menu_Bite;