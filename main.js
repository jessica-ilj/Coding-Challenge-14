// Step 1: Initialize Service and Display
(async function initializeTicketSystem() {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    const ticketService = new TicketService(apiUrl);
    const ticketDisplay = new TicketDisplay("ticket-container");

    try {
        const tickets = await ticketService.fetchTickets();
        ticketDisplay.displayTickets(tickets);
    } catch (error) {
        console.error("Error:", error); // Log error for debugging
    }
})();

// Step 2: Fetch Tickets Using Async/Await and Handle Errors
class TicketService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }
    // Async function to fetch ticket data with error handling
    async fetchTickets() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) throw new Error("Failed to fetch tickets. Please try again later.");

            const tickets = await response.json();
            if (!tickets || tickets.length === 0) throw new Error("No unresolved tickets available.");
            
            return tickets;
        } catch (error) {
            document.getElementById("error-message").textContent = error.message;
            throw error;
             } finally { // Any loading cleanup if applicable (e.g., hiding a loading spinner)
            console.log("Fetch operation completed."); // Placeholder for actual cleanup
        }
    }
}

    // Step 3: Display Tickets Dynamically on the Page
class TicketDisplay {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    displayTickets(tickets) {
        this.container.innerHTML = ""; // Clear previous content
        tickets.forEach(ticket => {
            const ticketElement = document.createElement("div");
            ticketElement.className = "ticket";
            ticketElement.innerHTML = `
                <h2>Ticket ID: ${ticket.id}</h2>
                <p><strong>Customer Name:</strong> User ${ticket.userId}</p>
                <p><strong>Issue:</strong> ${ticket.title}</p>
                <p><strong>Details:</strong> ${ticket.body}</p>
            `;
            this.container.appendChild(ticketElement);
        });
    }
}
