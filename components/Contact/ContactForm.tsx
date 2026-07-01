import Icon from "@/components/Icon";

const projectTypes = [
  "Web Development",
  "Mobile Application",
  "Enterprise Software",
  "UI/UX Design",
  "AI/ML Integration",
];

export default function ContactForm() {
  return (
    <div className="lg:col-span-7 bg-surface-container border border-outline-variant/20 p-8 md:p-12 rounded-xl relative overflow-hidden gradient-border">
      {/* Decorative pixel pattern — top-right corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-10 text-primary pointer-events-none overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <form className="space-y-stack-md relative z-10">
        {/* Name + Email row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
          <FormField id="fullName" label="Full Name" type="text" placeholder="John Doe" />
          <FormField id="email" label="Email Address" type="email" placeholder="john@example.com" />
        </div>

        {/* Project type select */}
        <div className="group space-y-2">
          <label
            htmlFor="projectType"
            className="block text-label-md font-label-md text-on-surface-variant group-focus-within:text-primary transition-colors"
          >
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            className="w-full bg-background border border-outline-variant/40 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-on-surface appearance-none"
          >
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Message textarea */}
        <div className="group space-y-2">
          <label
            htmlFor="message"
            className="block text-label-md font-label-md text-on-surface-variant group-focus-within:text-primary transition-colors"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Tell us about your project goals, timeline, and any specific requirements..."
            className="w-full bg-background border border-outline-variant/40 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30 text-on-surface resize-none"
          />
        </div>

        {/* Submit — gradient button matching the original */}
        <button
          type="submit"
          className="w-full md:w-auto bg-gradient-to-r from-primary-container to-tertiary-container text-on-primary-container px-10 py-4 rounded-xl font-headline-sm text-headline-sm hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
        >
          Send Message
          <Icon name="send" />
        </button>
      </form>
    </div>
  );
}

/* Small helper so each text field stays DRY */
function FormField({
  id,
  label,
  type,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="group space-y-2">
      <label
        htmlFor={id}
        className="block text-label-md font-label-md text-on-surface-variant group-focus-within:text-primary transition-colors"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="w-full bg-background border border-outline-variant/40 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30 text-on-surface"
      />
    </div>
  );
}