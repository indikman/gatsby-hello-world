import React from "react"
import Container from "../components/container"
import styles from "./about-css-modules.module.css"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function AboutCSS() {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool!</p>

      <User
        username="Indikman"
        avatar="https://source.unsplash.com/random/100x100"
        excerpt="My name is Indika, I am 28 years old. I am an engineer"
      />

      <User
        username="Thiliniman"
        avatar="https://source.unsplash.com/random/100x150"
        excerpt="My name is Thilini, I am 25 years old. I am a lawyer"
      />
    </Container>
  )
}
