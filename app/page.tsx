import AxeService from '@/components/AxeService'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import OurDomain from '@/components/OurDomain'
import Possibility from '@/components/Possibility'


export default function Home() {
  return (
    <div className="App">
       <div className="gradient__bg">
        <Navbar />
        <Header />
       </div>
       <AxeService />
       <div>
          <Features />
          <Possibility /> 
          <OurDomain />
          <Footer />
       </div>
      
    </div>
  )
}
