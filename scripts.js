document.addEventListener('DOMContentLoaded', () => {
    navigateTo('about');
});

function navigateTo(section) {
    const content = document.getElementById('content');
    switch (section) {
        case 'about':
            content.innerHTML = `
                <section id="about">
                    <h2>About Me</h2>
                    <p><h4>Hello! I'm Shubham Pandey, a postgraduate student from Dr. Ram Manohar Lohia Awadh University, Ayodhya. With a strong foundation in programming languages and technologies like C, C++, HTML, CSS, and JavaScript, I am passionate about coding and constantly striving to learn new things. My problem-solving skills and quick learning ability enable me to adapt to new challenges and environments with ease.</h4></p>
                </section>`;
            break;
        case 'skills':
            content.innerHTML = `
                <section id="skills">
                    <h2>Skills</h2>
                    <p><strong>Technical skills:</strong> Python, C, JavaScript, C++, HTML, CSS, Bootstrap, Cloud- Microsoft Azure, Amazon AWS</p>
                    <p><strong>Design Tools:</strong> Figma, Canva, Adobe Photoshop, Unity</p>
                    <p><strong>Productivity Tools:</strong> Google Colab, Google Analytics, SQL Workbench, MS PowerPoint, MS Excel, VS Code, Arduino, Eclipse, Git</p>
                    <p><strong>Soft skills:</strong> Problem-solving, Decision-making, Creativity, Communication, Adaptability, Flexibility, Quick learner, Innovation</p>
                    <p><strong>Database:</strong> SQL</p>
                </section>`;
            break;
        case 'projects':
            content.innerHTML = `
                <section id="projects">
                    <h2>Projects</h2>
                    <div class="project">
                        <h3>Voting System</h3>
                        <p><strong>Description:</strong> A Voting application, using Python and machine learning technologies.</p>
                        <p><strong>Technologies Used:</strong> Python, Machine Learning</p>
                        <p><strong>Link to Project:</strong> <a href="#">GitHub Repository</a></p>
                    </div>
                    <div class="project">
                        <h3>Food Website</h3>
                        <p><strong>Description:</strong> A food shop where you buy delicious food. Created using HTML, CSS and JS scripting language.</p>
                        <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript</p>
                        <p><strong>Link to Project:</strong> <a href="#">GitHub Repository</a></p>
                    </div>
                    <div class="project">
                        <h3>Smart Navigation for Visually Impaired</h3>
                        <p><strong>Description:</strong> An Internet of Things model created using components like Arduino Nano, GPS NEO, GSM 800, Ultrasonic Sensor and Water Sensor. It serves as a smart cane for guiding a visually impaired person by detecting obstacles and potholes on their path.</p>
                        <p><strong>Technologies Used:</strong> Arduino Nano, GPS NEO, GSM 800, Ultrasonic Sensor, Water Sensor</p>
                        <p><strong>Link to Project:</strong> <a href="#">GitHub Repository</a></p>
                    </div>
                    <div class="project">
                        <h3>Snake Game</h3>
                        <p><strong>Description:</strong> The Snake Game is a fun and engaging exercise in game development, suitable for learning basic game mechanics, input handling, and basic collision detection. Created using Python.</p>
                        <p><strong>Technologies Used:</strong> Python</p>
                        <p><strong>Link to Project:</strong> <a href="#">GitHub Repository</a></p>
                    </div>
                    <div class="project">
                        <h3>Gender Detection System</h3>
                        <p><strong>Description:</strong> Gender detection system differentiates between human gender faces. Using Python Keras and OpenCV on a live camera.</p>
                        <p><strong>Technologies Used:</strong> Python, Keras, OpenCV</p>
                        <p><strong>Link to Project:</strong> <a href="#">GitHub Repository</a></p>
                    </div>
                    <div class="project">
                        <h3>Wanderwave</h3>
                        <p><strong>Description:</strong> A website created using HTML, CSS, JavaScript, and React for displaying tourist-friendly locations to visit in various places of Uttar Pradesh.</p>
                        <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript, React</p>
                        <p><strong>Link to Project:</strong> <a href="#">GitHub Repository</a></p>
                    </div>
                </section>`;
            break;
        case 'education':
            content.innerHTML = `
                <section id="education">
                    <h2>Education</h2>
                    <p><strong>Masters of Computer Applications</strong> (2022-2024)</p>
                    <p>Dr. Ram Manohar Lohia Awadh University, Ayodhya - Percentage: 80%</p>
                    <p><strong>Bachelor of Computer Science</strong> (2017-2020)</p>
                    <p>Dr. Ram Manohar Lohia Awadh University, Ayodhya - Percentage: 56.5%</p>
                    <p><strong>Intermediate</strong> (2016-2017)</p>
                    <p>J.R.V.Bapu Smarak Inter College - Percentage: 66.3%</p>
                    <p><strong>High School</strong> (2014-2015)</p>
                    <p>J.R.V.Bapu Smarak Inter College - Percentage: 80%</p>
                </section>`;
            break;
        case 'experience':
            content.innerHTML = `
                <section id="experience">
                    <h2>Training and Experience</h2>
                    <p><strong>Web Development Intern</strong> (May 2023 - Sep 2023)</p>
                    <p>NSDC | Internshala Remote</p>
                    <p>Technologies: HTML, CSS, Bootstrap, JavaScript</p>
                    <h2>Volunteering Experience</h2>
                    <p>Volunteered at Divya Deepotsava - Ayodhya, a Guinness World Record-holding event for 3 years. Held important positions - Warehousing management and Section head.</p>
                </section>`;
            break;
        case 'contact':
            content.innerHTML = `
                <section id="contact">
                    <h2>Contact Me</h2>
                    <p><strong>Email:</strong> <a href="mailto:Pandeyshubham2k24@gmail.com">Pandeyshubham2k24@gmail.com</a></p>
                    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/shubhampandey03/" target="_blank">linkedin.com/in/shubhampandey03</a></p>
                    <p><strong>GitHub:</strong> <a href="https://github.com/Alwayshubham3" target="_blank">github.com/Alwayshubham3</a></p>
                    <p><strong>Hacker Rank:</strong> <a href="https://www.linkedin.com/in/shubhampandey03/" target="_blank">Hacker Rank Profile</a></p>
                    <p><strong>Mobile Number:</strong> +91 7518865252</p>
                </section>`;
            break;
        case 'testimonials':
            content.innerHTML = `
                <section id="testimonials">
                    <h2>Testimonials</h2>
                    <div class="testimonial">
                        <p><strong>Name:</strong> [Person's Name]</p>
                        <p><strong>Testimonial:</strong> "Shubham is a fast learner with an excellent grasp of programming concepts. His problem-solving skills are top-notch, and he always brings a positive attitude to the team."</p>
                    </div>
                </section>`;
            break;
        case 'achievements':
            content.innerHTML = `
                <section id="achievements">
                    <h2>Achievements</h2>
                    <p><strong>SOCIAL WELFARE CATEGORY AWARD</strong> - Smart Navigation for Visually Impaired, VIGYAN BHARTI</p>
                    <p><strong>Scholarship for Education by Indian Government</strong> - NTSE, INSPIRE</p>
                    <h2>Certifications</h2>
                    <ul>
                        <li>Cloud Computing – Infosys Springboard</li>
                        <li>Docker For Beginners - Coursera</li>
                        <li>Android Web Development - Internshala</li>
                        <li>Web Technologies Using Python Programming - Softpro India Computer Technologies</li>
                        <li>Data Analytics and Visualization - Accenture</li>
                        <li>Introduction to Generative AI - Google Cloud</li>
                        <li>SQL Basic & Intermediate – Hacker Rank</li>
                        <li>Web Design and Development - Ministry of Skill Development and Entrepreneurship, India</li>
                        <li>Basics Of Python - Infosys Springboard</li>
                        <li>HTML 5 The Language - Infosys Springboard</li>
                        <li>The Science of Well-Being – Yale University USA</li>
                        <li>Introduction to Psychology - Yale University USA</li>
                        <li>CPR. AED First Aid Certification Course - NHCPS</li>
                    </ul>
                </section>`;
            break;
        default:
            content.innerHTML = `<p>Section not found.</p>`;
    }
}

function toggleMode() {
    const body = document.body;
    const headerTitle = document.getElementById('header-title');
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        headerTitle.textContent = 'This is Shubham Pandey';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        headerTitle.textContent = 'Welcome to My Portfolio';
    }
}
