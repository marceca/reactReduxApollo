const WaspLinkMutate = (props, query, variables, refetch) => {
  if(!refetch) {
    const q = {
      mutation: query,
      variables
    }
    props.client.mutate(q)
  } else {
    const q = {
      mutation: query,
      variables,
      refetchQueries: [
        { query: refetch }
      ]
    }
    props.client.mutate(q)
  }
}

export default WaspLinkMutate;