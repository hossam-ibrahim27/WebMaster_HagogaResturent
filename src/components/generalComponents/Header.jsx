import Navlink from "../headerComponents/Navlink";
import SubNav from "../headerComponents/SubNav";
import '../../css/generalComponents/Header.css'

const Header = () => {
    return (
        <header>
            <SubNav />
            <Navlink />
        </header>
    );
}
export default Header;