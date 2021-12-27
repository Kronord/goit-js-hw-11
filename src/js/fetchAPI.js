const { default: axios } = require("axios");

export default class ApiSettings { 
    constructor() { 
        this.query = '';
        this.page = 1;
        this.hits = 0;
    };

    async GetFetchApi() { 
        const axiosGet = await axios({
            url: 'https://pixabay.com/api/',
            method: 'GET',
            params: {
                key: '24785133-c86d5320aa8a1ff21d6ab9e5f',
                q: `${this.query}`,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                per_page: 40,
                page: this.page,
            },
        });
        return axiosGet;
    };

    get inputValue () { 
        return this.query;
    };

    set inputValue (newQuery) { 
        this.query = newQuery;
    };

    get valueHits() { 
        return this.hits;
    };

    totalHits(value) { 
        this.hits += value;
    };

    resetHits() { 
        this.hits = 0;
    };

    nextPage() { 
        this.page += 1;
    };

    resetPage() { 
        this.page = 1;
    };
};

