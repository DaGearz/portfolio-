import React, { useState } from "react";
import styles from "../modules.css/Portfolio.module.css";
import MainLayout from "../templates/MainLayout";
import DisplayPortfolio from "../components/DisplayPortfolio";
import projectsData from "../data/projectsData";
import ImageTest from "../components/ImageTest";

const Portfolio = () => {
  const [showImageTest, setShowImageTest] = useState(false);

  return (
    <MainLayout>
      <main className={`bColor2 ${styles.Portfolio}`}>
        <div
          style={{ width: "100%", textAlign: "center", marginBottom: "20px" }}
        >
          <button
            onClick={() => setShowImageTest(!showImageTest)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#DDA853",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              color: "#183B4E",
              fontWeight: "bold",
            }}
          >
            {showImageTest ? "Hide Image Test" : "Troubleshoot Images"}
          </button>
        </div>

        {showImageTest && (
          <div
            style={{
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto 30px auto",
            }}
          >
            <ImageTest />
          </div>
        )}

        {projectsData.map(
          (project) =>
            project.usePortfolio && (
              <DisplayPortfolio key={project.id} projectData={project} />
            )
        )}
      </main>
    </MainLayout>
  );
};

export default Portfolio;
