import React from 'react'
import { motion } from 'framer-motion'

import variants from '../components/variants'
import Header from '../components/header'
import Main from '../components/main'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'

function Layout({ children, showback }) {
  //const showback = 'yes'

  return (<>
    <motion.div initial="initial" exit="exit" animate="enter" variants={variants}>
      <header>
        <Header />
      </header>

      <main>
        <Main>
          {children}
        </Main>
      </main>

      <aside>
        <Sidebar showback={showback} />
      </aside>

      <footer>
        <Footer />
      </footer>
    </motion.div>
  </>)
}

export default Layout