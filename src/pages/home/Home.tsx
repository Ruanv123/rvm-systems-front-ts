import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import * as S from './styles'
import { Hero } from '../../sections/hero/Hero'
import { LogoCloud } from '../../sections/logoCloud/LogoCloud'
import { HowItWorks } from '../../sections/how_it_works/HowItWorks'
import { Cta } from '../../sections/cta/Cta'
import { Features } from '../../sections/features/Features'
import { Contact } from '../../sections/contact/Contact'
import { Newsletter } from '../../sections/newsletter/Newsletter'
import { Cookies } from '../../components/cookies/Cookies'

export default function Home() {
  return (
    <>
      <Header />
      <S.Wrapper>
        <Hero />
        <LogoCloud />
        <HowItWorks />
        <Cta />
        <Features />
        <Contact />
        <Newsletter />
        <Cookies />
      </S.Wrapper>
      <Footer />
    </>
  )
}
