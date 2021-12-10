import axios from "axios";

const devEnvUserName = process.env.REACT_APP_DEV_ENV_USER;
axios.defaults.headers.common["user-name"] = devEnvUserName;

const get = (url) => {
    const headers = {};
    let authToken = localStorage.getItem("authToken");
    let organisationUUID = localStorage.getItem("ORGANISATION_UUID");
    if (authToken) {
        headers['AUTH-TOKEN'] = authToken;
    }
    if (organisationUUID) {
        headers['ORGANISATION-UUID'] = organisationUUID;
    }
    return axios.get(url, {headers});
};

const getData = (url) => get(url).then(res => res.data);

const apis = {
    fetchActivities: (queryString) => getData(`/report/aggregate/activities?${queryString}`),
    fetchForms: () => getData("/web/forms?size=500").then(res => res._embedded.basicFormDetailses),
    searchConcepts: (queryString) => getData(`/search/concept?${queryString}`),
    fetchOperationalModules: () => getData('/web/operationalModules'),
    fetchFormData: (form, queryString) => getData(`/report/aggregate/codedConcepts?formUUID=${form.uuid}&${queryString}`),
    fetchLocations: () => getData('/locations/web/getAll'),
    fetchUserActivities: (filterQuery) => getData(`/report/hr/overallActivities?${filterQuery}`),
    fetchUserSyncFailures: (filterQuery) => getData(`/report/hr/syncFailures?${filterQuery}`),
    fetchUserAppVersions: () => getData('/report/hr/appVersions'),
    fetchUserDeviceModels: () => getData('/report/hr/deviceModels'),
    fetchUserDetails: (filterQuery) => getData(`/report/hr/userDetails?${filterQuery}`),
    fetchSyncTelemetry: (filterQuery, queryString) => getData(`/report/syncTelemetry?${queryString}&${filterQuery}`),
    fetchChampionUsers: () => getData('/report/hr/championUsers'),
    fetchNonPerformingUsers: () => getData('/report/hr/nonPerformingUsers'),
    fetchUserCancellingVisits: () => getData('/report/hr/mostCancelled'),
    fetchUserGroups: () => getData('/web/groups'),
};

export default apis;
