# Local Development
JAAQL Sentinel is written in "pure js" that will run on almost every browser. Please just import it as you usually might a script by placing it at the top. Simply configure the service by providing it the url of sentinel, name of your app and version of your app as follows. App version is optional

    <script src="JAAQL_sentinel.js" sentinel_location="jaaql.io:8443" app_version="1.0.0" app_name="my-app"></script>  

And it will now sent all errors to https://www.jaaql:8443.io/api/sentinel
