import { createGlobalStyle } from 'styled-components'

import fonts from './base/fonts'
import reset from './base/reset'
import more from './base/more'
import colors from './constants/colors'

const GlobalStyle = createGlobalStyle`
${fonts}
${reset}
${more}

#root {
  width: 100%;
  background: ${colors.BACK};
}
`

export default GlobalStyle
