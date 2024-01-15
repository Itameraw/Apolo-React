import { useQuery, gql } from "@apollo/client";
const GET_AUTHOR = gql`
  query authors {
    authors {
      id
      name
      posts {
        id
        title
      }
    }
  }
`;
function ShowAuthors() {
  const { loading, error, data } = useQuery(GET_AUTHOR);
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return data.authors.map(({ id, name, posts }) => (
    <div key={id}>
      <h3>{name}</h3>
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  ));
}
export default function App() {
  return (
    <div>
      <ShowAuthors />
    </div>
  );
}
