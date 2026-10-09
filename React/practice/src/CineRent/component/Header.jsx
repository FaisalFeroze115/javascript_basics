import logo from "../../assets/cine_rent/logo.svg"
import ring from "../../assets/cine_rent/ring.svg"
import sun from "../../assets/cine_rent/icons/sun.svg"
import cart from "../../assets/cine_rent/shopping-cart.svg"


const Header = () => {
  return (
    <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
            <a href="index.html">
                <img src={logo} width="139" height="26" alt="" />
            </a>

            <ul className="flex items-center space-x-5">
                <li>
                    <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                        <img src={ring} width="24" height="24" alt="" />
                    </a>
                </li>
                <li>
                    <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                        <img src={sun} width="24" height="24" alt="" />
                    </a>
                </li>
                <li>
                    <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                        <img src={cart} width="24" height="24" alt="" />
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header