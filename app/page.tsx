import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getFeaturedEvents } from "@/lib/data"
import EventCard from "@/components/event-card"
// Add import for the SetupNotification component

export default async function Home() {
  const featuredEvents = await getFeaturedEvents()

  return (
    <div className="flex flex-col min-h-screen">
     

      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-festival-purple/10 via-festival-pink/10 to-festival-teal/10 z-0"></div>
        <div className="container relative z-10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Discover Mumbai's <span className="gradient-text">Vibrant</span> College Fest Scene
              </h1>
              <p className="text-lg text-muted-foreground">
                Your one-stop platform to explore, register, and celebrate the most exciting college festivals across
                Mumbai.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="festival-button bg-gradient-to-r from-festival-purple to-festival-pink text-white"
                >
                  <Link href="/events">Explore Events</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="festival-button">
                  <Link href="/register">Register Your Fest</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] animate-float">
              <Image
                src="/concert.jpg"
                alt="College Fest Celebration"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Events</h2>
              <p className="text-muted-foreground">Discover the hottest college fests happening in Mumbai</p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link href="/events">View All Events</Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Why Choose MumbaiCollegeFest?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're dedicated to promoting and celebrating the vibrant fest culture in Mumbai
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-background rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-festival-purple/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-festival-purple"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Free Registration</h3>
              <p className="text-muted-foreground">
                Register your college fest for free and reach thousands of students across Mumbai.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-festival-pink/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-festival-pink"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Wide Reach</h3>
              <p className="text-muted-foreground">
                Connect with students from colleges all across Mumbai and boost your event attendance.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-festival-teal/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-festival-teal"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
              <p className="text-muted-foreground">
                Foster connections and build a community around your college fest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-festival-purple/90 via-festival-pink/90 to-festival-teal/90 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Showcase Your College Fest?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of college fests already registered on our platform and reach thousands of students.
          </p>
          <Button asChild size="lg" className="festival-button bg-white text-festival-purple hover:bg-gray-100">
            <Link href="/register">Register Your Fest Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

