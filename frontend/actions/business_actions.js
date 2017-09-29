import * as BizAPIUtil from '../util/business_api_util';
import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const RECEIVE_BUSINESS_ERRORS = "RECEIVE_BUSINESS_ERRORS";

export const START_LOADING_BUSINESSES = 'START_LOADING_BUSINESSES';
export const START_LOADING_BUSINESS = 'START_LOADING_BUSINESS';


const receiveBusinesses = (businesses) => ({
  type: RECEIVE_BUSINESSES,
  businesses
});

const receiveBusiness = (business) => ({
  type: RECEIVE_BUSINESS,
  business
});

const receiveBusinessErrors = errors => ({
  type: RECEIVE_BUSINESS_ERRORS,
  errors
});

const startLoadingBusinesses = () => ({
  type: START_LOADING_BUSINESSES,
});

const startLoadingBusiness = () => ({
  type: START_LOADING_BUSINESS,
});

export const fetchBusinesses = () => dispatch => {
  dispatch(startLoadingBusinesses());
  return BizAPIUtil.fetchBusinesses().then( businesses => (dispatch(receiveBusinesses(businesses)))
  ), (err) => dispatch(receiveBusinessErrors(err))
};

export const fetchBusiness = (placeId) => dispatch => {
  dispatch(startLoadingBusiness());
  return BizAPIUtil.fetchBusiness(placeId).then( business => (
    dispatch(receiveBusiness(business)))
  ), err => dispatch(receiveBusinessErrors(err))
};

export const searchAndFetchBusinesses = (searchParams) => dispatch => (
  SearchAPIUtil.searchBusinesses(searchParams).then( businesses => (
    dispatch(receiveBusinesses(businesses)))
  ), (err) => dispatch(receiveBusinessErrors(err))
);
