import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "Registration Successful - MumbaiCollegeFest",
  description: "Your college fest has been successfully registered.",
}

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { id?: string }
}) {
  return (
    <div className="container py-20">
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-2">Registration Successful!</h1>
        <p className="text-muted-foreground mb-6">
          Your college fest has been successfully registered on MumbaiCollegeFest. It will be reviewed and published
          shortly.
        </p>

        {searchParams.id && (
          <p className="text-sm mb-6">
            Event ID: <span className="font-mono bg-muted px-2 py-1 rounded">{searchParams.id}</span>
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline">
            <Link href="/events">Browse Events</Link>
          </Button>
          <Button asChild className="festival-button bg-gradient-to-r from-festival-purple to-festival-pink text-white">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

