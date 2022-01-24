const About = () => {
  return (
    <div className="rounded-2xl overflow-hidden">
      <div
        className="hero"
        style={{ backgroundImage: "url(https://hroot.netlify.app/ppp.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              This web app was created using React.js ,Tailwind ,Daisy UI,
              Framer-Motion and Other Tools
              <br />
              Hope You Enjoy This Project And Hire Me 🙂 ASAP!
            </p>
            <a
              href="https://hroot.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-primary">My Portfolio</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
