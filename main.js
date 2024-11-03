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


    // Function to Display Tickets
const displayTickets = tickets => {
    const ticketElements = tickets.map(ticket => `
        <div class="ticket">
            <h3>Ticket ID: ${ticket.id}</h3>
            <p><strong>Customer Name (User ID):</strong> ${ticket.userId}</p>
            <p><strong>Issue Description:</strong> ${ticket.title}</p>
            <p><strong>Details:</strong> ${ticket.body}</p>
            <hr>
        </div>
    `).join(''); // Create a string of HTML elements

    document.body.innerHTML += `
        <div class="ticket-list">
            <h2>Customer Support Tickets</h2>
            ${ticketElements}
        </div>
    `;
};
