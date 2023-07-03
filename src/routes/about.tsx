import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <article className="prose">
      <h1>Terms of Use</h1>
      <p>
        Welcome to our website that displays dynamic renderings of sorting
        algorithms.
      </p>
      <p>
        By using this site, you agree to the following terms and conditions:
      </p>

      <h2>Usage of Content</h2>
      <p>
        All content presented on this site is for educational and demonstration
        purposes only. It is provided as is, without any warranty of accuracy or
        suitability for any specific purpose.
      </p>
      <p>
        You are permitted to use, modify, and distribute the content and
        provided that you attribute the source and retain any copyright notices.
      </p>

      <h2>Responsibilities</h2>
      <p>
        We strive to keep this site up-to-date and ensure its proper
        functioning. However, we disclaim any liability for direct or indirect
        damages resulting from the use of this site or its content.
      </p>
      <p>
        You are responsible for your use of the sorting algorithms presented on
        this site. Please make sure to understand their workings and
        implications before using them in a real-world context.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All intellectual property rights related to the content of this site are
        reserved.
      </p>

      <h2>Open-Source and Contacts</h2>
      <p>
        This project is open-source, and you can find the source code on{' '}
        <Link to={'https://github.com/ReyalWesley/algo-sort'}>
          this repository
        </Link>
        . If you have any questions or need to get in touch, you can contact me
        at:
        <p>reyal.wesley@gmail.com</p>
      </p>
    </article>
  );
}
