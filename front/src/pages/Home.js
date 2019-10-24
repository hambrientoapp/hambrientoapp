import React from 'react'

import Search from '../components/Search'
import Categories from '../components/Categories'
import Places from '../components/Places'
import Counter from '../components/Counter'

function Home() {
    return (
        <main id="home">
            <Search />
            <Categories />
            <Places />
            <Counter />
        </main>
    )
}

export default Home