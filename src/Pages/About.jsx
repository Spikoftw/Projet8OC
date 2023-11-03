import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import sections from '../data/about'
import '../styles/about.css'
import '../styles/banner.css'
import bannerBkg from '../images/b9995860bb6384a77ca7dc9bf52da3be.jpeg'

function About() {
    return (
        <>
            {
                <Banner title="" bannerImage={bannerBkg}/>
            }
            <div className='about-collapse-container'>
                {
                    sections.map(({title, content }, id) => 
                        <Collapse key={`coll-${id}`} title={title} content={content} />
                    )
                }
            </div>
        </>
    )
}

export default About