
## THESE ARE MY PRESONAL NOTES FOR THIS ENTIRE COURSE:
<p>Might be useful</p>

React latest documentation ---> https://react.dev/

React library  React-DOM (for websites)
               React-native (for mobile applications)

================================================================= <br>
### Ways to create react app - 

npm (Node Package Manager) used for installing and managing Node.js packages, 
npx (Node Package Executer) is a tool used to execute Node.js packages directly, without the need for installation.

==

#### METHOD 1: npx create-react-app appname (This method is very slow, very bulky)

==

#### METHOD 2: using VITE  (vite -->https://vitejs.dev/)

npm create vite@latest

note: this method is fast, but there is no folder for node modules
      use,   npm i --> to get node modules folder

====================================================


package-lock is used to lock a stable version of dependency
manigest.json -> used for mobile devices

#### jsx files can return only one html tag
#### to solve this problem we place all the tags inside <div></div>
### or to make it easier we can also use <></> (know as fragment)


=========================

#### Some naming convention

-> always name function names with capital letters (gives error if not capital) <br>
-> also name component file as Capital.js or Capital.jsx (Doesn't give any error, but is best practice) <br>

==============

jsx -> https://chat.openai.com/share/1af47938-6c8f-493a-a0ca-95e8c90f90d1\


=============

### Hooks in react

<h3> React controls UI updation </h3>
In JavaScript, without React or hooks, you'd manually handle state management and DOM manipulation. You'd directly manipulate the DOM to update the counter value based on user interactions. This approach can quickly become cumbersome and error-prone as your application grows.

In React, direct manipulation of the UI is discouraged because React relies on a virtual DOM to efficiently update the actual DOM. Instead, state changes are managed through hooks like useState, allowing for a declarative approach to UI updates. By updating state variables, React automatically re-renders components affected by those changes, ensuring a consistent and efficient UI without directly manipulating the DOM.

example ./coutner-project
=============