import arrow from "../../assets/img/common/arrow.svg"
// import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot, query } from "firebase/firestore"

function MainComponent() {

    return (
        <div className="layer">
            <div className="container">
                <div className="layer__top">
                    <p className="layer__price"><span className="layer__price-total">123 456</span> &#8381;</p>
                </div>
                <div className="layer__block">
                    <div className="layer__aside">
                        <p className="layer__block-info">Траты:</p>
                        <div className="layer__minus layer__pull">
                            <div className="layer__card">
                                <div className="layer__card-content">
                                    <p className="layer__card-price"><span className="layer__card-price-total">123 456</span> &#8381;</p>
                                    <div className="layer__card-line"></div>
                                    <p className="layer__card-date">11.11.2022</p>
                                </div>
                                <button className="layer__card-btn">x</button>
                            </div>
                            <div className="layer__card">
                                <div className="layer__card-content">
                                    <p className="layer__card-price"><span className="layer__card-price-total">123 456</span> &#8381;</p>
                                    <div className="layer__card-line"></div>
                                    <p className="layer__card-date">11.11.2022</p>
                                </div>
                                <button className="layer__card-btn">x</button>
                            </div>
                        </div>
                    </div>
                    <div className="layer__main">
                        <p className="layer__block-info">Поступления:</p>
                        <div className="layer__plus layer__pull">
                            <div className="layer__card">
                                <div className="layer__card-content">
                                    <p className="layer__card-price"><span className="layer__card-price-total">123 456</span> &#8381;</p>
                                    <div className="layer__card-line"></div>
                                    <p className="layer__card-date">11.11.2022</p>
                                </div>
                                <button className="layer__card-btn">x</button>
                            </div>
                            <div className="layer__card">
                                <div className="layer__card-content">
                                    <p className="layer__card-price"><span className="layer__card-price-total">123 456</span> &#8381;</p>
                                    <div className="layer__card-line"></div>
                                    <p className="layer__card-date">11.11.2022</p>
                                </div>
                                <button className="layer__card-btn">x</button>
                            </div>
                            <div className="layer__card">
                                <div className="layer__card-content">
                                    <p className="layer__card-price"><span className="layer__card-price-total">123 456</span> &#8381;</p>
                                    <div className="layer__card-line"></div>
                                    <p className="layer__card-date">11.11.2022</p>
                                </div>
                                <button className="layer__card-btn">x</button>
                            </div>
                            <div className="layer__card">
                                <div className="layer__card-content">
                                    <p className="layer__card-price"><span className="layer__card-price-total">123 456</span> &#8381;</p>
                                    <div className="layer__card-line"></div>
                                    <p className="layer__card-date">11.11.2022</p>
                                </div>
                                <button className="layer__card-btn">x</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="layer__bottom">
                    <div className="layer__info">
                        <p className="layer__info-text">Здесь возможно будет поясняющий текст</p>
                    </div>
                    <div className="layer__bottom-composition">
                        <div className="layer__logic">
                            <div className="layer__input-block">
                                <input type="text" className="layer__input"/>
                            </div>
                            <div className="layer__logic-toggle">
                                <button className="layer__logic-tumbler _in">
                                    <img src={arrow} className="layer__logic-tumbler-img" alt="arrow" />
                                </button>
                            </div>
                        </div>
                        <div className="layer__actions">
                            <button className="layer__actions-btn _submit">Отправить</button>
                            <button className="layer__actions-btn _clear">Отменить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { MainComponent };