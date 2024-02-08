import AxeService from '@/components/AxeService'
import Features from '@/components/Features'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'


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
       </div>
      
    </div>
  )
}
