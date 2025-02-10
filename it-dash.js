//check if the user is logged in 
if(!localStorage.getItem('loggedIn')) {
    window.location.href ='it-login.html'; //Redirect to login page if not logged in

}
// Get the logged-in user's name
const username = localStorage.getItem('username');
document.querySelector('h1').innerText = `Welcome, ${username}`;

//Handle Ticket SUbmission
document.getElementById('TicketForm').addEventListener('submit',function(event) {
    event.preventDefault();

    const title = document.getElementById('ticketTitle').value;
    const description = document.getElementById('ticketDescription').value;
    // create a new Ticket object 
    const newTicket = {
        id:Date.now(),
        title: title,
        description: description,
        status: 'pending'
    };
    // Save the ticket to localStorage
let tickets = JSON.parse(localStorage.getItem('tickets'))|| [];
tickets.push (newTicket);
localStorage.setItem('tickets',JSON.stringify(tickets));

//Render the tickets 
renderTickets();
});
// Render tickets 
function renderTickets() {
    const ticketTableBody = document.getElementById('ticketTableBody');
    ticketTableBody.innerHTML = ''; // clear the current ticket list

    let tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    tickets.forEach(ticket => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${ticket.title}</td>
        <td>${ticket.description}</td>
        <td class="status ${ticket.status}">${ticket.status}</td>`;
        ticketTableBody.appendChild(row);
    });

};
//call renderTickets on page load to display tickets 
renderTickets();

//Handle logout 
document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    window.location.href = 'it-login.html'; //redirect to login page
});
