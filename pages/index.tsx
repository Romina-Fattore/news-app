import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import PageLayout from "../.next/components/PageLayout"





export default function Home({ articles }) {
 
  return (
    <PageLayout title = "NewsApp - Home">
    <article className={styles.container}>
      {articles.length === 0 && <p>No tenemos articulos</p>}
      {articles.length > 0 && articles.map((article, index) =>(
        <div key = {index} >
          <img
          alt={`Image for the article ${article.title}`}
          src= { article.urlToImage} 
       />
          <h2>{article.title}</h2>
          <p>
            { article.description}
          </p>
          </div>
      ))}
    </article>
    </PageLayout>
  )
}
export async function getStaticProps () {
  const response = await  fetch ("https://newsapi.org/v2/everything?q=tesla&from=2023-02-09&sortBy=publishedAt&apiKey=b712603584d140628eb7e60c998e7bd2")
  const { articles } = await response.json()
  return {
    props: {
      articles
    }
  }

}