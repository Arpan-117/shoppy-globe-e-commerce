import { useState, useEffect } from 'react';

const useProducts = (prdId = null) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [fetchURL, setFetchURL] = useState('');

    // if (prdId != null) {
    //     setFetchURL(`https://dummyjson.com/products/${prdId}`);
    // } else {
    //     setFetchURL(`https://dummyjson.com/products`);
    // }

    useEffect(() => {
        let fetchURL;
        if (prdId != null) {
        fetchURL =  `https://dummyjson.com/products/${prdId}`;
    } else {
        fetchURL =  `https://dummyjson.com/products`;
    }
        const fetchProducts = async () => {
    //         if (prdId != null) {
    //     setFetchURL(`https://dummyjson.com/products/${prdId}`);
    // } else {
    //     setFetchURL(`https://dummyjson.com/products`);
    // }
    // console.log(prdId);
    // console.log(`Fetching from ${fetchURL}`);
            try {
                const res = await fetch(fetchURL);
                if (!res.ok) throw new Error('Failed to fetch products');
                const result = await res.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { data, loading, error };
};

export default useProducts;
