import React from 'react'
import Posting from '../Posting/Posting'

function Gallery({ postings }) {
    return (
        <div>
            <h1>Gallery</h1>
            <Posting posts={postings} />
        </div>
    )
}

export default Gallery