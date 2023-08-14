import React, { useState, useEffect, useRef } from 'react';
import Cards from './Cards';
const Productlist = () => {
    const [products, setProducts] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const [page, setPage] = useState(1)
    const elementRef = useRef(null)

    function onIntersection(entries) {
        const firstEntry = entries[0]
        if (firstEntry.isIntersecting && hasMore) {
            fetchMoreItems()
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver((onIntersection))
        if (observer && elementRef.current) {
            observer.observe(elementRef.current)
        }
        return () => {
            if (observer) {
                observer.disconnect()
            }
        }
    }, [products]);
    async function fetchMoreItems() {
        const pageSize = 10;
        const response = await fetch(`https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=${pageSize}`)
        const data = await response.json()
        console.log("abc", data)
        if (data.data && data.data.length == 0) {
            setHasMore(false)
        } else {
            setProducts(prevProducts => [...prevProducts, ...data.data])
            setPage(prevPage => prevPage + 1)
        }
    }
    return (
        <>
            {
                <div className="row">
                    {products.map((element,i) => {
                        return <div className="col-md-4" key={i}>
                            <Cards title={element.name} HP={element.hp} description={element.level} imageUrl={element.images.large} Attacks={element.attacks} Abilities={element.abilities} />
                        </div>
                    })}
                </div>
            }
            {hasMore &&
                <div ref={elementRef} style={{ textAlign: 'center' }}>Load more Items</div>}
        </>
    )
}

export default Productlist