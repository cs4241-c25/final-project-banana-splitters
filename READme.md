We created a WPI Health and Wellness Hub. The goal of the hub is to provide various Mental Health tools, resources, and support for the WPI community. Our home page includes an introduction to the application as well as providing links to more mental health and wellness resources. Our Self Care informs the user on the importance of self care and provides various ideas for self care. Our Affirmations Board allows users to post a “sticky note” with an affirmation or positive message to the hub. These “sticky notes” can also be removed from the board. Our Care Report form allows the user to submit a care report form if they feel concerned about a community member. The form information submitted from each user is saved in a MongoDB database. The Admin page allows admin users to access the care report form database table. The Admin page is protected using Auth0 authentication. Only users with admin credentials will be authenticated into this Admin page.

Glitch Link: https://final-project-banana-splitters.glitch.me/

Admin Credentials:
email: admin@login.com
password: SecretAdmin!

Once logged in as admin you will be redirected to the home page, but now the admin tab will display information from the care report form only accessible to administration.


Web framework: React.js

Server: node.js and Express

Programming language (client and server): JavaScript

Styles framework: Tailwind

We chose Tailwind for our style framework because it offers easy-to-learn functionality and offers consistency throughout our code to style each of our pages. We used this functionality to style individual pages as well as keep certain aspects consistent without inputting the same lines of code repeatedly.

Database: MongoDB

MongoDB stores the information submitted through the care report form, which is then displayed in a table on the admin page. This database is locked down so only users with admin privileges can access the information stored in the table.

Authentication: Auth0

Authentication was used in our application to ensure that only users with admin credentials have access to the care report forms data. Authentication was set up using Auth0 and server.js. Whenever a user wants to sign into the admin page, they are redirected to the Auth0 login. Auth0 will compare the entered credentials to the stored credentials to verify if they can log in. If the credentials are correct, the user is authenticated. However, if they enter incorrect credentials, Auth0 does not authenticate the user. Once the user is authenticated, Auth0 generates a JSON web token and sends it to the server. This token is verified by using the Auth0 public key stored on the server. If valid, the server allows the user access to the admin page. If not valid, access to the admin page is denied.

Deployment: Glitch

We chose to use glitch for our application deployment since it is what we used throughout the term to deploy our assignments. We were able to get our application to successfully deploy on Glitch, however it was a little challenging.  

Project Management: Jira

We used Jira to make a list of tasks to be completed during each sprint. We converted our user stories into a list of tasks that could be divided amongst the team. Using Jira, we were able to easily assign tasks and see the team's overall progress on the application. Jira was helpful in keeping the team organized and following Agile Methodology.

Style guide: Figma

We used Figma to develop our style guide, which was the first step in designing and building our application. We were able to design a general layout for each of our pages and for our navigation bar. Figmal was helpful in visualizing our application and allowed us to easily design our pages using Tailwind.

Challenges:

We faced consistent challenges when trying to deploy our application. We were running into the same issues across multiple hosting platforms, including Glitch, Vercel, and Render. Each of these hosting platforms ran into problems with the node modules for our application. This was continuously causing our application to fail during the build process. We fixed this issue by ensuring that the node modules were in the .gitignore file. Therefore when the application was being built, there were no longer confictions with the versions within the node modules.

Team Members’ Contributions:

Ashleigh:
MongoDB setup,
Admin Page styling and set up to DB

Conor:
Login Page and
Overall CSS Styling

Jesse:
Care Report Form Page and
Care Report link to DB

Kendall:
Self-Care Page,
Home Page,
Navigation Bar,
Admin page styling

Maeve:
Server,
Authentication,
Affirmations Board,
Home Page

Project video link: https://youtu.be/x628SeshCnc 