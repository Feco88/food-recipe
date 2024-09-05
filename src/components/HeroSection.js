import CustomImage from "./CustomImage";

export default function HeroSection() {
    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg",
    ]

    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">Miről van szó</h1>
                <p className="info">FecaFood egy olyan hely, ahol a világ konyháinak ízletes receptjeivel kényeztetheti lelkét és pocakját, mindezt teljesen ingyen. Kezdjen bele a felfedezésbe.</p>
                <button className="btn">Felfedezem most</button>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc= {src}pt={"90%"}/>
                )) }
            </div>
        </div>
    )
}