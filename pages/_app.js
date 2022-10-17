import '../css/erc_styles.css'

import {MDXProvider} from '@mdx-js/react'

const components = {
}

export default function App({Component, pageProps}) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}