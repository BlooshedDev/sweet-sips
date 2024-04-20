import Intro from '../components/intro';
import Menu_Sip from '../components/menu_sip';
import Menu_Bite from '../components/menu_bite';
import Learnmore from '../components/learnmore';


function Home() {
    return (
        <section className="Home">
            <Intro />
            <Menu_Sip />
            <Menu_Bite />
            <Learnmore />
        </section>
    );
}

export default Home;