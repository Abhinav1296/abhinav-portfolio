import { Link } from "react-router-dom";
import { useEffect } from "react";
import "/src/pages/AllCertificates.css";

const AllCertificates = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sorted Data: Reverse Chronological Order (Newest -> Oldest)
  const certificates = [
    {
      id: 1,
      title: "Conflict Management",
      issuer: "Coursera",
      date: "Feb 02, 2026",
      type: "Career Certificate",
      url: "https://coursera.org/share/b4686dbae7891eacac41ea8e2e970018",
    },
    {
      id: 2,
      title: "First Principles of Computer Vision",
      issuer: "Coursera",
      date: "Jan 20, 2026",
      type: "Career Certificate",
      url: "https://coursera.org/share/79470ecdb6b3b22b9f9caf6580e4d3fd",
    },
    {
      id: 3,
      title: "Introduction to Computer Vision and Image Processing",
      issuer: "Coursera",
      date: "Jan 20, 2026",
      type: "Course",
      url: "https://coursera.org/share/160d18588a0b706fdc97e016bdf0c24b",
    },
    {
      id: 4,
      title: "Google Data Analytics",
      issuer: "Google",
      date: "Nov 20, 2025",
      type: "Career Certificate",
      url: "https://coursera.org/share/056577ad596b3e89d507dfaf725f39c2",
    },
    {
      id: 5,
      title: "LangChain for LLM Application Development",
      issuer: "DeepLearning.AI",
      date: "Oct 11, 2025",
      type: "Course",
      url: "https://coursera.org/share/b8474de72d1eaa3d98ba7883165130f7",
    },
    {
      id: 6,
      title: "Machine Learning Specialization",
      issuer: "Stanford University & DeepLearning.AI",
      date: "Feb 12, 2025",
      type: "Career Certificate",
      url: "https://coursera.org/share/8424ed519a6a22c2d4cc30f2426b660c",
    },
    {
      id: 7,
      title: "Building Generative AI-Powered Applications",
      issuer: "Coursera",
      date: "Feb 11, 2025",
      type: "Course",
      url: "https://coursera.org/share/5402e2eeb4229811fae31d95b21545b4",
    },
    {
      id: 8,
      title: "Microsoft AI & ML Engineering",
      issuer: "Microsoft",
      date: "Feb 04, 2025",
      type: "Career Certificate",
      url: "https://coursera.org/share/57706d21ba1934a46912d1f678e510a7",
    },
    {
      id: 9,
      title: "IBM Machine Learning",
      issuer: "IBM",
      date: "Feb 04, 2025",
      type: "Career Certificate",
      url: "https://coursera.org/share/8ccfc9aacb90efdd33d284332f31564c",
    },
    {
      id: 10,
      title: "Generative AI: Elevate your Software Dev Career",
      issuer: "Coursera",
      date: "Feb 03, 2025",
      type: "Course",
      url: "https://coursera.org/share/0328a5f480e2d88a1c5826c0e08f7b96",
    },
    {
      id: 11,
      title: "Generative AI: Prompt Engineering Basics",
      issuer: "Coursera",
      date: "Feb 02, 2025",
      type: "Course",
      url: "https://coursera.org/share/cb7de413ee77a5b55bcd542335f56516",
    },
    {
      id: 12,
      title: "Generative AI: Foundation Models and Platforms",
      issuer: "Coursera",
      date: "Dec 24, 2024",
      type: "Course",
      url: "https://coursera.org/share/193099188b781ddbac89b0a92ca048e7",
    },
    {
      id: 13,
      title: "Generative AI: Introduction and Applications",
      issuer: "Coursera",
      date: "Dec 24, 2024",
      type: "Course",
      url: "https://coursera.org/share/f90f638abf77e682a2e766db60c50c0e",
    },
    {
      id: 14,
      title: "Introduction to Artificial Intelligence (AI)",
      issuer: "Coursera",
      date: "Dec 20, 2024",
      type: "Course",
      url: "https://coursera.org/share/392111ba11f74b5c3b9329eb9cab7f78",
    },
    {
      id: 15,
      title: "Introduction to Git and GitHub",
      issuer: "Google",
      date: "Aug 17, 2024",
      type: "Course",
      url: "https://coursera.org/share/02ce1d314440d1d8f1b2b45518b74e4a",
    },
    {
      id: 16,
      title: "Crash Course on Python",
      issuer: "Google",
      date: "Mar 30, 2024",
      type: "Course",
      url: "https://coursera.org/share/fce24297236e17d124bb38c33a439d7e",
    },
    {
      id: 17,
      title: "Software Development Processes",
      issuer: "University of Minnesota",
      date: "Mar 22, 2024",
      type: "Course",
      url: "https://coursera.org/share/c2bd3614d06756fb3fbd67d043ca52a4",
    },
    {
      id: 18,
      title: "Software Engineering: Implementation and Testing",
      issuer: "University of Minnesota",
      date: "Mar 21, 2024",
      type: "Course",
      url: "https://coursera.org/share/8c071a311f10818da2712e76c62c84ce",
    },
  ];

  return (
    <div className="certs-page">
      <div className="certs-header">
        <Link to="/" className="back-button">
          ← Back to Home
        </Link>
        <h1>
          All <span>Credentials</span>
        </h1>
        <p>Professional certifications and technical achievements</p>
      </div>

      <div className="certs-grid">
        {certificates.map((cert, index) => (
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="certs-card"
            key={cert.id}
          >
            {/* Artistic Number in Background */}
            <div className="certs-card-number">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </div>

            <div className="certs-content">
              <div className="certs-date">{cert.date}</div>
              <h3 className="certs-title">{cert.title}</h3>
              <div className="certs-issuer">
                <span>Issued by {cert.issuer}</span>
              </div>
            </div>

            <div className="view-cert-btn">
              View Credential ↗
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AllCertificates;