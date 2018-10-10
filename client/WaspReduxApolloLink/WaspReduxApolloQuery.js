const WaspLinkQuery = (props, query,variables) => {
  if(!variables) {
    const q = {
      query: query
    }
    props.client.query(q)
  } else {
    const q = {
      query: query,
      variables: variables
    }
    props.client.query(q)
  }
}

export default WaspLinkQuery;