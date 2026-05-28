import { motion, useMotionValue, useSpring } from "framer-motion"
import profile from "./assets/profile.jpeg"
import resume from "./assets/resume.png"

function App() {

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothMouseX = useSpring(mouseX, { damping: 20 })
  const smoothMouseY = useSpring(mouseY, { damping: 20 })

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX - 150)
    mouseY.set(e.clientY - 150)
  }

  return (

    <div
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[#f8f5f7] text-[#4b1f3a] relative overflow-x-hidden"
    >

      {/* Background Glow */}

      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-300 opacity-30 blur-3xl rounded-full"></div>

      <motion.div
        className="fixed top-0 left-0 w-[300px] h-[300px] bg-pink-300/30 rounded-full blur-3xl pointer-events-none z-0"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
        }}
      />

      <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-purple-300 opacity-30 blur-3xl rounded-full"></div>

      {/* Navbar */}

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6 sticky top-0 backdrop-blur-lg bg-white/30 z-50">

        <h1 className="text-3xl font-bold">
          My Portfolio
        </h1>

        <ul className="flex gap-10 text-base md:text-lg font-medium">

          <li>
            <a href="#home" className="hover:text-pink-500 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-pink-500 transition">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-pink-500 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-pink-500 transition">
              Contact
            </a>
          </li>

        </ul>

      </nav>

      {/* Hero Section */}

      <motion.section
        id="home"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center mt-20 mx-auto px-8 py-20 relative z-10 backdrop-blur-xl bg-white/50 rounded-[40px] shadow-2xl hover:shadow-[0_20px_80px_rgba(236,72,153,0.25)] transition-all duration-500 w-[90%] max-w-4xl border border-white/40"
      >

        <motion.img
          src={profile}
          alt="Dhvani"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="w-44 h-44 object-cover rounded-full border-4 border-white shadow-2xl mb-8"
        />

        <motion.h2
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="text-4xl md:text-7xl font-bold leading-tight"
        >
          Dhvani Joshi
        </motion.h2>

        <p className="mt-4 text-xl md:text-2xl text-pink-500 font-semibold">
          Full Stack Developer
        </p>

        <p className="mt-6 text-lg max-w-2xl text-gray-600">
          Computer Science student passionate about building
          modern, aesthetic and user-friendly web experiences.
        </p>

        <div className="mt-10 flex gap-5">

          <a
            href="#projects"
            className="bg-[#4b1f3a] text-white px-7 py-3 rounded-full hover:scale-110 active:scale-95 transition duration-300 shadow-lg"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-[#4b1f3a] px-7 py-3 rounded-full hover:bg-[#4b1f3a] hover:text-white hover:scale-110 active:scale-95 transition duration-300"
          >
            Contact Me
          </a>

        </div>

        <div className="flex gap-8 mt-8 text-lg font-medium">

          <a
            href="https://github.com/dhvani1505"
            target="_blank"
            className="hover:text-pink-500 hover:scale-110 transition duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/DhvaniJoshi/"
            target="_blank"
            className="hover:text-pink-500 hover:scale-110 transition duration-300"
          >
            LinkedIn
          </a>

        </div>

        <p className="mt-10 text-gray-500 animate-bounce">
          Scroll Down ↓
        </p>

      </motion.section>

      {/* Skills Section */}

      <section
        id="skills"
        className="mt-32 px-10 relative z-10"
      >

        <h2 className="text-4xl font-bold text-center mb-16">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">

          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "MySQL",
            "PHP",
            "C++",
            "Tailwind CSS",
          ].map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/60 backdrop-blur-lg rounded-3xl py-8 text-center shadow-lg hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
            >

              <h3 className="text-xl font-semibold">
                {skill}
              </h3>

            </motion.div>

          ))}

        </div>

      </section>

      {/* About Section */}

      <section
        id="about"
        className="mt-36 max-w-5xl mx-auto px-8 relative z-10"
      >

        <div className="backdrop-blur-lg bg-white/50 rounded-[35px] shadow-xl p-10">

          <h2 className="text-4xl font-bold mb-8 text-center">
            About Me
          </h2>

          <p className="text-lg leading-9 text-gray-700 text-center">
            I am a Computer Science Engineering student passionate about
            frontend development, creative UI design and building modern web
            experiences. I enjoy transforming ideas into aesthetic and
            functional websites while continuously learning new technologies.
          </p>

        </div>

      </section>

      {/* Projects Section */}

      <section
        id="projects"
        className="mt-36 px-8 relative z-10"
      >

        <h2 className="text-4xl font-bold text-center mb-16">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* Project 1 */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 backdrop-blur-lg rounded-[30px] p-8 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-300"
          >

            <img
              src={resume}
              alt="Resume Project"
              className="rounded-2xl mb-6 w-full h-56 object-cover"
            />

            <h3 className="text-2xl font-bold mb-4">
              Resume Builder Website
            </h3>

            <p className="text-gray-600 leading-7">
              A modern resume builder where users can create professional resumes
              with multiple layouts and download them easily.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">

              <span className="bg-pink-100 px-4 py-2 rounded-full text-sm">
                React
              </span>

              <span className="bg-pink-100 px-4 py-2 rounded-full text-sm">
                Tailwind
              </span>

              <span className="bg-pink-100 px-4 py-2 rounded-full text-sm">
                JavaScript
              </span>

            </div>

            <a
              href="https://github.com/dhvani1505/CollegeEventManagement"
              target="_blank"
              className="mt-8 inline-block bg-[#4b1f3a] text-white px-6 py-3 rounded-full hover:scale-105 transition"
            >
              View Project
            </a>

          </motion.div>

          {/* Project 2 */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/60 backdrop-blur-lg rounded-[30px] p-8 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-300"
          >

            <h3 className="text-2xl font-bold mb-4">
              Cloud File Storage System
            </h3>

            <p className="text-gray-600 leading-7">
              Developed a secure cloud-based file storage system with authentication,
              file upload and management features.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">

              <span className="bg-pink-100 px-4 py-2 rounded-full text-sm">
                PHP
              </span>

              <span className="bg-pink-100 px-4 py-2 rounded-full text-sm">
                MySQL
              </span>

              <span className="bg-pink-100 px-4 py-2 rounded-full text-sm">
                JavaScript
              </span>

            </div>

            <a
              href="https://github.com/dhvani1505/CollegeEventManagement"
              target="_blank"
              className="mt-8 inline-block bg-[#4b1f3a] text-white px-6 py-3 rounded-full hover:scale-105 transition"
            >
              View Project
            </a>

          </motion.div>

        </div>

      </section>

      {/* Contact Section */}

      <section
        id="contact"
        className="mt-36 max-w-4xl mx-auto px-8 relative z-10"
      >

        <div className="backdrop-blur-lg bg-white/50 rounded-[35px] shadow-xl p-10 text-center">

          <h2 className="text-4xl font-bold mb-8">
            Contact Me
          </h2>

          <p className="text-gray-600 text-lg">
            Let’s connect and build something amazing together ✨
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">

            <a
              href="mailto:23amtics143@gmail.com"
              className="bg-[#4b1f3a] text-white px-8 py-4 rounded-full hover:scale-105 transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/dhvani1505"
              target="_blank"
              className="border border-[#4b1f3a] px-8 py-4 rounded-full hover:bg-[#4b1f3a] hover:text-white transition"
            >
              GitHub
            </a>

          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="mt-36 py-10 text-center text-gray-500 relative z-10">

        <p>
          Designed & Developed by Dhvani Joshi ✨
        </p>

      </footer>

    </div>
  )
}

export default App