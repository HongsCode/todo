import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'

//초기화 하는 이유를 알아야함
//https://wonit.tistory.com/295?category=794664
const globalStyle = css`
    ${reset}
    * {
        box-sizing: border-box;
    }
    body {
        font-family: Noto Sans, Noto Sans KR;
    }
`

const GlobalStyle = createGlobalStyle`
    ${globalStyle}
`


export default GlobalStyle