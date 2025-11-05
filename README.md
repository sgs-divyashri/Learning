# Learning

1. URL
   - unique address to contain all resources on the internet.
   - has a protocol (access the resource), domain name (name of the website - host), port (connect to server), path (page navigation), query parameters (filtering), fragment (starts with #, goes to specific section within the same page)
     
2. HTTP
   - transfer of data between client and server
   - request-response model (client sends request via API to the server, Server processes request and sends back to the client via API)
   - stateless (not store previous memory)
   - text-based (stored in lain text only)
   - to create valid HTTP requests:
     - URL, HTTP methods (GET, POST), request headers, request body
   - For HTTP response,
     - HTTP status code, Response headers, response body
   - Request methods
     i. GET - to create new request
     ii. POST - to send the request
     iii. PUT - to update the request
     iv. PATCH - to update only necessary data within the resource
     v. DELETE - to delete specified resource
   - Status codes:
     i. 2xx - Successful (200 - OK, 201 - Created)
     ii. 3xx - Redirectional (301 - moved permanently)
     iii. 4xx - Client Error (404 - Not found)
     iv. 5xx - Server Error (500 - Internal Server error)
   - Advantages of HTTP:
   - - requires less memory and CPU usage
4. HTTPS
5. JSON
6. API
   - an intermediator (bridge) to allow diff software applications to communicate with each other.
   - Process:
     - Client (user) send request via URL of API.
     - API sends request to server.
     - server processes request, send back to API
     - API send response to the client
  - It is essential to:
  - - intergrate between diff systems
    - automate tasks
    - monitor and update real-time applications
    - data security
8. REST API
9. Client-Server Architecture
10. API Testing using Postman
