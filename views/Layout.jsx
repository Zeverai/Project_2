// This adds react to our file
const React = require('react');

class Layout extends React.Component{
  render() {
    return (
      <html lang="en" dir="ltr">
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Metamorphous&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="./public/styles.css"/>
            <meta charSet="utf-8"/>
            <title></title>
        </head>
        <body>
          {this.props.children}
        </body>
    </html>
    )
  }
}
module.exports= Layout;