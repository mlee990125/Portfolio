// import React from 'react'
import {getImageUrl} from '../../utils';
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Michael</h1>
            <p className={styles.description}>I'm a full-stack developer blah blah blah</p>
        </div>
        <img src={getImageUrl("hero/heroImage.png") } alt="Hero image of me" className={styles.heroImg}/>
    </section>
  )
}
