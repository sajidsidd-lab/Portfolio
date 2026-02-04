import React from "react"
import "./Card.css"

function Card({ title, image, links = [] }) {
  return (
    <div className="card">
      <h1>{title}</h1>

      <div className="hovercard">
        <img src={image} alt={title} />
      </div>

      {links.length > 0 && (
        <div className="project-links">
          {links.map((link, index) => (
            <a
              key={index}
              href={link?.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              onClick={(e) => {
                if (!link?.url) e.preventDefault()
              }}
            >
              {link?.label || "Link"}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default Card
