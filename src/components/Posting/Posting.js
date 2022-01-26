import React from 'react'
// title: "Car For Sale",
//     description: "Dope 1989 Honda Civic on 22\" rims, don't waste my time I know what I have",
//         price: '$3000',
//             imageURL: '/assets/sick_civic.jpeg'
function Posting({ posts }) {
    return (
        <div>
            <h1>Posting</h1>
            {posts.map(post => (
                <div>
                    <img src={post.imageURL} />
                    <p>{post.title}</p>
                    <p>{post.description}</p>
                    <p>{post.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Posting