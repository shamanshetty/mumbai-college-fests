"use client"

import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Filter } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface EventsFilterProps {
  eventTypes: string[]
  selectedType?: string
}

export default function EventsFilter({ eventTypes, selectedType }: EventsFilterProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleTypeClick = (type: string | null) => {
    const params = new URLSearchParams(window.location.search)

    if (type) {
      params.set("type", type)
    } else {
      params.delete("type")
    }

    router.push(`${pathname}?${params.toString()}`)
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Filter */}
      <div className="hidden md:block space-y-4">
        <div className="font-medium">Event Type</div>
        <div className="space-y-2">
          <Button
            variant={!selectedType ? "default" : "outline"}
            className="w-full justify-start"
            onClick={() => handleTypeClick(null)}
          >
            All Events
            {!selectedType && <Check className="ml-auto h-4 w-4" />}
          </Button>

          {eventTypes.map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              className="w-full justify-start"
              onClick={() => handleTypeClick(type)}
            >
              {type}
              {selectedType === type && <Check className="ml-auto h-4 w-4" />}
            </Button>
          ))}
        </div>
      </div>

      {/* Mobile Filter */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <Filter className="mr-2 h-4 w-4" />
              Filter Events
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Filter Events</SheetTitle>
              <SheetDescription>Filter events by type to find what you're looking for.</SheetDescription>
            </SheetHeader>
            <div className="mt-6 space-y-4">
              <div className="font-medium">Event Type</div>
              <div className="space-y-2">
                <Button
                  variant={!selectedType ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => handleTypeClick(null)}
                >
                  All Events
                  {!selectedType && <Check className="ml-auto h-4 w-4" />}
                </Button>

                {eventTypes.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => handleTypeClick(type)}
                  >
                    {type}
                    {selectedType === type && <Check className="ml-auto h-4 w-4" />}
                  </Button>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}

