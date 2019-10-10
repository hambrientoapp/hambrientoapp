import React from 'react'

import Search from '../components/Search'
import Categories from '../components/Categories'
import Places from '../components/Places'
import Contador from '../components/Contador'

function Home() {
    return (
        <main id="home">
            <Search />
            <Categories />
            <Places />
            <Contador />
        </main>
    )
}

export default Home