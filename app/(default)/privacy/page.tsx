'use client';

import Link from 'next/link';
import { Typography, Card, Button } from '@material-tailwind/react';

export default function Privacy() {
  return (
    <div className="max-w-6xl mx-auto text-center py-16 sm:py-30">
      <h1
        className="h1 my-28 text-4xl sm:text-6xl text-slate-400 font-extralight"
        data-aos="fade-up"
      >
        Love Ayurveda Privacy Policy
      </h1>

      <Card className="mx-auto max-w-6xl p-8 sm:p-20 shadow-sm text-center sm:text-left">
        {/* Page header */}

        {/* Privacy Policy */}
        <div className="max-w-3xl mx-auto text-center ">
          <Typography
            className="text-lg sm:text-lg text-slate-500"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            1. <strong>Introduction</strong>
            <br /> <br />
            Welcome to Love Ayurveda TV. We respect your privacy and are
            committed to ensuring that your personal information is protected.
            This privacy policy outlines our stance on privacy and how it
            applies to our website.
            <br /> <br />
            2. <strong>Collection of Personal Data</strong>
            <br /> <br />
            When you fill out our contact form, we collect the personal data you
            provide, such as your name, email, and company name. This data is
            used solely for the purpose of responding to your inquiries and is
            not shared with third parties.
            <br /> <br />
            3. <strong>Third-Party Links</strong>
            <br /> <br />
            Our website may contain links to third-party websites. Please note
            that we are not responsible for the privacy practices or content of
            those third-party websites. We encourage our users to be aware when
            they leave our site and to read the privacy statements of each
            website they visit.
            <br /> <br />
            4. <strong>Changes to This Privacy Policy</strong>
            <br /> <br />
            We may update our privacy policy from time to time. Any changes we
            make will be posted on this page. We recommend checking this page
            periodically to stay informed about our privacy practices.
            <br /> <br />
            5. <strong>Contact</strong>
            <br /> <br />
            If you have any questions or concerns regarding this privacy policy,
            please contact us.
          </Typography>
        </div>
      </Card>
    </div>
  );
}
