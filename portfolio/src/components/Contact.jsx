import { useForm, ValidationError } from '@formspree/react';


export default function ContactForm() {
  // The useForm hook handles form submission.
  // Replace "YOUR_FORM_ID" with the ID you copied from Formspree.
  // In Contact.jsx
const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_ID);

  if (state.succeeded) {
    return (
      <div className="text-center">
        <h2 className="text-2xl text-green-400 font-bold">Thanks for your message!</h2>
        <p className="text-gray-300">I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <section id="contact" className="min-h-screen bg-black text-white py-20 px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-lg">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">Contact Me</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-red-400 mt-1"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="text-red-400 mt-1"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:bg-gray-500"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}