import { useEffect, useState } from "react";

type MethodType = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';

// Provide default values for optional parameters
export const fetchData = async (url: string, method: MethodType = 'GET', body?: {}, options: {} = {}) => {
    try {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(body),
            ...options
        });

        if (!response.ok) {
            throw new Error(`Fetch failed with status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        // Rethrow the error so that the caller can handle it if needed
        throw error;
    }
};

export const useInfiniteFetching = <T>(
    url: string,
    queries?: string,
    limit: number = 10, // Provide a default limit value
    onScrollFetching: boolean = false
) => {
    const [data, setData] = useState<T[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [hasNext, setHasNext] = useState(true);

    const fetchInfiniteData = async (reset = false) => {
        if (hasNext) {
            if (reset) {
                setData([]);
                setPageNumber(1);
                setHasNext(true);
            } else if (!data || data.length < 1) {
                setIsLoading(true);
            } else {
                setIsFetching(true);
            }

            try {
                const newData = await fetchData(`${url}?${queries}&page=${pageNumber}&limit=${limit}`, 'GET');
                if (newData?.data?.length > 0) {
                    setData((prev: T[] | null) => (reset ? [] : prev || []).concat(newData.data));
                } else {
                    setHasNext(false);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
                setIsFetching(false);
            }
        }
    };

    const loadMore = () => {
        if (hasNext) {
            setPageNumber(prev => prev + 1);
        }
    };

    const refetch = async () => {
        setIsLoading(true);
        await fetchInfiniteData(true);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchInfiniteData();
    }, [pageNumber]);

    useEffect(() => {
        if (onScrollFetching) {
            if (data && data.length >= limit) {
                const handleScroll = () => {
                    const documentHeight = document.documentElement.scrollHeight;
                    const scrollPosition = window.innerHeight + window.pageYOffset;
                    if (documentHeight === scrollPosition) {
                        if (hasNext && !isFetching && !isLoading) {
                            loadMore();
                        }
                    }
                };
                window.addEventListener('scroll', handleScroll);
                return () => {
                    window.removeEventListener('scroll', handleScroll);
                };
            }
        }
    }, [data, pageNumber]);

    return { data, isLoading, loadMore, isFetching, refetch, hasNext };
};
