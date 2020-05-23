import React from "react";

export const Iframe = ({ trackId, from }) => {
  const src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
  return (
    <div>
      <iframe
        title="asdf"
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={src}
      ></iframe>
      {/* <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: 100,
        }}
      >
        <a
          href="https://soundcloud.com/nelkn"
          title="/\/elkn"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          /\/elkn
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/nelkn/i-will-be-alright"
          title="I Will Be Alright"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          I Will Be Alright
        </a>
      </div> */}
    </div>
  );
};
