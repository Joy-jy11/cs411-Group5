import _ from 'lodash';

const API_KEY = ""; /*type in your api key manually*/

export const requestQuotes = _.memoize(async title => {
    const res = await fetch(`http://localhost:3000/app`)
    //if (res.status !== 200) return [];

    //const quotesArray = await res.json();
    return res;
});
