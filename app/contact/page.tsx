import NavigationBar from "@/components/Navigation";
import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-zinc-950 text-white flex flex-col justify-between">
      <NavigationBar />
      <section className="contact-wrapper my-auto" aria-label="Contact form wrapper section">
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
