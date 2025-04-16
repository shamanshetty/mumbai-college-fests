import RegisterForm from "@/components/register-form"

export const metadata = {
  title: "Register Your Fest - MumbaiCollegeFest",
  description: "Register your college fest and showcase it to thousands of students across Mumbai.",
}

export default function RegisterPage() {
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Register Your College Fest</h1>
          <p className="text-muted-foreground">
            Fill out the form below to register your college fest and showcase it to thousands of students across
            Mumbai.
          </p>
        </div>

        <RegisterForm />
      </div>
    </div>
  )
}

