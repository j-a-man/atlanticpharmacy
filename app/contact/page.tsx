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
                1706B Atlantic Ave
                <br />
                Brooklyn, NY 11213
              </p>
              <Button variant="link" className="p-0 h-auto text-primary" asChild>
                <a
                  href="https://maps.app.goo.gl/BCVCBWKgB9ugqqYx7"
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
              <p className="text-sm text-muted-foreground">(718) 484-2260</p>
              <Button variant="link" className="p-0 h-auto text-primary" asChild>
                <a href="tel:+17184842260">Call Us →</a>
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
                <a href="mailto:atlanticrx@gmail.com">Send Email →</a>
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
                Mon-Fri: 9:30AM - 6:30PM
                <br />
                Sat: 10:00AM - 4:30PM
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6051.707302602746!2d-73.93665442326636!3d40.677193439744684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25c78449142e1%3A0x2527109bbda974e9!2s1706B%20Atlantic%20Ave%2C%20Brooklyn%2C%20NY%20112131206!5e0!3m2!1sen!2sus!4v1762570096523!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-16 text-center space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Thanks for Supporting Us</h2>
          <p className="text-muted-foreground">
            It means a lot when you refer and review!
          </p>
        </div>
      </div>
    </main>
  )
}
