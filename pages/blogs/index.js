import Link from 'next/link'
import '../../styles/routes/blogs.scss'
import Navbar from '../../components/Navbar/Navbar'
export default function Blogs() {
    const blogs = [
        {
            id: 1,
            name: 'Shlok Kamat',
            instaId: 'shlokkamat',
            heading: 'Top 9 must watch Sporting Movies this Summer',
            headingImage: '/Images/Blogs/BlogContent/shlok_blog.webp',
            userImage: '/Images/Blogs/BlogContent/shlok.png',
            month:'June',
            content1: `Get ready to immerse yourself in a world of heart-pounding action, triumphant victories, and inspiring stories! In these summer months, there\'s no better way to beat the heat than diving into a collection of the top 10 must-watch sporting movies. Whether you\'re a die-hard sports enthusiast or simply seeking an adrenaline-packed escape, these cinematic gems will take you on an unforgettable journey through the thrill of victory and the agony of defeat.`,
        },
        // {
        //     id: 2,
        //     name: 'Sana Dogra',
        //     instaId: 'sanadogra',
        //     heading: 'Breaking Rules and For Good',
        //     headingImage: '/Images/Blogs/BlogContent/shlok_blog.webp',
        //     userImage: '/Images/Blogs/BlogContent/shlok.png',
        //     month:'September',
        //     content1: `Have you ever been forced to do or follow something just because it has been customary for a long time? Has it made you feel like you\'re being put down or degraded? Most of us experience this in the form of rules imposed on us by authorities. I am reminded of something similar that happened to me and my friends at school. I started my training as a badminton player in the 8th grade for the school team..`,
        // }
    ]
    return (
        <>
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
                            <Link key={blog.id} href={`/blogs/${blog.id}`}>
                                <div className="BlogsContainer__content--card">
                                    <div className="BlogsContainer__content--card__left">
                                        <div className="BlogsContainer__content--card__left--author">
                                            <img className="BlogsContainer__content--card__left--author__image" src={blog.userImage} />
                                            <p className="BlogsContainer__content--card__left--author__name">{blog.name} | {blog.month} 2023</p>
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

Blogs.getLayout = function getLayout(page) {
  return (
      <div className="MyLayout">
          <Navbar />
          {page}
      </div>
  );
};