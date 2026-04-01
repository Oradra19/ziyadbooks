import { getProducts } from "@/lib/api"
import CatalogClient from "@/components/CatalogClient"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import HeroSection from "@/components/Hero"
import FeaturesSection from "@/components/Features"



export default async function Home() {
  const { products, nextPage } = await getProducts()

  return (
    <>
    <Navbar />
    <HeroSection />
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <CatalogClient
          initialProducts={products}
          nextPage={nextPage}
        />
      </div>
    </main>
    <FeaturesSection/>
    <Footer />
    </>
  )
}

