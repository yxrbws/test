/** 严肃声明：
* 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
* 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
* 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
* Copyright (c) 2020 陈尼克 all rights reserved.
* 版权所有，侵权必究！
*/

import axios from './axios'

// home
export function getHome() {
  return axios.get('/index-infos');
}

//good
export function getCategory() {
  return axios.get('/categories');
}

export function getDetail(id) {
  return axios.get(`/goods/detail/${id}`);
}

export function search(params) {
  return axios.get('/search', { params });
}

//cart
export function addCart(params) {
  return axios.post('/shop-cart', params);
}

export function modifyCart(params) {
  return axios.put('/shop-cart', params);
}

export function getCart(params) {
  return axios.get('/shop-cart', { params });
}

export function deleteCartItem(id) {
  return axios.delete(`/shop-cart/${id}`);
}

export function getByCartItemIds(params) {
  return axios.get('/shop-cart/settle', { params });
}

//address
export function addAddress(params) {
  return axios.post('/address', params);
}

export function EditAddress(params) {
  return axios.put('/address', params);
}

export function DeleteAddress(id) {
  return axios.delete(`/address/${id}`);
}

export function getDefaultAddress() {
  return axios.get('/address/default');
}

export function getAddressList() {
  return axios.get('/address', { pageNumber: 1, pageSize: 1000 })
}

export function getAddressDetail(id) {
  return axios.get(`/address/${id}`)
}

//user
export function getUserInfo() {
  return axios.get('/user/info');
}

export function EditUserInfo(params) {
  return axios.put('/user/info', params);
}

export function login(params) {
  return axios.post('/user/login', params);
}

export function logout() {
  return axios.post('/user/logout')
}

export function register(params) {
  return axios.post('/user/register', params);
}

//order
export function createOrder(params) {
  return axios.post('/saveOrder', params);
}

export function getOrderList(params) {
  return axios.get('/order', { params });
}

export function getOrderDetail(id) {
  return axios.get(`/order/${id}`);
}

export function cancelOrder(id) {
  return axios.put(`/order/${id}/cancel`);
}

export function confirmOrder(id) {
  return axios.put(`/order/${id}/finish`)
}

export function payOrder(params) {
  return axios.get('/paySuccess', { params })
}