import React from 'react'

import Search from '../components/Search'
import Categories from '../components/Categories'
import Places from '../components/Places'

function Home() {
    return (
        <main id="home">
            <Search />
            <Categories />
            <Places />
        </main>
    )
}

export default Home