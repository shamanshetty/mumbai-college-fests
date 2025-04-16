import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"
import type { Event } from "@/types/database"
import { formatDate } from "@/lib/utils"

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/events/${event.id}`}>
      <div className="festival-card bg-background h-full flex flex-col">
        <div className="relative h-48 w-full">
          <Image
            src={event.image_url || "/placeholder.svg?height=200&width=400"}
            alt={event.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="mb-2">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-festival-purple/10 text-festival-purple">
              {event.event_type}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2 line-clamp-1">{event.name}</h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{event.description}</p>
          <div className="mt-auto space-y-2">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="line-clamp-1">{event.venue}</span>
            </div>
            <div className="flex items-center text-sm font-medium text-festival-purple">
              <span>{event.college}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

