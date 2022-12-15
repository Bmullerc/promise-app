import { LinkedinLogo, BehanceLogo, GithubLogo } from 'phosphor-react'

export function Contact() {
  return (
    <footer id='contact' className="text-center py-3 text-lime-400 bg-purple-900 shadow-sm flex flex-col gap-1">
      <div className="flex justify-center gap-2 items-center">
        <a href="https://www.linkedin.com/in/bernardo-m%C3%BCller-086a64235/"><LinkedinLogo size={22} weight="duotone" className="hover:text-purple-300" /></a>
        <a href="https://www.behance.net/bernardo_muller"><BehanceLogo size={22} weight="duotone" className="hover:text-purple-300" /></a>
        <a href="https://github.com/Bmullerc"><GithubLogo size={22} weight="duotone" className="hover:text-purple-300" /></a>
      </div>
      <h5 className="text-xs font-medium mt-1 text-lime-400">&copy; Bernardo Müller ⋄ 2022</h5>
      <a href="https://bemuller.com" className="hover:text-purple-300 text-sm mt-1">bemuller.com</a>
    </footer>
  )
}