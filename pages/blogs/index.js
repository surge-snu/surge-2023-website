import Link from 'next/link'
import '../../styles/routes/blogs.scss'
export default function Blogs() {
    const blogs = [
        {
            id: 1,
            name: 'Shlok Kamat',
            instaId: 'shlokkamat',
            heading: 'Top 9 must watch Sporting Movies this Summer',
            headingImage: '/Images/Blogs/BlogContent/shlok_blog.jpeg',
            userImage: '/Images/Blogs/BlogContent/shlok.png',
            content1: `Get ready to immerse yourself in a world of heart-pounding action, triumphant victories, and inspiring stories! In these summer months, there\'s no better way to beat the heat than diving into a collection of the top 10 must-watch sporting movies. Whether you\'re a die-hard sports enthusiast or simply seeking an adrenaline-packed escape, these cinematic gems will take you on an unforgettable journey through the thrill of victory and the agony of defeat.`,
        }
    ]
    return (
        <>
            return (
            <div className="BlogsContainer">
                <div className="BlogsContainer__background">
                    <img className="BlogsContainer__background--image" src="/Images/Blogs/blogs_bg.png" />
                </div>
                <div className='BlogsContainer__title'>
                    <img className='BlogsContainer__title--image' src='/Images/Blogs/surge_white.png' />
                    <p className='BlogsContainer__title--text'>BLOGS</p>
                </div>
                <div className="BlogsContainer__content">
                    {blogs.map((blog) => {
                        return (
                            <Link href={`/blogs/${blog.id}`}>
                                <div className="BlogsContainer__content--card">
                                    <div className="BlogsContainer__content--card__left">
                                        <div className="BlogsContainer__content--card__left--author">
                                            <img className="BlogsContainer__content--card__left--author__image" src={blog.userImage} />
                                            <p className="BlogsContainer__content--card__left--author__name">{blog.name} | June 2023</p>
                                        </div>
                                        <p className='BlogsContainer__content--card__left--heading'>{blog.heading}</p>
                                        <p className='BlogsContainer__content--card__left--content'>{blog.content1}.......</p>
                                    </div>
                                    <div className="BlogsContainer__content--card__right">
                                        <img className='BlogsContainer__content--card__right--image' src={blog.headingImage} />
                                    </div>
                                </div>
                            </Link>
                        )
                    })}

                </div>
            </div>
        </>

    )
}