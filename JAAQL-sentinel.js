window.JAAQL_SENTINEL_URL = document.currentScript.getAttribute("sentinel_location");
if (!window.JAAQL_SENTINEL_URL.startsWith("http")) {
    window.JAAQL_SENTINEL_URL = "https://www." + window.JAAQL_SENTINEL_URL;
    if (!window.JAAQL_SENTINEL_URL.endsWith("/api")) {
        window.JAAQL_SENTINEL_URL += "/api";
    }
}

window.JAAQL_SENTINEL_APP_VERSION = "no-version";
if (document.currentScript.hasAttribute("app_version")) {
    window.JAAQL_SENTINEL_APP_VERSION = document.currentScript.getAttribute("app_version");
}

window.JAAQL_SENTINEL_APP_NAME = document.currentScript.getAttribute("app_name");

window.addEventListener("error", function(evt) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", window.JAAQL_SENTINEL_URL + "/", true);

    let stack = null;
    if (evt.error.hasAttribute("stack")) {
        stack = evt.error.stack;
    }

    let errorData = {
        "source_file": evt.filename,
        "error_condensed": evt.message,
        "file_line_number": evt.lineno,
        "version": window.JAAQL_SENTINEL_APP_VERSION,
        "source_system": window.JAAQL_SENTINEL_APP_NAME,
        "stacktrace": stack,
        "user_agent": navigator.userAgent
    };

    xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhttp.send(JSON.stringify(json));
});