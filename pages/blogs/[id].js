import '../../styles/routes/blogs_content.scss'
import { useRouter } from 'next/router';
export default function Post() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className='Blog'>
            <div className='Blog__header'>
                <img src='/Images/Blogs/blog_main.png' className='Blog__header--image' />
                <p className='Blog__header--text'>The Uneven Landscape Of The Fantasy Sports Industry Is About To Be Reshaped</p>
            </div>
            <div className='Blog__author'>
                <div className='Blog__author--name'>
                    <img src='/Images/Blogs/author.png' className='Blog__author--name__image' />
                    <p className='Blog__author--name__text'>Mrityunjay Prasad</p>
                </div>
                <p className='Blog__author--id'>
                    @mrityunjay.inc
                </p>
            </div>
            <div className='Blog__content'>
                <div className='Blog__content--left'>
                    The fantasy sports industry is ripe and growing, yet simultaneously ready for disruption. It is largely dominated by a pair of competing The fantasy sports industry is ripe ....... The fantasy sports industry is ripe and growing, yet simultaneously ready for disruption. It is largely dominated by a pair of competing The fantasy sports industry is ripe ....... The fantasy sports industry is ripe and growing, yet simultaneously ready for disruption. It is largely dominated by a pair of competing The fantasy sports industry is ripe ....... The fantasy sports industry is ripe and growing, yet simultaneously ready for disruption. It is largely dominated by a pair of competing The fantasy sports industry is ripe ....... The fantasy sports industry is ripe and growing, yet simultaneously ready for disruption. It is largely dominated by a pair of competing The fantasy sports industry is ripe .......
                </div>
                <div className='Blog__content--right'>
                    The fantasy sports industry is ripe and growing, yet simultaneously ready for disruption. It is largely dominated by a pair of competing The fantasy sports industry is ripe ....... The fantasy sports industry is ripe and growing, yet simultaneously ready for disruption. It is largely dominated by a pair of competing .The fantasy sports industry is ripe and growing, yet simultaneously ready for disruption. It is largely dominated by a pair of competing The fantasy sports industry is ripe ....... The fantasy sports industry is ripe and growing, yet simultaneously ready for disruption. It is largely dominated by a pair of competing The fantasy sports industry is ripe ....... The fantasy sports industry is ripe and growing, yet simultaneously ready for disruption. It is largely dominated
                </div>
            </div>
        </div>
    );
}