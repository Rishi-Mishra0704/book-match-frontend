export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-700  to-gray-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 my-4 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2">
        {/* Project Overview Card */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-700">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700">
            Book Matcher is an innovative web application designed to provide
            personalized book recommendations based on individual personalities.
            Using advanced algorithms, it analyzes user responses to carefully
            crafted questions and suggests literature genres and specific books
            tailored to each user's unique preferences.
          </p>
        </div>

        {/* Tech Stack Card */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-700">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-700">
            Book Matcher leverages a robust and modern tech stack to deliver a
            seamless and responsive user experience.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>
              <strong>Django:</strong> A high-level Python web framework.
            </li>
            <li>
              <strong>PostgreSQL:</strong> A powerful relational database
              system.
            </li>
            <li>
              <strong>TypeScript:</strong> Enhances the frontend with static
              typing.
            </li>
            <li>
              <strong>Next.js:</strong> A React framework for server-side
              rendering.
            </li>
            <li>
              <strong>Tailwind CSS:</strong> A utility-first CSS framework for
              styling.
            </li>
          </ul>
        </div>

        {/* Data Passing Card */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4 text-gray-700">
            Data Passing
          </h2>
          <p className="text-lg text-gray-700">
            Book Matcher seamlessly handles the flow of information between the
            frontend and backend components to ensure a smooth user experience.
            This process, known as data passing, involves the following key
            steps:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>
              <strong>Frontend (Next.js and TypeScript):</strong>
              <p className="text-gray-700">
                The frontend, built using Next.js and TypeScript, plays a
                crucial role in collecting user responses and initiating the
                personality matching process. Here's how the data passing occurs
                on the frontend:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  <strong>User Interaction:</strong> Users provide input through
                  a user-friendly interface, often in the form of answers to
                  questions or selections.
                </li>
                <li>
                  <strong>Form Submission:</strong> When the user submits the
                  form, the input data is collected and serialized into a
                  structured format.
                </li>
                <li>
                  <strong>TypeScript for Type Safety:</strong> TypeScript is
                  utilized to enforce type safety during the serialization
                  process, reducing the risk of runtime errors.
                </li>
                <li>
                  <strong>HTTP Request to Backend:</strong> An HTTP request,
                  mainly a POST request, is sent to the matching endpoint on
                  the Django backend, carrying the serialized user input.
                </li>
              </ul>
            </li>
            <li>
              <strong>Backend (Django):</strong>
              <p className="text-gray-700">
                On the backend, powered by the Django web framework, the
                received data undergoes processing, algorithmic analysis, and
                interaction with the PostgreSQL database. Here's a detailed
                breakdown of the backend data passing:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  <strong>Receiving the Request:</strong> Django receives the
                  incoming HTTP request from the frontend, containing the
                  serialized user input.
                </li>
                <li>
                  <strong>Data Processing:</strong> The backend processes the
                  received data, extracting user responses and relevant
                  information.
                </li>
                <li>
                  <strong>Algorithmic Analysis:</strong> Advanced algorithms are
                  applied to analyze the user's preferences based on the
                  provided data.
                </li>
                <li>
                  <strong>Database Interaction:</strong> Depending on
                  the matching algorithm, the backend interacts with the
                  PostgreSQL database to retrieve additional data relevant to
                  the user's personality or preferences.
                </li>
                <li>
                  <strong>Matching Result Generation:</strong> Using the
                  processed information and algorithms, the backend generates
                  matching results, such as recommended book genres or specific
                  book titles.
                </li>
                <li>
                  <strong>HTTP Response to Frontend:</strong> The backend sends
                  an HTTP response in the form of serialized data
                  (JSON), back to the frontend, completing the data passing
                  cycle.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
