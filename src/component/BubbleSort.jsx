import {useEffect, useState} from "react";

export default function BubbleSort() {
    const [data, setData] = useState([]);
    const [divs, setDivs] = useState([]);
    const [descending, setDescending] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(
        () => {
            const myList = [];
            for (let i = 0; i < 30; i++) {
                let randomNumber = Math.floor(Math.random() * 100); // génère un nombre aléatoire entre 0 et 99
                myList.push(randomNumber);
            }
            setData(myList);
        }, []
    )

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            //exécution d'une étape du tri
            let sorted = false;
            let sortedData = [...data];
            let change = false;
            for (let i = 1; i < sortedData.length; i++) {
                if (sortedData[i] < sortedData[i - 1]) {
                    let stockedValue = sortedData[i];
                    sortedData[i] = sortedData[i - 1];
                    sortedData[i - 1] = stockedValue;
                    change = true;
                }
            }

            //utilisation du setData pour rerender la page
            setData(sortedData);

            //compteur du nombre d'itérations de l'algorithme
            if (change === true) setCount(count + 1);


        }, 500);

        return () => clearTimeout(timeoutId);
    }, [count, data]);

    useEffect(
        () => {
            const newData = data.map(
                (data, index) => {
                    let classe = `data_${data}`;
                    return <div key={index} className={classe}>{data}</div>
                }
            )
            setDivs(newData);
        }, [data]
    )

    return (
        <>
            <h2>Tri à bulle</h2>
            <div className="bubble_sort">
                compteur : {count}
                {divs}
            </div>
        </>
    );
}