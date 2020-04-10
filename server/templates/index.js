/* eslint-disable no-useless-escape */
module.exports = /* @html */ `
<!DOCTYPE html>
<html {{htmlAttributes}}>
<head>
  {{title}}

  <meta charset="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0" />

  {{meta}}
  {{link}}

  <script>
    window.WORDPRESS_DATA = {{data}};
    window.WORDPRESS_MENU = {{menu}};
  </script>
</head>
<body {{bodyAttributes}}>
  <div id="root">{{body}}</div>
  {{scripts}}
</body>
</html>
`
