import { useState, useEffect} from "react";
import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot, query } from "firebase/firestore"
import arrow from "../../assets/img/common/arrow.svg";

function MainComponent() {
    const [value, setValue] = useState('');
    const [information, setInformation] = useState([]);
    const [totalSum, setTotalSumm] = useState(0)
    const db = getFirestore();

    /* отправка данных */
    const sendMessage = async () => {
        await addDoc(collection(db, 'items'), {
            price: Number(value),
            status: true,
            createAt: serverTimestamp()
        });
        setValue('');
    };

    /* Получение данных */
    useEffect(() => {
        const getData = query(collection(db, 'items'))
        onSnapshot(getData, (querySnapshot) => {
            /* перевожу объекты в массив */
            let informationArr = [],
                result = 0
            querySnapshot.forEach(function(doc) {
                // console.log(doc.data().createAt, " => ", doc.data());
                informationArr.push(doc.data());
            })
            /* добавляю в стэйт итоговую сумму */
            for (let item of informationArr){
                result+= item.price
            }
            // eslint-disable-next-line
            setTotalSumm(result)

            /* добавляю в стэйт  */
            // eslint-disable-next-line
            setInformation(informationArr);
        });

    }, [db])

    /* Разбивка числа по разрядам */
    function getPriceNmb(props) {
        return props.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    }

    /* Получение даты */
    function getDate(props) {
        let result = props.toDate();
        let dd = result.getDate();
        if (dd < 10) dd = '0' + dd;

        let mm = result.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        let yy = result.getFullYear();

        return dd + '.' + mm + '.' + yy;
    }

    return (
        <div className="layer">
            <div className="container">
                <div className="layer__top">
                    <p className="layer__price"><span className="layer__price-total">{getPriceNmb(totalSum)}</span> &#8381;</p>
                    {/*<p>{{information}}</p>*/}
                </div>
                <div className="layer__block">
                    <div className="layer__aside">
                        <p className="layer__block-info">Траты:</p>
                        <div className="layer__minus layer__pull">
                            {information.map((item) => (
                                <div className="layer__card" key={item.createAt}>
                                    <div className="layer__card-content">
                                        <p className="layer__card-price"><span className="layer__card-price-total">{item.price}</span> &#8381;</p>
                                        <div className="layer__card-line"></div>
                                        {/*<p className="layer__card-date">{getDate(item.createAt)}</p>*/}
                                    </div>
                                    <button className="layer__card-btn">x</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="layer__main">
                        <p className="layer__block-info">Поступления:</p>
                        <div className="layer__plus layer__pull">
                            {information.map((item) => (
                                <div className="layer__card" key={item.createAt}>
                                    <div className="layer__card-content">
                                        <p className="layer__card-price"><span className="layer__card-price-total">{item.price}</span> &#8381;</p>
                                        <div className="layer__card-line"></div>
                                        {/*<p className="layer__card-date">{getDate(item.createAt)}</p>*/}
                                    </div>
                                    <button className="layer__card-btn">x</button>
                                </div>
                            ))}
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
                                <input
                                    type="number"
                                    className="layer__input"
                                    value={value}
                                    onChange={event => setValue(event.target.value)}
                                />
                            </div>
                            <div className="layer__logic-toggle">
                                <button className="layer__logic-tumbler _in">
                                    <img src={arrow} className="layer__logic-tumbler-img" alt="arrow" />
                                </button>
                            </div>
                        </div>
                        <div className="layer__actions">
                            <button className="layer__actions-btn _submit" onClick={sendMessage}>Отправить</button>
                            <button className="layer__actions-btn _clear">Отменить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { MainComponent };