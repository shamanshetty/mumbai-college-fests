import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Globe, Mail, Phone, ArrowLeft } from "lucide-react"
import { getEventById } from "@/lib/data"
import { formatDate } from "@/lib/utils"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const event = await getEventById(params.id)

  if (!event) {
    return {
      title: "Event Not Found - MumbaiCollegeFest",
      description: "The event you're looking for could not be found.",
    }
  }

  return {
    title: `${event.name} - MumbaiCollegeFest`,
    description: event.description,
  }
}

export default async function EventPage({ params }: { params: { id: string } }) {
  const event = await getEventById(params.id)

  if (!event) {
    notFound()
  }

  return (
    <div className="container py-10">
      <Link
        href="/events"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Events
      </Link>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src={event.image_url || "/placeholder.svg?height=400&width=800"}
              alt={event.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">{event.name}</h1>
            <div className="flex items-center text-festival-purple font-medium mb-4">
              <span>{event.college}</span>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{event.venue}</span>
              </div>
            </div>

            <div className="mb-2">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-festival-purple/10 text-festival-purple">
                {event.event_type}
              </span>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-xl font-bold mb-4">About This Event</h2>
              <p className="whitespace-pre-line">{event.description}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-background rounded-2xl p-6 shadow-md sticky top-20">
            <h2 className="text-xl font-bold mb-4">Event Information</h2>

            <div className="space-y-4 mb-6">
              {event.website && (
                <div className="flex items-start">
                  <Globe className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-sm font-medium mb-1">Website</div>
                    <a
                      href={event.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-festival-purple hover:underline break-all"
                    >
                      {event.website}
                    </a>
                  </div>
                </div>
              )}

              {event.contact_email && (
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-sm font-medium mb-1">Email</div>
                    <a href={`mailto:${event.contact_email}`} className="text-sm text-festival-purple hover:underline">
                      {event.contact_email}
                    </a>
                  </div>
                </div>
              )}

              {event.contact_phone && (
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-sm font-medium mb-1">Phone</div>
                    <a href={`tel:${event.contact_phone}`} className="text-sm text-festival-purple hover:underline">
                      {event.contact_phone}
                    </a>
                  </div>
                </div>
              )}
            </div>

            <Button className="w-full festival-button bg-gradient-to-r from-festival-purple to-festival-pink text-white">
              Register for Event
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

