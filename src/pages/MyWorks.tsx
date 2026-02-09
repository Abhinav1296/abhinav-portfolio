import { Link } from "react-router-dom";
import { useEffect } from "react"; // Import useEffect
import "./MyWorks.css";

const MyWorks = () => {

  // ✅ FIX: Scroll to top immediately when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProjects = [
    {
      id: 1,
      title: "AI Cardiologist (ECG)",
      category: "Healthcare / Deep Learning",
      description: "A hybrid 1D-CNN and Transformer model for heart condition classification. Achieved 92.86% accuracy and 100% recall on MI cases.",
      tech: "Python, PyTorch, ResNet50V2, Grad-CAM",
      image: "/images/ecg.png", 
      url: "https://drive.google.com/drive/folders/1g4OdMADd9YxK98kGzLusDIp4Ev4BQYaa?usp=drive_link",
    },
    {
      id: 2,
      title: "Pneumonia Detection",
      category: "Medical AI / Computer Vision",
      description: "Deep learning system using CNNs (EfficientNet) to detect pneumonia in chest X-rays with high precision.",
      tech: "TensorFlow, Keras, OpenCV, Python",
      image: "/images/pneumonia.png",
      url: "https://drive.google.com/drive/folders/1-8i9siEkUa4HduJZndMOzoO3Y_TF1VEw?usp=drive_link",
    },
    {
      id: 3,
      title: "Brain Tumor Prediction",
      category: "Medical Imaging",
      description: "Diagnostic tool trained on MRI scans to classify brain tumors into distinct categories using Deep Learning.",
      tech: "Python, TensorFlow, CNN, ResNet",
      image: "/images/brain.png",
      url: "https://drive.google.com/drive/folders/1vIwplrKvpgfx15O4RB3RulDfnKd87EYr?usp=drive_link",
    },
    {
      id: 4,
      title: "RAG Powered Chatbot",
      category: "Generative AI / NLP",
      description: "An intelligent chatbot using Retrieval-Augmented Generation to provide accurate context-aware answers from custom documents.",
      tech: "Python, LangChain, OpenAI/Ollama, Vector DB",
      image: "/images/rag.png", 
      url: "https://drive.google.com/drive/folders/16msrzP9REVITMLzqDYQa61gshoo2sgIG?usp=drive_link",
    },
    {
      id: 5,
      title: "Fish Image Classification",
      category: "Computer Vision",
      description: "A multi-class image classification model capable of identifying different fish species from a large image dataset.",
      tech: "Python, Keras, CNN, Data Augmentation",
      image: "/images/fish.png",
      url: "https://drive.google.com/drive/folders/1kotGPH4iQoqqrabZmCFKaIVQU5WYiDx6?usp=drive_link",
    },
    {
      id: 6,
      title: "Yes Bank Stock Prediction",
      category: "Finance / Time Series",
      description: "Predictive model analyzing Yes Bank's historical closing stock prices to forecast future market trends.",
      tech: "Python, Scikit-Learn, Regression, Pandas",
      image: "/images/yes bank.png",
      url: "https://drive.google.com/drive/folders/1JuRvvMC8WAiuQrlw8vzlF_FubSFJ1AST?usp=drive_link",
    },
    {
      id: 7,
      title: "Comments Toxicity Detection",
      category: "NLP / Content Safety",
      description: "Natural Language Processing model to detect and classify toxic, abusive, or harmful comments on social platforms.",
      tech: "Python, LSTM/RNN, NLTK, TensorFlow",
      image: "/images/comment.png",
      url: "https://drive.google.com/drive/folders/1oVzy0RiL8ooUfEAgNIc5ULTB0YDBIMjg?usp=drive_link",
    },
    {
      id: 8,
      title: "PhonePe Pulse Analysis",
      category: "Data Visualization / Analytics",
      description: "Geo-spatial analysis of PhonePe transaction data to uncover user payment behaviors across Indian states.",
      tech: "Python, Plotly, Streamlit, Pandas, GeoJSON",
      image: "/images/phone_pe.png",
      url: "https://drive.google.com/drive/folders/1mZwSy2tdNOieJU9qHyFA6Jv7JWIiTHmI?usp=drive_link",
    },
    {
      id: 9,
      title: "Shopper Spectrum",
      category: "Unsupervised Learning",
      description: "Customer segmentation system using K-Means clustering to group shoppers based on spending score and annual income.",
      tech: "Python, Scikit-Learn, K-Means, Matplotlib",
      image: "/images/shopper.png",
      url: "https://drive.google.com/drive/folders/1NXsOMK7HZR_iyqVRdh8hefaw5LfNwQKU?usp=drive_link",
    },
    {
      id: 10,
      title: "Global Vaccination Analysis",
      category: "Data Science / EDA",
      description: "Comprehensive data analysis of global COVID-19 vaccination rates, tracking progress and disparities across nations.",
      tech: "Python, Pandas, Seaborn, Matplotlib",
      image: "/images/vaccination.png",
      url: "https://drive.google.com/drive/folders/1Sp6AK-plLKTc_WuphUm_64pL8BIcNCrE?usp=drive_link",
    },
    {
      id: 11,
      title: "Food Waste Management",
      category: "Sustainability / Analytics",
      description: "Analytical solution to track and reduce food waste by identifying key drivers and suggesting optimization strategies.",
      tech: "Python, Data Analytics, Optimization Algos",
      image: "/images/food.png",
      url: "https://drive.google.com/drive/folders/1DLICtGq4enUaN_RZGxGqBeAjFalTwkVV?usp=drive_link",
    },
    {
      id: 12,
      title: "Civic Ray",
      category: "Civic Tech / RAG AI",
      description: "Next-gen AI assistant for municipal governance. Instantly answers citizen queries on bylaws and regulations using advanced RAG pipelines.",
      tech: "Python, LangChain, Ollama, ChromaDB",
      image: "/images/civic_ray.png", 
      url: "https://drive.google.com/drive/folders/1ZMUfnJf6OdVf0h7PUe4rZUhXr_WH_Tiz?usp=drive_link",
    },
  ];

  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          All <span>Works</span>
        </h1>
        <p>A collection of all my projects and creations</p>
      </div>

      <div className="myworks-grid">
        {allProjects.map((project, index) => (
          <div className="myworks-card" key={project.id} data-cursor="disable">
            <div className="myworks-card-number">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </div>
            
            <div className="myworks-card-image">
              <img src={project.image} alt={project.title} />
            </div>
            
            <div className="myworks-card-info">
              <h3>{project.title}</h3>
              <p className="myworks-card-category">{project.category}</p>
              <p className="myworks-card-description">{project.description}</p>
              <p className="myworks-card-tech">{project.tech}</p>
              
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                View Project ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;