import styles from '../../styles/About.module.css'
import Image from 'next/image'
import Animation from "./Animation"

function About() {
    return (
        <div id="about" className={styles.about}>
            <h1>About Me</h1>
            <div className={styles.about_section}>
                <p>
                    I am an accomplished competitive programmer with an Expert rating on Codeforces and Guardian status on LeetCode. Proficient in data structures and algorithms, I possess strong problem-solving skills and a deep understanding of algorithmic principles, making me well-equipped for challenges in computer science and software development.
                    <br/>
                    <br/>I am a passionate Full Stack Developer who loves to explore new technologies and build scalable applications.Although I expertize in full-stack development, I prefer to work on the backend of any application.
                    <br/>
                    <br/>Apart from coding, I love to learn about latest and emerging technologies.
                    <br/>
                    <br/>I like to work on my problem solving skills by participating in contests. These problem-solving skills help me to optimize the applications that I develop. My LeetCode profile <a href="https://leetcode.com/maverik_coder/" target="_blank" without rel="noreferrer">Leetcode | Hritik Gupta</a> and Codeforces profile <a href="https://codeforces.com/profile/hritik426" target="_blank" without rel="noreferrer">Codeforces | Hritik Gupta</a> shows my problem-solving ability.
                </p>
                {/* <Animation></Animation> */}
            </div>
        </div>
    )
}

export default About
