# Volopay-Backend-Api!
<h1>Overview📖</h1>
The backend API serves as the data source for the CardListing component in the React application. It provides endpoints to fetch the card data and supports pagination, search by card name, and filtering by card type.

<b>Endpoint: /cards</b>
<h1>Features✍🏻️</h1>
<h3>GET: </h3>
Fetches a list of cards.<br/>

<h3>Query Parameters:</h3>
🟢page (optional): Specifies the page number to retrieve. Default is 1.<br/>
🟢search (optional): Filters the cards by card name. Performs a case-insensitive search.<br/>
🟢type (optional): Filters the cards by card type. Possible values are "burner" or "subscription".<br/>
  
<h3>Response Body:</h3>
<h4>🔵data: An array of card objects containing the following fields:</h4>
🟢name: The name of the card.<br/>
🟢budget_name: The name of the associated budget.<br/>
🟢owner_id: The ID of the card owner.<br/>
🟢spent: An object representing the amount spent on the card, with value and currency fields.<br/>
🟢available_to_spend: An object representing the available amount to spend on the card, with value and currency fields.<br/>
🟢card_type: The type of the card. Possible values are "burner" or "subscription".<br/>
🟢expiry (only for burner cards): The expiry date of the card.<br/>
🟢limit (only for subscription cards): The spending limit of the card.<br/>
🟢status: The status of the card.<br/>
<h4>🔵page: The current page number.</h4>
<h4>🔵per_page: The number of cards per page.</h4>
<h4>🔵total: The total number of cards available.</h4>
The API response is paginated with a default of 10 cards per page. The frontend application can make subsequent requests to fetch more pages by incrementing the page query parameter.

<h1>Packages</h1>
🟡npm init<br/>
🟡npm install express<br/>
🟡npm install cors<br/>
🟡npm install cli<br/>
🟡npm install netlify-lambda<br/>
🟡npm install serverless-http<br/>

<h1>Tools and Technologies👨🏻‍💻</h1>
🟢Node.js<br/>
🟢Express.js<br/>
🟢VS Code Editor<br/>


<h1>Reference Backend API Image📷</h1>

![Screenshot 2023-06-10 073910](https://github.com/gokulc200/Volopay-Backend-Api/assets/121416463/463d2d04-5876-44f1-8f56-690a6189d2f5)

<h1>Contribution</h1>
Contributors are welcome to submit pull requests for bug fixes, new features, or improvements. Guidelines for contributing and a code of conduct will be provided to ensure a collaborative and inclusive development process.
