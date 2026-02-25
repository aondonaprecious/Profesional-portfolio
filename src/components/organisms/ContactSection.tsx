/** @format */

// src/components/organisms/ContactSection.tsx
import React from "react";
import {
  FiUser,
  FiMail,
  FiMessageSquare,
  FiSend,
  FiHash,
} from "react-icons/fi";
import FormField from "../atoms/FormFields";
import ResumeCard from "../molecules/ResumeCard";
import Button from "../atoms/Button";

const ContactSection: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-6xl font-bold mb-4">
          Let's <span className="text-blue-600">Connect</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          Open for freelance opportunities and full-time roles. Let's build
          something exceptional together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* LEFT: Contact Form (Col 7) */}
        <form className="lg:col-span-7 space-y-8 bg-[--color-surface-dark] p-10 rounded-[40px] border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Name"
              icon={FiUser}
              placeholder="Aondona Precious"
            />
            <FormField
              label="Email"
              icon={FiMail}
              placeholder="precious@ptech.com"
            />
          </div>
          <FormField
            label="Subject"
            icon={FiHash}
            placeholder="Project Inquiry"
          />
          <FormField
            label="Message"
            icon={FiMessageSquare}
            textarea
            placeholder="Tell me about your project..."
          />
          <Button
            variant="primary"
            size="lg"
            className="w-full gap-3 py-5 text-lg"
          >
            Send Message <FiSend />
          </Button>
        </form>

        {/* RIGHT: Resume & Stats (Col 5) */}
        <aside className="lg:col-span-5 space-y-8">
          <ResumeCard />

          <div className="bg-blue-600/5 border border-blue-600/20 p-8 rounded-[32px] flex items-center gap-6">
            <div className="size-12 rounded-full bg-blue-600 flex items-center justify-center text-2xl">
              🌍
            </div>
            <div>
              <h5 className="font-bold">Based in Nigeria</h5>
              <p className="text-sm text-gray-400">
                Available for remote work worldwide.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ContactSection;
