"use server"

import { revalidatePath } from "next/cache"
import { createEvent } from "@/lib/data"
import type { EventFormData } from "@/types/database"

export async function registerEvent(formData: EventFormData) {
  try {
    const result = await createEvent(formData)

    if (result.success) {
      revalidatePath("/events")
      return { success: true, id: result.id }
    } else {
      return { success: false, error: result.error }
    }
  } catch (error) {
    console.error("Error registering event:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

