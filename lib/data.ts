import { supabase } from "./supabase"
import type { Event, EventFormData } from "@/types/database"

// Update the getFeaturedEvents function to handle the missing table
export async function getFeaturedEvents(): Promise<Event[]> {
  try {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("is_featured", true)
      .order("date", { ascending: true })
      .limit(6)

    if (error) {
      // Check if the error is about the missing table
      if (error.message.includes("relation") && error.message.includes("does not exist")) {
        console.error("The events table does not exist yet. Please run the setup SQL script in Supabase.")
        return getMockFeaturedEvents() // Return mock data when table doesn't exist
      }

      console.error("Error fetching featured events:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error in getFeaturedEvents:", error)
    return getMockFeaturedEvents() // Return mock data on error
  }
}

// Add a function to provide mock data when the table doesn't exist
function getMockFeaturedEvents(): Event[] {
  return [
    {
      id: "mock-1",
      name: "Techfest 2023",
      college: "IIT Bombay",
      date: "2023-12-15",
      venue: "IIT Bombay Campus, Powai",
      description:
        "Asia's largest science and technology festival. Join us for competitions, exhibitions, lectures, and workshops covering various aspects of science and technology.",
      image_url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&h=500",
      event_type: "Technical",
      created_at: new Date().toISOString(),
      website: "https://techfest.org",
      contact_email: "info@techfest.org",
      contact_phone: "+91 9876543210",
      is_featured: true,
    },
    {
      id: "mock-2",
      name: "Mood Indigo 2023",
      college: "IIT Bombay",
      date: "2023-12-22",
      venue: "IIT Bombay Campus, Powai",
      description:
        "Asia's largest college cultural festival. Experience music, dance, arts, and more in this 4-day extravaganza that celebrates creativity and talent.",
      image_url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&h=500",
      event_type: "Cultural",
      created_at: new Date().toISOString(),
      website: "https://moodi.org",
      contact_email: "info@moodi.org",
      contact_phone: "+91 9876543211",
      is_featured: true,
    },
    {
      id: "mock-3",
      name: "Malhar 2023",
      college: "St. Xavier's College",
      date: "2023-08-18",
      venue: "St. Xavier's College, Fort",
      description:
        "One of Mumbai's most anticipated college festivals. Malhar features competitions in literary arts, performing arts, and fine arts, along with workshops and star performances.",
      image_url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&h=500",
      event_type: "Cultural",
      created_at: new Date().toISOString(),
      website: "https://malharfest.org",
      contact_email: "info@malharfest.org",
      contact_phone: "+91 9876543212",
      is_featured: true,
    },
  ]
}

// Update the getAllEvents function to handle the missing table
export async function getAllEvents(): Promise<Event[]> {
  try {
    const { data, error } = await supabase.from("events").select("*").order("date", { ascending: true })

    if (error) {
      // Check if the error is about the missing table
      if (error.message.includes("relation") && error.message.includes("does not exist")) {
        console.error("The events table does not exist yet. Please run the setup SQL script in Supabase.")
        return getMockEvents() // Return mock data when table doesn't exist
      }

      console.error("Error fetching all events:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error in getAllEvents:", error)
    return getMockEvents() // Return mock data on error
  }
}

// Add a function to provide mock data when the table doesn't exist
function getMockEvents(): Event[] {
  // Return featured events plus additional mock events
  return [
    ...getMockFeaturedEvents(),
    {
      id: "mock-4",
      name: "Umang 2023",
      college: "NM College",
      date: "2023-09-10",
      venue: "NM College Campus, Vile Parle",
      description:
        "A vibrant celebration of talent and creativity. Umang features competitions, workshops, and performances across various cultural and artistic domains.",
      image_url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&h=500",
      event_type: "Cultural",
      created_at: new Date().toISOString(),
      website: "https://umangfest.org",
      contact_email: "info@umangfest.org",
      contact_phone: "+91 9876543213",
      is_featured: false,
    },
    {
      id: "mock-5",
      name: "Kshitij 2023",
      college: "Mithibai College",
      date: "2023-10-05",
      venue: "Mithibai College, Vile Parle",
      description:
        "A platform for students to showcase their talents in various cultural and technical events. Kshitij features competitions, workshops, and star performances.",
      image_url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&h=500",
      event_type: "Cultural",
      created_at: new Date().toISOString(),
      website: "https://kshitijfest.org",
      contact_email: "info@kshitijfest.org",
      contact_phone: "+91 9876543214",
      is_featured: false,
    },
  ]
}

// Update the getEventById function to handle the missing table
export async function getEventById(id: string): Promise<Event | null> {
  try {
    const { data, error } = await supabase.from("events").select("*").eq("id", id).single()

    if (error) {
      // Check if the error is about the missing table
      if (error.message.includes("relation") && error.message.includes("does not exist")) {
        console.error("The events table does not exist yet. Please run the setup SQL script in Supabase.")
        // Return a mock event if the ID matches one of our mock events
        const mockEvents = getMockEvents()
        return mockEvents.find((event) => event.id === id) || null
      }

      console.error(`Error fetching event with id ${id}:`, error)
      return null
    }

    return data
  } catch (error) {
    console.error(`Error in getEventById for id ${id}:`, error)
    // Return a mock event if the ID matches one of our mock events
    const mockEvents = getMockEvents()
    return mockEvents.find((event) => event.id === id) || null
  }
}

// Update the createEvent function to handle the missing table
export async function createEvent(
  eventData: EventFormData,
): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    const { data, error } = await supabase.from("events").insert([eventData]).select()

    if (error) {
      // Check if the error is about the missing table
      if (error.message.includes("relation") && error.message.includes("does not exist")) {
        return {
          success: false,
          error: "The events table does not exist yet. Please run the setup SQL script in Supabase.",
        }
      }

      console.error("Error creating event:", error)
      return { success: false, error: error.message }
    }

    return { success: true, id: data?.[0]?.id }
  } catch (error) {
    console.error("Error in createEvent:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please make sure the events table exists in your Supabase database.",
    }
  }
}

export async function searchEvents(query: string): Promise<Event[]> {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .or(`name.ilike.%${query}%,college.ilike.%${query}%,description.ilike.%${query}%`)
    .order("date", { ascending: true })

  if (error) {
    console.error(`Error searching events with query ${query}:`, error)
    return []
  }

  return data || []
}

