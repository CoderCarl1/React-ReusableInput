## Re-usable form component

---
### Running / cloning this App
To use this component

1.  clone the repo
    - If you have added an ssh key to Github:  ```git clone git@github.com:CoderCarl1/React-ReusableInput.git```
    - otherwise: ```git clone https://github.com/CoderCarl1/React-ReusableInput.git```
2. The project was created with npx create-react-app, so it uses [Yarn](https://create-react-app.dev/docs/getting-started/). If you don't have it installed at present, I would highly recommend it.
3. Run this command to install the nodepackages needed: ```yarn install```
4. To run the app: ```yarn start```

----

### This is a demonstration of a re-usable component

DropDown.js takes props:

 - The handleChange function
 - title for the select
 - Options
 - Name of Label1

 By creating a separate Business Logic file we can re-use the DropDown.js component any time we want.


---
 ### Other ways to make this re-usable
 
 - We can pass down styling in the props of the component.
 More information & examples on creating re-usable components can be read in [this article](https://blog.logrocket.com/building-reusable-ui-components-with-react-hooks/#:~:text=For%20a%20component%20to%20be,to%20ensure%20they%20work%20correctly.) 
  