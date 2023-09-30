// import CtaContact from '@/components/cta-contact';
import HeroContact from '@/components/hero-contact';

export default function Contact() {
  return (
    <>
      <HeroContact />
      <section className="relative bg-light pt-5 p-8 sm:p-12">
        {/* <div className="max-w-6xl mx-auto px-4 sm:px-6"> */}
        <div className="pt-12 pb-12 sm:pt-40 sm:pb-20">
          {/* Page header */}
          <div className="max-w-6xl mx-auto text-center py-14  md:py-16">
            <h1
              className="h1 text-5xl sm:text-5xl text-slate-400 font-extralight"
              data-aos="fade-up"
            >
              Get in touch. We’d love to hear from you.
            </h1>
          </div>
          <img
            src="/images/logo.png"
            alt="logo"
            className="mx-auto logo-pulse pb-10 w-54 h-32"
          />

          {/* Contact form */}
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="mx-auto max-w-6xl p-8 sm:p-12 mt-9 shadow-sm text-center sm:text-left bg-white">
              <form
                action="https://formspree.io/f/mbjvjwlj"
                method="POST"
                className="max-w-xl mx-auto"
              >
                <div className="flex flex-wrap -mx-3 mb-4 ">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-300 text-sm font-medium mb-1 "
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="form-input w-full text-gray-500"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-300 text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="form-input w-full text-gray-500"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-300 text-sm font-medium mb-1"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="form-textarea w-full text-gray-500"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button className="btn text-white bg-sky-700 hover:bg-purple-700 w-full">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="text-center sm:py-12 py-2">
            <h1
              className="h1 text-3xl sm:text-4xl text-slate-400 font-extralight  "
              data-aos="fade-up"
            >
              our location
            </h1>
          </div>
          <div className="mx-auto max-w-6xl p-8 sm:p-12  bg-white shadow-sm text-center sm:text-left">
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.580302783334!2d0.14739357651814303!3d52.19650116013018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8707c02659cc9%3A0xcfa902adb03ee4c2!2s16%20Cyprus%20Rd%2C%20Cambridge%20CB1%203QA!5e0!3m2!1sen!2suk!4v1695946075096!5m2!1sen!2suk"
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <CtaContact /> */}
    </>
  );
}
