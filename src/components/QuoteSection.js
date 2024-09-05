import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function QuoteSection() {
    return (
        <div className="section quote">
            <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft} />Az ételnek hatalma van. Ez a hatalom inspirál, ámulatba ejt, sokkol, izgat, gyönyört okoz és megérint. Arra is képes, hogy nekem és másoknak örömet okozzon.</p>
            <p className="quote-author">- Anthony Bourdain -</p>
        </div>
    )
}