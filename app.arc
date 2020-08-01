@app
begin-app

@http
get /
get /api/v1/response

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
