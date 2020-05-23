// This adds react to our file
const React = require('react');

class Layout extends React.Component{
  render() {
    return (
      <html lang="en" dir="ltr">
        <head>
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