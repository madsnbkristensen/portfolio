
import ProjectCard from '../components/ProjectCard'
import { useState, useEffect } from 'react'


export default function Projectpage() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const url = "https://wp.madsnkristensen.dk/wp-json/wp/v2/posts?_embed&categories=9"
            const response = await fetch(url);
            const data = await response.json();
            setPosts(data);
        }
        getData();
    }, []);

    return (

        <main

            className="projectpage-main">

            {posts.map(post => (
                <ProjectCard key={post.id} post={post} />
            ))}

        </main>

    )
}