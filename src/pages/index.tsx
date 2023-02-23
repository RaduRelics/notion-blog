import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img src="/avatar.svg" height="85" width="85" alt="Vercel + Notion" />
        <h1>Mihai&apos;s Blog</h1>
        <h2>Self-learning Software & Electrical Engineer</h2>

        {/* <Features /> */}

        <div className="explanation">
          <p>
            Hey there! I'm Mihai (Michael) and this is my (temporary) statically
            generated <ExtLink href="https://nextjs.org">Next.js</ExtLink> site
            with a <ExtLink href="https://notion.so">Notion</ExtLink> powered
            blog that is deployed with{' '}
            <ExtLink href="https://vercel.com">Vercel</ExtLink>. I am a
            self-learning software & electrical engineer sharing his journey on
            this blog in the form of tutorials, devlogs[] and updates.
          </p>
        </div>
      </div>
    </>
  )
}
