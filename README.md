## OverlayAnalytics Full Stack Evaluation

Thank you for taking the time to partake in our full stack evaluation. The challenge consists of three parts:

1. A [React task](#react-task) to create a single page React site based on an existing [wireframe](https://xd.adobe.com/view/89504f2a-64b3-425a-85f3-905e002add02-dc03/)
2. Recreating an [amChart](https://amcharts.com) component based off of the following [CodePen](https://codepen.io/OverlayAnalytics/pen/WNxgdKB)
3. Hooking the amChart component up to live data utilizing [cube.js](https://cube.dev)

---

You will be evaluated based on the following criteria:

-  Your solution looks like the provided [wireframe](https://xd.adobe.com/view/89504f2a-64b3-425a-85f3-905e002add02-dc03/)
-  Quality of code and attention to detail
-  Responsive Design
-  Overall Site Function

---

#### React Task

Feel free to spend as much or as little time on the exercise as you like while taking the evaluation criteria into consideration.

-  You can use [Create React App](https://github.com/facebook/create-react-app) as the starting point for your solution.
-  Please implement using the [Material-UI](https://github.com/mui-org/material-ui) framework.
-  The amCharts documentation is very extensive and can be found [here](https://www.amcharts.com/docs/v4/).
-  Feel free to use any other libraries or packages you like.

---

#### Chart Component

The goal, is to recreate the chart in this [CodePen](https://codepen.io/OverlayAnalytics/pen/WNxgdKB). The code is written in vanilla javascript but the properties of the chart should be built into a React component. Please utilize the amCharts [documentation](https://www.amcharts.com/docs/v4/) to figure out which properties need to be added/removed for the react component.

---

#### Cube.js Data

The goal of this section is to connect the amChart component that was built in step two to live data. This will be accomplished through [cube.js](https://cube.dev), utilizing it's GraphQL API.

-  The folder GraphQL contains two GraphQL queries, one for the line (gross_margin_line.js) and one for the bars (revenue_bar.js).
-  Please utilize the [cube.js documentation](https://cube.dev/docs) to integrate our demo server
-  The apiUrl for the demo server is: https://cube-ae.overlayanalytics.com
-  A temporary JWT will be provide via email, once you start the task please email <recruiting@overlayanalytics.com> with the subject line JWT and you will receive an email with the token that you can use. Please keep the token in a .env file and don't include that when uploading the project to GitHub.
-  Instead of utilizing spinners while loading data from cube.js please utilize [Skeletons](https://material-ui.com/components/skeleton/) and try to design it in such a way that it represents the underlying chart, pick your preferred animation type as well.

---

#### Wireframe Considerations

The wireframe can be found at this **[link](https://xd.adobe.com/view/89504f2a-64b3-425a-85f3-905e002add02-dc03/)**

-  The two charts on the wireframe are placeholders, the actual component to be built will be based off of the following [chart](<[CodePen](https://codepen.io/OverlayAnalytics/pen/xxRMYBx)>). Please note, only **one** component needs to be created and can be used in both locations on the wireframe.
-  The KPI cards at the top should all share one component and display differently based on props.The data in there can be hardcoded based off of what is shown on the wireframe.
-  We've provided a design for (1920px), please make the design fully responsive. **Note: the chart component should maintain it's aspect ratio as it scales up and down. Also watch for the height of the table container to make sure to maintain a consistent height with the two chart components as the screen size scales**
-  There are notes and resources provided in the right hand sidebar of the wireframe. You can find colors and other necessary resources provided in the sidebar.

---
#### NodeJS

Feel free to spend as much or as little time on the exercise as you like while taking the evaluation criteria into consideration.

-  Create a NodeJS server listening on port 3000
-  localhost:3000/json should return the data from this [JSON PLACEHOLDER](https://jsonplaceholder.typicode.com/todos)
-  localhost:3000/delay with body { seconds: 5 } should reply _after number of seconds_ passes 'times up!'
-  localhost:3000/encode with body { name:"Donald" } reply with token and _name_ encoded
-  localhost:3000/decode with body { token:"\*\*\* ..." } reply with decoded token
-  Build this for scale. HINT use separate files for each end point.

---

#### Follow-up Questions

Please answer the following questions and save them to a markdown file named FOLLOW-UP.md and include it in your submission.

1. How long did you spend on the evaluation?
2. Which parts are you most proud of? And why?
3. Which parts did you spend the most time on? What was the most difficult aspect?
4. How did you like the evaluation overall? Did you run into any issues or have trouble completing?
5. Do you have any suggestions or improvements for how we could improve the evaluation in your mind?

---

#### Submission Guidelines

-  A zip file should created and named {yourname}.zip, and should contain all relevant content in order to test the code.
-  The zip file should contain a FOLLOW-UP.md file with answers to the [follow-up questions](#follow-up-questions).
-  The zip file should **not** include the node_modules folder.
-  The zip file should include a screenshot of the final solution that was submitted.
-  The zip file should include a README with the commands needed to start the application locally.
-  The code should be uploaded to GitHub.
-  The code should be published on a free [heroku](https://heroku.com) instance.
-  The zip file should be emailed to <recruiting@overlayanalytics.com> when completed along with a link to the GitHub repo and Heroku link.
