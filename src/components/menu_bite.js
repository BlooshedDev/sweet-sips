import '../style/menu_bite.css'

function Menu_Bite() {
    return (
        <section className="menu-2">
            <h1 className='menu2-title'>Bite!</h1>
            <section className='menu2-grid'>
                <div>
                    <img className='bite-img' src='https://placehold.co/300x300'></img>
                    <h2 className='bite-title'>Pudding Jeruk</h2>
                </div>
                <div>
                    <img className='bite-img' src='https://placehold.co/300x300'></img>
                    <h2 className='bite-title'>Truffle Red Velvet</h2>
                </div>
                <div>
                    <img className='bite-img' src='https://placehold.co/300x300'></img>
                    <h2 className='bite-title'>Matcha Oreo Softcake</h2>
                </div>
            </section>
        </section>
    );
}

export default Menu_Bite;