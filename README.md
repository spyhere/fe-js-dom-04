# Form submission

Finally, we’ve found out why we are not gaining customers with our new website - it lacks the submission form. Please
create such form that we will implement in our website. BTW we’ve created a mock server for you, so you can make
an `AJAX` and parse the response. There is a `50%` chance that the response will be successful. To start up the server
simply open terminal in your IDE and type "npm start", then you should see `Server is started on localhost:8080`

## Acceptance criteria:

- There should be `name`, `email`, `city`, `phone`, and `file` inputs present
- `name`, `email` and `city` should be required fields
- User should have possibility to attach a file
- Should have a basic inputs validation: only letters for `name` and `city`, only numbers for `phone` (with optional `+`
  and parenthesis*, fixed length) and only `xlsx` format is accepted in the `file` input.
- Request should be sent to the server (`localhost:8080/inquiry-submit`) to get the response
- The app should be able to display successful/unsuccessful response

`*` - this is optional requirement

## Example
https://spyhere.github.io/fe-course/js-dom-04/public/

### Hints:
- regExp
- “pattern” attribute or “RegExp.test”/“String.match”
- AJAX
- fetch
- formData

### Troubleshooting:
Node.js should be installed to be able to run the server

Also, You can check out `solution.zip` to see my solution. Maybe you will see something interesting there
