import "./CineRent.css"
import Header from "./component/Header"
import Sidebar from "./component/Sidebar"
import MovieLists from "./component/MovieLists"
import Cart from "./component/Cart"
import CineModal from "./component/CineModal"




const CineRent = () => {
  return (
    <div className="dark">
        <div className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
            
            <Header />

            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
  
                    <Sidebar />

                    <MovieLists />
                </div>
            </main>


            <footer className="py-6 md:py-8 mt-8">
                <div className="container mx-auto">
                    <p className="text-center text-sm text-black/30 dark:text-[#EEEEEE]/60">
                        Copyright ©2023 | All rights reserved by Learn with Sumit
                    </p>
                </div>
            </footer>

            {/* <Cart /> */}
            {/* <CineModal /> */}
        </div>
    </div>
  )
}

export default CineRent