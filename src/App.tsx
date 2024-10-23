import "tailwindcss/tailwind.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Header } from "@components/header/header";
import { Hero } from "@components/hero/hero";
import { Company } from "@components/hero/company";
import { Services } from "@components/services/services";
import { Info } from "@components/extras/info";



const App:React.FC = () => {

  return(
    <main className="bg-white w-full min-h-screen flex flex-col items-center overflow-hidden">
      <Router>
        <Routes>
          <Route path="/figma" element={
            <>
              <Header />
              <Hero />
              <Company />
              <Services />
              <Info />
            </>
          } />
        </Routes>
      </Router>
      
    </main>
  )
}

export default App
