import ExtLink from './ext-link'

export default function Footer() {
  return (
    <>
      <footer>
        <span>Copyright © Mihai-Alexandru Radu {new Date().getFullYear()}</span>
        {/* <ExtLink href="https://vercel.com/new/git/external?repository-url=https://github.com/ijjk/notion-blog/tree/main&project-name=notion-blog&repository-name=notion-blog">
          <img
            src="https://vercel.com/button"
            height={46}
            width={132}
            alt="deploy to Vercel button"
          />
        </ExtLink> */}
      </footer>
    </>
  )
}
