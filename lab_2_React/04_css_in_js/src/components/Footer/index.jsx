import { FooterElement, Copyright } from "./Footer.styled"

export default function Footer() {
    return (
        <FooterElement>
            <Copyright>
            &reg; Stanislav IA2303 &copy;{new Date().getFullYear()}
            </Copyright>
        </FooterElement>
    )
}