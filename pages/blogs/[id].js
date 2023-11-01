import '../../styles/routes/blogs_content.scss'
import { useRouter } from 'next/router';
export default function Post() {
    const router = useRouter();
    const { id } = router.query;
    const blogs = [
        {
            id: 1,
            name: 'Shlok Kamat',
            instaId: 'shlokkamat',
            heading: 'Top 9 must watch Sporting Movies this Summer',
            headingImage : '/Images/Blogs/BlogContent/shlok_blog.webp',
            userImage : '/Images/Blogs/BlogContent/shlok.png',
            content1: `Get ready to immerse yourself in a world of heart-pounding action, triumphant victories, and inspiring stories! In these summer months, there\'s no better way to beat the heat than diving into a collection of the top 10 must-watch sporting movies. Whether you\'re a die-hard sports enthusiast or simply seeking an adrenaline-packed escape, these cinematic gems will take you on an unforgettable journey through the thrill of victory and the agony of defeat. So grab your popcorn, settle into your favourite spot, and let the games begin as we present the ultimate lineup of sporting masterpieces to make your summer a slam dunk\! 1. Rocky (1976) "Rocky" is a timeless sports drama film released in 1976, directed by John G. Avildsen and starring Sylvester Stallone in the iconic role of Rocky Balboa. Set in the gritty streets of Philadelphia, the movie tells the underdog story of Rocky, a small-time boxer who gets the chance of a lifetime to fight against the reigning heavyweight champion, Apollo Creed (Carl Weathers). It portrays the underdog\'s triumph and resonates with viewers through its memorable characters, heartfelt performances, and fantastic training montages. The film\'s iconic theme song, "Gonna Fly Now," has become synonymous with perseverance and achieving the impossible. Where to watch: Amazon Prime Video 2. Coach Carter (2005) The movie stars Samuel L. Jackson as Ken Carter, a no-nonsense high school basketball coach who transforms the lives of his players both on and off the court. Set in Richmond, California, the film follows Coach Carter as he takes on the challenge of coaching the underperforming basketball team at Richmond High School. Rich-what? RICHMOND! Inspired by soapy teen shows such as One Tree Hill and Melrose Place, Coach Carter\'s an energetic, riveting drama perfectly aimed at its younger audience. The basketball scenes are suitably flashy, and this is also Channing Tatum\'s film debut. Worth watching just for the absolute juggernaut of a Samuel L Jackson performance. Where to watch: Netflix 3. Ford v Ferrari (2019) Set against the backdrop of the automotive industry, the film follows the visionary American car designer Carroll Shelby (played by Matt Damon) and the fearless British driver Ken Miles (played by Christian Bale). Shelby is approached by Henry Ford II (played by Tracy Letts) to design a car capable of beating the dominant Ferrari racing team at Le Mans. The film combines thrilling race sequences with nuanced character development, offering a compelling narrative that captures the essence of the sport and the indomitable spirit of the individuals involved. Where to watch: Disney Hotstar `,
            content2: '4. Moneyball (2011) Billy Beane (Brad Pitt), the Oakland A\'s general manager, one day has an epiphany: Baseball\'s conventional wisdom is all wrong. With a tight budget, Beane must reinvent his team by outsmarting the richer ball clubs. Joining forces with Ivy League graduate Peter Brand (Jonah Hill), Beane prepares to challenge old-school traditions. He recruits bargain-bin players who scouts have labelled flawed but have game-winning potential. Based on the book by Michael Lewis. Beyond Pitt and Jonah Hill, who both received Oscar nominations, you\'ve got a terrific Philip Seymour Hoffman as the defeated A\'s manager and a pre-mega-fame Chris Pratt as one of the team\'s unlikely heroes. Where to watch: Netflix 5. Chak De India! (2007) The film begins with Kabir Khan (played by Shah Rukh Khan) being ostracised and labelled a traitor after a disastrous performance during a crucial match against Pakistan. Years later, Kabir can redeem himself by coaching the women\'s hockey team, filled with players from diverse backgrounds and facing internal conflicts. "Chak De! India" combines intense sports action with powerful storytelling, delving into themes of teamwork, perseverance, and the pursuit of dreams. It explores the complexities of identity, patriotism, and the transformative power of sports. It is an inspiring and emotional film that celebrates the spirit of sportsmanship, female empowerment, and the ability to overcome obstacles. It serves as a reminder of the power of unity and determination, leaving audiences uplifted and motivated to pursue their dreams against all odds.'
        }
    ]

    const blog = blogs.find(blog => blog.id === parseInt(id));

    return (
        <div className='Blog'>
            <div className='Blog__header'>
                <img src={blog.headingImage} className='Blog__header--image' />
                <p className='Blog__header--text'>{blog.heading}</p>
            </div>
            <div className='Blog__author'>
                <div className='Blog__author--name'>
                    <img src={blog.userImage} className='Blog__author--name__image' />
                    <p className='Blog__author--name__text'>{blog.name}</p>
                </div>
                <p className='Blog__author--id'>
                    @{blog.instaId}
                </p>
            </div>
            <div className='Blog__content'>
                <div className='Blog__content--left'>
                    {blog.content1}
                </div>
                <div className='Blog__content--right'>
                    {blog.content2}
                </div>
            </div>
        </div>
    );
}