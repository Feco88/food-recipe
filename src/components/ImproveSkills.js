export default function ImproveSkills() {
    const list = [
        "Sajátítson el új recepteket",
        "Kísérletezzen ételekkel",
        "Írjon saját recepteket",
        "Ismerje meg az összetevőket",
        "Szerezzen főzési tippeket",
        "Fejlődjön új szintekre"
    ]

    return(
        <div className="section improve-skills">
            <div className="col img">
                <img src="/img/gallery/img_10.jpg" alt="" />
            </div>
        <div className="col typography">
            <h1 className="title">Fejlessze konyhai készségeit</h1>
            { list.map((item, index) => (
                <p className="skill-item" key={index}>{item}</p>
            )) }
            <button className="btn">Regisztráció</button>
        </div>
    </div>
    )
}