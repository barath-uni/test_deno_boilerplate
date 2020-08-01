const getServerResponse = ({response}: {response: any}) => {
  response.body = {
      success: true,
      data: "This is the entire server response"
  }
}