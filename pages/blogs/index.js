import Link from 'next/link'
import '../../styles/routes/blogs.scss'
export default function Blogs() {
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
                <Link href='/blogs/1'>
                    <div className="BlogsContainer__content--card">
                        <div className="BlogsContainer__content--card__left">
                            <div className="BlogsContainer__content--card__left--author">
                                <img className="BlogsContainer__content--card__left--author__image" src="/Images/Blogs/author.png" />
                                <p className="BlogsContainer__content--card__left--author__name">Mrityunjay Prasad | June 2023</p>
                            </div>
                            <p className='BlogsContainer__content--card__left--heading'>The Uneven Landscape Of The Fantasy Sports Industry Is About To Be Reshaped</p>
                            <p className='BlogsContainer__content--card__left--content'>The fantasy sports industry is ripe and growing, yet simultaneously ready for disruption. It is largely dominated by a pair of competing The fantasy sports industry is ripe .......</p>
                        </div>
                        <div className="BlogsContainer__content--card__right">
                            <img className='BlogsContainer__content--card__right--image' src='/Images/Blogs/blog.png' />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}