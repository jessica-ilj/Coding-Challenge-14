//Define the API URL
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Step 2: Create a Function to Handle Fetching Tickets
const fetchTickets = async () => {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch tickets. Please try again later.");

        const tickets = await response.json();
        if (!tickets.length) throw new Error("No unresolved tickets available.");
        
        return tickets;
    } catch (error) {
        displayError(error.message); // Display error using a dedicated function
        throw error;
