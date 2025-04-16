"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createEvent } from "@/lib/data"
import type { EventFormData } from "@/types/database"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Event name must be at least 3 characters.",
  }),
  college: z.string().min(3, {
    message: "College name must be at least 3 characters.",
  }),
  date: z.string().min(1, {
    message: "Event date is required.",
  }),
  venue: z.string().min(3, {
    message: "Venue must be at least 3 characters.",
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters.",
  }),
  event_type: z.string().min(1, {
    message: "Event type is required.",
  }),
  image_url: z
    .string()
    .url({
      message: "Please enter a valid URL for the image.",
    })
    .optional()
    .or(z.literal("")),
  website: z
    .string()
    .url({
      message: "Please enter a valid URL for the website.",
    })
    .optional()
    .or(z.literal("")),
  contact_email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  contact_phone: z
    .string()
    .min(10, {
      message: "Please enter a valid phone number.",
    })
    .optional()
    .or(z.literal("")),
})

export default function RegisterForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      college: "",
      date: "",
      venue: "",
      description: "",
      event_type: "",
      image_url: "",
      website: "",
      contact_email: "",
      contact_phone: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      const eventData: EventFormData = {
        ...values,
        image_url: values.image_url || "/placeholder.svg?height=400&width=800",
      }

      const result = await createEvent(eventData)

      if (result.success) {
        router.push(`/register/success?id=${result.id}`)
      } else {
        console.error("Failed to create event:", result.error)

        // Check if the error is about the missing table
        if (result.error && result.error.includes("events table does not exist")) {
          form.setError("root", {
            message: "The events table doesn't exist in your Supabase database yet. Please run the setup SQL script.",
          })
        } else {
          form.setError("root", {
            message: "Failed to register event. Please try again.",
          })
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      form.setError("root", {
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Name*</FormLabel>
                <FormControl>
                  <Input placeholder="Enter event name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="college"
            render={({ field }) => (
              <FormItem>
                <FormLabel>College Name*</FormLabel>
                <FormControl>
                  <Input placeholder="Enter college name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Date*</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="venue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Venue*</FormLabel>
                <FormControl>
                  <Input placeholder="Enter event venue" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="event_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Type*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Cultural">Cultural</SelectItem>
                  <SelectItem value="Technical">Technical</SelectItem>
                  <SelectItem value="Sports">Sports</SelectItem>
                  <SelectItem value="Literary">Literary</SelectItem>
                  <SelectItem value="Management">Management</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description*</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter event description" className="min-h-32" {...field} />
              </FormControl>
              <FormDescription>Provide details about your event, activities, prizes, etc.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Image URL</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/image.jpg" {...field} />
              </FormControl>
              <FormDescription>
                Provide a URL to an image for your event. Leave blank to use a default image.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input placeholder="https://yourevent.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contact_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Email*</FormLabel>
                <FormControl>
                  <Input placeholder="contact@yourevent.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="contact_phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Phone</FormLabel>
              <FormControl>
                <Input placeholder="Enter contact phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.formState.errors.root && (
          <div className="text-destructive text-sm font-medium">{form.formState.errors.root.message}</div>
        )}

        <Button
          type="submit"
          className="w-full festival-button bg-gradient-to-r from-festival-purple to-festival-pink text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Register Event"
          )}
        </Button>
      </form>
    </Form>
  )
}

