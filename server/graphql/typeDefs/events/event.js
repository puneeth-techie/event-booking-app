import { gql } from "apollo-server";

const eventTypeDefs = gql`
  type query {
    event: String
  }
`;
export default eventTypeDefs;
