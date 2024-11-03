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
             }
}
