import '../style/menu_sip.css'
import Sip_1 from '../assets/sip/sip-1.png';
import Sip_2 from '../assets/sip/sip-2.png';
import Sip_3 from '../assets/sip/sip-3.png';

function Menu_Sip() {
    return (
        <section className="menu-1">
            <h1 className='title'>Our Menus!</h1>
            <h1 className='menu1-title'>Sips!</h1>
            <section className='menu1-grid'>
                <div>
                    <img className='sip-img' src={Sip_1}></img>
                    <h2 className='sip-title'>Soda Gembira</h2>
                </div>
                <div>
                    <img className='sip-img' src={Sip_2}></img>
                    <h2 className='sip-title'>Es Milo Spesial</h2>
                </div>
                <div>
                    <img className='sip-img' src={Sip_3}></img>
                    <h2 className='sip-title'>Yakult Sprite</h2>
                </div>
            </section>
        </section>
    );
}

export default Menu_Sip;