import theme from "mdx-deck/themes";
import {merge} from 'lodash';
import colors from 'gatsby-mdx-theme/es/colors'
import {code, header} from 'gatsby-mdx-theme/es/fonts'
import codeTheme from 'gatsby-mdx-theme/es/gatsby-code-theme'

export default {
  ...theme,
  font: header.join(','),
  monospace: code.join(','),
  transitionTimingFunction: 'linear',
  transitionDuration: '0s',
  colors: {
    background: 'white',
    heading: colors.gatsby
  },
  blockquote: {
    color: colors.gatsby,
    paddingLeft: '2rem',
    borderLeft: `5px solid ${colors.gatsby}`
  },
  paragraph: {
    color: colors.gatsby
  },
  li: {
    color: colors.gatsby
  },
  prism: {
    style: codeTheme
  }
  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
};
