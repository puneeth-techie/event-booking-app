import { gql } from "apollo-server";

const userTypeDefs = gql`
  type query {
    user: String
  }
`;
export default userTypeDefs;
