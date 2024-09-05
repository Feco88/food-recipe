import ChiefCard from "./ChiefCard";

export default function ChiefsSection() {
    const chiefs = [
        {
            name: "Juan Carlos",
            img: "/img/top-chiefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Mexikói",
        },
        {
            name: "John Doe",
            img: "/img/top-chiefs/img_2.jpg",
            recipesCount: "5",
            cuisine: "Orosz",
        },
        {
            name: "Rácz Jenő",
            img: "/img/top-chiefs/img_3.jpg",
            recipesCount: "12",
            cuisine: "Kína",
        },
        {
            name: "Sárközi Ákos",
            img: "/img/top-chiefs/img_4.jpg",
            recipesCount: "15",
            cuisine: "Magyar",
        },
        {
            name: "Patat Lajos",
            img: "/img/top-chiefs/img_5.jpg",
            recipesCount: "19",
            cuisine: "Magyar",
        },
        {
            name: "Palágyi Eszter",
            img: "/img/top-chiefs/img_6.jpg",
            recipesCount: "5",
            cuisine: "Amerikai",
        },

    ]

    return (
        <div className="section chiefs">
            <h1 className="title">Kiváló séfjeink</h1>
            <div className="top-chiefs-container">
                {/*<ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />*/}
                { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
}