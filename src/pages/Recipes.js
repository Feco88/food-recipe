import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
    const recipes = [
        {
            title: "Pizza",
            image: "img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
            desc: "A pizza olasz eredetű étel, ami mára az egész világon elterjedt. Alapja egy kelttésztából készült vékony lepénykenyér, melyet paradicsom- vagy tejfölalapú szósszal borítanak, és erre különféle feltétek kerülnek, a tésztát végül reszelt sajttal szórják meg és sütőben megsütik.",
        },
        {
            title: "Sztroganoff bélszín",
            image: "img/gallery/img_11.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
            desc: "A sztroganov bélszín (бефстроганов) az orosz konyhaművészet egyik népszerű fogása. Vékonyra szeletelt marha bélszín vagy egyéb színhús tejszínes-tejfölös mártásban, gombával, vékonyra szeletelt savanyú uborkával – ez a lényeg, a további részletek konyhánként változnak, mint a recepteknél általában.",
        },
        {
            title: "Sushi",
            image: "img/gallery/img_10.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
            desc: "A szusi főtt, ecetes rizs, amit leggyakrabban hallal vagy más tengeri eredetű élelmiszerrel együtt tálalnak. A közhiedelemmel ellentétben nem nyers halat jelent (ennek japán neve szasimi), bár ez is gyakori összetevője.",
        },
        {
            title: "Sült csirkecomb",
            image: "img/gallery/img_7.jpg",
            authorImg: "/img/top-chiefs/img_4.jpg",
            desc: "Sokaknak a ropogósra sült bőr a legfinomabb a csirkecombban, mások idegenkednek tőle, de ha jól van fűszerezve és kellően meg van sütve, akkor bizony sok zsírt már nem tartalmaz, így rábeszélünk minden eddigi tartózkodót, hogy az alábbi recepttel tegyenek egy próbát: nem fogják megbánni!",
        },
        {
            title: "Bácskai rizses hús",
            image: "img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
            desc: "A mi bácska rizses húsunk eredetileg a szerb gyuvecs, a hússal és lecsóval rétegezett rizs egyszerűsített változata, és az ’50-es évekig szerb rizses hús néven volt ismert. Az akkori menzai étlapreformnak köszönhetjük, hogy a Duna-Tisza közén lévő Bácska tájegység nevét kapta, aminek ma jelentős része Szerbiában található.",
        },
        {
            title: "Amerikai sajtburger",
            image: "img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
            desc: "Az amerikai burger húsa, omlós és vastag (kérhetjük félig sütve, rózsaszínen), és legtöbbször sült szalonna is van a zsemle között. A hamburgert minden esetben sült krumplival körítik és ez már olyan magától értetődő tény, hogy sokszor fel sincs tüntetve az étlapon.",
        },
    ].sort(() => Math.random() - 0.5) //a tömb elemeit összekeveri véletlenszerűen
    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}