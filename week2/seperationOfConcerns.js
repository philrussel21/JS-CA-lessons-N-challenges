let dataset01 = {
  email: "test@email.com",
  password: "Password123456",
  country: "france",
  language: "french",
  isSubscribedToNewsletter: true,
  agreedToTermsAndConditions: true,
  coveredByGDPR: true,
  coveredByAPP: false
};

let dataset02 = {
  email: "test@email.com",
  password: "Password123456",
  country: null,
  language: null,
  isSubscribedToNewsletter: null,
  agreedToTermsAndConditions: null,
  coveredByGDPR: null,
  coveredByAPP: null
};


function signUpEndpoint(obj) {
  const arrayOfObj = [];
  arrayOfObj.push(newUserAccountData(obj));
  arrayOfObj.push(newUserLocaleData(obj));
  arrayOfObj.push(newUserMarketingData(obj));
  arrayOfObj.push(newUserLegalData(obj));
  return arrayOfObj;
}

function newUserAccountData({ email, password }) {
  return { email, password }
}

function newUserLocaleData({ country, language }) {
  return {
    country: (country || 'australia'),
    language: (language || 'english')
  }
}

function newUserMarketingData({ isSubscribedToNewsletter }) {
  return {
    isSubscribedToNewsletter: (isSubscribedToNewsletter || true)
  }
}

function newUserLegalData({ agreedToTermsAndConditions, coveredByGDPR, coveredByAPP }) {
  return {
    agreedToTermsAndConditions: (!agreedToTermsAndConditions || true),
    coveredByAPP: (coveredByAPP || true),
    coveredByAPP: (coveredByAPP || true)
  }
}

console.log(signUpEndpoint(dataset01));
console.log(signUpEndpoint(dataset02));