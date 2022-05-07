/* jshint esversion:6 */
module.exports = function() {
    const environmentVal = process.env.MY_ENVIRONMENT || "development";
    let domainVal, indexval;

    if ( environmentVal === "development") {
        domainVal = "http://localhost:8080";
        indexval = false;
    } else if ( environmentVal === "github" ) {
        domainVal = "https://osvik.github.io/static-site-boilerplate";
        indexval = false;
    }

    return {
      environment: environmentVal,
      domain : domainVal,
      index: indexval
    };
  };
