// Create a new footer element
const Navigation = document.createElement('navigation');

// Set the content of the footer
Navigation.innerHTML = `
<style>
    .topnav {
    overflow: hidden;
    background-color: #191970;
    }

    .topnav a {
    float: left;
    color: #f2f2f2;
    text-align: left;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 18px;
    }

    .topnav a:hover {
    background-color: #ddd;
    color: black;
    }

    .topnav a.active {
    background-color: #04AA6D;
    color: white;
    }
</style>
<div class="topnav">
    <a href="index.html">Matthew Lemoine</a>
    <a href="Research.html">Research</a>
    <a href="Teaching.html">Teaching</a>
    <a href="OfficeHours.html">Office Hours</a>
    <a href="Lagniappe.html">Lagniappe</a>
    <a href="AboutMe.html">About Me</a>
</div>
`;

// Append the newly created footer element to the end of the HTML body
document.body.appendChild(Navigation);
