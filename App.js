
const parent = React.createElement(
    "div",
    {id:"Parent"},[
    React.createElement("div",{id:"child 1"},[
        React.createElement("h1",{},"i am h1 tag"),
        React.createElement("h2",{},"i am h2 tag")
    ]),
    React.createElement("div",{id:"child 2"},[
        React.createElement("h1",{},"i am h1 tag"),
        React.createElement("h2",{},"i am h2 tag")
    ])
])

// const heading = React.createElement("h1",{id:"heading",abc:"haiiiii"}, "Hello World From React!")

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);  