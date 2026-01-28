// Create a new footer element
const newFooter = document.createElement('footer');

// Set the content of the footer
newFooter.innerHTML = `
<p>
    <div style="float: right; padding-right: 15px;">
    <img src = "LSU_logo.png" alt="LSU logo" style="width: 100px;"><br>
    <img src = "Tech_logo.png" alt="Louisiana Tech logo" style="width: 100px;">
    </div>

    <p style = "padding-left: 15px"> Matthew Lemoine<br>
        Graduate Teaching Assistant<br>
        LSU Math Department<br>
        341 Lockett Hall,<br>
        Baton Rouge, LA 70803<br>
        <a href="mailto:mlemo36@lsu.edu">mlemo36@lsu.edu</a></p>
    <p style = "padding-left: 15px"><small> Website Last Updated: January 25, 2026 </small></p>
</p>
`;

// Optional: Add some basic styling or a class for CSS
newFooter.style.backgroundColor = '#add8e6';
newFooter.style.color = 'black';
newFooter.style.textAlign = 'left';
newFooter.style.padding = '10px';
newFooter.style.position = 'relative';
newFooter.style.clear = 'both';

// Append the newly created footer element to the end of the HTML body
document.body.appendChild(newFooter);
