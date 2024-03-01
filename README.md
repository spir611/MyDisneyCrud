<h1>Abstract : 2º Trimester Evaluation My Disney Crud with validations using Javascript for Markup Language - 1st Year DAW (Web Application Development)</h1>
<h2>My Disney Crud</h2>
<h2>Index</h2>
<ul>
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#motivation">Motivation</a></li>
  <li><a href="#structure">Structure</a></li>
  <li><a href="#pagestyle">Page Styling</a></li>
</ul>

<h2 id="introduction">Introduction</h2>
<p>Project created by Sandra Barbara Pirpamer</p>
<p>Front End Crud layout- My Disney Crud - Markup Language - Second Term Evaluation</p>
<p>February 2024</p>
<p> License CC-BY</p>

<h2 id="motivation">Motivation</h2>
<p>A flat design was used with bright colours as they match the Disney theme style selected for the login form, table and insert and edit forms. As the one to many relational tables relate to Disney Hotels located in the different parks around the world, a central Disney Theme was appropriate and thus motivated the selection of the colour palette, the font and the overall design.</p>
 
<h2 id="structure">Structure</h2>
<p>The Crud is divided into four different html files with their corresponding CSS stylingsheets and two Javascript files to validate the MickeyLogin.html and the other to validate both the Insercion.html and Modificacion.html files.</p>
<ul>
  <li>MickeyLogin.html (Mickey login form)</li>  
  <li>listadol.html (Hotel Table)</li>
  <li>insercion.html (Data Insertion Form</li>
  <li>modificacion.html (Data Modificacion Form)</li>
</ul>

<h3>Mickey Login form (mickeylogin.html)</h3>
<img src="readme image/mickeyloginimage.png">
<p>I used a red background with goldenrod detailing to imitate the official Disney colour palette. The form background is white to facilate reading. Mickey Mouse, as the chief Disney Mascot, sits upon the form and is slightly animated to move from the superior edge to the form. It follows a flat design to enhance simplicity. A thumbnail key image is used to connect the form to the purpose of the CRUD, Hotels, although the key has a double meaning as the purpose of the form is to authenticate the user with his/her email and password.
</p>
<p></p>
<h3>Hotel Table (listadol.html)</h3>
<p>The same styling and color palette is used in the table. I chose a basic table with scrolling responsitivity. Alternate colors red and goldenrod distinguish one register from another. All buttons are styled with Disney font and the edit and delete buttons use the general colour palette. Green is introduced for the add button with links to the data insertion form. The thumbnail key image is repeated here to enhance the hotel theme. Disney font is also used in the title of the table.</p>
<p></p>
<h3>Data Insertion Form (insercion.html)</h3>
<p>The same styling and color palette is used in the form. Goldenrod is more widely used as red generally is used for warning messages when inputs are incorrectly introduced and validations upon submit fail. Different types of entries are used: text types (name, address, postal code, etc), number types (telephone, room capacity), email, select dropdowns (country, city, Disney park), radio buttons (hotel stars). All validations using regex take into consideration that validations need to be less restrictive in some cases like postal codes because formats around the world vary considerably. Emails on the other hand are more uniform around the world.</p>
<p></p>
<h3>Data Modification Form (modificacion.html)</h3>
<p>This form is exactly the same as the Insertion Form, in differs only in that it has preselected values, imitating the values are retrieved from a connecting database.</p>
<p></p>


 
<p></p>
<h2 id="pagestyle">Page Styling</h2>
<h3>My Colour Palette:</h3>
<ul>
  <li>Red and goldenrod are the basic colours used and they are combined with black and white. All of these resemble the original official Disney Palette.  
  <li>Green is only used for the Add button in the table to standout.</li>
</ul>


<p></p>
<h3>Font-Families</h3>
<p>Two combining font-families are used in the project: </p>
<ul>
  <li>NewWaltDisneyFontRegular for titles and buttons</li>
  <li>Arial, Helvetica, sans-serif for all general use</li>  
</ul>


<h3>Images</h3>
<p> Three images are used: one as a thumbnail image in the Login form and the Hotel table (image of a golden antique style key) <a href="https://r.search.yahoo.com/_ylt=Awrih8ztxuFl7U83Psue.Qt.;_ylu=c2VjA2ZwLWF0dHJpYgRzbGsDcnVybA--/RV=2/RE=1709324141/RO=11/RU=https%3a%2f%2fwww.pngkey.com%2fdetail%2fu2q8t4i1r5y3y3u2_golden-key-clip-art%2f/RK=2/RS=0_wM2xZQaaOBBB8bdp02Xi5R6CY">Golden key image</a>, the image of Mickey Mouse in a sitting position used in the Login: Form: <a href="https://es.images.search.yahoo.com/search/images?p=mickeymouse+sitting+image&fr=mcafee&type=E210ES662G0&imgurl=https%3A%2F%2Fimage.emojipng.com%2F350%2F376350.jpg">Mickey Image</a> and the siluette of Mickey´s head for the favicon: <a href="https://tse2.mm.bing.net/th?id=OIP.OIyh96Wn-zv7LjEDVulADwAAAA&pid=Api&P=0&h=180">Mickey Favicon</a>.</p>

<p></p>

<h3>Code Snippets</h3>
<p>As I was unable to find simple Code Snippets to complete the project, all coding was self produced, except the table where the example was used from the responsive Tables section of W3Schools. Help was also obtained from the W3Schools html tutorial to build the different fields in the forms. Most Javascript entries related to the validations function were obtained from class notes, although the radio button entries where retrieved using CoPilot interaction.</p> 

<p></p>

<h3>Bibliography - Sources</h3>
<ul>
  <li>W3Schools: for table and different fields <a href="https://www.w3schools.com/">W3 Schools  </a></li>
  <li>Copilot for radiobutton validations</li>  
</ul>
