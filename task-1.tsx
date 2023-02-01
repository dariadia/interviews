import React from 'react'

type Author = {
  uuid: string
  name: string
  date_birth?: number
  date_death?: number
  avatar?: string
}

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
