import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      </div>
);
}

function Header(props) {
  return (
    <header>
      <h1>{props.blogName}</h1>
      <nav>
        <ul>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
}

function About(props) {
  const defaultImgSrc = "https://via.placeholder.com/215";
  const imgSrc = props.imgSrc || defaultImgSrc;
  const aboutText = props.aboutText;

  return (
    <aside>
      <img src={imgSrc} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

function ArticleList(props) {
  const articles = props.articles;

  return (
    <main>
      {articles.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          date={article.date || "January 1, 1970"}
          preview={article.preview}
        />
      ))}
    </main>
  );
}

function Article(props) {
  const title = props.title;
  const date = props.date;
  const preview = props.preview;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

function App() {
  const blogName = "My Blog";
  const aboutImgSrc = "https://via.placeholder.com/215";
  const aboutText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit risus vel euismod gravida.";

  const articles = [
    {
      id: 1,
      title: "Article 1",
      date: "April 1, 2022",
      preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Article 2",
      preview: "Sed suscipit risus vel euismod gravida.",
    },
  ];

  return (
    <div>
      <Header blogName={blogName} />
      <About imgSrc={aboutImgSrc} aboutText={aboutText} />
      <ArticleList articles={articles} />
    </div>
  );
}
export default App;
