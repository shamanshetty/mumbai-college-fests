"use client"

import type React from "react"

import { useRouter, usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"

interface EventsSearchProps {
  initialQuery?: string
}

export default function EventsSearch({ initialQuery = "" }: EventsSearchProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [query, setQuery] = useState(initialQuery)

  useEffect(() => {
    setQuery(initialQuery)
  }, [initialQuery])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams(window.location.search)

    if (query) {
      params.set("query", query)
    } else {
      params.delete("query")
    }

    router.push(`${pathname}?${params.toString()}`)
  }

  const clearSearch = () => {
    setQuery("")

    const params = new URLSearchParams(window.location.search)
    params.delete("query")

    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <div className="relative flex-grow">
        <Input
          type="text"
          placeholder="Search events, colleges..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pr-10"
        />
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </button>
        )}
      </div>
      <Button type="submit">
        <Search className="h-4 w-4 mr-2" />
        Search
      </Button>
    </form>
  )
}

