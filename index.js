const axios = require("axios");

module.exports = async function threenom(domain, options) {
  let freeDomains = true;
  let paidDomains = false;

  if (options) {
    freeDomains = options.freeDomains;
    paidDomains = options.paidDomains;
  }

  var raw = `domain=${domain}&tld=`;
  var config = {
    method: "post",
    url: "https://my.freenom.com/includes/domains/fn-available.php",
    headers: {},
    data: raw,
  };
  const response = await axios(config);
  let responseData;
  if (freeDomains && !paidDomains) {
    responseData = response.data.free_domains;
  } else if (!freeDomains && paidDomains) {
    responseData = response.data.paid_domains;
  } else if (freeDomains && paidDomains) {
    responseData = { free_domains: [], paid_domains: [] };
    responseData.free_domains = response.data.free_domains;
    responseData.paid_domains = response.data.paid_domains;
  }
  return responseData;
};
