import '../style/menu_sip.css'

function Menu_Sip() {
    return (
        <section className="menu-1">
            <h1 className='title'>Our Menus!</h1>
            <h1 className='menu1-title'>Sips!</h1>
            <section className='menu1-grid'>
                <div>
                    <img className='sip-img' src='https://placehold.co/300x300'></img>
                    <h2 className='sip-title'>Soda Gembira</h2>
                </div>
                <div>
                    <img className='sip-img' src='https://placehold.co/300x300'></img>
                    <h2 className='sip-title'>Es Milo Spesial</h2>
                </div>
                <div>
                    <img className='sip-img' src='https://placehold.co/300x300'></img>
                    <h2 className='sip-title'>Yakult Sprite</h2>
                </div>
            </section>
        </section>
    );
}

export default Menu_Sip;