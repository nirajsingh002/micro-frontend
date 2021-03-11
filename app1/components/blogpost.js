import React, { Component } from "react";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Date from './date';

export default function Blogpost({ allPostsData }) {
    return (
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {/* Add this <section> tag below the existing <section> tag */}
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id} >
              {/* <Link href={`/posts/${id.toLowerCase()}`}>
                <a>{title}</a>
              </Link> */}
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    );
}