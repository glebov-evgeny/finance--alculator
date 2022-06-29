import { useState, useEffect} from "react";
import {getFirestore, collection, addDoc, setDoc, serverTimestamp, onSnapshot, query, doc, deleteDoc} from "firebase/firestore"
import arrow from "../../assets/img/common/arrow.png";

function MainComponent() {
    const [inputValue, setValue] = useState('');
    const [status, setStatus] = useState(true);
    const [information, setInformation] = useState([]);
    const [totalSum, setTotalSumm] = useState(0)
    const db = getFirestore();
    const alertText = document.querySelector('.layer__info-text');
    const alertInput = document.querySelector('.layer__input');

    /* отправка данных */
    const sendMessage = async () => {
        if(inputValue === ''){
            alertText.textContent = 'Необходимо указать число';
            alertInput.classList.add('error');
        }
        else{
            const randomId = Date.now();
            await setDoc(doc(db, 'items', `${randomId}`,  ), {
                id: randomId,
                price: Number(inputValue),
                status: status,
                date: getDate(),
                time: getTime(),
                createAt: serverTimestamp()
            });
            setValue('');
            alertText.textContent='';
        }
    };

    /* Удаление элемента */
    function deleteItem(item){
        information.map(card => {
            if(card.id === item) {
                deleteDoc(doc(db, "items", `${item}`));
                return item
            }
           return card

        })
        // console.log('-----------')
    }

    const handleKeyDown = (event) => {
        // Исключения
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
           (event.keyCode == 65 && event.ctrlKey === true) ||
           (event.keyCode >= 35 && event.keyCode <= 39)) {
        }
        // Событие на Enter
        else if(event.keyCode == 13){
            event.preventDefault();
            sendMessage()
        }
        // Событие на -
        else if(event.keyCode == 189 || event.keyCode == 109){
            event.preventDefault();
            setStatus(false)
        }
        // Событие на +
        else if(event.keyCode == 187 || event.keyCode == 107){
            event.preventDefault();
            setStatus(true)
        }
        else {
            // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }

    }

    /* Установка значения инпута */
    function getInfoValue(props){
        if (props !== null){
            alertText.textContent='';
            alertInput.classList.remove('error');
        }
        setValue(props)
    }

    /* Получение данных */
    useEffect(() => {
        const getData = query(collection(db, 'items'))
        onSnapshot(getData, (querySnapshot) => {
            /* перевожу объекты в массив */
            let informationArr = [],
                result = 0
            querySnapshot.forEach(function(doc) {
                // console.log(doc.data().createAt, " => ", doc.data());
                // console.log(doc.data())
                informationArr.push(doc.data());
            })
            /* добавляю в стэйт итоговую сумму */
            for (let item of informationArr){
                if(item.status){
                    result+= item.price
                }
                else {
                    result-= item.price
                }
            }
            // eslint-disable-next-line
            setTotalSumm(result)

            informationArr.sort((a,b) =>
                (b.id - a.id)
            )

            /* добавляю в стэйт  */
            // eslint-disable-next-line
            setInformation(informationArr);
        });

    }, [db])

    /* Разбивка числа по разрядам */
    function getPriceNmb(props) {
        return props.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    }

    /* Текущая дата в формате дд.мм.гггг */
    function getDate() {
        let currentDay = new Date();
        let dd = currentDay.getDate();
        if (dd < 10) dd = '0' + dd;
        let mm = currentDay.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
        let yy = currentDay.getFullYear();
        return dd + '.' + mm + '.' + yy;
    }

    /* Получение времени чч:мм */
    function getTime() {
        let currentTime = new Date();
        let hh = currentTime.getHours();
        if (hh < 10) hh = '0' + hh;
        let mm = currentTime.getMinutes();
        if (mm < 10) mm = '0' + mm;
        let ss = currentTime.getSeconds();
        if (ss < 10) ss = '0' + ss;
        return hh + ':' + mm;
    }

    /* Смена статуса поступления платежа */
    function changeStatus() {
        setStatus(!status)
    }

    return (
        <div className="layer">
            <div className="container">
                <div className="layer__top">
                    <p className="layer__price"><span className="layer__price-total">{getPriceNmb(totalSum)}</span> &#8381;</p>
                </div>
                <div className="layer__block">
                    <div className="layer__aside">
                        <p className="layer__block-info">Траты:</p>
                        <div className="layer__minus layer__pull">
                            {information.filter(item => item.status === false).map((item) => (
                                <div className={`layer__card`} key={item.id}>
                                    <div className="layer__card-content">
                                        <p className="layer__card-price"><span className="layer__card-price-total">- {item.price}</span> &#8381;</p>
                                        <div className="layer__card-line"></div>
                                        <p className="layer__card-date">{item.date} / {item.time} / {item.id} / {item.status}</p>
                                    </div>
                                    <button className="layer__card-btn"
                                            onClick={() => deleteItem(item.id)}
                                    >x</button>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="layer__main">
                        <p className="layer__block-info">Поступления:</p>
                        <div className="layer__plus layer__pull">
                            {information.filter(item => item.status === true).map((item) => (
                                <div className={`layer__card`} key={item.id}>
                                    <div className="layer__card-content">
                                        <p className="layer__card-price"><span className="layer__card-price-total">+ {item.price}</span> &#8381;</p>
                                        <div className="layer__card-line"></div>
                                        <p className="layer__card-date">{item.date} / {item.time} / {item.id} / {item.status}</p>
                                    </div>
                                    <button className="layer__card-btn"
                                            onClick={() => deleteItem(item.id)}
                                    >x</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="layer__bottom">
                    <div className="layer__info">
                        <p className="layer__info-text"></p>
                    </div>
                    <div className="layer__bottom-composition">
                        <div className="layer__logic">
                            <div className="layer__input-block">
                                <input
                                    type="number"
                                    className="layer__input"
                                    value={inputValue}
                                    onChange={event => getInfoValue(event.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                            </div>
                            <div className="layer__logic-toggle">
                                {status ? (
                                    <button className="layer__logic-tumbler _in" onClick={() => changeStatus()}>
                                        <img src={arrow} className="layer__logic-tumbler-img" alt="arrow" />
                                    </button>) : (
                                    <button className="layer__logic-tumbler _out" onClick={() => changeStatus()}>
                                        <img src={arrow} className="layer__logic-tumbler-img" alt="arrow" />
                                    </button>
                                    )
                                }
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