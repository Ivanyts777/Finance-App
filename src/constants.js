export const navigation = {
  main: "/",
  login: "/login",
  registration: "/registration",
  currency: "/currency",
  diagram: "/diagram",
};

// Session
const TYPESTATES = "session/";
export const ERRORTYPE = TYPESTATES + "error";
export const TOKENTYPE = TYPESTATES + "token";
export const USERINFOTYPE = TYPESTATES + "user/info";
export const LOGINOUTTYPE = TYPESTATES + "user/loginout";

// Global
const TYPESTATEG = "global/";
export const LOADERTYPE = TYPESTATEG + "loader";
export const MODALADDTYPE = TYPESTATEG + "modal/add";
export const MODALLOGINTYPE = TYPESTATEG + "modal/loginOut";
export const WINDOWTYPE = TYPESTATEG + "window";

// Finance
const TYPESTATEF = "finance/";
export const DATAADDTYPE = TYPESTATEF + "data/add";
export const DATAREMOVETYPE = TYPESTATEF + "data/remove";
export const DATAEDITTYPE = TYPESTATEF + "data/edit";
export const DATASETTYPE = TYPESTATEF + "data/set";
