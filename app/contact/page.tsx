import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Get in touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit us in Brooklyn or reach out. We're here to help with all your pharmacy needs.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="border-border hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6 space-y-3">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Location</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                123 Atlantic Avenue
                <br />
                Brooklyn, NY 11201
              </p>
              <Button variant="link" className="p-0 h-auto text-primary" asChild>
                <a
                  href="https://maps.google.com/?q=123+Atlantic+Avenue+Brooklyn+NY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions →
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6 space-y-3">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Phone</h3>
              <p className="text-sm text-muted-foreground">(718) 555-1234</p>
              <Button variant="link" className="p-0 h-auto text-primary" asChild>
                <a href="tel:+17185551234">Call Us →</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6 space-y-3">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Email</h3>
              <p className="text-sm text-muted-foreground">atlanticrx@gmail.com</p>
              <Button variant="link" className="p-0 h-auto text-primary" asChild>
                <a href="mailto:info@atlanticpharmacy.com">Send Email →</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6 space-y-3">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Hours</h3>
              <p className="text-sm text-muted-foreground">
                Mon-Sat: 9AM - 7PM
                <br />
                Sunday: Closed
              </p>
              <Button variant="link" className="p-0 h-auto text-primary" asChild>
                <Link href="/hours-services">View Hours →</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <Card className="border-border overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center space-y-2 p-8">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                <p className="text-muted-foreground">Map integration placeholder</p>
                <Button variant="outline" asChild>
                  <a
                    href="https://maps.google.com/?q=123+Atlantic+Avenue+Brooklyn+NY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-16 text-center space-y-4">
          <h2 className="text-2xl font-bold text-foreground">We speak your language</h2>
          <p className="text-muted-foreground">
            Our multilingual staff speaks English, Spanish, and Mandarin to better serve our diverse community.
          </p>
        </div>
      </div>
    </main>
  )
}
