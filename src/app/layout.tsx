import type { Metadata } from 'next'
import { Albert_Sans } from 'next/font/google'
import Link from 'next/link'
import 'lib/styles/globals.css'
import Toast from 'lib/components/toast'

type Props = {
  children: React.ReactNode
}

const as = Albert_Sans({
  variable: '--font-albert-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Voting',
    template: '%s | Voting',
  },
  description: 'Create your own poll!.',
  icons: {
    shortcut: '/logo.svg',
  },
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <head />
      <body className={`${as.className}`}>
        <Toast />
        <div className='flex min-h-screen flex-col bg-my-black text-my-white'>
          <div className='mx-auto max-w-xl w-full px-2.5 mt-10 text-center sm:px-0 relative'>
            <div className='flex flex-col items-center justify-center w-full'>
              {children}
            </div>
          </div>
          <footer className='text-center mt-auto py-6 text-my-white text-opacity-40'>
            Project by{' '}
            <a
              className='hover:text-opacity-100 hover:text-my-white'
              target='_blank'
              href='https://github.com/tarsisius'
              rel='noopener noreferrer'
            >
              @tarsisius
            </a>
          </footer>
        </div>
      </body>
    </html>
  )
}
