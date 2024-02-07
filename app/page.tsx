import AxeService from '@/components/AxeService'
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
    </div>
  )
}
