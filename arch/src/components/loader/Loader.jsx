import tiger from "../../assets/img/common/tiger.png";

function Loader( props ) {
    return (
        <div className="loader">
            <div className="loader__img">
                <img src={tiger} className="loader__img-pic" alt="tiger icon" />
            </div>
            <div className="loader__title">
                <p className="loader__title-left">Тигры</p>
                <p className="loader__title-right">разума</p>
            </div>
            <div className="loader__block">
                <div className="loader__block-item _01"></div>
                <div className="loader__block-item _02"></div>
            </div>
        </div>
    )
}

export { Loader };