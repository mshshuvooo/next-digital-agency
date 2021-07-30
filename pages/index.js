import Layout from '../src/components/Layout'
import Header from '../src/components/header/Header'
import HomeSlider from '../src/components/homeSlider/HomeSlider'
import SectionTitle from '../src/components/sectionTitle/SectionTitle';
import Features from '../src/components/features/Features';
import Achievements from '../src/components/achievements/Achievements';


const Home = ({homePageData}) => {

const {featuresSectionSubTitle, featuresSectionTitle, featuresSectionDesc} = homePageData.features;
const {achievementSectionSubTitle, achievementSectionTitle, achievementSectionText} = homePageData.achievements;
const achievementLists = homePageData.achievementLists ? homePageData.achievementLists : {}

console.log(achievementLists);
  return (
    <Layout pageTitle={'Home'}>
        <Header/>
        <HomeSlider slides={homePageData.slider} />

        <section className="features-section section-padding">
          <SectionTitle 
            subSecTitle={featuresSectionSubTitle} 
            secTitle={featuresSectionTitle}
            secTitleDesc={featuresSectionDesc}
          />
          <Features features={homePageData.features} />
        </section>

        <section className="achievements-section section-padding">
          <SectionTitle 
            subSecTitle={achievementSectionSubTitle} 
            secTitle={achievementSectionTitle}
            secTitleDesc={achievementSectionText}
          />
          <Achievements achievement={homePageData.achievements}/>
        </section>
        
    </Layout>
  )
}





export async function getStaticProps () {
  const request = await fetch('http://projects.shahadatshuvo.com/softbox/wp-json/wp/v2/homepage')
  const homePageData = await request.json()
  return {
    props: {
      homePageData: homePageData
    }
  }
}

export default Home;
