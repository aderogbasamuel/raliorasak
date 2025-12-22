import Header from '../components/Header'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
export default function Home() {
  return (
    <main className="bg-white font-matter">
      <Header/>
      <Experience/>
      <Projects/>
      <Footer/>
    </main>
  );
}
