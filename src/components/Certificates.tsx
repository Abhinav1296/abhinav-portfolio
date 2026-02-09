import { Link } from "react-router-dom";
import "/src/pages/AllCertificates.css";

// 1. Define the data structure
interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  url: string;
}

const Certificates = () => {
  // ✅ DATA IS NOW HERE (Bypassing config.tsx issues)
  // These are your 3 chosen "Top Certificates"
  const topCerts: Certificate[] = [
    {
      id: 6,
      title: "Machine Learning Specialization",
      issuer: "Stanford Univ. & DeepLearning.AI",
      date: "Feb 12, 2025",
      url: "https://coursera.org/share/8424ed519a6a22c2d4cc30f2426b660c",
    },
    {
      id: 8,
      title: "Microsoft AI & ML Engineering",
      issuer: "Microsoft",
      date: "Feb 04, 2025",
      url: "https://coursera.org/share/57706d21ba1934a46912d1f678e510a7",
    },
    {
      id: 9,
      title: "IBM Machine Learning",
      issuer: "IBM",
      date: "Feb 04, 2025",
      url: "https://coursera.org/share/8ccfc9aacb90efdd33d284332f31564c",
    },
  ];

  return (
    <div className="certs-page" style={{ minHeight: "auto", paddingBottom: "0" }}>
      <div className="certs-header">
        <h1>
          Professional <span>Certificates</span>
        </h1>
        <p>Bridging the gap between theory and implementation.</p>
      </div>

      <div className="certs-grid">
        {topCerts.map((cert, index) => (
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="certs-card"
            key={cert.id}
            // ✅ FORCE NO UNDERLINES (Inline styles override everything)
            style={{ 
              textDecoration: 'none', 
              color: 'inherit',
              boxShadow: 'none',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Number 01, 02, 03 */}
            <div className="certs-card-number">
              0{index + 1}
            </div>

            <div className="certs-content">
              {/* Date */}
              <div 
                className="certs-date" 
                style={{ textDecoration: 'none', border: 'none' }}
              >
                {cert.date}
              </div>
              
              {/* Title */}
              <h3 
                className="certs-title" 
                style={{ textDecoration: 'none', border: 'none' }}
              >
                {cert.title}
              </h3>
              
              {/* Issuer */}
              <div 
                className="certs-issuer" 
                style={{ textDecoration: 'none', border: 'none' }}
              >
                Issued by {cert.issuer}
              </div>
            </div>

            {/* Link Button */}
            <div 
              className="view-cert-btn" 
              style={{ textDecoration: 'none', border: 'none' }}
            >
              View Certificate ↗
            </div>
          </a>
        ))}
      </div>

      {/* View All Button */}
      <div style={{ textAlign: "center", marginTop: "60px", marginBottom: "60px" }}>
        <Link to="/certificates" className="back-button">
          View All Certificates →
        </Link>
      </div>
    </div>
  );
};

export default Certificates;