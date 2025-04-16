import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About - MumbaiCollegeFest",
  description: "Learn about MumbaiCollegeFest and our mission to promote college festivals in Mumbai.",
}

export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About MumbaiCollegeFest</h1>

        <div className="relative h-[300px] rounded-2xl overflow-hidden mb-8">
          <Image
            src="/concert.jpg"
            alt="MumbaiCollegeFest Team"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose max-w-none">
          <h2>Our Mission</h2>
          <p>
          When we started Mumbai College Fests, it wasn't just about building a website—it was about solving a problem we experienced firsthand.
           As students, we'd missed countless amazing events simply because we didn't know they were happening
          </p>

          <h2>What We Do</h2>
          <p>
          We—Shaman Shetty, Dishank Vyas, and Krishna Shetty—believe that college fests represent the best of what our educational 
          community has to offer: creativity, talent, passion, and the spirit of friendly competition. Every cultural performance, technical showcase,
           and academic event deserves its moment in the spotlight.
          This platform is our way of bringing Mumbai's vibrant college festival scene together in one place. 
          We've poured our hearts, late nights, and countless cups of chai into creating something that serves both event organizers and attendees alike.
          </p>

          <h2>Our Vision</h2>
          <p>
            We envision a thriving ecosystem where college festivals across Mumbai can reach their full potential by
            connecting with the right audience. By simplifying the process for fest registration and discovery, we aim
            to foster a stronger sense of community among students and enhance the overall college experience.
          </p>

          <h2>Meet Our Team</h2>
          <p>
            We are a passionate group of individuals dedicated to bringing the best of Mumbai's college fest scene to you.
          </p>
          <div className="not-prose grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-2 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                {/* Placeholder for image - Replace with <Image> component */}
                <Image
                 src="/shaman.png"
                 alt="MumbaiCollegeFest Team"
                 fill
                 className="shaman"
                />
              </div>
              <h3 className="font-semibold">Shaman Shetty</h3>
              <p className="text-sm text-gray-600">Co-founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-2 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
              <Image
                 src="/dishank.jpg"
                 alt="MumbaiCollegeFest Team"
                 fill
                 className="shaman"
                />
              </div>
              <h3 className="font-semibold">Dishank Vyas</h3>
              <p className="text-sm text-gray-600">Co-founder</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
               <div className="relative w-32 h-32 mx-auto mb-2 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
               <Image
                 src="/krishna.jpg"
                 alt="MumbaiCollegeFest Team"
                 fill
                 className="shaman"
                />
               </div>
              <h3 className="font-semibold">Krishna Shetty</h3>
              <p className="text-sm text-gray-600">Co-founder</p>
            </div>
          </div>

          <h2>Why Choose MumbaiCollegeFest?</h2>
          <ul>
            <li>
              <strong>Free Registration:</strong> Register your college fest for free and reach thousands of students
              across Mumbai.
            </li>
            <li>
              <strong>Wide Reach:</strong> Connect with students from colleges all across Mumbai and boost your event
              attendance.
            </li>
            <li>
              <strong>Community Engagement:</strong> Foster connections and build a community around your college fest.
            </li>
            <li>
              <strong>User-Friendly Platform:</strong> Our clean, modern, Gen Z-inspired interface makes it easy to
              navigate and find events.
            </li>
          </ul>
          <h2><strong>Our Message</strong></h2>
          <p>
          We hope this platform helps you discover events that inspire you, competitions that challenge you, and performances that move you. Every fest has a story, and we're honored to help tell yours.
          With gratitude and excitement for what's ahead,
          Shaman, Dishank, and Krishna
          </p>

          <h2>Join Us</h2>
          <p>
            Whether you're a fest organizer looking to promote your event or a student searching for exciting college
            fests to attend, MumbaiCollegeFest is here to connect you with the vibrant fest culture of Mumbai. Join us
            in celebrating the creativity, talent, and energy of Mumbai's college community!
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild className="festival-button bg-gradient-to-r from-festival-purple to-festival-pink text-white">
            <Link href="/register">Register Your Fest</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

