export interface Event {
  id: string
  name: string
  college: string
  date: string
  venue: string
  description: string
  image_url: string
  event_type: string
  created_at: string
  website?: string
  contact_email?: string
  contact_phone?: string
  is_featured?: boolean
}

export interface EventFormData {
  name: string
  college: string
  date: string
  venue: string
  description: string
  image_url?: string
  event_type: string
  website?: string
  contact_email?: string
  contact_phone?: string
}

