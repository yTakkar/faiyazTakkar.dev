import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { ThemeProvider } from 'next-themes'
import { Navigation, Progress } from '../Common'

const variants = {
  hidden: { opacity: 0, y: -20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
}

const Root: FC = ({ children }) => {
  const { route } = useRouter()

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Navigation />

        <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
          <motion.main
            key={route}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear', duration: 0.2 }}
          >
            {children}
          </motion.main>
        </AnimatePresence>

        <Progress />
      </ThemeProvider>
    </>
  )
}

export default Root
