export const config = {
    developer: {
        name: "Abhinav",
        fullName: "Abhinav Viswanathula",
        title: "Deep Learning & AI Research Engineer",
        description: "Specializing in Deep Learning and Computer Vision. Focused on building high-accuracy neural architectures for medical diagnostics and predictive analytics."
    },
    social: {
        github: "Abhinav1296",
        email: "abhi.pandu1296@gmail.com",
        location: "Guntur, Andhra Pradesh"
    },
    about: {
        title: "About Me",
        description: "I am a B.Tech CSE student at Lovely Professional University specializing in Machine Learning. My expertise spans from Healthcare AI (COVID-19 and Brain Tumor diagnostics) to NLP and Financial Forecasting, bridging the gap between raw data and actionable insights."
    },
    experiences: [
        {
            position: "Machine Learning Intern",
            company: "Vaishnav Technologies",
            period: "2025",
            location: "Remote",
            description: "Led end-to-end data science initiatives in the Healthcare domain, focusing on global pandemic trends and vaccination impact analysis.",
            responsibilities: [
                "Performed comprehensive analysis on global COVID-19 datasets to identify infection trends and mortality correlations",
                "Developed predictive models for healthcare resource allocation based on vaccination rates",
                "Conducted deep Exploratory Data Analysis (EDA) to visualize public health strategies across different countries",
                "Automated data cleaning pipelines for multi-source healthcare datasets using Pandas"
            ],
            technologies: ["Python", "Pandas", "Seaborn", "Healthcare Analytics"]
        },
        {
            position: "Machine Learning Intern",
            company: "Labmentix",
            period: "2025",
            location: "Remote",
            description: "Engineered diverse AI solutions ranging from Financial Forecasting and NLP to large-scale Data Visualization dashboards.",
            responsibilities: [
                "Developed a Yes Bank Stock Prediction model achieving a 0.98 R² score using historical monthly closing data",
                "Built a Global Vaccination Analysis Dashboard (1980-2019) in PowerBI covering multi-national healthcare data",
                "Implemented a Comment Toxicity Classifier using NLP to categorize text into toxic, severely toxic, and non-toxic classes",
                "Deployed a PhonePe Transaction & User Insights dashboard on Streamlit for real-time data exploration",
                "Collaborated on medical imaging projects focusing on Brain Tumor classification using deep neural networks"
            ],
            technologies: ["PowerBI", "Streamlit", "NLP", "Scikit-Learn", "Regression"]
        }
    ],
    certificates: [
        {
            id: 1,
            title: "Professional Certificates",
            items: [
            { name: "IBM Machine Learning", image: "/images/ibm_cert.png" },
            { name: "Stanford Machine Learning", image: "/images/stanford_cert.png" },
            { name: "Microsoft AI Engineering", image: "/images/microsoft_cert.png" },
            { name: "Google Python Professional", image: "/images/google_cert.png" },
            { name: "IBM Generative AI", image: "/images/ibm_gen_ai.png" }
            ]
        }
    ],
    projects: [
        {
            id: 1,
            title: "AI Cardiologist (ECG)",
            category: "Healthcare / Deep Learning",
            technologies: "Python, PyTorch, ResNet50V2, Grad-CAM",
            image: "/images/ecg.png",
            description: "A hybrid 1D-CNN and Transformer model for heart condition classification. Achieved 92.86% accuracy and 100% recall on MI cases."
        },
        {
            id: 2,
            title: "Pneumonia Detection",
            category: "Medical AI / Computer Vision",
            technologies: "TensorFlow, EfficientNet-B0, OpenCV, Streamlit",
            image: "/images/pneumonia.png",
            description: "Deep learning system using EfficientNet-B0 to detect pneumonia in chest X-rays with Grad-CAM for clinical interpretability."
        },
        {
            id: 3,
            title: "Brain Tumor Classification",
            category: "Medical Imaging",
            technologies: "Python, CNN, EfficientNet, Keras",
            image: "/images/brain.png", 
            description: "High-accuracy diagnostic tool trained on 9000+ MRI images to classify brain tumors into four distinct categories."
        }
    ],
    // This is a new key we can use for the "See All Works" page
    allWorks: [
        { title: "Yes Bank Stock Prediction", category: "Finance", result: "0.98 R² Score" },
        { title: "Global Vaccination Dashboard", category: "Data Science", tool: "PowerBI" },
        { title: "Comment Toxicity NLP", category: "NLP", type: "Multi-class" },
        { title: "Shopper Spectrum", category: "Recommendation", tech: "Cosine Similarity" },
        { title: "PhonePe Insights", category: "Dashboard", tech: "Streamlit" }
    ],
    contact: {
        email: "abhi.pandu1296@gmail.com",
        github: "https://github.com/Abhinav1296",
        linkedin: "https://linkedin.com/in/abhinav1296",
    },
    skills: {
        develop: {
            title: "CORE AI SKILLS",
            description: "Deep Learning & Computer Vision",
            details: "Expertise in training architectures like ResNet and EfficientNet. Achieved 92% accuracy in Brain Tumor diagnostics and MI recall.",
            tools: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Scikit-Learn", "Deep Learning", "CNNs", "Transformers"]
        },
        design: {
            title: "ML INFRASTRUCTURE",
            description: "Data Engineering & MLOps",
            details: "Building the pipeline for machine learning models, from PowerBI dashboards to Streamlit deployments.",
            tools: ["SQL", "Power BI", "Git", "Tableau", "Docker", "Flask", "Streamlit"]
        }
    }
};