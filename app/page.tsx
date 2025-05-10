import Header from "@/components/header"
import Hero from "@/components/hero"
import Solutions from "@/components/solutions"
import Industries from "@/components/industries"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import About from "@/components/about"
import Portfolio from "@/components/portfolio"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {" "}
        {/* Added pt-16 for header height */}
        <Hero />
        <About />
        <Solutions />
        <Portfolio />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
