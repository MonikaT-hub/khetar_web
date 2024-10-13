import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Droplets, Sprout, BarChart, ThumbsUp, ChevronRight, Leaf, DollarSign, Globe, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full bg-white z-50 shadow-sm">
        <Link className="flex items-center justify-center" href="#">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">AgroTech Solutions</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="#benefits">
            Benefits
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
              <div className="space-y-4 text-center lg:text-left lg:w-1/2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Revolutionize Your <span className="text-green-600">Harvest</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl lg:text-2xl">
                  Reduce post-harvest losses by up to 40% with our innovative solar dryer and air-to-water generator solution.
                  Empower your farm with sustainable technology.
                </p>
                <div className="space-x-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">Get Started</Button>
                  <Button size="lg" variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">Learn More</Button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="/placeholder.svg"
                  alt="AgroTech Solar Dryer"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Innovative Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <Sun className="w-12 h-12 text-yellow-500 mb-4" />
                  <CardTitle className="text-xl">Solar-Powered Drying</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Harness the power of the sun to dry your crops efficiently, reducing energy costs and your carbon footprint.</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <Droplets className="w-12 h-12 text-blue-500 mb-4" />
                  <CardTitle className="text-xl">Air-to-Water Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our unique technology extracts water from air, maintaining optimal humidity levels for perfect drying conditions.</p>
                </CardContent>
              </Card>
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <Sprout className="w-12 h-12 text-green-500 mb-4" />
                  <CardTitle className="text-xl">Preserve Crop Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Maintain the nutritional value and quality of your crops with our controlled drying environment.</p>
                </CardContent>
              </Card>
              <Card className="bg-purple-50 border-purple-200">
                <CardHeader>
                  <BarChart className="w-12 h-12 text-purple-500 mb-4" />
                  <CardTitle className="text-xl">Smart Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Track and optimize your drying process with real-time data and insights through our smart monitoring system.</p>
                </CardContent>
              </Card>
              <Card className="bg-orange-50 border-orange-200">
                <CardHeader>
                  <ThumbsUp className="w-12 h-12 text-orange-500 mb-4" />
                  <CardTitle className="text-xl">User-Friendly Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Easy to set up and operate, our solution is designed with farmers in mind for hassle-free usage.</p>
                </CardContent>
              </Card>
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <Leaf className="w-12 h-12 text-green-500 mb-4" />
                  <CardTitle className="text-xl">Sustainable Farming</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Contribute to sustainable agriculture by reducing waste and increasing the shelf life of your produce.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-bold mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Harvest Crops</h3>
                <p className="text-gray-600">Harvest your crops at the optimal time for drying.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-bold mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Load the Dryer</h3>
                <p className="text-gray-600">Place your harvested crops into our solar dryer unit.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-bold mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Activate System</h3>
                <p className="text-gray-600">Turn on the solar dryer and air-to-water generator.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-bold mb-4">4</div>
                <h3 className="text-xl font-semibold mb-2">Monitor & Store</h3>
                <p className="text-gray-600">Monitor the process and store your perfectly dried produce.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Benefits for Farmers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <DollarSign className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Increased Profits</h3>
                <p>Reduce losses and increase the value of your crops, leading to higher profits.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Globe className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                <p>Utilize renewable energy and reduce your carbon footprint.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p>Produce high-quality dried goods that command better market prices.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Farmers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-50">
                <CardContent className="pt-8">
                  <p className="mb-4 italic">"This technology has been a game-changer for my farm. I've reduced post-harvest losses by 40% and increased my income significantly."</p>
                  <div className="flex items-center">
                    <Image src="/placeholder.svg" alt="John D." width={50} height={50} className="rounded-full mr-4" />
                    <div>
                      <p className="font-semibold">John D.</p>
                      <p className="text-sm text-gray-600">Corn Farmer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50">
                <CardContent className="pt-8">
                  <p className="mb-4 italic">"The solar dryer is incredibly efficient, and the air-to-water generator ensures my crops are dried perfectly every time. Highly recommended!"</p>
                  <div className="flex items-center">
                    <Image src="/placeholder.svg" alt="Maria S." width={50} height={50} className="rounded-full mr-4" />
                    <div>
                      <p className="font-semibold">Maria S.</p>
                      <p className="text-sm text-gray-600">Fruit Grower</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50">
                <CardContent className="pt-8">
                  <p className="mb-4 italic">"Easy to use and cost-effective. This solution has helped me improve the quality of my dried herbs and expand my market reach."</p>
                  <div className="flex items-center">
                    <Image src="/placeholder.svg" alt="Robert L." width={50} height={50} className="rounded-full mr-4" />
                    <div>
                      <p className="font-semibold">Robert L.</p>
                      <p className="text-sm text-gray-600">Herb Farmer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Revolutionize Your Farm?</h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with us to learn more about how our solution can benefit your farm and reduce post-harvest losses.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-lg">
                  Contact Us
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container px-4  md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">About Us</h3>
              <p className="text-sm text-gray-300">AgroTech Solutions is committed to empowering farmers with innovative technology for sustainable agriculture.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link className="text-sm hover:text-green-400 transition-colors" href="#features">Features</Link>
                <Link className="text-sm hover:text-green-400 transition-colors" href="#how-it-works">How It Works</Link>
                <Link className="text-sm hover:text-green-400 transition-colors" href="#testimonials">Testimonials</Link>
                <Link className="text-sm hover:text-green-400 transition-colors" href="#contact">Contact</Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="text-sm text-gray-300">Email: info@agrotechsolutions.com</p>
              <p className="text-sm text-gray-300">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-xs text-gray-400 text-center">© 2024 AgroTech Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}