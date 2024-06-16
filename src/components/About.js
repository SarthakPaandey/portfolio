import React from "react";
import "./About.css";
import Typewriter from "react-typewriter";

const About = () => {
  return (
    <section>
      <h1>About Me</h1>
      <p>
        <Typewriter typing={100} speed={50}>
          I am a passionate and driven Computer Science student with a keen
          interest in cutting-edge technologies. Currently pursuing my studies,
          I have gained extensive technical knowledge in areas such as Android
          app development, machine learning, and deep learning. Throughout my
          academic journey, I have consistently demonstrated a strong work ethic
          and a self-motivated approach to learning.
          <br />
          I thrive on challenges and continuously strive to expand my skillset,
          keeping up with the latest industry trends and best practices.
          Alongside my coursework, I have actively participated in various
          coding projects and hackathons, allowing me to apply my theoretical
          knowledge to real-world scenarios. These experiences have honed my
          problem-solving abilities and fostered my love for collaboration and
          teamwork.
          <br />
          With a deep fascination for data and its potential applications, I am
          particularly interested in leveraging machine learning and deep
          learning techniques to uncover valuable insights and develop
          innovative solutions. I believe in the power of technology to drive
          positive change and am committed to working alongside highly motivated
          individuals who share this vision.
          <br />
          My ultimate goal is to contribute to the growth and advancement of the
          tech industry, using my skills and expertise to make a meaningful
          impact. I am excited to explore new opportunities and collaborate with
          like-minded professionals, continuously pushing the boundaries of
          what's possible. Feel free to reach out to me for any inquiries or
          potential collaborations. I'm always eager to connect with others who
          are passionate about technology and its transformative potential.
          <br />
          When I'm not coding or studying, you can find me exploring the latest
          tech trends, reading up on industry news, or working on personal
          projects. I also enjoy staying active through various sports and
          outdoor activities, finding balance between my academic pursuits and
          personal interests. I am a firm believer in the importance of
          work-life balance and strive to maintain a healthy lifestyle both
          physically and mentally.
          <br />
          Thank you for taking the time to learn more about me. I look forward
          to connecting with you and exploring potential opportunities for
          collaboration. Let's work together to create something amazing!
          <br />
          <strong>Skills:</strong> HTML, CSS, JavaScript, React, Node.js,
          Python, Java, C++, Android Development, Machine Learning, Deep
          Learning, Data Analysis, Git, GitHub, VS Code, Android Studio,
          TensorFlow, Keras, Scikit-learn, NumPy, Pandas, Matplotlib, Seaborn,
          Jupyter Notebook, Google Colab, Microsoft Office, Adobe Creative
          Suite, Figma, Canva, Trello, Slack, Zoom, Microsoft Teams, Agile
          Methodologies, Scrum, Kanban, Problem-Solving, Critical Thinking,
          Communication, Collaboration, Teamwork
          <br />
          <strong>Interests:</strong> Technology, Innovation, Machine Learning,
          Deep Learning, Data Science, Artificial Intelligence, Android
          Development, Web Development, Software Engineering, Mobile
          Applications, UI/UX Design, Graphic Design, Digital Marketing,
          Entrepreneurship, Startups, Business, Finance, Economics,
          Cryptocurrency, Blockchain, Gaming, Sports, Fitness, Health &
          Wellness, Travel, Photography, Music, Movies, Books, Food, Culture,
          Languages, Nature, Environment, Social Impact, Volunteering, Community
          Service, Mental Health, Self-Improvement, Personal Development,
          Leadership, Networking, Public Speaking, Writing, Blogging,
          Podcasting, Vlogging, Content Creation, Social Media
          <br />
          <strong>Education:</strong> Bachelor of Science in Computer Science
        </Typewriter>
      </p>
      {/* <image
        src="https://images.pexels.com/photos/957040/night-photograph-starry-sky-night-sky-star-957040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="profile"
      /> */}
    </section>
  );
};

export default About;
