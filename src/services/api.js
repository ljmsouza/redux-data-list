import Frisbee from 'frisbee'

const URL = 'http://localhost:4000/api/'

export const endpoints = {
  data: (id) => id ? `/data${id}` : 'data'
}

export const api = new Frisbee({
  baseURI: URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});
