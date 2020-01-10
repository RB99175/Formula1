### Formula-1

 ![](https://github.com/RB99175/Formula1/blob/master/ferrari.png) 

# React Project Proposal Overview

### Project Description
**Welcome to "Formula 1"**
This web will render race details from 1950 till 2019 for all formula race along with the rounds and winners details.

### Project Links

[Githhub Repo](https://github.com/RB99175/Formula1.git) 

[Json Data](http://ergast.com/api/f1/current.json)

[Third Party API](http://ergast.com/mrd/methods/seasons/ "Third Party API")

[WireFrame](https://github.com/RB99175/Project2_React/blob/master/WireFrame.png  "WireFrame")

[WireFrame2](https://github.com/RB99175/Project2_React/blob/master/WireFrame2.png "WireFrame2")



### Key Milestone
##### MVP:
- User will see the homepage along with welcome home page 
- User can select the year between 1950-2019 from the drop down
- User can see the year wise formula 1 race details like:
   - Season
   - Round
   - Race
   - Locality
   - Country
   - Wikipedia page for each winner 
- User can navigate back to the home page

##### Post-MVP:
- Writing out components and its descriptions which will be helpful to the client.
- Based on the initial logic defined in the previous sections will breakdown the logic further into stateless/stateful components.

### Key Features:
- Interactive website
- Click event
- Render drop down
- Using thrid party API
- App compatiable using browser
- Using create react app
- Using flexbox and CSS
- Deploy in Netlify
- Test using Jest


### Additional Libraries
- ReactStrap
- React dependencies

### React Architecture
```
src
  +-- Container
   +-- HomePage.js
   +-- Results.js
  +-- Container
   |   +-- Button.js
   |   +-- QueryDetails.js
   |   +-- RaceTable.js
   |   +-- YearDropDown.js  
```
 
 ### Components
 | Components  | Description  |  
| :------------ |:---------------:| 
| Button.js      | Resuability function, passing click function | 
| QueryDetails.js | Summary of selected year        |   
| RaceTable.js | Details of Race for that year     
| YearDropDown.js | Rending year details     |

 ### Container
 | Container  | Description  |  
| :------------ |:---------------:| 
| HomePage.js     | fetching API for dropdown, handleclick | 
| Results.js |  fetching API for Race results     |   
 
 
### Code Snipnet
- I was successfully able to route and render multiple pages. This idea came to me when I looked at the API data first as what informtion I am getting and how I need to render it on my pages.

``` <BrowserRouter>
      <div className="App">
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/Results/:id" component={Results} />
      </div>
    </BrowserRouter>
```

### Deployment
[Formula1 Race](https://roodesign.herokuapp.com/)


### Recording 
[YoutubeLink](https://youtu.be/Um4XZFdocao)


### Plan
#### Bronze:
- Create proposal for creating final product for react App
- Create Componets and import necessary dependiences as requried 
- Create home page using HTML and CSS
- Test using Jest or browser
- Create link to render detail page from home page
- Style the page using CSS /flex box
- Create back button 
- Create grids to render Year wise details

#### Silver:
- Use API key to render the data for 'year' in the dropdown
- Render year details, series, season, detail for winner on detail page
- Render data in grid using API 
- Link WIKI page for each winner 
- Test code using Jest or browser

#### Gold:
- Test the project from other users
- Fix bugs if seen
- Using Bootstrap/Reactstrap will fine tune the project 
- Record the presentation 
- Finalize the Readme
- Ready for presentation 


### Stretch Goal:
- Render Winner details on home page year wise 
- Write Readme with project details


### Time Frames
|  Component |  Priority |  Estimated Time |  Time Invested | Actual Time  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Creating Proposal  |  H | 4Hrs | 5Hrs |  5Hrs |
|   |   |   |   |   |
|  Total | H | 4Hrs  | 5Hrs  |  5rs |



### Issues and Resolutions

## (1)
![Error1](https://github.com/RB99175/Formula1/blob/master/Error1.png)
- Received above error while setting the data in the set.state as an arry
- Realised that adding curly braces inside the data resolved the issue as without curly braces it was reading from an object and with curly braces its reading from an arrary.




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
