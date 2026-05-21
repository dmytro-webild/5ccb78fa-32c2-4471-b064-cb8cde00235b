"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextAbout from '@/components/sections/about/TextAbout';
import { Award, Shield, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="large"
        background="fluid"
        cardStyle="inset"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="LMP Ads"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "gradient-bars",
      }}
      title="Digital Solutions That Drive Real Results"
      description="From video production and web design to custom apps and strategic marketing—LMP Ads delivers everything your business needs to grow online. We turn ideas into impact."
      tag="Trusted Digital Agency"
      buttons={[
        {
          text: "Start Your Free Consultation",
          href: "#contact",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/devices-water-cooler-empty-office_482257-119279.jpg",
          imageAlt: "Digital marketing agency analytics",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/mockup-copy-space-blank-screen-concept_53876-123753.jpg",
          imageAlt: "Digital marketing results",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/digital-laptop-working-global-business-concept_53876-23307.jpg",
          imageAlt: "Digital Laptop Working Global Business Concept",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/code-testing-quality-assurance-done-computers-startup-workplace_482257-118649.jpg",
          imageAlt: "Code testing and quality assurance done on computers in startup workplace",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/business-team-working-busy-workplace-concept_53876-137638.jpg",
          imageAlt: "Business Team Working Busy Workplace Concept",
        },
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Rated 5 stars by 200+ clients"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Empowering SMBs with Full-Service Digital Marketing"
      buttons={[
        {
          text: "Learn About Our Mission",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        {
          title: "Video Production",
          description: "High-impact video content that engages your audience and elevates your brand.",
          imageSrc: "http://img.b2bpic.net/free-photo/user-watching-videos-highlighting-interactive-engagement-connected-digital-environment-african_482257-136349.jpg",
        },
        {
          title: "Custom Web Design",
          description: "Responsive, conversion-optimized websites that look beautiful and perform at scale.",
          imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169856.jpg",
        },
        {
          title: "App Development",
          description: "Tailored mobile and web apps built to streamline your business operations and reach more users.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-hands-holding-smartphone_23-2150671596.jpg",
        },
        {
          title: "Marketing Analytics",
          description: "Data-driven insights to maximize your advertising spend and track real growth.",
          imageSrc: "http://img.b2bpic.net/free-photo/cad-software-used-making-home-floor-plans-virtual-furniture_482257-125022.jpg",
        },
        {
          title: "Creative Strategy",
          description: "Strategic planning to align your digital presence with your core business goals.",
          imageSrc: "http://img.b2bpic.net/free-photo/professional-camera-tripod_1268-20718.jpg",
        },
      ]}
      title="Comprehensive Digital Services"
      description="Integrated solutions designed to scale your business and boost your online presence."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "150+",
          title: "Successful Projects",
          description: "Delivered for global clients.",
          icon: Award,
        },
        {
          id: "m2",
          value: "200%",
          title: "Avg Growth",
          description: "Boosted client ROI through targeted ads.",
          icon: Zap,
        },
        {
          id: "m3",
          value: "24/7",
          title: "Expert Support",
          description: "Dedicated assistance for your scaling business.",
          icon: Shield,
        },
      ]}
      title="Proven Results"
      description="We are driven by hard data and tangible growth."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          handle: "@sarah_j",
          testimonial: "LMP Ads transformed our digital presence. Incredible team!",
          imageSrc: "http://img.b2bpic.net/free-photo/middle-age-latin-businesswoman-smiling-happy-standing-with-arms-crossed-gesture-city_839833-17431.jpg",
        },
        {
          id: "2",
          name: "Michael Chen",
          handle: "@mike_chen",
          testimonial: "Professional, transparent, and results-oriented. Highly recommend.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-smiling-middle-aged-business-leader_1262-4845.jpg",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          handle: "@emily_r",
          testimonial: "Their video content helped us gain massive brand visibility.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-business-man-posing-with-crossed-arms_23-2149206526.jpg",
        },
        {
          id: "4",
          name: "David Kim",
          handle: "@dkim_dev",
          testimonial: "Speedy app development and great UX design.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-smiling-woman-cafe-drinking-coffee-date-looking-camera_197531-22708.jpg",
        },
        {
          id: "5",
          name: "Linda Wu",
          handle: "@linda_w",
          testimonial: "The best agency experience we've had in years.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-friendly-mature-business-man-wearing-jacket-glasses-posing-indoors-looking-camera_74855-9997.jpg",
        },
      ]}
      title="What Our Clients Say"
      description="Building lasting partnerships and measurable results."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "InnovateTech",
        "GrowthPartners",
        "GlobalSoft",
        "FutureReady",
        "BrandScale",
        "NetWorks",
        "CloudSolutions",
      ]}
      title="Trusted By Industry Leaders"
      description="We partner with brands that value excellence and innovation."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "How do you measure success?",
          content: "We use detailed analytics and KPI reporting focused on actual business growth.",
        },
        {
          id: "f2",
          title: "Do you offer custom app dev?",
          content: "Yes, we specialize in high-performance web and mobile app development.",
        },
        {
          id: "f3",
          title: "How do I get started?",
          content: "Simply book a free consultation through our website form, and we'll handle the rest.",
        },
      ]}
      title="Common Questions"
      description="Find quick answers about our processes and services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="Get in touch"
      title="Ready to Grow Your Business?"
      description="Start your journey with LMP Ads today. Our team is ready to deliver impact."
      imageSrc="http://img.b2bpic.net/free-photo/computer-dark-room-with-graphs-screen_169016-57447.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Services",
              href: "#features",
            },
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="LMP Ads"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
