import Hero from "../components/Hero"
import FeaturedServices from "../components/FeaturedServices"
import PopularDishes from "../components/PopularDishes"
import PopularDishes2 from "../components/PopularDishes2"
import SocialMedia from "../components/SocialMedia"
import ContactForm from "../components/ContactForm"


function Home() {
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      <Hero/>
      <FeaturedServices />
      <div className="block md:hidden">

        <PopularDishes />
      </div>
      <div className="hidden md:block">
          <PopularDishes2 />
      </div>
      <SocialMedia />
      <ContactForm />
    </div>
  )
}

export default Home