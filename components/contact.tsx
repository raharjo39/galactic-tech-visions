import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with our AI and infrastructure solutions? Get in touch with our team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Email</h4>
                    <p className="text-muted-foreground">sales@gip.co.id</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Phone</h4>
                    <p className="text-muted-foreground">+62 821-2685-1122</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Office</h4>
                    <p className="text-muted-foreground">
                      Jalan Buah Batu 161
                      <br />
                      Bandung - Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-lg overflow-hidden h-[300px] shadow-md mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7988421839365!2d107.62381237462566!3d-6.912386093088282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7c381e3c323%3A0x5f5160f6c9796e4b!2sJl.%20Buah%20Batu%20No.161%2C%20Turangga%2C%20Kec.%20Lengkong%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040264!5e0!3m2!1sen!2sid!4v1713695961!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GIP Office Location"
              aria-label="Google Maps showing GIP office location at Jalan Buah Batu 161, Bandung - Indonesia"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
