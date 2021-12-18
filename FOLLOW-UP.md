## Follow-up Questions

1. How long did you spend on the evaluation?

    I think, overall, I have spent around 20 hours on all the tasks.
    Breaking up the time:
    - ~4 hours - Setting up react project, getting  most of layout done based on wireframe
    - ~5 hours - Recreating chart with amCharts (mostly tweeking params)
    - ~4 hours - Getting data from cube.js and hooking it up to chart component 
    - ~3 hours - Nodejs task 
    - ~4 hours - Cleaning up projects, responsiveness and other layout elements, working on details (mobile swipable sidenav, mobile top nav on scroll)
    - ~2 hours - deploying apps 

2. Which parts are you most proud of? And why?

    I wouldn't say that i'm proud of anything specific, but I think that I can be proud of the fact that i tried my best to be as close as possible to specified tasks and make the best possible user experience.  

3. Which parts did you spend the most time on? What was the most difficult aspect?

    I think that the biggest chunk of time i have spent on recreating the chart, mostly because i was trying to get it just right and as close as possible to presented chart, and i was geting familiar with the amCharts api.

4. How did you like the evaluation overall? Did you run into any issues or have trouble completing?

    It was an interesting challange, and it was fun to work on these apps. I don't think i had any issues, but i had a few dilemmas. 

    First one is regarding the aspect ratio of chart component. App keeps the aspect ratio, but i made a decision to change it on mobile screens (<600px), so it would have a bigger height, as it seemed to me that the data displayed on the chart wasnt readable enough on those resolutions and i belive that this way provides a better user expirience.

    Data from cube.js. 'Gross Margin' query returns decimal values under 1.0, I wasn't sure how to display them with 'Revenue' values that comes in 100-900k, i assumed that i needed to multiply 'Gross Margin' values by 'Revenue' values. I hope i wasn't wrong.

    NodeJS server port. Task specifes that it should listen on port 3000, i changed it to 5000 so it wouldn't conflict with React dev server witch starts on port 3000 by default, but NodeJS listening port can be changed by specifing enviroment variable PORT. 

5. Do you have any suggestions or improvements for how we could improve the evaluation in your mind?

    Nothing specific comes to mind, maybe some work with databases. But overall, this evaluation seems pretty challenging.
    