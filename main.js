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
