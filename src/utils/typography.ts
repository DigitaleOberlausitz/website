import Typography from "typography"
import theme from "typography-theme-bootstrap"

theme.baseFontSize = "14px"
theme.googleFonts = [
  {
    name: "Muli",
    styles: ["600"],
  },
  {
    name: "Merriweather",
    styles: ["300", "300i", "700", "700i"],
  },
]

theme.headerFontFamily = ["Muli", "sans-serif"]
theme.bodyFontFamily = ["Merriweather", "Georgia", "serif"]

const typography = new Typography(theme)

export default typography
