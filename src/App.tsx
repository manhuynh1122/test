import NotFound from './pages/NotFound.tsx';
import './App.css';

import { useMediaQuery } from "react-responsive";
import Header from './components/Header.tsx';

import Hero from './components/Hero.tsx';
import Procedure from './components/Procedure.tsx';
import Diagram3 from './components/Diagram3.tsx';
import Reminder from './components/Reminder.tsx';
import Client from './components/Client.tsx';
import Comment from './components/Comment.tsx';
import Question from './components/Question.tsx';
import Unlock from './components/Unlock.tsx';
import Block from './components/Blog.tsx';
import Footer from './components/Footer.tsx';

//ban mobile
import HeaderMobile from './components/HeaderMobile.tsx';
import HeroMobile from './components/HeroMobile.tsx';
import Partner from './components/Partner.tsx';
import FooterMobile from './components/FooterMobile.tsx';
import Benefit from './components/benefit.tsx';
import { } from './components/landing-page/landing-page.ts'
import './styles/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function Home() {
  const isTablet = useMediaQuery({ maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const formatHeader = useMediaQuery({ maxWidth: 1035 });
  return (
    <div className='App'>
      {formatHeader ? <HeaderMobile /> : <Header />}
      <main>
        {isMobile ? <HeroMobile /> : <Hero />}
        <Partner />
        <Procedure />
        <Benefit />
        <Diagram3 />
        <Reminder />
        <Client />
        <Comment />
        <Question />
        <Block />
        <Unlock />
      </main>
      {isTablet ? <FooterMobile /> : <Footer />}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
