import { Suspense } from "react"
import { getAllEvents } from "@/lib/data"
import EventCard from "@/components/event-card"
import EventsFilter from "@/components/events-filter"
import EventsSearch from "@/components/events-search"
import { Skeleton } from "@/components/ui/skeleton"
// Add import for the SetupNotification component


export const metadata = {
  title: "Events - MumbaiCollegeFest",
  description: "Discover and explore college festivals happening across Mumbai.",
}

export default async function EventsPage({
  searchParams,
}: {
  searchParams: { query?: string; type?: string }
}) {
  const events = await getAllEvents()

  // Filter events based on search params
  const filteredEvents = events.filter((event) => {
    // Filter by search query
    if (searchParams.query) {
      const query = searchParams.query.toLowerCase()
      const matchesQuery =
        event.name.toLowerCase().includes(query) ||
        event.college.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query)

      if (!matchesQuery) return false
    }

    // Filter by event type
    if (searchParams.type && event.event_type !== searchParams.type) {
      return false
    }

    return true
  })

  // Get unique event types for filter
  const eventTypes = Array.from(new Set(events.map((event) => event.event_type)))

  return (
    <div className="container py-10">
     
      

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">College Events in Mumbai</h1>
        <p className="text-muted-foreground">
          Discover and explore the vibrant college festivals happening across Mumbai
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-full md:w-64 flex-shrink-0">
          <EventsFilter eventTypes={eventTypes} selectedType={searchParams.type} />
        </div>

        <div className="flex-grow">
          <EventsSearch initialQuery={searchParams.query} />

          <div className="mt-6">
            <Suspense fallback={<EventsGridSkeleton />}>
              {filteredEvents.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No events found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

function EventsGridSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="festival-card bg-background">
          <Skeleton className="h-48 w-full" />
          <div className="p-5">
            <Skeleton className="h-4 w-24 mb-2" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-2" />
            <div className="space-y-2 mt-4">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-40" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

