type Title = { title: string};
type Price = { price: number};

type Book = Title & Price;

const book: Book = {
    title: 'TypeScriptの基礎を学ぼう',
    price: 1000,
};

console.log(book);