const printValue = (value: string | number): void => {
    // console.log(printValue.toUpperCase());

    // typeof演算子を使って型を絞り込む
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
};

printValue('samurai');
printValue(123.456);