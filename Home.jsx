
import React, { useState } from "react";
import "./Home.css";

const eventData = {
  "Coding Challenge": {
    category: "Technical Event",
    description: "Test your programming skills by solving coding problems and logical challenges.",
    time: "10:00 AM - 11:00 AM",
    venue: "Computer Lab",
    duration: "60 minutes",
    rules: ["Individual participation", "Choose a supported programming language", "Solve the maximum number of problems"]
  },
  "Web Development": {
    category: "Technical Event",
    description: "Design and build a creative website using your web development knowledge.",
    time: "11:00 AM - 12:30 PM",
    venue: "Computer Lab",
    duration: "90 minutes",
    rules: ["Create an original design", "HTML, CSS and JavaScript are allowed", "Submit your work before the deadline"]
  },
  "AI Quiz": {
    category: "Technical Event",
    description: "Challenge your knowledge of artificial intelligence, technology and computing.",
    time: "10:00 AM - 10:45 AM",
    venue: "Seminar Hall",
    duration: "45 minutes",
    rules: ["Individual participation", "Answer all questions within the time limit", "Follow the event coordinator's instructions"]
  },
  "Debugging Challenge": {
    category: "Technical Event",
    description: "Find errors in code, fix bugs and demonstrate your problem-solving skills.",
    time: "1:00 PM - 2:00 PM",
    venue: "Computer Lab",
    duration: "60 minutes",
    rules: ["Individual participation", "Correctness and speed both matter", "Follow the given problem constraints"]
  },
  "General Quiz": {
    category: "Non-Technical Event",
    description: "Show your knowledge of general awareness, science, culture and current affairs.",
    time: "10:00 AM - 10:45 AM",
    venue: "Seminar Hall",
    duration: "45 minutes",
    rules: ["Participate individually or in teams as announced", "No external assistance", "The quiz master's decision is final"]
  },
  "Debate": {
    category: "Non-Technical Event",
    description: "Share your opinions, develop arguments and demonstrate your communication skills.",
    time: "11:00 AM - 12:00 PM",
    venue: "Auditorium",
    duration: "60 minutes",
    rules: ["Respect different opinions", "Stay within the allotted time", "Use appropriate language"]
  },
  "Poster Design": {
    category: "Non-Technical Event",
    description: "Turn your imagination into an attractive poster that communicates a powerful idea.",
    time: "1:00 PM - 2:00 PM",
    venue: "Drawing Hall",
    duration: "60 minutes",
    rules: ["Submit original work", "Follow the announced theme", "Judging considers creativity and presentation"]
  },
  "Treasure Hunt": {
    category: "Non-Technical Event",
    description: "Work together to solve clues and discover the hidden treasure around campus.",
    time: "2:00 PM - 3:00 PM",
    venue: "College Campus",
    duration: "60 minutes",
    rules: ["Stay with your team", "Follow campus safety instructions", "Do not enter restricted areas"]
  },
  
};

const categories = [
  {
    title: "Technical Events",
    icon: "💻",
    color: "blue",
    description: "Code, build and solve real-world problems. Challenge your technical skills.",
    events: ["Coding Challenge", "Web Development", "AI Quiz", "Debugging Challenge"]
  },
  {
    title: "Non-Technical Events",
    icon: "🎨",
    color: "green",
    description: "Show your creativity, communication and leadership through exciting activities.",
    events: ["General Quiz", "Debate", "Poster Design", "Treasure Hunt"]
  },
  
  ];
function Home() {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [formSent, setFormSent] = useState(false);

  const openEvent = (name) => {
    setSelectedEvent(name);
    window.location.hash = "event-details-page";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goHome = () => {
    setSelectedEvent("");
    window.location.hash = "home";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const event = eventData[selectedEvent];

  return (
    <div className="home-page">
      <nav className="navbar">
        <a className="logo" href="#home" onClick={goHome}>
          Campus<span>Festa</span>
          <small>2026</small>
        </a>

        <div className="nav-links">
          <a href="#home" onClick={goHome}>Home</a>
          <a href="#about" onClick={goHome}>About Event</a>
          <a href="#details" onClick={goHome}>Event Details</a>
          <a href="#categories" onClick={goHome}>Categories</a>
        </div>

        <a className="nav-register" href="#registration" onClick={goHome}>
          Register Now
        </a>
      </nav>

      {selectedEvent ? (
        <main className="event-page" id="event-details-page">
          <button className="back-btn" onClick={goHome}>← Back to CampusFesta</button>

          <div className="event-detail-banner">
            <p className="eyebrow">{event.category}</p>
            <h1>{selectedEvent}</h1>
            <p>{event.description}</p>
          </div>

          <div className="event-info-grid">
            <article className="detail-card">
              <span>📅</span><h3>Date</h3>
              <p>To be announced</p>
            </article>
            <article className="detail-card">
              <span>⏰</span><h3>Timing</h3>
              <p>{event.time}</p>
            </article>
            <article className="detail-card">
              <span>📍</span><h3>Venue</h3>
              <p>{event.venue}</p>
            </article>
            <article className="detail-card">
              <span>⌛</span><h3>Duration</h3>
              <p>{event.duration}</p>
            </article>
          </div>

          <section className="event-rules">
            <h2>Competition Details & Rules</h2>
            <p>{event.description}</p>
            <ul>
              {event.rules.map((rule) => <li key={rule}>{rule}</li>)}
            </ul>
            <a
              className="primary-btn"
              href="#registration"
              onClick={() => {
                document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Register for this Event →
            </a>
          </section>
        </main>
      ) : (
        <>
          <header className="hero" id="home">
            <div className="hero-content">
              <p className="eyebrow">LEARN • CREATE • ACHIEVE</p>
              <p className="welcome-script">Welcome to</p>
              <h1 className="campus-title">
                CAMPUS
                <span>FESTA <i>2026</i></span>
              </h1>
              <h2>A Festival of Ideas, Innovation & Inspiration</h2>
              <p className="hero-description">
                Explore exciting competitions, showcase your talent,
                meet new people and make unforgettable campus memories.
              </p>
              <a className="primary-btn" href="#categories">
                Explore Events ↓
              </a>
            </div>

            <div className="robot-container">
              <img
                src="/robot.png"
                alt="Friendly CampusFesta robot"
                className="robot-image"
              />
              <div className="robot-caption">
                <strong>Hi! 👋</strong>
                <p>Ready to explore amazing events?</p>
              </div>
            </div>
          </header>

          <section className="about section" id="about">
            <div className="about-image">
              <img src="/college.jpg" alt="College campus" />
            </div>
            <div className="about-content">
              <p className="eyebrow">GET TO KNOW US</p>
              <h2>About <span>CampusFesta</span></h2>
              <p>
                CampusFesta 2026 is a student festival created to celebrate
                creativity, technical knowledge, communication and teamwork.
              </p>
              <p>
                From coding competitions to fun campus activities, find
                something you love, challenge yourself and create memories.
              </p>
              <div className="about-points">
                <div><strong>01</strong><span>Learn new skills</span></div>
                <div><strong>02</strong><span>Show your talent</span></div>
                <div><strong>03</strong><span>Make memories</span></div>
              </div>
            </div>
          </section>

          <section className="section details-section" id="details">
            <div className="section-heading">
              <p className="eyebrow">PLAN YOUR VISIT</p>
              <h2>Event <span>Details</span></h2>
              <p>More information will be announced by the organizers.</p>
            </div>
            <div className="details-grid">
              <article className="detail-card"><span>📅</span><h3>Date</h3><p>To be announced</p></article>
              <article className="detail-card"><span>⏰</span><h3>Time</h3><p>To be announced</p></article>
              <article className="detail-card"><span>📍</span><h3>Venue</h3><p>College Campus</p></article>
              <article className="detail-card"><span>🎓</span><h3>Participants</h3><p>College Students</p></article>
            </div>
          </section>

          <section className="section categories-section" id="categories">
            <div className="section-heading">
              <p className="eyebrow">DISCOVER • PARTICIPATE • WIN</p>
              <h2>What's in <span>CampusFesta?</span></h2>
              <p>Explore a wide range of technical and non-technical events.</p>
            </div>

            <div className="category-grid">
              {categories.map((category) => (
                <article className={`category-card ${category.color}`} key={category.title}>
                  <div className="category-symbol">{category.icon}</div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <ul>
                    {category.events.map((name) => (
                      <li key={name}>
                        <button className="event-link" onClick={() => openEvent(name)}>
                          <span>✓</span>{name} ↗
                        </button>
                      </li>
                    ))}
                  </ul>
                  <button className="explore-btn" onClick={() => openEvent(category.events[0])}>
                    Explore Events →
                  </button>
                </article>
              ))}
            </div>
          </section>
        </>
      )}

      <section className="section registration-section" id="registration">
        <div className="section-heading">
          <p className="eyebrow">YOUR CAMPUSFEST JOURNEY STARTS HERE</p>
          <h2>Event <span>Registration</span></h2>
          <p>Fill in your details to register your interest.</p>
        </div>

        {formSent ? (
          <div className="registration-success">
            <h3>Thank you for registering! 🎉</h3>
            <p>This demo form has been submitted on this page.</p>
          </div>
        ) : (
          <form
            className="registration-form"
            onSubmit={(e) => {
              e.preventDefault();
              setFormSent(true);
            }}
          >
            <label>Full Name<input name="name" placeholder="Enter your full name" required /></label>
            <label>Email Address<input name="email" type="email" placeholder="Enter your email" required /></label>
            <label>Department<input name="department" placeholder="Enter your department" required /></label>
            <label>Year of Study
              <select name="year" defaultValue="" required>
                <option value="" disabled>Select your year</option>
                <option>1st Year</option><option>2nd Year</option>
                <option>3rd Year</option><option>4th Year</option>
              </select>
            </label>
            <label>Choose Event
              <select
                name="event"
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
                required
              >
                <option value="" disabled>Select a competition</option>
                {Object.keys(eventData).map((name) => <option key={name}>{name}</option>)}
              </select>
            </label>
            <button className="primary-btn submit-btn" type="submit">Submit Registration →</button>
          </form>
        )}
      </section>

      <footer className="footer">
        <a className="logo footer-logo" href="#home" onClick={goHome}>
          Campus<span>Festa</span><small>2026</small>
        </a>
        <p>Learn. Create. Achieve.</p>
        <small>© 2026 CampusFesta. College event project.</small>
      </footer>
    </div>
  );
}

export default Home;
