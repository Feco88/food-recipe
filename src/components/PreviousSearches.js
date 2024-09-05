import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function PreviousSearches() {
    const searches = ['pizza','hamburger','sütik','gyümölcslé','somlói','saláta','fagylalt','lasagne','puding','leves']
    return(
    <div className="previous-searches section">
        <h2>Előző keresések</h2>
        <div className="previous-searches-container">
            { searches.map((search, index) => (<div key={index} style={{animationDelay: index * .1 + "s"}}className="search-item">
                {search}
            </div>)) }
        </div>
        <div className="search-box">
            <input type="text" placeholder="Keresés ..." />
            <button className="btn">
                <FontAwesomeIcon icon={faSearch} />
            </button>
    </div>
    </div>
    )
}