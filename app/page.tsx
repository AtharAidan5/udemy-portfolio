import Contacts from '@/components/Contacts';
import Header from '../components/Header';
import About from '@/components/About';
import Skills from '@/components/Skills';
import WorkHistory from '@/components/WorkHistory';
import Projects from '@/components/Projects';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main className="max-w-screen-xl w-full mx-auto px-4">
        <div className="mt-20">
          <Header />
          <Contacts />
          <About />
          <WorkHistory />
          <Projects />
          <Skills />
        </div>
      </main>
      <Footer />
    </>
  )
}
