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
} finally {
        console.log("Fetch operation completed."); // Cleanup log
    }
};

    // Function to Display Tickets
const displayTickets = tickets => {
    const ticketElements = tickets.map(ticket => `
        <div class="ticket">
             <h3>Ticket ID: ${ticket.id}</h3>
            <p><i>Customer Name (User ID):</i>${ticket.userId}</p>
            <p><i>Issue Description:</i> ${ticket.title}</p>
            <p><i>Details:</i> ${ticket.body}</p>
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

//error display function
const displayError = message => {
    document.body.innerHTML += `
        <div class="error-message" style="color: red;">
            <h2>Error: ${message}</h2>
        </div>
    `;
};

(async () => {
    try {
        const tickets = await fetchTickets();
        displayTickets(tickets);
    } catch (error) {
        console.log("Could not display tickets:", error.message); // Log error if tickets can't be displayed
    }
})();
