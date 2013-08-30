Overview
--------

This app showcases the [Parse Image Module](https://www.parse.com/docs/cloud_code_guide#images)
using Parse Hosting. It's an app that allows users to
upload images and share them. It resizes the images into
two smaller sizes, and gives users the option to share
specific sizes with others.

You can check out the official hosted version
at [www.anyimg.org](http://www.anyimg.org).

Setup
-----

1. Create a new app on Parse, and make sure you go
through the [installation section for Cloud Code](https://parse.com/docs/cloud_code_guide#started-installing).

2. Type `parse new .` in the directory where this
README resides, authenticate with your Parse credentials,
and choose the app name you created.

3. Delete `public/index.html`

4. Edit `cloud/views/layout.ejs` and put in your Parse Application ID and Parse
JavaScript Key in the `Parse.initialize` call.
You can find your app keys in your app settings
page under "Application Keys".

5. Type `parse deploy`. This deploys your app to Parse.

6. Now, we'll need to configure the url where you can
reach your app. Go to your app settings page and set
a unique subdomain for your Web Hosting url.

7. Go to yoursubdomain.parseapp.com and view your copy of Anyimg!

8. Optional: If you want to change the CSS, make sure to
run "compass watch" so that the .scss files will get
compiled into css files in the `parse` folder. To get compass, go here: http://compass-style.org


