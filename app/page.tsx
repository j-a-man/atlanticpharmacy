import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, Phone, Shield, Heart, Pill } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Shield className="h-4 w-4" />
              Trusted Since 2019
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl mx-auto leading-tight text-balance">
              Your Partner in <span className="text-primary">
              Health & Wellness
              </span>
            </h1>
            

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Atlantic Pharmacy provides personalized care and professional pharmaceutical services throughout Brooklyn
              and all 5 boroughs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="rounded-full gap-2 text-base px-8" asChild>
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base px-8 bg-transparent" asChild>
                <Link href="/hours-services">Our Services</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                Available 6 days a week
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                Fast delivery to all boroughs
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                Multilingual staff
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How we help you</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional pharmacy services with a personal touch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                title: "Convenient Location",
                description: "Located on Atlantic Avenue, in Brooklyn, with delivery available to all 5 boroughs of NYC",
              },
              {
                icon: Clock,
                title: "Extended Hours",
                description: "Open 6 days a week Monday through Saturday with flexible hours for your convenience",
              },
              {
                icon: Heart,
                title: "Personal Care",
                description: "Multilingual staff speaking English, Spanish, and Mandarin to serve you better",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-foreground text-sm font-medium">
                <Pill className="h-4 w-4" />
                Additional Services
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">More than just prescriptions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We offer a range of convenient services to meet your everyday needs, from notary services to lottery
                tickets.
              </p>
              <Button size="lg" variant="outline" className="rounded-full gap-2 bg-transparent" asChild>
                <Link href="/hours-services">
                  View All Services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Notary Public", desc: "Professional notary services" },
                { title: "OmniCards", desc: "Recharge your OmniCards and MetroCards here" },
                { title: "Fax & Print", desc: "Starting at $1 per page" },
                { title: "Lottery", desc: "Lottery and scratch-offs" },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md"
                >
                  <CardContent className="p-6 space-y-2">
                    <h4 className="font-semibold text-foreground">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to experience better pharmacy care?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Visit us today or give us a call. Our fast and friendly staff is here to help with all your pharmaceutical needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full gap-2 text-base px-8 bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link href="tel:+17184842260">
                <Phone className="h-5 w-5" />
                (718) 484-2260
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-base px-8 border-white/20 text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/contact">Visit Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
