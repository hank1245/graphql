import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { GET_PROJECT } from "../queries/projectQueries";

function Project() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });
  if (loading) return <Spinner />;
  if (error) return <p>wtf</p>;

  return <div>Project</div>;
}

export default Project;
