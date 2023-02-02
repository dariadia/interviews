import React from 'react'

type Author = {
  uuid: string
  name: string
  date_birth?: number
  date_death?: number
  avatar?: string
}

// Task: find what would cause a warning but not an error
// Bonus: find a content-render error, which would cause nothing code-wise, but confuse the users 

export const AuthorsList = (authors: Author[]) => (
  <ul className="list_authors">
    {authors.map((author) => (
      <li className="list_authors__author">
        <img src={author.avatar} alt={author.name} />
        <span>{author.name}</span>
        <span>{author.date_birth} – {author.date_death}</span>
      </li>
    ))}
  </ul>
)
