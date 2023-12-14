import React, {FC} from "react";
import {Post} from "../common/interfaces/posts";

interface PostsListProps {
    data: Post[]
}
export const PostsList: FC<PostsListProps> = ({data}) => {
  return (
      <div>
          <h2>Search Results</h2>
          <ul>
              {data?.map((result: Post) => (
                  <li key={result.id}>{`${result.id}. ${result.title}`}</li>
              ))}
          </ul>
      </div>
  )
}